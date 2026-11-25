import os
import sys
import subprocess
import fitz

PDF_PATH = "439-11th-class-physics-text-book-in-pdf-by-punjab-board-(taleem360.com)-4I3mx.pdf"

CHAPTER_RANGES = {
    1: (4, 24),     # pp. 5-25
    2: (25, 50),    # pp. 26-51
    3: (51, 79),    # pp. 52-80
    4: (80, 101),   # pp. 81-102
    5: (102, 129),  # pp. 103-130
    6: (130, 143),  # pp. 131-144
    7: (144, 163),  # pp. 145-164
    8: (164, 195),  # pp. 165-196
    9: (196, 216),  # pp. 197-217
    10: (217, 238), # pp. 218-239
    11: (239, 268)  # pp. 240-269
}

def extract_and_ocr(ch_num):
    os.makedirs("temp_pages", exist_ok=True)
    os.makedirs("ocr_dumps", exist_ok=True)
    
    # Clean temp_pages
    for f in os.listdir("temp_pages"):
        os.remove(os.path.join("temp_pages", f))
        
    start_idx, end_idx = CHAPTER_RANGES[ch_num]
    print(f"Extracting Chapter {ch_num}: pages {start_idx + 1} to {end_idx + 1}...")
    
    doc = fitz.open(PDF_PATH)
    zoom = 150 / 72.0
    mat = fitz.Matrix(zoom, zoom)
    
    for idx in range(start_idx, end_idx + 1):
        page = doc.load_page(idx)
        pix = page.get_pixmap(matrix=mat)
        p_num = idx + 1
        pix.save(f"temp_pages/page_{p_num:03d}.png")
    
    out_file = f"ocr_dumps/ocr_ch{ch_num:02d}.txt"
    print(f"Running OCR for Chapter {ch_num} into {out_file}...")
    cmd = [
        "powershell",
        "-ExecutionPolicy", "Bypass",
        "-File", "ocr_helper.ps1",
        "-inputDir", "temp_pages",
        "-outputFile", out_file
    ]
    subprocess.run(cmd, check=True)
    print(f"Chapter {ch_num} OCR complete: {os.path.getsize(out_file)} bytes.")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        chapters = [int(x) for x in sys.argv[1:]]
    else:
        chapters = list(range(2, 12))
        
    for ch in chapters:
        extract_and_ocr(ch)
    print("All requested chapters OCR completed!")
