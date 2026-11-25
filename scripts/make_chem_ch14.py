# -*- coding: utf-8 -*-
"""Generator for Chemistry Chapter 14: States of Matter and Phase Changes"""
import os

content = """# CHAPTER 14: STATES OF MATTER AND PHASE CHANGES

---

## Student Learning Outcomes (SLOs)
After studying this chapter, students will be able to:
1. Explain changes of state and internal energy with change in temperature (melting, boiling, freezing, condensation, sublimation and deposition) in terms of kinetic particle theory.
2. Distinguish between evaporation and boiling.
3. Interpret heating and cooling curves in terms of kinetic theory.
4. Interpret in terms of kinetic particle theory the effects of changing pressure, temperature and volume of a gas on the other two with regards to Boyle's law, Charles' law, and Avogadro's law.
5. Explain qualitatively the effect of external pressure on the rate of boiling and evaporation.
6. Explain diffusion of gases in terms of kinetic particle theory.
7. Examine qualitatively the effect of molecular mass and temperature on the rate of diffusion.
8. Discuss applications of sublimation around us (e.g. solid air fresheners and 3D printing).
9. Explain, with the help of kinetic particle theory, the importance of rates of diffusion of medicines in the body.

---

## Introduction to Kinetic Particle Theory

Matter exists in four physical states: **solid**, **liquid**, **gas**, and **plasma**. Historically, the properties of gases were investigated first because gases expand to fill containers and compress easily. These macroscopic observations suggested that gases consist of tiny particles in continuous, rapid, and random motion—an insight that led to the development of the **Kinetic Particle Theory**.

Kinetic particle theory explains the laws governing the behavior of gases, the structure of liquids and solids, and the interconversions between physical states. Because all three common states of a substance (solid, liquid, gas) differ only in their physical arrangement and energy—while their chemical identity remains identical (e.g., ice, liquid water, and steam are all $\\text{H}_2\\text{O}$)—the kinetic particle model provides a unified microscopic foundation for matter.

### 1. The Gaseous State
- Composed of particles (atoms or molecules) in a continuous state of rapid, random motion in all directions.
- Particles are separated by distances much greater than their own dimensions; intermolecular attractive forces are negligible at ordinary conditions.
- Gas pressure arises from continuous elastic collisions of gas particles against the walls of the container.
- Collisions between particles and with container walls involve no net loss of kinetic energy (perfectly elastic).
- The average kinetic energy of the particles is directly proportional to the absolute temperature on the Kelvin scale:
  $$\\langle\\text{K.E.}\\rangle \\propto T$$
  At the same temperature, particles of all gases possess the same average translational kinetic energy.

### 2. The Liquid State
- Particles are closely packed together, with negligible empty space between them.
- Attractive intermolecular forces are sufficiently strong to keep the particles clustered together, giving a liquid a **fixed volume**.
- However, the forces are not strong enough to lock particles into fixed positions. Particles slide past one another in random directions, allowing liquids to **flow and assume the shape of the container**.
- Particles in a liquid exhibit translational, rotational, and vibrational motions.

### 3. The Solid State
- Composed of atoms, ions, or molecules packed in an orderly, rigid arrangement.
- Inter-particle forces are extremely strong, locking particles into fixed positions.
- Particles cannot undergo translational or rotational motion; they can only **vibrate about their fixed mean positions**.
- Consequently, solids have a **definite shape and fixed volume**.

> **Things to Know:**
> Molecules present in gases and liquids exhibit all three types of movements simultaneously: translational, rotational, and vibrational. In contrast, particles in solids possess vibrational motion only.

---

## 14.1 Quick Check!

1. **What is translational motion?**  
   *Answer:* Translational motion is the motion of a particle or body through space from one point to another along a straight or curved path, changing its position relative to a reference point.
2. **Is the average kinetic energy possessed by the particles of a gas and a liquid the same at the same temperature?**  
   *Answer:* Yes. Absolute temperature is a direct measure of the average translational kinetic energy of particles. At the same temperature, particles of gases and liquids have the same average kinetic energy ($\\langle\\text{K.E.}\\rangle = \\frac{3}{2}kT$).

---

## 14.2 Internal Energy and Phase Changes

The **internal energy** of a substance is the total microscopic energy it contains:
$$\\text{Internal Energy} = \\sum (\\text{Kinetic Energy}) + \\sum (\\text{Potential Energy})$$
- **Kinetic Energy:** Arises from molecular motions (vibrational, rotational, translational) and is determined by temperature.
- **Potential Energy:** Arises from the attractive forces and chemical bonds holding particles together.

When heat is added to a substance, it increases its internal energy. This energy can either increase the kinetic energy of the particles (causing a rise in temperature) or overcome intermolecular attractive forces (causing a change of physical state at constant temperature).

---

## 14.3 Interconversion of Physical States

```
                 Sublimation (Heat absorbed)
        +--------------------------------------------->+
        |                                             |
     [ SOLID ] <=========> [ LIQUID ] <=========> [ GAS ]
        |       Melting        |       Boiling        |
        |       Freezing       |     Condensation     |
        +<---------------------------------------------+
                  Deposition (Heat released)
```

### 1. Melting (Solid $\\to$ Liquid)
When a solid is heated below its melting point, absorbed heat increases the vibrational kinetic energy and temperature of its particles. At the **melting point**, the vibrations become so vigorous that they overcome the cohesive lattice forces. The fixed crystalline arrangement collapses, and the solid turns into a liquid.
- **Latent Heat:** As long as melting occurs, further heating does **not** increase the temperature. The supplied heat is converted entirely into potential energy to break intermolecular bonds until melting is complete.

### 2. Freezing (Liquid $\\to$ Solid)
When a liquid is cooled, particles lose kinetic energy and move more slowly. At the **freezing point**, attractive forces pull the slow-moving particles into fixed lattice positions. The temperature remains constant during freezing as latent heat of fusion is released.

### 3. Evaporation (Liquid $\\to$ Gas)
Molecules in a liquid possess a distribution of kinetic energies. At any temperature, molecules at the liquid surface with higher-than-average kinetic energy overcome intermolecular attractions and escape into the vapor phase.
- Evaporation occurs at **all temperatures**.
- Because high-energy molecules escape, the average kinetic energy of the remaining liquid drops, causing **cooling**.

### 4. Boiling (Liquid $\\to$ Gas)
When a liquid is heated, its vapor pressure increases. When the vapor pressure equals the external atmospheric pressure, bubbles of vapor form throughout the interior of the liquid and rise to the surface.
- The temperature at which the vapor pressure of a liquid equals the external pressure is called its **boiling point**.
- For pure water at $1\\text{ atm}$ ($760\\text{ mmHg}$), the normal boiling point is **$100^\\circ\\text{C}$**.

### 5. Condensation (Gas $\\to$ Liquid)
When gas molecules are cooled, their kinetic energy decreases. When gas molecules collide, attractive forces draw them together to form liquid droplets. Condensation is an **exothermic** process (releases latent heat).

### 6. Sublimation (Solid $\\to$ Gas)
The direct transition of a solid into a gas without passing through the intermediate liquid state upon heating. Examples: **dry ice (solid $\\text{CO}_2$)**, **iodine**, **naphthalene (mothballs)**, and **ammonium chloride**.

### 7. Deposition (Gas $\\to$ Solid)
The reverse process of sublimation, in which a gas transforms directly into a solid without becoming a liquid. Example: formation of **frost** on cold ground or windshields on winter mornings.

---

## 14.4 Heating and Cooling Curves

A **heating curve** is a plot of temperature versus time as a substance is heated at a constant rate.

```
  Temperature (°C)
        ^
    120 |                                   / Steam (Gas heating)
    100 |                     D============E (Boiling: Liquid + Gas, T = const)
        |                    / Liquid heating
      0 |        B==========C (Melting: Solid + Liquid, T = const)
    -20 |       / Ice (Solid heating)
        +----------------------------------------> Time (Heat added)
```

### Interpretation of Heating Curve for Water:
1. **$A \\to B$ (Heating of Ice):** Temperature rises from $-20^\\circ\\text{C}$ to $0^\\circ\\text{C}$. Kinetic energy of ice molecules increases.
2. **$B \\to C$ (Melting Plateau):** At $0^\\circ\\text{C}$, temperature remains strictly constant. Heat added is the **latent heat of fusion**, used to break hydrogen bonds in ice. Both solid ice and liquid water coexist.
3. **$C \\to D$ (Heating of Water):** Temperature rises from $0^\\circ\\text{C}$ to $100^\\circ\\text{C}$. Kinetic energy of liquid water molecules increases.
4. **$D \\to E$ (Boiling Plateau):** At $100^\\circ\\text{C}$, temperature remains constant. Heat added is the **latent heat of vaporization**, used to separate liquid molecules completely into steam. Both liquid and vapor coexist.
5. **$E \\to F$ (Heating of Steam):** Above $100^\\circ\\text{C}$, temperature rises as steam absorbs heat.

A **cooling curve** follows the exact reverse path, displaying condensation and freezing plateaus at $100^\\circ\\text{C}$ and $0^\\circ\\text{C}$, respectively.

---

## 14.5 Evaporation vs. Boiling

| Feature | Evaporation | Boiling |
| :--- | :--- | :--- |
| **Location** | Occurs only at the **surface** of the liquid. | Occurs throughout the **entire bulk** of the liquid (bubbles form within). |
| **Temperature** | Occurs spontaneously at **all temperatures**. | Occurs only at a specific, fixed temperature (**boiling point**). |
| **Bubble Formation** | **No bubbles** are formed. | **Bubbles form** actively inside the liquid. |
| **Thermal Effect** | Causes **cooling** of the remaining liquid. | Temperature remains **constant** during boiling. |
| **Energy Source** | Absorbs ambient thermal energy from surroundings. | Requires continuous external heat supply. |
| **Rate** | Relatively slow process. | Rapid and vigorous process. |

---

## 14.6 Effect of External Pressure on Evaporation and Boiling

### 1. Effect on Boiling Point
Boiling occurs when the liquid's vapor pressure equals the external atmospheric pressure:
- **Increased External Pressure:** At higher pressure, liquid molecules require greater kinetic energy (higher temperature) for their vapor pressure to match the external pressure. Thus, **boiling point increases**.  
  *Application:* In a **pressure cooker**, steam pressure rises to about $2\\text{ atm}$, elevating water's boiling point to approximately $120^\\circ\\text{C}$. Food cooks much faster because it absorbs heat at a higher temperature.
- **Decreased External Pressure:** At high altitudes (e.g., Mount Everest or Murree), atmospheric pressure is significantly lower than $1\\text{ atm}$. Water boils at a **lower temperature** ($98^\\circ\\text{C}$ at Murree, $70^\\circ\\text{C}$ on Mount Everest). Cooking food takes longer at high altitudes unless a pressure cooker is used.

### 2. Effect on Evaporation
Higher atmospheric pressure exerts a downward force on the liquid surface, making it harder for escaping molecules to leave. Lower external pressure facilitates faster molecular escape, **increasing the rate of evaporation**.

---

## 14.7 Kinetic Theory and the Gas Laws

### 1. Boyle's Law ($P \\propto \\frac{1}{V}$ at constant $T$)
- When the volume of a container is decreased at constant temperature, the gas particles are confined to a smaller space.
- Because molecular speed is constant ($T = \\text{const}$), the particles strike the container walls more frequently per unit area.
- More frequent collisions result in higher momentum transfer per second per unit area, increasing the **gas pressure**.

### 2. Charles's Law ($V \\propto T$ at constant $P$)
- When temperature increases, particles gain kinetic energy and move at higher average speeds.
- If volume were kept constant, collisions would become more frequent and violent, increasing pressure.
- To keep the **pressure constant**, the gas must expand, increasing volume to reduce collision frequency per unit area. Hence, $V$ increases proportionally with $T$.

### 3. Avogadro's Law ($V \\propto n$ at constant $T$ and $P$)
- Equal volumes of all gases at the same temperature and pressure contain equal numbers of molecules.
- At room temperature and pressure (RTP: $25^\\circ\\text{C}$, $1\\text{ atm}$), $1\\text{ mole}$ of any gas occupies **$24\\text{ dm}^3$** (Molar Volume).

---

## 14.8 Diffusion of Gases

**Diffusion** is the spontaneous mixing of gas particles due to their continuous, random motion from a region of higher concentration to a region of lower concentration until uniform distribution is achieved.

### Graham's Law of Diffusion
The rate of diffusion of a gas is inversely proportional to the square root of its molecular mass (or density):
$$\\text{Rate of Diffusion} \\propto \\frac{1}{\\sqrt{M}}$$

- **Effect of Molecular Mass:** Lighter gas molecules move with higher average speeds than heavier molecules at the same temperature:
  $$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$$
  Therefore, **lighter gases diffuse faster than heavier gases**.
  *Example:* Ammonia ($\\text{NH}_3$, $M = 17\\text{ g/mol}$) diffuses faster than hydrogen chloride ($\\text{HCl}$, $M = 36.5\\text{ g/mol}$). When cotton plugs soaked in concentrated $\\text{NH}_3$ and $\\text{HCl}$ are placed at opposite ends of a $100\\text{ cm}$ glass tube, a dense white ring of ammonium chloride ($\\text{NH}_4\\text{Cl}$) forms closer to the $\\text{HCl}$ end (approximately $60\\text{ cm}$ from the $\\text{NH}_3$ end and $40\\text{ cm}$ from the $\\text{HCl}$ end).
- **Effect of Temperature:** Higher temperature increases molecular kinetic energy and speed, **increasing the rate of diffusion**.

---

## 14.9 Applications of Sublimation and Diffusion

### Applications of Sublimation
1. **Solid Air Fresheners:** Solid gels or blocks sublime slowly into pleasant-smelling vapors at room temperature without leaving messy liquid residues.
2. **Dye-Sublimation 3D Printing:** Solid dye ribbons sublime directly into gas under heat, penetrating synthetic polymers and fabric fibers to create durable, high-resolution graphics.
3. **Purification of Chemicals:** Mixtures of volatile solids (such as iodine or naphthalene) with non-volatile impurities are purified by heating; the sublimed vapor condenses directly into pure crystals on a cold surface.

### Diffusion of Medicines in the Human Body
The therapeutic effectiveness of drugs depends directly on diffusion rates:
1. **Absorption:** Orally administered medicines dissolve in gastric fluids and diffuse across mucosal membranes of the stomach and small intestine into the bloodstream. Faster diffusion ensures quicker therapeutic onset.
2. **Distribution:** Blood delivers dissolved drug molecules to capillaries, where they diffuse across endothelial membranes into target tissues. Small, lipid-soluble molecules diffuse rapidly through cellular lipid bilayers.
3. **Elimination:** Waste drug metabolites diffuse from tissues into the bloodstream and are filtered by kidneys or liver for excretion.

---

## Exercise Solutions

### Section A: Multiple Choice Questions (MCQs)

1. **According to kinetic theory, the particles of a gas:**  
   *(a) move randomly in all directions*  
   *(b) move in straight lines without colliding*  
   *(c) are locked in fixed positions*  
   *(d) attract each other strongly*  
   **Answer:** **(a)** move randomly in all directions.

2. **At constant temperature, decreasing the volume of a gas increases its pressure because:**  
   *(a) particles expand in size*  
   *(b) particles collide with walls more frequently*  
   *(c) particles move faster*  
   *(d) intermolecular forces increase*  
   **Answer:** **(b)** particles collide with walls more frequently.

3. **During a change of state (e.g. melting), the temperature remains constant because:**  
   *(a) no heat is being supplied*  
   *(b) heat energy is used to overcome intermolecular forces*  
   *(c) kinetic energy increases while potential energy decreases*  
   *(d) particles stop moving*  
   **Answer:** **(b)** heat energy is used to overcome intermolecular forces.

4. **Cooling the vapours of some gases change them directly into solid state. This phenomenon is called:**  
   *(a) evaporation*  
   *(b) condensation*  
   *(c) sublimation*  
   *(d) deposition*  
   **Answer:** **(d)** deposition.

5. **Physical state in which the particles possess the maximum energy:**  
   *(a) Solid*  
   *(b) Liquid*  
   *(c) Gaseous*  
   *(d) Vapour*  
   **Answer:** **(c)** Gaseous *(or plasma if included; among conventional states, gaseous particles possess the greatest kinetic and internal energy)*.

6. **How does the process of evaporation depend on the force of attraction present among the molecules of a liquid?**  
   *(a) It decreases with the increasing strength of attraction.*  
   *(b) It increases with the increasing strength of attraction.*  
   *(c) It is independent of the strength of the force of attraction.*  
   *(d) It first increases and then decreases with the increasing strength of the force of attraction.*  
   **Answer:** **(a)** It decreases with the increasing strength of attraction. *(Strong intermolecular attractions hold molecules tightly, reducing the rate of escape)*.

7. **Which gas will diffuse at the fastest rate?**  
   *(a) $\\text{HCl}$ ($M = 36.5$)*  
   *(b) $\\text{SO}_2$ ($M = 64$)*  
   *(c) $\\text{H}_2\\text{S}$ ($M = 34$)*  
   *(d) $\\text{CO}_2$ ($M = 44$)*  
   **Answer:** **(c)** $\\text{H}_2\\text{S}$. *(Has the lowest molar mass of $34\\text{ g/mol}$; by Graham's law, lighter gases diffuse fastest)*.

8. **The phase changes A and B in $\\text{gas} \\xrightarrow{A} \\text{liquid} \\xrightarrow{B} \\text{solid}$ are:**  
   *(a) Melting, evaporating*  
   *(b) Condensation, melting*  
   *(c) Condensation, freezing*  
   *(d) Boiling, freezing*  
   **Answer:** **(c)** Condensation, freezing.

9. **A student noticed frost falling on the ground at 6:30 am and disappearing by 8:30 am. Which phase change was responsible for changing the frost into water vapours?**  
   *(a) Melting*  
   *(b) Evaporation*  
   *(c) Sublimation*  
   *(d) Deposition*  
   **Answer:** **(c)** Sublimation *(direct transition of solid ice crystals into water vapor)*.

---

### Section B: Short Answer Questions

#### 14.1 From where does the energy come when a liquid evaporates?
**Answer:**  
When a liquid evaporates, the escaping molecules absorb thermal energy from the remaining liquid molecules and the immediate surroundings. Because the highest-kinetic-energy molecules escape, the average kinetic energy of the liquid drops, drawing heat from the surrounding environment (which is why evaporation causes cooling).

#### 14.2 Is condensation an endothermic process?
**Answer:**  
**No, condensation is an exothermic process.** When gaseous molecules lose thermal energy and coalesce into the liquid state, latent heat of vaporization is released to the surroundings as intermolecular attractive bonds form.

#### 14.3 Why do naphthalene balls (used to repel insects) disappear after some time?
**Answer:**  
Naphthalene has very weak intermolecular van der Waals forces and high vapor pressure at room temperature. It undergoes **sublimation**, slowly transforming directly from solid crystals into vapor without melting into a liquid, until the balls disappear completely.

#### 14.4 Why does the temperature remain constant during a phase change?
**Answer:**  
During a phase change, heat supplied to (or removed from) the substance is used exclusively as **latent heat** to alter the potential energy—either breaking intermolecular attractions (during melting/boiling) or allowing attractive forces to establish bonds (during freezing/condensation). Because the average kinetic energy of the particles does not change during this transition, the temperature remains strictly constant.

#### 14.5 Is it possible to compress a liquid like a gas?
**Answer:**  
**No.** In liquids, particles are already closely packed with virtually no empty spaces between them. Extremely strong electrostatic repulsive forces resist any further compression. In gases, particles are separated by vast intermolecular spaces, allowing them to be compressed easily.

#### 14.6 Can you change the temperature at which water boils in an experiment in your lab?
**Answer:**  
**Yes.** The boiling point of water depends on external atmospheric pressure:
- Increasing external pressure (e.g., using a sealed container or pressure vessel) raises the boiling point above $100^\\circ\\text{C}$.
- Reducing external pressure (e.g., placing water under a bell jar connected to a vacuum pump) lowers the boiling point, allowing water to boil even at room temperature ($25^\\circ\\text{C}$).

#### 14.7 In which season do wet clothes dry after a relatively longer time?
**Answer:**  
Wet clothes take longer to dry during the **monsoon / rainy winter season**. In this season, ambient air has very high relative humidity (air is already saturated with water vapor), which severely retards the net rate of evaporation of water from clothing fibers.

#### 14.8 When a solid is heated, what happens to its particles which are vibrating?
**Answer:**  
Heating supplies thermal energy that increases the vibrational kinetic energy of the particles. They oscillate faster and with larger amplitudes about their fixed lattice positions. When the temperature reaches the melting point, the oscillations become vigorous enough to overcome the attractive lattice forces, causing the solid structure to collapse into a liquid.

#### 14.9 Do solids and liquids also diffuse just like gases?
**Answer:**  
**Yes**, but at significantly slower rates:
- **Liquids:** Diffuse relatively slowly because particles are close together and experience frequent collisions with neighbors (e.g., a drop of ink diffusing through water takes several minutes).
- **Solids:** Diffusion is exceedingly slow and imperceptible under normal conditions because particles are locked into fixed positions, occurring only at boundaries over months or years.

#### 14.10 Why is dew formed in the early hours of the morning?
**Answer:**  
During clear nights, Earth's surface cools rapidly by radiating infrared heat into space. In the early morning, air near the ground cools below its **dew point** (the temperature at which air becomes saturated with moisture). Water vapor in the air condenses onto cold blades of grass, leaves, and car windshields as liquid droplets of dew.

---

### Section C: Constructed Response Questions

#### 14.1 Differentiate between evaporation and boiling.
**Answer:**  
*(See detailed comparative table in Section 14.5: Evaporation occurs at the surface at any temperature without bubbles, producing cooling; boiling occurs throughout the bulk liquid at a fixed boiling point with bubble formation at constant temperature).*

#### 14.2 Describe how boiling is related to external pressure.
**Answer:**  
Boiling occurs when the vapor pressure of a liquid equals the external atmospheric pressure:
- If external pressure is **increased** (as in a pressure cooker), water vapor bubbles cannot expand and escape until higher thermal energy is supplied, raising the boiling point (up to $120^\\circ\\text{C}$).
- If external pressure is **decreased** (as at high altitudes), bubbles can expand and escape at lower thermal energy, lowering the boiling point ($98^\\circ\\text{C}$ in Murree, $70^\\circ\\text{C}$ at Mount Everest).

#### 14.3 Why does the process of evaporation not need the input of external energy?
**Answer:**  
Evaporation does not require an external heat source because it utilizes the **internal thermal energy already distributed among liquid molecules**. Due to random Maxwell-Boltzmann energy distributions, some surface molecules naturally possess kinetic energies significantly above the average, allowing them to overcome intermolecular attractions and escape.

#### 14.4 Why do heating and cooling curves for phase changes adopt the same path?
**Answer:**  
The heating and cooling curves are exact thermodynamic mirror images of each other because the energies involved in phase transitions are identical:
- Melting occurs at the same temperature as freezing (e.g., $0^\\circ\\text{C}$ for pure water).
- Boiling occurs at the same temperature as condensation (e.g., $100^\\circ\\text{C}$ for pure water).
The magnitude of latent heat absorbed during melting/boiling precisely equals the latent heat released during freezing/condensation.

#### 14.5 Why does ice melt when pressure is exerted on it?
**Answer:**  
Ice has an unusual open crystalline structure held by hydrogen bonds, making its density lower than liquid water (water expands upon freezing). When external pressure is applied to ice, Le Chatelier's principle drives the system toward the state of smaller volume (denser liquid water). Pressure lowers the melting point of ice below $0^\\circ\\text{C}$, causing it to melt. Once pressure is released, it refreezes (**regelation**).

#### 14.6 Why do phase changes occur?
**Answer:**  
Phase changes occur due to a continuous competition between two fundamental physical factors:
1. **Kinetic Energy of Particles (Thermal Energy):** Tends to keep particles moving and disperse them apart.
2. **Intermolecular Attractive Forces:** Tends to bind particles together into an ordered condensed phase.  
When temperature or pressure changes, one factor overcomes the other, transitioning matter between solid, liquid, and gaseous arrangements.

---

### Section D: Descriptive Questions

#### 14.1 Explain the difference in the rates of diffusion of two gases based on kinetic theory.
**Answer:**  
According to kinetic theory, at the same temperature $T$, all gases have the same average translational kinetic energy:
$$\\frac{1}{2} m_1 \\langle v_1^2 \\rangle = \\frac{1}{2} m_2 \\langle v_2^2 \\rangle$$
Rearranging for root-mean-square speeds:
$$\\frac{v_1}{v_2} = \\sqrt{\\frac{m_2}{m_1}} = \\sqrt{\\frac{M_2}{M_1}}$$
Because the rate of diffusion depends directly upon molecular velocity, the rate of diffusion of gas 1 relative to gas 2 is inversely proportional to the square roots of their molecular masses (Graham's Law):
$$\\frac{\\text{Rate}_1}{\\text{Rate}_2} = \\sqrt{\\frac{M_2}{M_1}}$$
Lighter gas molecules (like $\\text{NH}_3$, $17\\text{ g/mol}$) possess higher velocities and diffuse significantly faster than heavier molecules (like $\\text{HCl}$, $36.5\\text{ g/mol}$) at the same temperature.

#### 14.2 How is the process of sublimation helpful in printing and in the usage of air fresheners?
**Answer:**  
1. **Dye-Sublimation Printing:** Solid pigments coated on a ribbon are selectively heated by a print head. The dye sublimes directly into gas without liquifying, penetrating polyester fabric or polymer coatings where it solidifies as vibrant, waterproof, scratch-resistant photographic images.
2. **Solid Air Fresheners:** Blocks or gels of aromatic organic compounds sublime steadily into vapor at ambient room temperatures, diffusing pleasant fragrances uniformly without leaving sticky liquid residues.

#### 14.3 Draw and describe the heating curve for the physical changes water undergoes with change in temperature.
**Answer:**  
*(See comprehensive diagram and segment-by-segment analysis in Section 14.4)*.
"""

os.makedirs("Class10/Chemistry", exist_ok=True)
with open("Class10/Chemistry/Chapter_14_States_of_Matter_and_Phase_Changes.md", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated Chapter 14 ({len(content)} bytes)")
