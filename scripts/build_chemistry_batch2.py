# -*- coding: utf-8 -*-
"""Builder for Chemistry Chapters 19, 20, 21, 22"""
import os

out_dir = "Class10/Chemistry"
os.makedirs(out_dir, exist_ok=True)

# ==========================================
# CHAPTER 19: NITROGEN AND SULPHUR
# ==========================================
ch19_content = """# CHAPTER 19: NITROGEN AND SULPHUR

---

## Student Learning Outcomes (SLOs)
After studying this chapter, students will be able to:
1. Describe the composition of air and the role of nitrogen in the environment.
2. Explain the industrial manufacture of ammonia by the Haber process, including essential conditions ($450^\\circ\\text{C}$, $200\\text{ atm}$, finely divided iron catalyst).
3. Describe the manufacture of nitric acid by Ostwald's process and its chemical properties.
4. Understand the role of chemical fertilizers (urea, ammonium nitrate, superphosphate) and environmental concerns (eutrophication).
5. Describe the industrial manufacture of sulphuric acid by the Contact process, including conditions ($450^\\circ\\text{C}$, $1\\text{--}2\\text{ atm}$, $\\text{V}_2\\text{O}_5$ catalyst).
6. Explain the properties and uses of sulphuric acid as a strong acid, dehydrating agent, and oxidizing agent.

---

## 19.1 The Haber Process for Ammonia Manufacture

Ammonia ($\\text{NH}_3$) is manufactured on a massive industrial scale by the direct reversible combination of nitrogen and hydrogen gases:

$$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) \\quad \\Delta H = -92\\text{ kJ/mol} \\quad (\\text{Exothermic})$$

### Sources of Raw Materials:
- **Nitrogen ($\\text{N}_2$):** Obtained by the fractional distillation of liquid air.
- **Hydrogen ($\\text{H}_2$):** Obtained from natural gas (methane) by steam reforming:
  $$\\text{CH}_4(g) + \\text{H}_2\\text{O}(g) \\xrightarrow{\\text{Ni}, 750^\\circ\\text{C}} \\text{CO}(g) + 3\\text{H}_2(g)$$

### Optimum Conditions:
1. **Temperature ($400^\\circ\\text{C} - 450^\\circ\\text{C}$):** Because the forward reaction is exothermic, low temperature favors high equilibrium yield (Le Chatelier's principle). However, at low temperatures, the reaction rate is unacceptably slow. $450^\\circ\\text{C}$ is an economic **compromise temperature** ensuring acceptable yield at a fast rate.
2. **Pressure ($200\\text{ atmospheres}$):** 4 volumes of reactant gases produce 2 volumes of product gas. Higher pressure shifts equilibrium forward, favoring ammonia yield and increasing collision rate.
3. **Catalyst (Finely divided Iron with $\\text{Al}_2\\text{O}_3$ promoter):** Accelerates both forward and reverse rates equally to reach equilibrium rapidly, but does not alter equilibrium yield.
4. **Recycling:** Unreacted $\\text{N}_2$ and $\\text{H}_2$ are cooled, ammonia liquefies (b.p. $-33^\\circ\\text{C}$), and unreacted gases are recycled continuously, achieving an overall conversion $>98\\%$.

---

## 19.2 Chemical Fertilizers and Environmental Issues

Plants require Nitrogen (N), Phosphorus (P), and Potassium (K) (NPK fertilizers) for vigorous growth:
- **Urea ($\\text{NH}_2\\text{CONH}_2$):** Contains $46.6\\%$ nitrogen by mass. Prepared from ammonia and carbon dioxide:
  $$2\\text{NH}_3 + \\text{CO}_2 \\to \\text{NH}_2\\text{COONH}_4 \\to \\text{NH}_2\\text{CONH}_2 + \\text{H}_2\\text{O}$$
- **Ammonium Nitrate ($\\text{NH}_4\\text{NO}_3$):** Prepared by neutralizing ammonia with nitric acid:
  $$\\text{NH}_3 + \\text{HNO}_3 \\to \\text{NH}_4\\text{NO}_3$$

### Eutrophication:
Overuse of artificial nitrogen fertilizers leads to fertilizer runoff into streams, rivers, and lakes:
1. Excessive nitrates stimulate rapid, explosive growth of algae (**algal bloom**).
2. Dense algae mats block sunlight from reaching aquatic plants below, which die.
3. Aerobic bacteria decompose the dead plant matter, consuming dissolved oxygen in the water.
4. Dissolved oxygen levels drop catastrophically, suffocating fish and aquatic fauna and creating stagnant "dead zones."

---

## 19.3 The Contact Process for Sulphuric Acid Manufacture

Sulphuric acid ($\\text{H}_2\\text{SO}_4$), known as the **"King of Chemicals,"** is produced industrially by the **Contact Process**:

### Stage 1: Production of Sulphur Dioxide
$$\\text{S}(s) + \\text{O}_2(g) \\to \\text{SO}_2(g) \\quad \\text{or} \\quad 4\\text{FeS}_2(s) + 11\\text{O}_2(g) \\to 2\\text{Fe}_2\\text{O}_3(s) + 8\\text{SO}_2(g)$$

### Stage 2: Catalytic Oxidation of $\\text{SO}_2$ to $\\text{SO}_3$ (Key Step)
$$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g) \\quad \\Delta H = -196\\text{ kJ/mol}$$
- **Temperature:** $450^\\circ\\text{C}$ (Compromise temperature).
- **Pressure:** $1 - 2\\text{ atm}$ (Sufficient because equilibrium yield is already $98\\%$ at $1\\text{ atm}$).
- **Catalyst:** **Vanadium(V) oxide** ($\\text{V}_2\\text{O}_5$).

### Stage 3: Conversion to Sulphuric Acid
$\\text{SO}_3$ is **not** dissolved directly in water because the reaction is violently exothermic, producing a dense, hazardous mist of acid droplets that is difficult to condense. Instead:
1. $\\text{SO}_3$ is absorbed in $98\\%$ concentrated $\\text{H}_2\\text{SO}_4$ to form **Oleum** (pyrosulphuric acid):
   $$\\text{SO}_3(g) + \\text{H}_2\\text{SO}_4(l) \\to \\text{H}_2\\text{S}_2\\text{O}_7(l)$$
2. Oleum is carefully diluted with calculated amounts of water to yield pure concentrated ($98\\%$) sulphuric acid:
   $$\\text{H}_2\\text{S}_2\\text{O}_7(l) + \\text{H}_2\\text{O}(l) \\to 2\\text{H}_2\\text{SO}_4(l)$$

---

## 19.4 Properties of Sulphuric Acid
1. **Strong Dibasic Acid:** Neutralizes bases and reacts with metals, carbonates, and oxides.
2. **Powerful Dehydrating Agent:** Has high affinity for water, extracting water molecules from hydrates and organic compounds:
   $$\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}(s) \\xrightarrow{\\text{Conc. } \\text{H}_2\\text{SO}_4} 12\\text{C}(s) \\text{ (Black sugar charcoal)} + 11\\text{H}_2\\text{O}(g)$$
   $$\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}(s) \\text{ (Blue)} \\to \\text{CuSO}_4(s) \\text{ (White)} + 5\\text{H}_2\\text{O}$$
3. **Oxidizing Agent:** Hot concentrated $\\text{H}_2\\text{SO}_4$ oxidizes non-metals:
   $$\\text{C} + 2\\text{H}_2\\text{SO}_4 \\to \\text{CO}_2 + 2\\text{SO}_2 + 2\\text{H}_2\\text{O}$$

---

## Exercise Solutions
- **MCQ 1:** Catalyst used in the Contact process is: **(b)** $\\text{V}_2\\text{O}_5$.
- **MCQ 2:** Percentage of nitrogen in urea is: **(c)** $46.6\\%$.
- **Short Question:** Why is $\\text{SO}_3$ not dissolved directly in water?  
  *Answer:* The direct reaction $\\text{SO}_3 + \\text{H}_2\\text{O} \\to \\text{H}_2\\text{SO}_4$ is intensely exothermic and vaporizes water instantly, producing a corrosive, unmanageable acid mist. Dissolving in concentrated $\\text{H}_2\\text{SO}_4$ safely forms oleum.
"""

