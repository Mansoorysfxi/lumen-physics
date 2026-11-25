# -*- coding: utf-8 -*-
"""Builder for Chemistry Chapters 15, 16, 17, 18"""
import os
import fitz

doc = fitz.open('Class10/2801-10th-class-chemistry-pectaa-text-book-2026-pdf-(taleem360.com)-Z718A.pdf')
out_dir = "Class10/Chemistry"
os.makedirs(out_dir, exist_ok=True)

# ==========================================
# CHAPTER 15: STOICHIOMETRY
# ==========================================
ch15_content = """# CHAPTER 15: STOICHIOMETRY

---

## Student Learning Outcomes (SLOs)
After studying this chapter, students will be able to:
1. Use the molar gas volume ($24\\text{ dm}^3$ at room temperature and pressure) in stoichiometric calculations involving gases.
2. Define concentration, use both $\\text{g/dm}^3$ and $\\text{mol/dm}^3$, and convert between them.
3. Calculate stoichiometric relationships between substances (reacting masses, limiting reactants, volumes of gases at RTP, volumes and concentrations of solutions).
4. Calculate the concentration of a solution in a titration using empirical titration data.
5. Calculate empirical formula and molecular formula from appropriate experimental data.
6. Calculate percentage yield, percentage composition by mass, and percentage purity.

---

## 15.1 Molar Volume of Gases

The volume of a gas varies with temperature and pressure. To compare gas volumes, standard conditions are defined:
- **Room Temperature and Pressure (RTP):** $25^\\circ\\text{C}$ ($298.15\\text{ K}$) and $1\\text{ atmosphere}$ ($760\\text{ torr}$ or $101.3\\text{ kPa}$).

> **Molar Volume Principle:**
> One mole of any ideal gas occupies a volume of **$24\\text{ dm}^3$** (or $24,000\\text{ cm}^3$ or $0.024\\text{ m}^3$) at RTP ($25^\\circ\\text{C}$ and $1\\text{ atm}$).

$$\\text{Number of Moles of Gas } (n) = \\frac{\\text{Volume of Gas at RTP } (V\\text{ in dm}^3)}{24\\text{ dm}^3\\text{ mol}^{-1}}$$
$$\\text{Volume of Gas at RTP } (V) = n \\times 24\\text{ dm}^3$$

### Solved Examples:
- **Example 15.1:** Calculate the number of moles of nitrogen gas present in $2.5\\text{ dm}^3$ at RTP.  
  $$\\text{Moles} = \\frac{2.5\\text{ dm}^3}{24\\text{ dm}^3\\text{ mol}^{-1}} = 0.104\\text{ mol} \\approx 0.10\\text{ mol}$$
- **Example 15.2:** Calculate the volume of $0.5\\text{ mol}$ of hydrogen at RTP.  
  $$V = 0.5\\text{ mol} \\times 24\\text{ dm}^3\\text{ mol}^{-1} = 12.0\\text{ dm}^3$$
- **Example 15.3:** Calculate the volume occupied by $200\\text{ g}$ of carbon dioxide ($\\text{CO}_2$) at RTP.  
  - Molar mass of $\\text{CO}_2 = 12 + 2(16) = 44\\text{ g/mol}$  
  - $\\text{Moles} = \\frac{200\\text{ g}}{44\\text{ g/mol}} = 4.545\\text{ mol}$  
  - $\\text{Volume} = 4.545\\text{ mol} \\times 24\\text{ dm}^3\\text{ mol}^{-1} = 109.1\\text{ dm}^3$

---

## 15.2 Concentration of Solutions

The concentration of a solution is the amount of solute dissolved in a unit volume of solution (usually $1\\text{ dm}^3 = 1000\\text{ cm}^3 = 1\\text{ Litre}$).

1. **Mass Concentration ($\\text{g/dm}^3$):**
   $$\\text{Concentration } (\\text{g/dm}^3) = \\frac{\\text{Mass of Solute in grams } (m)}{\\text{Volume of Solution in dm}^3 (V)}$$

2. **Molar Concentration / Molarity ($\\text{mol/dm}^3$ or M):**
   $$\\text{Concentration } (\\text{mol/dm}^3) = \\frac{\\text{Moles of Solute } (n)}{\\text{Volume of Solution in dm}^3 (V)}$$

3. **Interconversion:**
   $$\\text{Concentration in g/dm}^3 = \\text{Concentration in mol/dm}^3 \\times \\text{Molar Mass } (M_r)$$

---

## 15.3 Volumetric Analysis (Titrations)

Acid-base titration determines the unknown concentration of an acid or base by neutralizing it with a standard solution of known concentration.
Using the stoichiometric balanced equation:
$$a\\text{Acid} + b\\text{Base} \\to \\text{Salt} + \\text{Water}$$
$$\\frac{C_a \\times V_a}{a} = \\frac{C_b \\times V_b}{b}$$
Where $C_a, C_b$ are concentrations in $\\text{mol/dm}^3$ and $V_a, V_b$ are volumes in $\\text{dm}^3$ (or $\\text{cm}^3$).

---

## 15.4 Percentage Composition, Empirical & Molecular Formulas

1. **Percentage Composition:**
   $$\\%\\text{ of Element} = \\frac{\\text{Total Mass of Element in 1 mole of Compound}}{\\text{Molar Mass of Compound}} \\times 100\\%$$

2. **Empirical Formula:** The simplest whole-number ratio of atoms of each element in a compound.
   - Step 1: Convert percentage of each element into grams (assume $100\\text{ g}$ sample).
   - Step 2: Divide mass of each element by its atomic mass to find moles.
   - Step 3: Divide each mole value by the smallest mole value to obtain the atomic ratio.
   - Step 4: Multiply by small integers if necessary to obtain whole numbers.

3. **Molecular Formula:** Shows the actual number of atoms of each element present in a molecule:
   $$\\text{Molecular Formula} = (\\text{Empirical Formula})_n$$
   $$n = \\frac{\\text{Molar Mass of Compound}}{\\text{Empirical Formula Mass}}$$

---

## 15.5 Limiting Reactant and Percentage Yield

### Limiting Reactant
The reactant that is completely consumed first in a chemical reaction. It limits and determines the maximum theoretical amount of product formed. Reactants present in quantities greater than required are in **excess**.
- **Steps to identify limiting reactant:**
  1. Calculate moles of each reactant from given masses.
  2. Use balanced chemical equation to determine moles of product each reactant can produce.
  3. The reactant yielding the **least moles of product** is the limiting reactant.

### Percentage Yield
$$\\text{Percentage Yield} = \\frac{\\text{Actual Yield}}{\\text{Theoretical Yield}} \\times 100\\%$$
- **Actual Yield:** The mass of product experimentally obtained in the laboratory.
- **Theoretical Yield:** The maximum calculated mass of product expected from the balanced equation.
- Actual yield is almost always less than theoretical yield due to incomplete reactions, side reactions, reversible equilibria, and mechanical losses during filtration/crystallization.

### Percentage Purity
$$\\text{Percentage Purity} = \\frac{\\text{Mass of Pure Substance}}{\\text{Total Mass of Impure Sample}} \\times 100\\%$$

---

## Exercise Solutions

### Section A: Multiple Choice Questions (MCQs)
1. **How many moles of natural gas $\\text{CH}_4$ will be present in a cylinder if its volume is $18\\text{ dm}^3$ at RTP?**  
   *(a) $0.75\\text{ mol}$ (b) $1.33\\text{ mol}$ (c) $18\\text{ mol}$ (d) $24\\text{ mol}$*  
   **Answer:** **(a)** $0.75\\text{ mol}$ *(Calculation: $n = \\frac{18}{24} = 0.75\\text{ mol}$)*.

2. **Concentration of a solution prepared by dissolving $4.0\\text{ g}$ of $\\text{NaOH}$ in $250\\text{ cm}^3$ of solution is:**  
   *(a) $0.1\\text{ M}$ (b) $0.4\\text{ M}$ (c) $1.0\\text{ M}$ (d) $0.25\\text{ M}$*  
   **Answer:** **(b)** $0.4\\text{ M}$ *(Moles $= 4/40 = 0.1\\text{ mol}$; $V = 0.25\\text{ dm}^3$; $M = 0.1/0.25 = 0.4\\text{ mol/dm}^3$)*.

3. **If the molar mass of a compound is $178\\text{ g/mol}$ and its empirical formula is $\\text{C}_3\\text{H}_5\\text{O}_3$, what is its molecular formula?**  
   *(a) $\\text{C}_3\\text{H}_5\\text{O}_3$ (b) $\\text{C}_6\\text{H}_{10}\\text{O}_6$ (c) $\\text{C}_9\\text{H}_{15}\\text{O}_9$ (d) $\\text{C}_8\\text{H}_{10}\\text{O}_8$*  
   **Answer:** **(b)** $\\text{C}_6\\text{H}_{10}\\text{O}_6$ *(Empirical mass $= 3(12) + 5(1) + 3(16) = 36 + 5 + 48 = 89\\text{ g/mol}$. $n = 178 / 89 = 2$. Formula $= \\text{C}_6\\text{H}_{10}\\text{O}_6$)*.

4. **When natural gas burns in an open kitchen burner, which component is the limiting reactant?**  
   *(a) Both components (b) Neither component (c) Air (d) Natural gas*  
   **Answer:** **(d)** Natural gas *(Air/oxygen is present in boundless excess in the room, so methane is the limiting reactant)*.

5. **If the actual yield of a compound is $0.198\\text{ g}$ while the theoretical yield is $0.217\\text{ g}$, the percentage yield is:**  
   *(a) $50\\%$ (b) $91.2\\%$ (c) $80\\%$ (d) $90\\%$*  
   **Answer:** **(b)** $91.2\\%$ *(Calculation: $\\frac{0.198}{0.217} \\times 100 = 91.24\\%$)*.

---

### Section B: Short Answer Questions
- **15.1 What is the molar volume of a gas at RTP?**  
  *Answer:* Molar volume is the volume occupied by one mole of any gas at room temperature ($25^\\circ\\text{C}$) and atmospheric pressure ($1\\text{ atm}$), which is equal to **$24\\text{ dm}^3$** (or $24,000\\text{ cm}^3$).
- **15.2 How is the concept of molar volume useful for us?**  
  *Answer:* It enables chemists to interconvert easily between the mass, moles, and volume of gases at RTP without needing complex density determinations: $\\text{Volume} = \\text{Moles} \\times 24\\text{ dm}^3$.
- **15.3 How does molar volume relate to Avogadro's law?**  
  *Answer:* Avogadro's law states that equal volumes of gases at the same temperature and pressure contain equal numbers of molecules. Hence, one mole of any gas contains $6.022 \\times 10^{23}$ molecules and must occupy the identical volume ($24\\text{ dm}^3$ at RTP).
- **15.4 Why may two different compounds have the same empirical formula?**  
  *Answer:* The empirical formula shows only the simplest whole-number ratio of atoms, not the actual molecular structure. For example, acetylene ($\\text{C}_2\\text{H}_2$) and benzene ($\\text{C}_6\\text{H}_6$) both have the empirical formula $\\text{CH}$ (ratio $1:1$), but possess completely different molar masses and properties.

---

### Section D: Step-by-Step Solved Numerical Problems

#### Problem 15.1
**Statement:** Calculate the number of moles, volume, and number of molecules in $4.0\\text{ g}$ of $\\text{CH}_4$ at RTP.  
**Solution:**
- Molar mass of $\\text{CH}_4 = 12 + 4(1) = 16\\text{ g/mol}$
- Number of moles $n = \\frac{4.0\\text{ g}}{16\\text{ g/mol}} = \\mathbf{0.25\\text{ mol}}$
- Volume at RTP $V = n \\times 24\\text{ dm}^3 = 0.25 \\times 24 = \\mathbf{6.0\\text{ dm}^3}$
- Number of molecules $N = n \\times N_A = 0.25 \\times 6.022 \\times 10^{23} = \\mathbf{1.505 \\times 10^{23}\\text{ molecules}}$

#### Problem 15.2
**Statement:** What mass of $\\text{NaCl}$ needs to be dissolved in $150\\text{ cm}^3$ of solution if concentration is $0.4\\text{ mol/dm}^3$?  
**Solution:**
- Volume $V = \\frac{150}{1000} = 0.150\\text{ dm}^3$
- Moles $n = C \\times V = 0.4\\text{ mol/dm}^3 \\times 0.150\\text{ dm}^3 = 0.060\\text{ mol}$
- Molar mass of $\\text{NaCl} = 23 + 35.5 = 58.5\\text{ g/mol}$
- Mass $m = n \\times M_r = 0.060\\text{ mol} \\times 58.5\\text{ g/mol} = \\mathbf{3.51\\text{ g}}$

#### Problem 15.3
**Statement:** Find the percentage of sodium in $\\text{NaHCO}_3$.  
**Solution:**
- Molar mass of $\\text{NaHCO}_3 = 23 + 1 + 12 + 3(16) = 23 + 1 + 12 + 48 = 84\\text{ g/mol}$
- $\\%\\text{ Na} = \\frac{23}{84} \\times 100\\% = \\mathbf{27.38\\%}$

#### Problem 15.4
**Statement:** A sulphide of iron contains $1.926\\text{ g}$ of sulphur and $2.333\\text{ g}$ of iron. Find its empirical formula.  
**Solution:**
- Moles of $\\text{Fe} = \\frac{2.333\\text{ g}}{55.85\\text{ g/mol}} = 0.04177\\text{ mol}$
- Moles of $\\text{S} = \\frac{1.926\\text{ g}}{32.06\\text{ g/mol}} = 0.06007\\text{ mol}$
- Mole ratio:
  - $\\text{Fe} = \\frac{0.04177}{0.04177} = 1.00$
  - $\\text{S} = \\frac{0.06007}{0.04177} = 1.438 \\approx 1.5 = \\frac{3}{2}$
- Multiply by 2: $\\text{Fe} = 2$, $\\text{S} = 3$.  
- **Empirical Formula:** $\\mathbf{\\text{Fe}_2\\text{S}_3}$ (Iron(III) sulphide).

#### Problem 15.5
**Statement:** A compound contains $40.0\\%\\text{ C}$, $6.71\\%\\text{ H}$, and $53.3\\%\\text{ O}$. $0.320\\text{ mole}$ weighs $28.8\\text{ g}$. What is its molecular formula?  
**Solution:**
1. Molar mass $M_r = \\frac{28.8\\text{ g}}{0.320\\text{ mol}} = 90.0\\text{ g/mol}$
2. Moles in $100\\text{ g}$:
   - $\\text{C}: \\frac{40.0}{12.0} = 3.333\\text{ mol}$
   - $\\text{H}: \\frac{6.71}{1.008} = 6.657\\text{ mol}$
   - $\\text{O}: \\frac{53.3}{16.0} = 3.331\\text{ mol}$
3. Atomic ratio: $\\text{C} = 1, \\text{H} = 2, \\text{O} = 1 \\implies$ Empirical formula is $\\text{CH}_2\\text{O}$
4. Empirical formula mass $= 12 + 2(1) + 16 = 30\\text{ g/mol}$
5. $n = \\frac{90.0}{30} = 3 \\implies$ Molecular formula $= (\\text{CH}_2\\text{O})_3 = \\mathbf{\\text{C}_3\\text{H}_6\\text{O}_3}$ (Lactic acid / Triose).

#### Problem 15.6
**Statement:** For $3\\text{H}_2 + \\text{N}_2 \\to 2\\text{NH}_3$, if $12\\text{ g}$ of $\\text{H}_2$ reacts with $64\\text{ g}$ of $\\text{N}_2$, which is the limiting reactant?  
**Solution:**
- Moles of $\\text{H}_2 = \\frac{12\\text{ g}}{2.016\\text{ g/mol}} = 5.95\\text{ mol}$
- Moles of $\\text{N}_2 = \\frac{64\\text{ g}}{28.02\\text{ g/mol}} = 2.28\\text{ mol}$
- Stoichiometric requirement: $1\\text{ mol } \\text{N}_2$ requires $3\\text{ mol } \\text{H}_2$.
  - To react with $2.28\\text{ mol } \\text{N}_2$, we require: $2.28 \\times 3 = 6.84\\text{ mol } \\text{H}_2$.
  - We only have $5.95\\text{ mol } \\text{H}_2$.
- Therefore, **$\\text{H}_2$ (Hydrogen) is the limiting reactant**.

#### Problem 15.7
**Statement:** When $30.5\\text{ g}$ of $\\text{AgNO}_3$ reacts with excess $\\text{MgCl}_2$, it produces $23.7\\text{ g}$ of $\\text{AgCl}$ via:  
$$2\\text{AgNO}_3 + \\text{MgCl}_2 \\to \\text{Mg}(\\text{NO}_3)_2 + 2\\text{AgCl}$$  
What is the percentage yield?  
**Solution:**
- Molar mass of $\\text{AgNO}_3 = 107.87 + 14.01 + 3(16) = 169.87\\text{ g/mol}$
- Molar mass of $\\text{AgCl} = 107.87 + 35.45 = 143.32\\text{ g/mol}$
- Moles of $\\text{AgNO}_3 = \\frac{30.5\\text{ g}}{169.87\\text{ g/mol}} = 0.1795\\text{ mol}$
- Theoretical moles of $\\text{AgCl} = 0.1795\\text{ mol}$ (1:1 mole ratio)
- Theoretical mass of $\\text{AgCl} = 0.1795 \\times 143.32 = 25.73\\text{ g}$
- $\\%\\text{ Yield} = \\frac{23.7\\text{ g}}{25.73\\text{ g}} \\times 100\\% = \\mathbf{92.1\\%}$

#### Problem 15.8
**Statement:** A sample of metal has total mass $3.66\\text{ kg}$ and contains $2.45\\text{ kg}$ of gold. What is the percentage purity?  
**Solution:**
$$\\%\\text{ Purity} = \\frac{2.45\\text{ kg}}{3.66\\text{ kg}} \\times 100\\% = \\mathbf{66.94\\%}$$
"""

