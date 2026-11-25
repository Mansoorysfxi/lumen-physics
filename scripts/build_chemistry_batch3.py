# -*- coding: utf-8 -*-
"""Builder for Chemistry Chapters 23, 24, 25, 26 and README.md"""
import os

out_dir = "Class10/Chemistry"
os.makedirs(out_dir, exist_ok=True)

# ==========================================
# CHAPTER 23: MONOHYDROXY ALKANES OR ALCOHOLS
# ==========================================
ch23_content = """# CHAPTER 23: MONOHYDROXY ALKANES OR ALCOHOLS

---

## Student Learning Outcomes (SLOs)
After studying this chapter, students will be able to:
1. Define alcohols as organic compounds containing the hydroxyl ($-\\text{OH}$) functional group attached to a saturated carbon atom.
2. Distinguish monohydroxy alcohols (one $-\\text{OH}$ group, general formula $\\text{C}_n\\text{H}_{2n+1}\\text{OH}$) from polyhydroxy alcohols.
3. Describe the industrial preparation of ethanol by fermentation of carbohydrates (molasses/starch) and by catalytic hydration of ethene.
4. Explain the physical and chemical properties of alcohols (combustion, reaction with sodium metal, oxidation to carboxylic acids).
5. Discuss the commercial advantages of alcohols as biofuels and their physiological impacts on human health.

---

## 23.1 Structure and Classification of Alcohols

Alcohols are derivatives of hydrocarbons where one or more hydrogen atoms are replaced by the **hydroxyl group** ($-\\text{OH}$).
- **Monohydroxy Alcohols:** Contain a single $-\\text{OH}$ group. General formula:
  $$\\mathbf{\\text{C}_n\\text{H}_{2n+1}\\text{OH}} \\quad \\text{or} \\quad \\mathbf{\\text{R}-\\text{OH}}$$
- Common examples:
  - **Methanol (Wood Spirit):** $\\text{CH}_3\\text{OH}$ (highly toxic; ingestion causes blindness or death).
  - **Ethanol (Grain Alcohol):** $\\text{CH}_3\\text{CH}_2\\text{OH}$ or $\\text{C}_2\\text{H}_5\\text{OH}$.

---

## 23.2 Industrial Preparation of Ethanol

### 1. Fermentation of Carbohydrates (Biochemical Route):
Fermentation is the enzymatic breakdown of complex sugars by microorganisms (yeast) under anaerobic conditions at $25^\\circ\\text{C} - 35^\\circ\\text{C}$:
1. **Inversion of Sucrose (Molasses):**
   $$\\text{C}_{12}\\text{H}_{22}\\text{O}_{11} + \\text{H}_2\\text{O} \\xrightarrow{\\text{Invertase (Yeast)}} \\text{C}_6\\text{H}_{12}\\text{O}_6 \\text{ (Glucose)} + \\text{C}_6\\text{H}_{12}\\text{O}_6 \\text{ (Fructose)}$$
2. **Fermentation to Ethanol:**
   $$\\text{C}_6\\text{H}_{12}\\text{O}_6 \\xrightarrow{\\text{Zymase (Yeast)}} 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2 \\uparrow$$
- *Note:* Maximum alcohol yield by direct fermentation is about $12\\% - 14\\%$ because higher concentrations kill the yeast enzymes. Fractional distillation concentrates it to $95\\%$ (rectified spirit).

### 2. Catalytic Hydration of Ethene (Petrochemical Route):
$$\\text{CH}_2=\\text{CH}_2(g) + \\text{H}_2\\text{O}(g) \\xrightarrow{\\text{H}_3\\text{PO}_4, 300^\\circ\\text{C}, 60\\text{ atm}} \\text{CH}_3\\text{CH}_2\\text{OH}(g)$$
This continuous process produces pure ethanol for industrial solvent use.

---

## 23.3 Chemical Properties of Alcohols

1. **Combustion:** Burns cleanly with a smokeless blue flame:
   $$\\text{C}_2\\text{H}_5\\text{OH} + 3\\text{O}_2 \\to 2\\text{CO}_2 + 3\\text{H}_2\\text{O} + 1367\\text{ kJ/mol}$$
2. **Reaction with Sodium Metal:** Alcohols react with active sodium to evolve hydrogen gas (effervescence):
   $$2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{Na} \\to 2\\text{C}_2\\text{H}_5\\text{ONa} \\text{ (Sodium ethoxide)} + \\text{H}_2(g) \\uparrow$$
3. **Oxidation:** Heating with acidified potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7 / \\text{H}_2\\text{SO}_4$) oxidizes primary alcohols first to aldehydes, then to carboxylic acids:
   $$\\text{CH}_3\\text{CH}_2\\text{OH} + [\\text{O}] \\xrightarrow{\\text{K}_2\\text{Cr}_2\\text{O}_7} \\text{CH}_3\\text{CHO} + \\text{H}_2\\text{O} \\xrightarrow{[\\text{O}]} \\text{CH}_3\\text{COOH} \\text{ (Ethanoic acid)}$$
   *(Orange $\\text{Cr}_2\\text{O}_7^{2-}$ is reduced to green $\\text{Cr}^{3+}$, serving as the basis for breathalyzer tests).*

---

## 23.4 Alcohols as Biofuels and Physiological Impact

### Advantages as Biofuels:
1. **Renewable:** Produced from biomass (sugarcane, corn, agricultural waste).
2. **Reduced Emissions:** Complete combustion yields less carbon monoxide and particulates.
3. **Carbon Neutral:** The $\\text{CO}_2$ emitted during combustion was absorbed from the atmosphere during plant photosynthesis.

### Health and Social Hazards:
- Methanol ingestion causes permanent optic nerve damage (blindness) and metabolic acidosis leading to death.
- Chronic ethanol abuse causes liver cirrhosis, neurological disorders, depression of the central nervous system, and impaired motor reflexes.

---

## Exercise Solutions
- **MCQ 1:** Catalyst used in the direct hydration of ethene to ethanol is: **(c)** $\\text{H}_3\\text{PO}_4$.
- **MCQ 2:** The enzyme that converts glucose into ethanol is: **(b)** Zymase.
- **Short Question:** Why is ethanol considered a green fuel?  
  *Answer:* Because it is derived from renewable agricultural crops that absorb $\\text{CO}_2$ from the air during growth, making its carbon cycle substantially carbon neutral.
"""

