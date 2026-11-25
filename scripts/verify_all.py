import os
import glob

files = sorted(glob.glob("Chapter_*.md"))
print(f"Total files found: {len(files)}")
print("-" * 75)
print(f"{'Filename':<45} | {'Lines':<8} | {'Bytes':<10}")
print("-" * 75)

total_lines = 0
total_bytes = 0

for f in files:
    with open(f, "r", encoding="utf-8") as fh:
        lines = len(fh.readlines())
    sz = os.path.getsize(f)
    total_lines += lines
    total_bytes += sz
    print(f"{f:<45} | {lines:<8} | {sz:<10}")

print("-" * 75)
print(f"Grand Total: {len(files)} chapters, {total_lines:,} lines, {total_bytes:,} bytes")
