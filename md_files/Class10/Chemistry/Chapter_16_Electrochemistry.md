# CHAPTER 16: ELECTROCHEMISTRY

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
1. Free elements (uncombined state) have an oxidation state of **0** (e.g., $\text{Na}, \text{O}_2, \text{Cl}_2, \text{Fe}$).
2. For simple monoatomic ions, oxidation state equals ionic charge (e.g., $\text{Na}^+ = +1, \text{Mg}^{2+} = +2, \text{Cl}^- = -1$).
3. Hydrogen is usually **$+1$** (except in metal hydrides like $\text{NaH}$, where it is $-1$).
4. Oxygen is usually **$-2$** (except in peroxides like $\text{H}_2\text{O}_2$, where it is $-1$, and in $\text{OF}_2$, where it is $+2$).
5. Group 1 metals are always **$+1$**; Group 2 metals are always **$+2$**; Fluorine is always **$-1$**.
6. The algebraic sum of oxidation numbers in a neutral compound is **$0$**; in a polyatomic ion, it equals the overall charge of the ion.

---

## 16.2 Electrochemical Cells

```
                  +-----------------------------------+
                  |       ELECTROCHEMICAL CELLS       |
                  +-----------------------------------+
                       /                         \
                      /                           \
          [ Electrolytic Cell ]           [ Galvanic / Voltaic Cell ]
          Consumes electrical energy      Generates electrical energy
          to drive non-spontaneous       from spontaneous redox reactions
          redox reactions (e.g. refining) (e.g. Daniell cell, batteries)
```

### Comparison: Electrolytic vs. Galvanic Cell
| Feature | Electrolytic Cell | Galvanic (Voltaic) Cell |
| :--- | :--- | :--- |
| **Energy Conversion** | Electrical $\to$ Chemical | Chemical $\to$ Electrical |
| **Spontaneity** | Non-spontaneous reaction | Spontaneous reaction |
| **Anode** | **Positive ($+$)**; Oxidation occurs | **Negative ($-$)**; Oxidation occurs |
| **Cathode** | **Negative ($-$)**; Reduction occurs | **Positive ($+$)**; Reduction occurs |
| **External Source** | Requires external battery/DC power | Acts as a power source |

---

## 16.3 The Daniell Cell

The **Daniell cell** is a classic galvanic cell consisting of:
- **Anode half-cell:** Zinc metal strip immersed in $1.0\text{ M } \text{ZnSO}_4$ solution.
- **Cathode half-cell:** Copper metal strip immersed in $1.0\text{ M } \text{CuSO}_4$ solution.
- **Salt Bridge:** An inverted U-tube filled with agar-agar gel and an inert electrolyte ($\text{KNO}_3$ or $\text{KCl}$) connecting both beakers to maintain electrical neutrality.

```
       Zn Anode (-)                                 Cu Cathode (+)
            |                                             |
            +------------ [ Voltmeter / Load ] -----------+
            |                                             |
     [ ZnSO4 solution ] <=== [ Salt Bridge (KNO3) ] ===> [ CuSO4 solution ]
```

### Half-Cell Reactions:
- **Anode (Oxidation):**
  $$\text{Zn}(s) \to \text{Zn}^{2+}(aq) + 2e^- \quad (E^\circ = +0.76\text{ V})$$
- **Cathode (Reduction):**
  $$\text{Cu}^{2+}(aq) + 2e^- \to \text{Cu}(s) \quad (E^\circ = +0.34\text{ V})$$
- **Overall Cell Reaction:**
  $$\text{Zn}(s) + \text{Cu}^{2+}(aq) \to \text{Zn}^{2+}(aq) + \text{Cu}(s)$$
- **Standard Cell Potential ($E^\circ_{\text{cell}}$):**
  $$E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = +0.34\text{ V} - (-0.76\text{ V}) = \mathbf{+1.10\text{ V}}$$

---

## 16.4 Industrial Electrolysis

1. **Electrolysis of Molten Lead(II) Bromide ($\text{PbBr}_2$):**
   - Cathode: $\text{Pb}^{2+} + 2e^- \to \text{Pb}(l)$ (Silvery lead metal deposited)
   - Anode: $2\text{Br}^- \to \text{Br}_2(g) + 2e^-$ (Reddish-brown bromine gas evolved)