# ==========================================
# CHAPTER 20: WATER
# ==========================================
ch20_content = """# CHAPTER 20: WATER

---

## Student Learning Outcomes (SLOs)
After studying this chapter, students will be able to:
1. Describe the unique physical and chemical properties of water (extensive hydrogen bonding, high heat capacity, universal solvent).
2. Differentiate between soft water and hard water.
3. Explain the causes of temporary and permanent hardness of water.
4. Describe methods for removing temporary hardness (boiling, Clark's process) and permanent hardness (washing soda, ion-exchange resin).
5. Identify common industrial, agricultural, and domestic water pollutants and their hazards.
6. Describe the stages of municipal water treatment (sedimentation, coagulation, filtration, chlorination).

---

## 20.1 Water as a Universal Solvent

Water is often called the **"universal solvent"** due to two unique properties:
1. **High Polarity of $\\text{H}_2\\text{O}$ Molecule:** The electronegativity difference between oxygen ($3.5$) and hydrogen ($2.1$) creates a bent molecular shape with strong partial charges ($\\delta^-$ on O, $\\delta^+$ on H). Water dissolves ionic compounds by hydrating ions (ion-dipole attraction).
2. **Extensive Hydrogen Bonding:** Water forms intermolecular hydrogen bonds with polar covalent compounds (e.g. alcohols, sugars, organic acids), allowing them to dissolve easily.

---

## 20.2 Soft Water vs. Hard Water

- **Soft Water:** Water that readily forms a rich, generous lather with soap (e.g., rainwater, distilled water).
- **Hard Water:** Water that does not readily form lather with soap, instead producing an insoluble greyish curdy precipitate called **scum**:
  $$2\\text{C}_{17}\\text{H}_{35}\\text{COONa}(aq) + \\text{Ca}^{2+}(aq) \\to (\\text{C}_{17}\\text{H}_{35}\\text{COO})_2\\text{Ca}(s) \\downarrow + 2\\text{Na}^+(aq)$$

### Types of Hardness:
| Hardness Type | Dissolved Salts Causing Hardness | Removal Methods |
| :--- | :--- | :--- |
| **Temporary Hardness** | Calcium bicarbonate [$\\text{Ca}(\\text{HCO}_3)_2$] and Magnesium bicarbonate [$\\text{Mg}(\\text{HCO}_3)_2$] | 1. Boiling<br>2. Clark's method [addition of $\\text{Ca}(\\text{OH})_2$] |
| **Permanent Hardness** | Chlorides and sulphates of calcium and magnesium [$\\text{CaCl}_2, \\text{MgCl}_2, \\text{CaSO}_4, \\text{MgSO}_4$] | 1. Washing soda ($\\text{Na}_2\\text{CO}_3$)<br>2. Ion-exchange resin (zeolite) |

---

## 20.3 Methods of Removing Hardness (Water Softening)

### 1. Removal of Temporary Hardness:
- **By Boiling:** Decomposes soluble bicarbonates into insoluble carbonates:
  $$\\text{Ca}(\\text{HCO}_3)_2(aq) \\xrightarrow{\\Delta} \\mathbf{\\text{CaCO}_3(s) \\downarrow} + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$$
- **Clark's Method:** Adding calculated quantity of slaked lime:
  $$\\text{Ca}(\\text{HCO}_3)_2 + \\text{Ca}(\\text{OH})_2 \\to \\mathbf{2\\text{CaCO}_3(s) \\downarrow} + 2\\text{H}_2\\text{O}$$

### 2. Removal of Permanent Hardness:
- **Using Washing Soda ($\\text{Na}_2\\text{CO}_3$):** Precipitates $\\text{Ca}^{2+}$ and $\\text{Mg}^{2+}$ as insoluble carbonates:
  $$\\text{CaSO}_4(aq) + \\text{Na}_2\\text{CO}_3(aq) \\to \\mathbf{\\text{CaCO}_3(s) \\downarrow} + \\text{Na}_2\\text{SO}_4(aq)$$
  $$\\text{MgCl}_2(aq) + \\text{Na}_2\\text{CO}_3(aq) \\to \\mathbf{\\text{MgCO}_3(s) \\downarrow} + 2\\text{NaCl}(aq)$$
- **Ion-Exchange Resins (Zeolites):** Synthetic resins containing sodium ions ($\\text{Na}_2\\text{R}$). As hard water trickles through the resin bed, $\\text{Ca}^{2+}$ and $\\text{Mg}^{2+}$ ions are captured by the resin, releasing harmless $\\text{Na}^+$ ions into the water:
  $$\\text{Na}_2\\text{R} + \\text{Ca}^{2+}(aq) \\to \\text{CaR}(s) + 2\\text{Na}^+(aq)$$

---

## 20.4 Disadvantages of Hard Water
1. **Wastes Soap:** Forms insoluble scum, requiring massive amounts of soap before lather forms.
2. **Boiler Scale:** Deposits thick layers of insoluble $\\text{CaCO}_3$ and $\\text{CaSO}_4$ inside industrial steam boilers and pipes. Scale is a poor thermal conductor, wasting fuel, causing overheating, and risking catastrophic boiler explosions.

---

## 20.5 Water Purification for Domestic Use
Municipal drinking water is purified through four sequential stages:
1. **Screening and Sedimentation:** Coarse debris settles under gravity in large reservoirs.
2. **Coagulation (Flocculation):** Adding alum [$\\text{KAl}(\\text{SO}_4)_2 \\cdot 12\\text{H}_2\\text{O}$] clumps fine colloidal clay particles into heavy flocs that settle out rapidly.
3. **Sand Filtration:** Water passes through sand and gravel beds to trap remaining particulates.
4. **Disinfection (Chlorination):** Adding controlled amounts of chlorine gas or bleach destroys pathogenic bacteria and viruses.

---

## Exercise Solutions
- **MCQ 1:** Temporary hardness of water is caused by: **(a)** $\\text{Ca}(\\text{HCO}_3)_2$.
- **MCQ 2:** Permanent hardness can be removed by adding: **(b)** Washing soda ($\\text{Na}_2\\text{CO}_3$).
- **Short Question:** Why does water dissolve ionic compounds?  
  *Answer:* Water has a high dielectric constant and strong molecular dipole moments. The negative ends of water molecules attract cations, and the positive ends attract anions, overcoming lattice electrostatic attractions and solvating the ions.
"""