# ==========================================
# CHAPTER 16: ELECTROCHEMISTRY
# ==========================================
ch16_content = """# CHAPTER 16: ELECTROCHEMISTRY

---

## Student Learning Outcomes (SLOs)
After studying this chapter, students will be able to:
1. Define redox reactions as simultaneous oxidation and reduction processes in terms of oxygen/hydrogen gain or loss, electron transfer, and oxidation number changes.
2. Calculate the oxidation state of an atom in a molecule or ion.
3. Distinguish between oxidizing and reducing agents.
4. Describe the construction, working, and chemical equations of electrolytic cells and galvanic (voltaic) cells.
5. Explain the industrial electrolysis of molten lead(II) bromide and aqueous sodium chloride.
6. Describe the Daniell cell and calculate cell voltage using standard electrode potentials.
7. Understand primary, secondary, and fuel cells (lead-acid batteries and hydrogen-oxygen fuel cells).
8. Explain the electrochemical mechanism of rusting of iron and methods of corrosion prevention (galvanizing, electroplating, sacrificial cathodic protection).

---

## 16.1 Redox Reactions and Oxidation States

Electrochemistry deals with the interconversion of electrical energy and chemical energy through oxidation-reduction (redox) reactions.

### Definitions of Oxidation and Reduction
| Concept | Oxidation | Reduction |
| :--- | :--- | :--- |
| **Electron Transfer** | **Loss of electrons** (OIL: Oxidation Is Loss) | **Gain of electrons** (RIG: Reduction Is Gain) |
| **Oxidation Number** | **Increase** in oxidation state | **Decrease** in oxidation state |
| **Oxygen Transfer** | Gain of oxygen | Loss of oxygen |
| **Hydrogen Transfer** | Loss of hydrogen | Gain of hydrogen |

- **Oxidizing Agent:** A substance that oxidizes another by accepting electrons; it gets **reduced**.
- **Reducing Agent:** A substance that reduces another by donating electrons; it gets **oxidized**.

### Rules for Assigning Oxidation States
1. Free elements (uncombined state) have an oxidation state of **0** (e.g., $\\text{Na}, \\text{O}_2, \\text{Cl}_2, \\text{Fe}$).
2. For simple monoatomic ions, oxidation state equals ionic charge (e.g., $\\text{Na}^+ = +1, \\text{Mg}^{2+} = +2, \\text{Cl}^- = -1$).
3. Hydrogen is usually **$+1$** (except in metal hydrides like $\\text{NaH}$, where it is $-1$).
4. Oxygen is usually **$-2$** (except in peroxides like $\\text{H}_2\\text{O}_2$, where it is $-1$, and in $\\text{OF}_2$, where it is $+2$).
5. Group 1 metals are always **$+1$**; Group 2 metals are always **$+2$**; Fluorine is always **$-1$**.
6. The algebraic sum of oxidation numbers in a neutral compound is **$0$**; in a polyatomic ion, it equals the overall charge of the ion.

---

## 16.2 Electrochemical Cells

```
                  +-----------------------------------+
                  |       ELECTROCHEMICAL CELLS       |
                  +-----------------------------------+
                       /                         \\
                      /                           \\
          [ Electrolytic Cell ]           [ Galvanic / Voltaic Cell ]
          Consumes electrical energy      Generates electrical energy
          to drive non-spontaneous       from spontaneous redox reactions
          redox reactions (e.g. refining) (e.g. Daniell cell, batteries)
```

### Comparison: Electrolytic vs. Galvanic Cell
| Feature | Electrolytic Cell | Galvanic (Voltaic) Cell |
| :--- | :--- | :--- |
| **Energy Conversion** | Electrical $\\to$ Chemical | Chemical $\\to$ Electrical |
| **Spontaneity** | Non-spontaneous reaction | Spontaneous reaction |
| **Anode** | **Positive ($+$)**; Oxidation occurs | **Negative ($-$)**; Oxidation occurs |
| **Cathode** | **Negative ($-$)**; Reduction occurs | **Positive ($+$)**; Reduction occurs |
| **External Source** | Requires external battery/DC power | Acts as a power source |

---

## 16.3 The Daniell Cell

The **Daniell cell** is a classic galvanic cell consisting of:
- **Anode half-cell:** Zinc metal strip immersed in $1.0\\text{ M } \\text{ZnSO}_4$ solution.
- **Cathode half-cell:** Copper metal strip immersed in $1.0\\text{ M } \\text{CuSO}_4$ solution.
- **Salt Bridge:** An inverted U-tube filled with agar-agar gel and an inert electrolyte ($\\text{KNO}_3$ or $\\text{KCl}$) connecting both beakers to maintain electrical neutrality.

```
       Zn Anode (-)                                 Cu Cathode (+)
            |                                             |
            +------------ [ Voltmeter / Load ] -----------+
            |                                             |
     [ ZnSO4 solution ] <=== [ Salt Bridge (KNO3) ] ===> [ CuSO4 solution ]
```

### Half-Cell Reactions:
- **Anode (Oxidation):**
  $$\\text{Zn}(s) \\to \\text{Zn}^{2+}(aq) + 2e^- \\quad (E^\\circ = +0.76\\text{ V})$$
- **Cathode (Reduction):**
  $$\\text{Cu}^{2+}(aq) + 2e^- \\to \\text{Cu}(s) \\quad (E^\\circ = +0.34\\text{ V})$$
- **Overall Cell Reaction:**
  $$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\to \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$$
- **Standard Cell Potential ($E^\\circ_{\\text{cell}}$):**
  $$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = +0.34\\text{ V} - (-0.76\\text{ V}) = \\mathbf{+1.10\\text{ V}}$$

---

## 16.4 Industrial Electrolysis

1. **Electrolysis of Molten Lead(II) Bromide ($\\text{PbBr}_2$):**
   - Cathode: $\\text{Pb}^{2+} + 2e^- \\to \\text{Pb}(l)$ (Silvery lead metal deposited)
   - Anode: $2\\text{Br}^- \\to \\text{Br}_2(g) + 2e^-$ (Reddish-brown bromine gas evolved)

2. **Electrolysis of Brine (Aqueous Concentrated $\\text{NaCl}$ in Nelson's Cell):**
   - At Cathode: Water is reduced preferentially over $\\text{Na}^+$:
     $$2\\text{H}_2\\text{O}(l) + 2e^- \\to \\text{H}_2(g) + 2\\text{OH}^-(aq)$$
   - At Anode: Chloride ions oxidize:
     $$2\\text{Cl}^-(aq) \\to \\text{Cl}_2(g) + 2e^-$$
   - Residual Solution: $\\text{Na}^+$ and $\\text{OH}^-$ ions combine to produce commercial **$\\text{NaOH}$**.

---

## 16.5 Batteries and Fuel Cells

1. **Lead-Acid Storage Battery (Secondary Car Battery):**
   - Anode: Spongy Lead ($\\text{Pb}$)
   - Cathode: Lead dioxide ($\\text{PbO}_2$)
   - Electrolyte: $30\\%$ aqueous $\\text{H}_2\\text{SO}_4$
   - Discharging reaction: $\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\to 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}$ ($E_{\\text{cell}} \\approx 2.0\\text{ V}$ per cell; 6 cells in series produce $12\\text{ V}$). Reversible upon recharging.

2. **Hydrogen-Oxygen Fuel Cell:**
   - Converts the chemical energy of hydrogen combustion directly into electrical energy with water as the only byproduct.
   - Anode: $2\\text{H}_2(g) + 4\\text{OH}^-(aq) \\to 4\\text{H}_2\\text{O}(l) + 4e^-$
   - Cathode: $\\text{O}_2(g) + 2\\text{H}_2\\text{O}(l) + 4e^- \\to 4\\text{OH}^-(aq)$
   - Overall: $2\\text{H}_2(g) + \\text{O}_2(g) \\to 2\\text{H}_2\\text{O}(l)$ + Electrical Energy. High efficiency ($>70\\%$) and zero pollution.

---

## 16.6 Corrosion of Metals and Rusting of Iron

**Corrosion** is the electrochemical deterioration of a metal due to reactions with environmental moisture and oxygen. **Rusting** specifically refers to the corrosion of iron.

### Electrochemical Mechanism of Rusting:
1. Iron acts as an **anodic region**:
   $$\\text{Fe}(s) \\to \\text{Fe}^{2+}(aq) + 2e^-$$
2. Released electrons travel through metallic iron to an adjacent surface with water and dissolved oxygen, which acts as a **cathodic region**:
   $$\\text{O}_2(g) + 4\\text{H}^+(aq) + 4e^- \\to 2\\text{H}_2\\text{O}(l)$$
3. $\\text{Fe}^{2+}$ ions further oxidize and combine with oxygen to precipitate hydrated iron(III) oxide (**rust**):
   $$4\\text{Fe}^{2+}(aq) + \\text{O}_2(g) + (4+2x)\\text{H}_2\\text{O}(l) \\to 2\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}(s) + 8\\text{H}^+(aq)$$

### Prevention of Rusting:
1. **Barrier Protection:** Painting, greasing, or coating with plastic to block air and moisture.
2. **Galvanizing:** Coating iron with a thin layer of **zinc**. Zinc is more reactive than iron ($E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ vs $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$); it oxidizes first to form an impermeable $\\text{ZnCO}_3$ layer and provides sacrificial protection even if scratched.
3. **Cathodic / Sacrificial Protection:** Attaching reactive sacrificial metal blocks (magnesium or zinc) to underground steel pipelines or ship hulls.
4. **Electroplating:** Electrolytic deposition of a protective layer of tin, nickel, or chromium onto iron objects.

---

## Exercise Solutions

### Section A: Multiple Choice Questions (MCQs)
1. **The oxidation state of sulphur in $\\text{H}_2\\text{SO}_4$ is:**  
   *(a) $+4$ (b) $+6$ (c) $-2$ (d) $+2$*  
   **Answer:** **(b)** $+6$ *(Calculation: $2(+1) + S + 4(-2) = 0 \\implies S = +6$)*.
2. **In an electrolytic cell, oxidation always takes place at:**  
   *(a) Cathode (b) Anode (c) Salt bridge (d) Battery terminal*  
   **Answer:** **(b)** Anode *(Anode is always the electrode where oxidation occurs in all electrochemical cells)*.
3. **Which of the following acts as the sacrificial anode to protect iron ship hulls?**  
   *(a) Copper (b) Lead (c) Zinc or Magnesium (d) Silver*  
   **Answer:** **(c)** Zinc or Magnesium *(More electropositive than iron)*.
4. **The voltage produced by a single standard Daniell cell is:**  
   *(a) $1.5\\text{ V}$ (b) $1.1\\text{ V}$ (c) $2.0\\text{ V}$ (d) $0.76\\text{ V}$*  
   **Answer:** **(b)** $1.1\\text{ V}$.

---

### Section B: Short & Constructed Questions
- **16.1 What is the role of a salt bridge in a galvanic cell?**  
  *Answer:* The salt bridge completes the electrical circuit by allowing migration of ions between half-cells while preventing mechanical mixing of the two electrolyte solutions, preventing charge buildup.
- **16.2 Why does zinc protect iron from rusting even when the surface coating is scratched?**  
  *Answer:* Zinc is more electropositive than iron. Even when exposed, zinc sacrifices itself and oxidizes preferentially ($\\text{Zn} \\to \\text{Zn}^{2+} + 2e^-$), pumping electrons into iron and maintaining iron in its cathodic (reduced) metallic state.
"""