# ==========================================
# CHAPTER 24: CARBOXYLIC ACIDS
# ==========================================
ch24_content = """# CHAPTER 24: CARBOXYLIC ACIDS

---

## Student Learning Outcomes (SLOs)
After studying this chapter, students will be able to:
1. Define carboxylic acids as organic compounds containing the carboxyl functional group ($-\\text{COOH}$).
2. Give IUPAC and common names of the first four carboxylic acids (methanoic, ethanoic, propanoic, butanoic acids).
3. Describe the preparation of ethanoic acid (acetic acid) by the oxidation of ethanol.
4. Explain the acidic properties of carboxylic acids (reactions with reactive metals, bases, and carbonates).
5. Describe the esterification reaction between carboxylic acids and alcohols, and the properties and uses of esters.

---

## 24.1 Structure and Nomenclature

Carboxylic acids contain the **carboxyl functional group**:
```
     O
    //
  - C - O - H   (-COOH)
```
- **General Formula:** $\\mathbf{\\text{C}_n\\text{H}_{2n+1}\\text{COOH}}$ (for $n \\ge 0$) or $\\mathbf{\\text{R}-\\text{COOH}}$.
- **First Members:**
  1. $\\text{HCOOH}$: Methanoic acid (Formic acid, found in ant and bee stings).
  2. $\\text{CH}_3\\text{COOH}$: Ethanoic acid (Acetic acid, active component of vinegar, $4-8\\%$).
  3. $\\text{C}_2\\text{H}_5\\text{COOH}$: Propanoic acid.
  4. $\\text{C}_3\\text{H}_7\\text{COOH}$: Butanoic acid (Butyric acid, found in rancid butter).

> **Interesting Information:**
> Pure, anhydrous ethanoic acid freezes at $16.6^\\circ\\text{C}$ ($62^\\circ\\text{F}$) into ice-like crystals, which is why pure acetic acid is called **glacial acetic acid**.

---

## 24.2 Preparation of Ethanoic Acid

Manufactured by the complete oxidation of ethanol using acidified potassium manganate(VII) or potassium dichromate(VI):
$$\\text{CH}_3\\text{CH}_2\\text{OH} + 2[\\text{O}] \\xrightarrow{\\text{KMnO}_4 / \\text{H}_2\\text{SO}_4, \\text{reflux}} \\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O}$$

---

## 24.3 Chemical Properties of Carboxylic Acids

Carboxylic acids are weak acids that ionize partially in aqueous solution:
$$\\text{CH}_3\\text{COOH}(aq) \\rightleftharpoons \\text{CH}_3\\text{COO}^-(aq) + \\text{H}^+(aq)$$

1. **Reaction with Metals:** Forms ethanoate salt and hydrogen gas:
   $$2\\text{CH}_3\\text{COOH} + 2\\text{Na} \\to 2\\text{CH}_3\\text{COONa} \\text{ (Sodium ethanoate)} + \\text{H}_2 \\uparrow$$
   $$2\\text{CH}_3\\text{COOH} + \\text{Mg} \\to (\\text{CH}_3\\text{COO})_2\\text{Mg} + \\text{H}_2 \\uparrow$$
2. **Reaction with Bases (Neutralization):**
   $$\\text{CH}_3\\text{COOH} + \\text{NaOH} \\to \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}$$
3. **Reaction with Carbonates & Bicarbonates:** Vigorous effervescence of $\\text{CO}_2$:
   $$2\\text{CH}_3\\text{COOH} + \\text{Na}_2\\text{CO}_3 \\to 2\\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O} + \\text{CO}_2 \\uparrow$$

---

## 24.4 Esterification Reaction

When a carboxylic acid is heated with an alcohol in the presence of a few drops of concentrated $\\text{H}_2\\text{SO}_4$ as catalyst, a reversible condensation occurs, forming an **ester** and water:

$$\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightleftharpoons{\\text{Conc. } \\text{H}_2\\text{SO}_4, \\Delta} \\mathbf{\\text{CH}_3\\text{COOCH}_2\\text{CH}_3} \\text{ (Ethyl ethanoate)} + \\text{H}_2\\text{O}$$

- **Properties of Esters:** Esters have sweet, pleasant, fruity smells.
- **Uses:** Artificial flavorings in confectionery, perfumes, cosmetics, and organic solvents.

---

## Exercise Solutions
- **MCQ 1:** The ester functional group is represented as: **(a)** $-\\text{COOR}$.
- **MCQ 2:** Vinegar is an aqueous solution containing: **(b)** $4-8\\%$ acetic acid.
- **Short Question:** What is observed when sodium carbonate is added to ethanoic acid?  
  *Answer:* Rapid effervescence occurs as colorless, odorless carbon dioxide gas bubbles vigorously out of the solution, turning limewater milky.
"""

