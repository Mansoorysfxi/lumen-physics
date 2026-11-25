import fitz
import re

doc = fitz.open('Class10/2801-10th-class-chemistry-pectaa-text-book-2026-pdf-(taleem360.com)-Z718A.pdf')

chem_chapters = [
    (14, "States of Matter and Phase Changes", 4, 18),
    (15, "Stoichiometry", 19, 33),
    (16, "Electrochemistry", 34, 57),
    (17, "Reaction Kinetics", 58, 69),
    (18, "Salts", 70, 76),
    (19, "Nitrogen and Sulphur", 77, 89),
    (20, "Water", 90, 101),
    (21, "Organic Chemistry", 102, 118),
    (22, "Hydrocarbons", 119, 128),
    (23, "Monohydroxy Alkanes or Alcohols", 129, 136),
    (24, "Carboxylic Acids", 137, 144),
    (25, "Biochemistry", 145, 155),
    (26, "Polymers", 156, 164)
]

for ch_num, title, p_start, p_end in chem_chapters:
    txt = ""
    for p in range(p_start - 1, p_end):
        txt += doc[p].get_text() + "\n"
    print(f"Chapter {ch_num}: {title} ({p_start}-{p_end}) -> {len(txt):,} chars, {len(txt.splitlines()):,} lines")