# ==========================================
# CHAPTER 17: REACTION KINETICS
# ==========================================
ch17_content = """# CHAPTER 17: REACTION KINETICS

---

## Student Learning Outcomes (SLOs)
After studying this chapter, students will be able to:
1. Define rate of reaction as change in concentration of reactant or product per unit time.
2. Describe collision theory and explain the concepts of activation energy and effective collisions.
3. Explain the effect of concentration, surface area, temperature, and catalysts on the rate of reaction.
4. Interpret reaction rate graphs and determine instantaneous and average reaction rates.
5. Understand the role of catalysts and enzymes in industrial processes and biological systems.

---

## 17.1 Rate of Reaction

**Reaction kinetics** is the study of reaction speeds (rates), factors affecting them, and the molecular mechanisms involved.

> **Definition:**
> The **rate of a chemical reaction** is the change in concentration of a reactant or product per unit time:
> $$\\text{Rate} = -\\frac{\\Delta[\\text{Reactant}]}{\\Delta t} = +\\frac{\\Delta[\\text{Product}]}{\\Delta t}$$

- **SI Unit:** $\\text{mol dm}^{-3}\\text{ s}^{-1}$ (or $\\text{g/s}$ or $\\text{cm}^3\\text{/s}$ for gas volume evolution).

---

## 17.2 Collision Theory and Activation Energy

For a chemical reaction to occur between reacting particles:
1. Particles must **collide** with each other.
2. The collision must occur with a minimum kinetic energy called the **activation energy** ($E_a$).
3. The colliding particles must possess the **correct steric orientation**.

Collisions satisfying these conditions are termed **effective collisions**.

```
    Potential Energy
           ^
           |              Activation Energy (Ea)
           |                  /\\  [ Activated Complex ]
           |                 /  \\
       Reactants ---------->/    \\
           |                      \\
           |                       \\----------> Products (Exothermic)
           +----------------------------------------> Reaction Progress
```

- **Activation Energy ($E_a$):** The minimum amount of energy required by colliding reactant molecules to break existing chemical bonds and form the transition state (activated complex).

---

## 17.3 Factors Affecting Reaction Rates

1. **Concentration / Pressure:** Higher concentration increases the number of particles per unit volume. Particles collide more frequently, increasing the frequency of effective collisions and accelerating the reaction.
2. **Surface Area of Solid Reactants:** In heterogeneous reactions, reactions occur only at the surface. Dividing a solid into fine powder greatly increases total surface area, exposing more reactant particles to collisions and dramatically increasing the reaction rate.
3. **Temperature:** Increasing temperature shifts the Maxwell-Boltzmann energy distribution curve toward higher kinetic energies:
   - Particles move faster, increasing collision frequency.
   - More importantly, a much larger fraction of particles possess kinetic energy **greater than or equal to $E_a$**.
   - As a general rule of thumb, for many reactions, a **$10^\\circ\\text{C}$ rise in temperature doubles the reaction rate**.
4. **Catalysts:** A catalyst increases reaction rate without being consumed in the process. It provides an alternative reaction pathway with a **lower activation energy ($E_a$)**.

---

## Exercise Solutions

### Section A: Multiple Choice Questions (MCQs)
1. **The unit of rate of reaction is:**  
   *(a) $\\text{mol dm}^{-3}$ (b) $\\text{mol dm}^{-3}\\text{ s}^{-1}$ (c) $\\text{g dm}^{-3}$ (d) $\\text{s}^{-1}$*  
   **Answer:** **(b)** $\\text{mol dm}^{-3}\\text{ s}^{-1}$.
2. **A catalyst speeds up a chemical reaction by:**  
   *(a) increasing temperature (b) lowering activation energy (c) increasing product yield (d) decreasing enthalpy change*  
   **Answer:** **(b)** lowering activation energy.
3. **Powdered calcium carbonate reacts faster with hydrochloric acid than large marble chips because:**  
   *(a) powder has higher temperature (b) powder has larger surface area (c) powder has higher concentration (d) marble chips are inert*  
   **Answer:** **(b)** powder has larger surface area.

---

### Section B: Short Answer Questions
- **17.1 What is an effective collision?**  
  *Answer:* An effective collision is one where colliding reactant molecules possess kinetic energy equal to or exceeding the activation energy ($E_a$) and collide with the correct spatial orientation, leading to product formation.
- **17.2 Why does food spoil faster in summer than in winter?**  
  *Answer:* Chemical decomposition reactions and bacterial metabolic rates accelerate at higher temperatures because higher thermal energy increases the frequency of effective enzymatic collisions. Refrigeration slows down these rates significantly.
"""

