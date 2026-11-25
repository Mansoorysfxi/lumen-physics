import fitz
import re

chem_pdf = 'Class10/2801-10th-class-chemistry-pectaa-text-book-2026-pdf-(taleem360.com)-Z718A.pdf'
doc = fitz.open(chem_pdf)

ch_starts = {}
for i, page in enumerate(doc):
    t = page.get_text()
    m = re.search(r'Student\s+Learning\s+Outcomes.*?Chapter\s*[-–—]?\s*(\d+)', t, re.DOTALL | re.IGNORECASE)
    if not m:
        m = re.search(r'Chapter\s*[-–—]?\s*(\d+).*?Student\s+Learning\s+Outcomes', t, re.DOTALL | re.IGNORECASE)
    if m:
        ch_num = int(m.group(1))
        if ch_num not in ch_starts:
            ch_starts[ch_num] = i + 1

# Check table of contents
print("Chemistry Chapters detected:")
sorted_ch = sorted(ch_starts.keys())
for idx, ch in enumerate(sorted_ch):
    start_p = ch_starts[ch]
    end_p = ch_starts[sorted_ch[idx+1]] - 1 if idx + 1 < len(sorted_ch) else len(doc)
    print(f"Chapter {ch:2d}: PDF pages {start_p:3d} to {end_p:3d}")