2. **Electrolysis of Brine (Aqueous Concentrated $\text{NaCl}$ in Nelson's Cell):**
   - At Cathode: Water is reduced preferentially over $\text{Na}^+$:
     $$2\text{H}_2\text{O}(l) + 2e^- \to \text{H}_2(g) + 2\text{OH}^-(aq)$$
   - At Anode: Chloride ions oxidize:
     $$2\text{Cl}^-(aq) \to \text{Cl}_2(g) + 2e^-$$
   - Residual Solution: $\text{Na}^+$ and $\text{OH}^-$ ions combine to produce commercial **$\text{NaOH}$**.

---

## 16.5 Batteries and Fuel Cells

1. **Lead-Acid Storage Battery (Secondary Car Battery):**
   - Anode: Spongy Lead ($\text{Pb}$)
   - Cathode: Lead dioxide ($\text{PbO}_2$)
   - Electrolyte: $30\%$ aqueous $\text{H}_2\text{SO}_4$
   - Discharging reaction: $\text{Pb} + \text{PbO}_2 + 2\text{H}_2\text{SO}_4 \to 2\text{PbSO}_4 + 2\text{H}_2\text{O}$ ($E_{\text{cell}} \approx 2.0\text{ V}$ per cell; 6 cells in series produce $12\text{ V}$). Reversible upon recharging.

2. **Hydrogen-Oxygen Fuel Cell:**
   - Converts the chemical energy of hydrogen combustion directly into electrical energy with water as the only byproduct.
   - Anode: $2\text{H}_2(g) + 4\text{OH}^-(aq) \to 4\text{H}_2\text{O}(l) + 4e^-$
   - Cathode: $\text{O}_2(g) + 2\text{H}_2\text{O}(l) + 4e^- \to 4\text{OH}^-(aq)$
   - Overall: $2\text{H}_2(g) + \text{O}_2(g) \to 2\text{H}_2\text{O}(l)$ + Electrical Energy. High efficiency ($>70\%$) and zero pollution.

---

## 16.6 Corrosion of Metals and Rusting of Iron

**Corrosion** is the electrochemical deterioration of a metal due to reactions with environmental moisture and oxygen. **Rusting** specifically refers to the corrosion of iron.

### Electrochemical Mechanism of Rusting:
1. Iron acts as an **anodic region**:
   $$\text{Fe}(s) \to \text{Fe}^{2+}(aq) + 2e^-$$
2. Released electrons travel through metallic iron to an adjacent surface with water and dissolved oxygen, which acts as a **cathodic region**:
   $$\text{O}_2(g) + 4\text{H}^+(aq) + 4e^- \to 2\text{H}_2\text{O}(l)$$
3. $\text{Fe}^{2+}$ ions further oxidize and combine with oxygen to precipitate hydrated iron(III) oxide (**rust**):
   $$4\text{Fe}^{2+}(aq) + \text{O}_2(g) + (4+2x)\text{H}_2\text{O}(l) \to 2\text{Fe}_2\text{O}_3 \cdot x\text{H}_2\text{O}(s) + 8\text{H}^+(aq)$$

### Prevention of Rusting:
1. **Barrier Protection:** Painting, greasing, or coating with plastic to block air and moisture.
2. **Galvanizing:** Coating iron with a thin layer of **zinc**. Zinc is more reactive than iron ($E^\circ_{\text{Zn}^{2+}/\text{Zn}} = -0.76\text{ V}$ vs $E^\circ_{\text{Fe}^{2+}/\text{Fe}} = -0.44\text{ V}$); it oxidizes first to form an impermeable $\text{ZnCO}_3$ layer and provides sacrificial protection even if scratched.
3. **Cathodic / Sacrificial Protection:** Attaching reactive sacrificial metal blocks (magnesium or zinc) to underground steel pipelines or ship hulls.
4. **Electroplating:** Electrolytic deposition of a protective layer of tin, nickel, or chromium onto iron objects.

---

## Exercise Solutions

### Section A: Multiple Choice Questions (MCQs)
1. **The oxidation state of sulphur in $\text{H}_2\text{SO}_4$ is:**  
   *(a) $+4$ (b) $+6$ (c) $-2$ (d) $+2$*  
   **Answer:** **(b)** $+6$ *(Calculation: $2(+1) + S + 4(-2) = 0 \implies S = +6$)*.
2. **In an electrolytic cell, oxidation always takes place at:**  
   *(a) Cathode (b) Anode (c) Salt bridge (d) Battery terminal*  
   **Answer:** **(b)** Anode *(Anode is always the electrode where oxidation occurs in all electrochemical cells)*.
3. **Which of the following acts as the sacrificial anode to protect iron ship hulls?**  
   *(a) Copper (b) Lead (c) Zinc or Magnesium (d) Silver*  
   **Answer:** **(c)** Zinc or Magnesium *(More electropositive than iron)*.
4. **The voltage produced by a single standard Daniell cell is:**  
   *(a) $1.5\text{ V}$ (b) $1.1\text{ V}$ (c) $2.0\text{ V}$ (d) $0.76\text{ V}$*  
   **Answer:** **(b)** $1.1\text{ V}$.

---

### Section B: Short & Constructed Questions
- **16.1 What is the role of a salt bridge in a galvanic cell?**  
  *Answer:* The salt bridge completes the electrical circuit by allowing migration of ions between half-cells while preventing mechanical mixing of the two electrolyte solutions, preventing charge buildup.
- **16.2 Why does zinc protect iron from rusting even when the surface coating is scratched?**  
  *Answer:* Zinc is more electropositive than iron. Even when exposed, zinc sacrifices itself and oxidizes preferentially ($\text{Zn} \to \text{Zn}^{2+} + 2e^-$), pumping electrons into iron and maintaining iron in its cathodic (reduced) metallic state.
