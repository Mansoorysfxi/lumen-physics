import os
import fitz
import subprocess
import time

PDF_PATH = "Class10/2835-10th-class-computer-em-new-text-book-2026-pectaa-(taleem360.com)-wqCfb.pdf"
OUT_FILE = "ocr_dumps/ocr_cs10.txt"
TEMP_DIR = "temp_cs_pages"

os.makedirs("ocr_dumps", exist_ok=True)
os.makedirs(TEMP_DIR, exist_ok=True)

for f in os.listdir(TEMP_DIR):
    os.remove(os.path.join(TEMP_DIR, f))

doc = fitz.open(PDF_PATH)
total = len(doc)
print(f"Rendering {total} pages at 150 DPI...")
t0 = time.time()
mat = fitz.Matrix(150/72.0, 150/72.0)

for idx in range(total):
    page = doc.load_page(idx)
    pix = page.get_pixmap(matrix=mat)
    pix.save(f"{TEMP_DIR}/page_{idx+1:03d}.png")

print(f"Rendered in {time.time()-t0:.1f}s. Running Windows OCR...")

t1 = time.time()
cmd = [
    "powershell",
    "-ExecutionPolicy", "Bypass",
    "-File", "scripts/ocr_helper.ps1",
    "-inputDir", TEMP_DIR,
    "-outputFile", OUT_FILE
]
subprocess.run(cmd, check=True)
print(f"OCR finished in {time.time()-t1:.1f}s. File size: {os.path.getsize(OUT_FILE)} bytes.")