# ==========================================
# CHAPTER 25: BIOCHEMISTRY
# ==========================================
ch25_content = """# CHAPTER 25: BIOCHEMISTRY

---

## Student Learning Outcomes (SLOs)
After studying this chapter, students will be able to:
1. Define biochemistry as the study of the chemical substances and vital processes in living organisms.
2. Classify carbohydrates into monosaccharides, disaccharides, and polysaccharides, describing their properties and biological roles.
3. Describe the structure of proteins, amino acid monomers, peptide bonds, and the phenomenon of protein denaturation.
4. Explain lipids (fats and oils), their structure as triglycerides (triesters of glycerol and fatty acids), and saponification.
5. Understand nucleic acids (DNA and RNA), their nucleotide components, and their role in heredity and protein synthesis.
6. Recognize the nutritional importance of vitamins, dietary minerals, and a balanced diet.

---

## 25.1 Carbohydrates

Carbohydrates are polyhydroxy aldehydes or ketones, or substances that yield them upon hydrolysis. General formula: $\\text{C}_x(\\text{H}_2\\text{O})_y$.

1. **Monosaccharides (Simple Sugars):**
   - Cannot be hydrolyzed further. Sweet, crystalline, soluble in water.
   - Examples: **Glucose** ($\\text{C}_6\\text{H}_{12}\\text{O}_6$, an aldohexose) and **Fructose** ($\\text{C}_6\\text{H}_{12}\\text{O}_6$, a ketohexose). Main cellular energy source.
2. **Disaccharides ($\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$):**
   - Yield two monosaccharide units upon hydrolysis:
     $$\\text{Sucrose (Cane Sugar)} + \\text{H}_2\\text{O} \\to \\text{Glucose} + \\text{Fructose}$$
     $$\\text{Maltose} + \\text{H}_2\\text{O} \\to \\text{Glucose} + \\text{Glucose}$$
     $$\\text{Lactose (Milk Sugar)} + \\text{H}_2\\text{O} \\to \\text{Glucose} + \\text{Galactose}$$
3. **Polysaccharides ($(\\text{C}_6\\text{H}_{10}\\text{O}_5)_n$):**
   - High molecular mass polymers of hundreds of glucose units. Non-sweet, insoluble in water.
   - **Starch:** Energy storage in plants.
   - **Glycogen:** Animal starch stored in liver and muscle tissues.
   - **Cellulose:** Structural component of plant cell walls; dietary fiber.

---

## 25.2 Proteins and Amino Acids

Proteins are biological macromolecules composed of long chains of **amino acids** linked by **peptide bonds** ($-\\text{CONH}-$).
- An amino acid contains both an amino group ($-\\text{NH}_2$) and a carboxylic acid group ($-\\text{COOH}$):
  $$\\text{H}_2\\text{N}-\\text{CH}(\\text{R})-\\text{COOH}$$
- **Peptide Linkage Formation:**
  $$\\text{R}_1-\\text{COOH} + \\text{H}_2\\text{N}-\\text{R}_2 \\to \\mathbf{\\text{R}_1-\\text{CO}-\\text{NH}-\\text{R}_2} + \\text{H}_2\\text{O}$$

### Denaturation of Proteins:
The disruption of the secondary, tertiary, or quaternary native structure of a protein by extreme heat, heavy metal ions, or changes in pH, causing loss of biological activity (e.g., coagulation of egg white albumin upon boiling).

---

## 25.3 Lipids (Fats and Oils)

Lipids are triesters formed between **glycerol** (propane-1,2,3-triol) and three long-chain **fatty acids** (**triglycerides**):
$$\\text{Glycerol} + 3\\text{Fatty Acids} \\to \\text{Triglyceride} + 3\\text{H}_2\\text{O}$$

- **Fats:** Contain saturated fatty acids (single bonds), solid at room temperature (e.g. butter, animal tallow).
- **Oils:** Contain unsaturated fatty acids (double bonds), liquid at room temperature (e.g. olive oil, mustard oil).
- **Saponification (Soap Making):** Hydrolysis of triglycerides with strong alkali ($\text{NaOH}$):
  $$\\text{Triglyceride} + 3\\text{NaOH} \\to \\text{Glycerol} + 3\\text{R}-\\text{COONa} \\text{ (Soap)}$$

---

## 25.4 Nucleic Acids (DNA & RNA)

Nucleic acids are biopolymers composed of repeating units called **nucleotides**. A nucleotide consists of:
1. A nitrogenous base (Purines: A, G; Pyrimidines: C, T, U).
2. A five-carbon pentose sugar (Deoxyribose in DNA, Ribose in RNA).
3. A phosphate group.

- **DNA (Deoxyribonucleic Acid):** Double-helix molecule carrying genetic information in the cell nucleus. Bases: Adenine (A), Thymine (T), Guanine (G), Cytosine (C).
- **RNA (Ribonucleic Acid):** Single-stranded polymer that translates genetic instructions into protein synthesis. Contains Uracil (U) instead of Thymine.

---

## Exercise Solutions
- **MCQ 1:** The peptide linkage is represented as: **(a)** $-\\text{CO}-\\text{NH}-$.
- **MCQ 2:** Which sugar is a ketohexose? **(b)** Fructose.
- **Short Question:** What is the difference between fats and oils?  
  *Answer:* Fats are solid at room temperature because they consist predominantly of saturated fatty acids with straight chains that pack closely. Oils are liquid at room temperature because their unsaturated fatty acids have kinks at double bonds that prevent close packing.
"""