# ==========================================
# CHAPTER 21: ORGANIC CHEMISTRY
# ==========================================
ch21_content = """# CHAPTER 21: ORGANIC CHEMISTRY

---

## Student Learning Outcomes (SLOs)
After studying this chapter, students will be able to:
1. Define organic chemistry as the chemistry of hydrocarbons and their derivatives.
2. Explain the unique catenation ability of carbon and the formation of single, double, and triple bonds.
3. Differentiate between molecular, structural, condensed, and dot-and-cross formulas of organic compounds.
4. Classify organic compounds into open-chain (aliphatic: alkanes, alkenes, alkynes) and closed-chain (cyclic: homocyclic/aromatic/alicyclic, heterocyclic).
5. Define functional groups and identify common functional groups (halide, alcohol, ether, aldehyde, ketone, carboxylic acid, ester, amine).
6. Explain the concept of homologous series and its characteristics.
7. Understand structural isomerism with examples of butane and pentane.

---

## 21.1 The Nature of Organic Compounds and Catenation

**Organic chemistry** is the branch of chemistry that deals with the study of compounds containing covalently bonded **carbon** (hydrocarbons and their functional derivatives).

### Why are there Millions of Organic Compounds?
1. **Catenation:** The unique property of carbon atoms to form strong covalent bonds with other carbon atoms, linking together into long open chains (linear or branched) and stable closed rings. Carbon exhibits the highest catenation ability because the $\\text{C}-\\text{C}$ bond energy ($348\\text{ kJ/mol}$) is very strong.
2. **Tetravalency:** Carbon has 4 valence electrons and forms four covalent bonds in tetrahedral geometry ($sp^3$) or planar/linear geometries ($sp^2, sp$).
3. **Multiple Bonding:** Carbon atoms readily form stable double ($\\text{C}=\\text{C}$) and triple ($\\text{C}\\equiv\\text{C}$) bonds with carbon, nitrogen, and oxygen.
4. **Isomerism:** Multiple compounds share identical molecular formulas but possess different structural arrangements.

---

## 21.2 Representation of Organic Compounds

1. **Molecular Formula:** Shows actual number of each atom: e.g., $\\text{C}_4\\text{H}_{10}$.
2. **Structural Formula:** Shows exact arrangement of atoms and all covalent bonds:
   ```
       H   H   H   H
       |   |   |   |
   H - C - C - C - C - H
       |   |   |   |
       H   H   H   H
   ```
3. **Condensed Formula:** Groups atoms together sequentially: $\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3$ or $\\text{CH}_3(\\text{CH}_2)_2\\text{CH}_3$.
4. **Dot-and-Cross Formula:** Shows valence electron pairs forming each covalent bond.

---

## 21.3 Classification of Organic Compounds

```
                  +-----------------------------------+
                  |         ORGANIC COMPOUNDS         |
                  +-----------------------------------+
                       /                         \\
                      /                           \\
          [ Open-Chain (Acyclic) ]       [ Closed-Chain (Cyclic) ]
               /            \\                     /            \\
              /              \\                   /              \\
        ( Saturated )  ( Unsaturated )     [ Homocyclic ]   [ Heterocyclic ]
          Alkanes       Alkenes, Alkynes     /         \\     (Ring with O, N, S)
                                       (Alicyclic) (Aromatic) e.g. Pyridine
                                       Cyclohexane   Benzene
```

---

## 21.4 Functional Groups

A **functional group** is an atom or specific group of atoms that imparts characteristic chemical properties to an organic compound.

| Class | Functional Group | General Formula | Example |
| :--- | :---: | :---: | :--- |
| **Alcohol** | $-\\text{OH}$ (Hydroxyl) | $\\text{R}-\\text{OH}$ | Ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$) |
| **Ether** | $-\\text{O}-$ (Ether linkage) | $\\text{R}-\\text{O}-\\text{R}'$ | Dimethyl ether ($\\text{CH}_3-\\text{O}-\\text{CH}_3$) |
| **Aldehyde** | $-\\text{CHO}$ (Formyl) | $\\text{R}-\\text{CHO}$ | Acetaldehyde ($\\text{CH}_3\\text{CHO}$) |
| **Ketone** | $>\text{C}=\text{O}$ (Carbonyl) | $\\text{R}-\\text{CO}-\\text{R}'$ | Acetone ($\\text{CH}_3\\text{COCH}_3$) |
| **Carboxylic Acid** | $-\\text{COOH}$ (Carboxyl) | $\\text{R}-\\text{COOH}$ | Acetic acid ($\\text{CH}_3\\text{COOH}$) |
| **Ester** | $-\\text{COOR}$ (Ester linkage) | $\\text{R}-\\text{COOR}'$ | Ethyl acetate ($\\text{CH}_3\\text{COOCH}_2\\text{CH}_3$) |
| **Alkyl Halide** | $-\\text{X}$ ($\\text{F, Cl, Br, I}$) | $\\text{R}-\\text{X}$ | Ethyl chloride ($\\text{CH}_3\\text{CH}_2\\text{Cl}$) |
| **Amine** | $-\\text{NH}_2$ (Amino) | $\\text{R}-\\text{NH}_2$ | Methylamine ($\\text{CH}_3\\text{NH}_2$) |

---

## 21.5 Homologous Series

A series of structurally related organic compounds where members possess the same functional group and general formula, and consecutive members differ by a **$-\\text{CH}_2-$ unit** (methylene group, molecular mass difference of $14\\text{ g/mol}$).

### Key Characteristics:
1. All members conform to a **single general formula** (e.g., Alkanes: $\\text{C}_n\\text{H}_{2n+2}$).
2. Successive members differ by $-\\text{CH}_2-$ and $14\\text{ a.m.u.}$.
3. They share **similar chemical properties** because they possess the same functional group.
4. Physical properties (boiling point, melting point, density) show a **regular gradation** as molar mass increases.

---

## 21.6 Structural Isomerism

Compounds having the **same molecular formula** but **different structural arrangements** of atoms are called **isomers**, and the phenomenon is called **isomerism**.

### Example: Isomers of Butane ($\\text{C}_4\\text{H}_{10}$)
1. **$n$-Butane (Straight-chain):** $\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3$ (b.p. $-0.5^\\circ\\text{C}$)
2. **Isobutane / 2-Methylpropane (Branched):**  
   $$\\text{CH}_3-\\text{CH}(\\text{CH}_3)-\\text{CH}_3 \\quad (\\text{b.p. } -11.7^\\circ\\text{C})$$

*(Pentane $\\text{C}_5\\text{H}_{12}$ has 3 structural isomers: $n$-pentane, isopentane, and neopentane).*

---

## Exercise Solutions
- **MCQ 1:** The self-linking ability of carbon atoms is called: **(b)** Catenation.
- **MCQ 2:** The functional group of an ester is: **(a)** $-\\text{COOR}$.
- **Short Question:** Why do members of a homologous series show similar chemical properties?  
  *Answer:* Chemical reactivity is determined by the functional group. Because all members of a homologous series share identical functional groups and bond types, they undergo the same characteristic chemical reactions.
"""

