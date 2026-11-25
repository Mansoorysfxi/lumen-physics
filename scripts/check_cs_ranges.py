unit_ranges = [
    (1, "Operating Systems: Structure and Services", 1, 18),
    (2, "System Recovery and Advanced Maintenance", 19, 37),
    (3, "Introduction to Python Programming", 38, 51),
    (4, "Control Structures in Python", 52, 65),
    (5, "Introduction to Data Science", 66, 83),
    (6, "Introduction to Artificial Intelligence and Machine Learning", 84, 96),
    (7, "Applications of AI", 97, 110),
    (8, "Digital Entrepreneurship", 111, 127)
]

with open('ocr_dumps/ocr_cs10.txt', encoding='utf-8') as f:
    text = f.read()

pages = text.split('=== PAGE ')
page_dict = {}
for p in pages[1:]:
    lines = p.split('\n')
    num = int(lines[0].replace('===', '').strip())
    page_dict[num] = '\n'.join(lines[1:])

for u_num, u_title, start_p, end_p in unit_ranges:
    start_txt = ' '.join(page_dict[start_p].split()[:15])
    end_txt = ' '.join(page_dict[end_p].split()[-20:])
    print(f"Unit {u_num}: {u_title}")
    print(f"  Pages {start_p}-{end_p} (Total {end_p-start_p+1} pages)")
    print(f"  Start: {start_txt[:80]}...")
    print(f"  End:   ...{end_txt[-80:]}")