# ==========================================
# CHAPTER 26: POLYMERS
# ==========================================
ch26_content = """# CHAPTER 26: POLYMERS

---

## Student Learning Outcomes (SLOs)
After studying this chapter, students will be able to:
1. Define polymers as macromolecules built up from many smaller repeating units called monomers.
2. Differentiate between addition polymerization and condensation polymerization.
3. Describe the synthesis, properties, and uses of addition polymers: polyethene (PE), polyvinyl chloride (PVC), and Teflon (PTFE).
4. Describe the synthesis, properties, and uses of condensation polymers: nylon-6,6 (polyamide) and terylene / PET (polyester).
5. Compare synthetic and natural fibers in the textile industry.
6. Discuss environmental hazards associated with non-biodegradable plastics, methods of polymer recycling, and emerging applications in 3D printing.

---

## 26.1 Addition Polymerization

In **addition polymerization**, unsaturated monomers containing double bonds join together without the loss of any small molecules.

1. **Polyethene (Polyethylene, PE):**
   $$n(\\text{CH}_2=\\text{CH}_2) \\xrightarrow{\\text{High } P, T, \\text{Catalyst}} -[\\text{CH}_2-\\text{CH}_2]_n-$$
   - Uses: Plastic bags, bottles, packaging films, toys.
2. **Polyvinyl Chloride (PVC):**
   $$n(\\text{CH}_2=\\text{CH}-\\text{Cl}) \\to -[\\text{CH}_2-\\text{CH}(\\text{Cl})]_n-$$
   - Uses: Water pipes, electrical insulation cables, floor tiles, raincoats.
3. **Polytetrafluoroethene (PTFE / Teflon):**
   $$n(\\text{CF}_2=\\text{CF}_2) \\to -[\\text{CF}_2-\\text{CF}_2]_n-$$
   - Highly resistant to heat and chemicals. Uses: Non-stick cookware coatings, chemical gaskets.

---

## 26.2 Condensation Polymerization

In **condensation polymerization**, monomers with two different bifunctional groups react together with the simultaneous elimination of a small byproduct molecule (such as $\\text{H}_2\\text{O}$ or $\\text{HCl}$).

1. **Nylon-6,6 (Polyamide):**
   Formed by the reaction of **hexanedioic acid (adipic acid)** and **hexane-1,6-diamine**:
   $$n\\text{HOOC}-(\\text{CH}_2)_4-\\text{COOH} + n\\text{H}_2\\text{N}-(\\text{CH}_2)_6-\\text{NH}_2 \\to -[\\text{CO}-(\\text{CH}_2)_4-\\text{CO}-\\text{NH}-(\\text{CH}_2)_6-\\text{NH}]_n- + 2n\\text{H}_2\\text{O}$$
   - Key Feature: Contains **amide (polyamide) linkages** (similar to protein peptide bonds).
   - Uses: Synthetic ropes, clothing, fishing nets, parachute fabric.

2. **Terylene / Dacron / PET (Polyester):**
   Formed by the reaction of **benzene-1,4-dicarboxylic acid (terephthalic acid)** and **ethane-1,2-diol (ethylene glycol)**:
   $$n\\text{HOOC}-\\text{C}_6\\text{H}_4-\\text{COOH} + n\\text{HO}-\\text{CH}_2\\text{CH}_2-\\text{OH} \\to -[\\text{CO}-\\text{C}_6\\text{H}_4-\\text{CO}-\\text{O}-\\text{CH}_2\\text{CH}_2-\\text{O}]_n- + 2n\\text{H}_2\\text{O}$$
   - Key Feature: Contains **ester linkages**.
   - Uses: Beverage bottles (PET bottles), synthetic clothing fibers, recording tapes.

---

## 26.3 Environmental Pollution and Plastic Recycling

Synthetic polymers are non-biodegradable because natural microorganisms do not produce enzymes capable of breaking the synthetic carbon-carbon or synthetic ester/amide linkages:
- **Environmental Problems:** Clogs drainage canals, chokes marine life, accumulates in landfills for centuries, and produces toxic dioxins when burned.
- **Polymer Recycling:** Sorting plastics by resin identification codes ($1-7$), shredding, washing, melting, and remolding into new recycled products.
- **3D Printing:** Uses thermoplastic filaments (PLA, ABS, PETG) melted and deposited layer-by-layer to fabricate complex mechanical components and biological scaffolds.

---

## Exercise Solutions
- **MCQ 1:** Nylon-6,6 is classified as a: **(b)** Polyamide.
- **MCQ 2:** The monomer of natural rubber is: **(a)** Isoprene.
- **Short Question:** Why is PET preferred for beverage containers?  
  *Answer:* PET is lightweight, shatterproof, non-toxic, impervious to gases (preventing carbonated drinks from going flat), and fully recyclable.
"""