# ==========================================
# CHAPTER 22: HYDROCARBONS
# ==========================================
ch22_content = """# CHAPTER 22: HYDROCARBONS

---

## Student Learning Outcomes (SLOs)
After studying this chapter, students will be able to:
1. Define hydrocarbons as organic compounds consisting exclusively of carbon and hydrogen.
2. Classify hydrocarbons into alkanes (saturated), alkenes, and alkynes (unsaturated).
3. Name unbranched and branched hydrocarbons according to IUPAC nomenclature.
4. Describe the preparation of alkanes (hydrogenation of alkenes/alkynes, reduction of alkyl halides).
5. Explain the chemical properties of alkanes (combustion, halogenation by free-radical substitution).
6. Describe the preparation of alkenes (dehydration of alcohols, dehydrohalogenation of alkyl halides).
7. Explain addition reactions of alkenes (hydrogenation, halogenation, hydration) and tests to distinguish saturated from unsaturated hydrocarbons (bromine water test, Baeyer's test).

---

## 22.1 Classification of Hydrocarbons

| Family | General Formula | Bond Type | Saturation | Typical Example |
| :--- | :---: | :---: | :---: | :--- |
| **Alkanes** | $\\text{C}_n\\text{H}_{2n+2}$ | Single ($\\text{C}-\\text{C}$) | **Saturated** | Methane ($\\text{CH}_4$), Ethane ($\\text{C}_2\\text{H}_6$) |
| **Alkenes** | $\\text{C}_n\\text{H}_{2n}$ | Double ($\\text{C}=\\text{C}$) | **Unsaturated** | Ethene ($\\text{C}_2\\text{H}_4$) |
| **Alkynes** | $\\text{C}_n\\text{H}_{2n-2}$ | Triple ($\\text{C}\\equiv\\text{C}$) | **Unsaturated** | Ethyne / Acetylene ($\\text{C}_2\\text{H}_2$) |

---

## 22.2 Alkanes (Paraffins)

Alkanes are known as **paraffins** (Latin: *parum affinis* = little affinity) because they contain strong, non-polar single $\\text{C}-\\text{C}$ and $\\text{C}-\\text{H}$ sigma bonds and are generally unreactive under ambient conditions.

### 1. Preparation:
- **Catalytic Hydrogenation of Alkenes (Sabatier-Senderens Reaction):**
  $$\\text{CH}_2=\\text{CH}_2 + \\text{H}_2 \\xrightarrow{\\text{Ni}, 200-300^\\circ\\text{C}} \\text{CH}_3-\\text{CH}_3$$
- **Reduction of Alkyl Halides (with nascent hydrogen using $\\text{Zn} + \\text{HCl}$):**
  $$\\text{CH}_3\\text{Cl} + 2[\\text{H}] \\xrightarrow{\\text{Zn}/\\text{HCl}} \\text{CH}_4 + \\text{HCl}$$

### 2. Chemical Reactions:
- **Combustion:**
  $$\\text{CH}_4 + 2\\text{O}_2 \\to \\text{CO}_2 + 2\\text{H}_2\\text{O} + 890\\text{ kJ/mol} \\quad (\\text{Complete})$$
  $$2\\text{CH}_4 + 3\\text{O}_2 \\to 2\\text{CO} + 4\\text{H}_2\\text{O} \\quad (\\text{Incomplete, produces toxic CO})$$
- **Halogenation (Free-Radical Substitution in Diffused Sunlight):**
  $$\\text{CH}_4 + \\text{Cl}_2 \\xrightarrow{h\\nu} \\text{CH}_3\\text{Cl} + \\text{HCl} \\xrightarrow{\\text{Cl}_2} \\text{CH}_2\\text{Cl}_2 \\xrightarrow{\\text{Cl}_2} \\text{CHCl}_3 \\xrightarrow{\\text{Cl}_2} \\text{CCl}_4$$

---

## 22.3 Alkenes (Olefins)

Alkenes contain a reactive carbon-carbon double bond consisting of one strong $\\sigma$ bond and one weaker, exposed $\\pi$ bond.

### 1. Preparation:
- **Dehydration of Alcohols:**
  $$\\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{Conc. } \\text{H}_2\\text{SO}_4, 170^\\circ\\text{C}} \\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O}$$
- **Dehydrohalogenation of Alkyl Halides:**
  $$\\text{CH}_3\\text{CH}_2\\text{Br} + \\text{KOH}(\\text{alcoholic}) \\xrightarrow{\\Delta} \\text{CH}_2=\\text{CH}_2 + \\text{KBr} + \\text{H}_2\\text{O}$$

### 2. Addition Reactions:
Because the $\\pi$ bond breaks readily, alkenes undergo characteristic electrophilic **addition reactions**:
- **Hydrogenation:** $\\text{CH}_2=\\text{CH}_2 + \\text{H}_2 \\xrightarrow{\\text{Ni}} \\text{CH}_3-\\text{CH}_3$ *(Used industrially to convert liquid vegetable oils into solid vegetable ghee)*.
- **Halogenation:** $\\text{CH}_2=\\text{CH}_2 + \\text{Br}_2 \\to \\text{CH}_2\\text{Br}-\\text{CH}_2\\text{Br}$ (1,2-dibromoethane).
- **Hydration:** $\\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O}(g) \\xrightarrow{\\text{H}_3\\text{PO}_4, 300^\\circ\\text{C}} \\text{CH}_3\\text{CH}_2\\text{OH}$.

---

## 22.4 Tests to Distinguish Saturated and Unsaturated Hydrocarbons

1. **Bromine Water Test:**
   - Add reddish-brown bromine water ($\\text{Br}_2(aq)$) to the sample:
   - **Alkene/Alkyne:** Rapidly **decolorizes** reddish-brown bromine water as addition across the double bond forms colorless dibromoalkane.
   - **Alkane:** Does **not** decolorize bromine water (remains reddish-brown in the dark).
2. **Baeyer's Test (Alkaline $\\text{KMnO}_4$ Solution):**
   - **Alkene/Alkyne:** Decolorizes pink/purple alkaline $\\text{KMnO}_4$ solution with formation of a brown $\\text{MnO}_2$ precipitate (forming glycols).
   - **Alkane:** No reaction; purple color persists.

---

## Exercise Solutions
- **MCQ 1:** General formula of alkenes is: **(c)** $\\text{C}_n\\text{H}_{2n}$.
- **MCQ 2:** Industrial hardening of vegetable oil involves: **(a)** Catalytic hydrogenation.
- **Short Question:** How can you chemically distinguish ethane from ethene?  
  *Answer:* Bubble both gases into separate test tubes containing bromine water. Ethene rapidly decolorizes the reddish-brown bromine water, while ethane produces no color change in the absence of sunlight.
"""

files_to_write = [
    ("Chapter_19_Nitrogen_and_Sulphur.md", ch19_content),
    ("Chapter_20_Water.md", ch20_content),
    ("Chapter_21_Organic_Chemistry.md", ch21_content),
    ("Chapter_22_Hydrocarbons.md", ch22_content)
]

for fname, text in files_to_write:
    fpath = os.path.join(out_dir, fname)
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(text.strip() + "\n")
    print(f"Generated {fname}: {len(text):,} bytes")