# ==========================================
# CHAPTER 18: SALTS
# ==========================================
ch18_content = """# CHAPTER 18: SALTS

---

## Student Learning Outcomes (SLOs)
After studying this chapter, students will be able to:
1. Define a salt as an ionic compound formed when the acidic hydrogen of an acid is replaced by a metal or ammonium ion.
2. Classify salts into soluble and insoluble salts based on general solubility rules.
3. Describe methods of preparing soluble salts (acid + metal, acid + base, acid + carbonate, acid + alkali titration).
4. Describe the preparation of insoluble salts by precipitation (double displacement).
5. Understand hydrated salts, water of crystallization, and efflorescence/deliquescence.
6. Discuss industrial and domestic uses of salts (sodium chloride, baking soda, washing soda, gypsum, plaster of Paris).

---

## 18.1 Classification and Solubility Rules

A **salt** is an ionic compound composed of cations (basic radicals from base) and anions (acidic radicals from acid).

### General Solubility Rules:
1. All common salts of **Sodium, Potassium, and Ammonium** ($\\text{Na}^+, \\text{K}^+, \\text{NH}_4^+$) are **soluble**.
2. All **Nitrates** ($\\text{NO}_3^-$) and **Ethanoates** ($\\text{CH}_3\\text{COO}^-$) are **soluble**.
3. All **Chlorides** ($\\text{Cl}^-$) are soluble **except $\\text{AgCl}$ and $\\text{PbCl}_2$**.
4. All **Sulphates** ($\\text{SO}_4^{2-}$) are soluble **except $\\text{BaSO}_4, \\text{PbSO}_4$, and $\\text{CaSO}_4$** (sparingly soluble).
5. Most **Carbonates** ($\\text{CO}_3^{2-}$), **Hydroxides** ($\\text{OH}^-$), and **Oxides** are **insoluble** (except those of Group 1 and $\\text{NH}_4^+$).

---

## 18.2 Methods of Preparing Salts

### 1. Preparation of Soluble Salts:
- **Acid + Reactive Metal (Excess Method):**  
  $$\\text{Zn}(s) + \\text{H}_2\\text{SO}_4(aq) \\to \\text{ZnSO}_4(aq) + \\text{H}_2(g)$$
- **Acid + Insoluble Metal Oxide/Base:**  
  $$\\text{CuO}(s) + \\text{H}_2\\text{SO}_4(aq) \\to \\text{CuSO}_4(aq) + \\text{H}_2\\text{O}(l)$$
- **Acid + Insoluble Carbonate:**  
  $$\\text{CuCO}_3(s) + 2\\text{HNO}_3(aq) \\to \\text{Cu}(\\text{NO}_3)_2(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$$
- **Titration (Acid + Soluble Alkali for Group 1 and Ammonium Salts):**  
  $$\\text{HCl}(aq) + \\text{NaOH}(aq) \\to \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l)$$

### 2. Preparation of Insoluble Salts (Precipitation):
Mixing two soluble salt solutions to produce an insoluble precipitate and a soluble spectator salt:
$$\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\to \\mathbf{\\text{AgCl}(s) \\downarrow} + \\text{NaNO}_3(aq)$$
$$\\text{BaCl}_2(aq) + \\text{Na}_2\\text{SO}_4(aq) \\to \\mathbf{\\text{BaSO}_4(s) \\downarrow} + 2\\text{NaCl}(aq)$$
The precipitate is collected by filtration, washed with distilled water, and dried.

---

## 18.3 Water of Crystallization and Hydrated Salts

Many salts retain a fixed stoichiometric number of water molecules chemically bonded in their crystal lattice, called **water of crystallization**.
- **Hydrated copper(II) sulphate:** $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$ (Blue vitriol). Upon heating:
  $$\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O} \\text{ (Blue)} \\xrightarrow{\\Delta} \\text{CuSO}_4 \\text{ (White anhydrous)} + 5\\text{H}_2\\text{O}$$
- **Gypsum:** $\\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}$. When heated to $100^\\circ\\text{C}$, it loses three-fourths of its water of crystallization to form **Plaster of Paris**:
  $$\\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O} \\xrightarrow{100^\\circ\\text{C}} \\left(\\text{CaSO}_4\\right)_2 \\cdot \\text{H}_2\\text{O} + 3\\text{H}_2\\text{O}$$

---

## Exercise Solutions

### Section A: Multiple Choice Questions (MCQs)
1. **Which of the following salts is insoluble in water?**  
   *(a) $\\text{KNO}_3$ (b) $\\text{NaCl}$ (c) $\\text{BaSO}_4$ (d) $\\text{CuSO}_4$*  
   **Answer:** **(c)** $\\text{BaSO}_4$.
2. **Which method is used to prepare an insoluble salt like silver chloride?**  
   *(a) Titration (b) Precipitation (c) Metal + acid (d) Neutralization*  
   **Answer:** **(b)** Precipitation (double displacement).
3. **Plaster of Paris is formed by heating gypsum to:**  
   *(a) $50^\\circ\\text{C}$ (b) $100^\\circ\\text{C}$ (c) $200^\\circ\\text{C}$ (d) $500^\\circ\\text{C}$*  
   **Answer:** **(b)** $100^\\circ\\text{C}$.

---

### Section B: Short Questions
- **18.1 What is the difference between hydrated and anhydrous salts?**  
  *Answer:* A hydrated salt contains water of crystallization chemically bonded within its crystalline lattice (e.g., blue $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$). An anhydrous salt has had all water of crystallization removed, typically by heating, leaving an amorphous or crystalline powder (e.g., white $\\text{CuSO}_4$).
"""

files_to_write = [
    ("Chapter_15_Stoichiometry.md", ch15_content),
    ("Chapter_16_Electrochemistry.md", ch16_content),
    ("Chapter_17_Reaction_Kinetics.md", ch17_content),
    ("Chapter_18_Salts.md", ch18_content)
]

for fname, text in files_to_write:
    fpath = os.path.join(out_dir, fname)
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(text.strip() + "\n")
    print(f"Generated {fname}: {len(text):,} bytes")