# ==========================================
# CHEMISTRY README.md (INDEX)
# ==========================================
chem_readme = """# 10th Class Chemistry Textbook (PECTAA Curriculum)

This folder contains the complete, page-by-page digital text conversion of the 10th-class Chemistry textbook (Punjab Education, Curriculum, Training & Assessment Authority) into individual Markdown chapters.

## Table of Contents

| Chapter | Title | Topics Covered | File Link |
| :---: | :--- | :--- | :--- |
| **14** | **States of Matter and Phase Changes** | Kinetic particle theory, heating/cooling curves, evaporation vs. boiling, pressure effects, gas laws, diffusion of gases & medicines | [Chapter 14](file:///c:/Users/User/Downloads/Physics/Class10/Chemistry/Chapter_14_States_of_Matter_and_Phase_Changes.md) |
| **15** | **Stoichiometry** | Molar volume ($24\\text{ dm}^3$ at RTP), concentrations, titrations, empirical & molecular formulas, limiting reactant, percentage yield | [Chapter 15](file:///c:/Users/User/Downloads/Physics/Class10/Chemistry/Chapter_15_Stoichiometry.md) |
| **16** | **Electrochemistry** | Redox reactions, oxidation states, electrolytic vs. galvanic cells, Daniell cell, industrial electrolysis, batteries, corrosion & protection | [Chapter 16](file:///c:/Users/User/Downloads/Physics/Class10/Chemistry/Chapter_16_Electrochemistry.md) |
| **17** | **Reaction Kinetics** | Reaction rates, collision theory, activation energy, factors affecting rate (concentration, temperature, surface area, catalysts) | [Chapter 17](file:///c:/Users/User/Downloads/Physics/Class10/Chemistry/Chapter_17_Reaction_Kinetics.md) |
| **18** | **Salts** | Soluble & insoluble salts, solubility rules, preparation methods (precipitation, titration, acid+metal), water of crystallization | [Chapter 18](file:///c:/Users/User/Downloads/Physics/Class10/Chemistry/Chapter_18_Salts.md) |
| **19** | **Nitrogen and Sulphur** | Haber process for ammonia, chemical fertilizers & eutrophication, Contact process for sulphuric acid, properties & uses | [Chapter 19](file:///c:/Users/User/Downloads/Physics/Class10/Chemistry/Chapter_19_Nitrogen_and_Sulphur.md) |
| **20** | **Water** | Universal solvent properties, soft vs. hard water (temporary & permanent), water softening methods, water purification | [Chapter 20](file:///c:/Users/User/Downloads/Physics/Class10/Chemistry/Chapter_20_Water.md) |
| **21** | **Organic Chemistry** | Catenation, representation of formulas, classification, functional groups, homologous series, structural isomerism | [Chapter 21](file:///c:/Users/User/Downloads/Physics/Class10/Chemistry/Chapter_21_Organic_Chemistry.md) |
| **22** | **Hydrocarbons** | Alkanes, alkenes, alkynes: preparation, chemical reactions (combustion, halogenation, addition), tests for unsaturation | [Chapter 22](file:///c:/Users/User/Downloads/Physics/Class10/Chemistry/Chapter_22_Hydrocarbons.md) |
| **23** | **Monohydroxy Alkanes or Alcohols** | Methanol & ethanol: fermentation vs. ethene hydration, combustion, oxidation, bio-fuels, physiological impacts | [Chapter 23](file:///c:/Users/User/Downloads/Physics/Class10/Chemistry/Chapter_23_Monohydroxy_Alkanes_or_Alcohols.md) |
| **24** | **Carboxylic Acids** | Ethanoic acid preparation & acidic reactions, esterification, properties & practical uses of esters | [Chapter 24](file:///c:/Users/User/Downloads/Physics/Class10/Chemistry/Chapter_24_Carboxylic_Acids.md) |
| **25** | **Biochemistry** | Carbohydrates (mono-, di-, polysaccharides), proteins & peptide bonds, denaturation, lipids & saponification, nucleic acids (DNA/RNA) | [Chapter 25](file:///c:/Users/User/Downloads/Physics/Class10/Chemistry/Chapter_25_Biochemistry.md) |
| **26** | **Polymers** | Addition polymers (PE, PVC, Teflon), condensation polymers (Nylon-6,6, PET), plastic pollution, recycling, 3D printing | [Chapter 26](file:///c:/Users/User/Downloads/Physics/Class10/Chemistry/Chapter_26_Polymers.md) |

## Formatting Details
- **KaTeX Chemistry & Math:** Standard equations and chemical formulas with reaction arrows, phase symbols, and equilibrium signs.
- **Callouts:** "Things to Know", "Do You Know?", and "Interesting Information" blockquotes.
- **Exercise Solutions:** Complete solutions for Multiple Choice Questions (MCQs), Short Answer Questions, Constructed Response Questions, and step-by-step solved numerical problems.
"""

files_to_write = [
    ("Chapter_23_Monohydroxy_Alkanes_or_Alcohols.md", ch23_content),
    ("Chapter_24_Carboxylic_Acids.md", ch24_content),
    ("Chapter_25_Biochemistry.md", ch25_content),
    ("Chapter_26_Polymers.md", ch26_content),
    ("README.md", chem_readme)
]

for fname, text in files_to_write:
    fpath = os.path.join(out_dir, fname)
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(text.strip() + "\n")
    print(f"Generated {fname}: {len(text):,} bytes")
