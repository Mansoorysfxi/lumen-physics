with open('ocr_dumps/ocr_cs10.txt', encoding='utf-8') as f:
    text = f.read()

pages = text.split('=== PAGE ')
for p in pages[1:]:
    lines = [l.strip() for l in p.split('\n') if l.strip()]
    p_num = lines[0].replace('===', '').strip()
    content_lines = lines[1:8]
    full_top = ' '.join(content_lines).lower()
    if 'student learning outcome' in full_top or 'unit' in full_top or 'exercise' in full_top:
        print(f"Page {p_num:>3}: {' '.join(content_lines)[:110]}")
