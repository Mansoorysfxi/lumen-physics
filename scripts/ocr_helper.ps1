param(
    [Parameter(Mandatory=$true)][string]$inputDir,
    [Parameter(Mandatory=$true)][string]$outputFile
)

Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.Runtime.WindowsRuntime

# Helper to await WinRT Async operations
$asTaskGeneric = [System.WindowsRuntimeSystemExtensions].GetMethods() | ? { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' }

function Await-WinRT($asyncOp, $type) {
    $m = $asTaskGeneric.MakeGenericMethod($type)
    $task = $m.Invoke($null, @($asyncOp))
    $task.Wait()
    return $task.Result
}

# Load WinRT types
[Windows.Globalization.Language, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Foundation, ContentType=WindowsRuntime] | Out-Null

$lang = [Windows.Globalization.Language]::new("en-US")
$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($lang)
if (-not $engine) {
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
}

$files = Get-ChildItem -Path $inputDir -Filter "*.png" | Sort-Object Name
$allText = [System.Text.StringBuilder]::new()

foreach ($file in $files) {
    $pageNum = $file.BaseName -replace '\D', ''
    [void]$allText.AppendLine("=== PAGE $pageNum ===")
    
    $fullPath = $file.FullName
    $storageFileTask = [Windows.Storage.StorageFile]::GetFileFromPathAsync($fullPath)
    $storageFile = Await-WinRT $storageFileTask ([Windows.Storage.StorageFile])
    
    $streamTask = $storageFile.OpenAsync([Windows.Storage.FileAccessMode]::Read)
    $stream = Await-WinRT $streamTask ([Windows.Storage.Streams.IRandomAccessStream])
    
    $decoderTask = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
    $decoder = Await-WinRT $decoderTask ([Windows.Graphics.Imaging.BitmapDecoder])
    
    $bitmapTask = $decoder.GetSoftwareBitmapAsync()
    $bitmap = Await-WinRT $bitmapTask ([Windows.Graphics.Imaging.SoftwareBitmap])
    
    $ocrResultTask = $engine.RecognizeAsync($bitmap)
    $ocrResult = Await-WinRT $ocrResultTask ([Windows.Media.Ocr.OcrResult])
    
    [void]$allText.AppendLine($ocrResult.Text)
    [void]$allText.AppendLine("")
    
    $stream.Dispose()
}

$parentDir = Split-Path -Parent $outputFile
if ($parentDir -and -not (Test-Path $parentDir)) {
    New-Item -ItemType Directory -Force -Path $parentDir | Out-Null
}

[System.IO.File]::WriteAllText($outputFile, $allText.ToString(), [System.Text.Encoding]::UTF8)
Write-Host "Extracted $($files.Count) pages to $outputFile"
