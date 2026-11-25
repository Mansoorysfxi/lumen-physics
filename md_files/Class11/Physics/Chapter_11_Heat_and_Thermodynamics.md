# CHAPTER 11: HEAT AND THERMODYNAMICS

---

## Learning Objectives
At the end of this chapter the students will be able to:
1. State the basic postulates of the Kinetic theory of gases.
2. Explain how molecular movement causes the pressure exerted by a gas and derive the equation $P = \frac{2}{3} N_0 \langle \frac{1}{2}mv^2 \rangle$, where $N_0$ is the number of molecules per unit volume of the gas.
3. Deduce that the average translational kinetic energy of molecules is proportional to the absolute temperature of the gas.
4. Derive gas laws on the basis of Kinetic theory.
5. Describe that the internal energy of an ideal gas is due to the kinetic energy of its molecules.
6. Understand and use the terms work and heat in thermodynamics.
7. Differentiate between isothermal and adiabatic processes.
8. Explain the molar specific heats of a gas.
9. Apply the first law of thermodynamics to derive $C_p - C_v = R$.
10. Explain the second law of thermodynamics and its meaning in terms of entropy.
11. Understand the concept of reversible and irreversible processes.
12. Define the term heat engine.
13. Understand and describe Carnot's theorem.
14. Describe the thermodynamic scale of temperature.
15. Describe the working of petrol and diesel engines.
16. Explain the term entropy.
17. Explain that change in entropy $\Delta S = \pm \frac{\Delta Q}{T}$.
18. Appreciate environmental crisis as an entropy crisis.

---

## Introduction

Thermodynamics is the branch of physics that deals with the relationships between heat, work, temperature, and energy, especially the transformation of thermal energy into mechanical work. Thermodynamics plays a foundational role in modern technology, engineering, and power generation, as almost all raw energy available for human use is liberated in the form of heat (from fossil fuels, nuclear reactions, or solar radiation).

In this chapter, we develop a microscopic understanding of gases through the kinetic theory, establish the macroscopic laws of thermodynamics (First and Second Laws), analyze heat engines (such as the Carnot engine, petrol engine, and diesel engine), and explore the fundamental concept of entropy and its profound connection to the global environmental crisis.

---

## 11.1 Kinetic Theory of Gases

The behavior of gases is successfully accounted for by the **kinetic theory of gases**, which adopts a microscopic approach to explain macroscopic properties such as pressure, temperature, and volume in terms of molecular motions. Observational evidence supporting the kinetic molecular model includes the phenomenon of **gaseous diffusion** and the **Brownian motion** of smoke particles suspended in air.

### Basic Postulates of the Kinetic Theory
The mathematical model of an ideal gas is based upon the following fundamental postulates:
1. A finite volume of gas consists of a **very large number of molecules**.
2. The **size of the gas molecules is much smaller** than the average separation between them (the volume of the molecules themselves is negligible compared to the total volume occupied by the gas).
3. The gas molecules are in continuous, chaotic **random motion** in all directions and frequently change their directions of motion after collisions.
4. Collisions between gas molecules themselves and with the walls of the container are assumed to be **perfectly elastic** (kinetic energy and momentum are conserved).
5. Molecules **exert no intermolecular forces** on each other except during the brief instant of a collision.
6. Gravitational effects on the motion of molecules are negligibly small.

---

### Microscopic Derivation of Gas Pressure

According to the kinetic theory, the pressure exerted by a gas on the walls of its container is simply the result of continuous, elastic collisions of billions of gas molecules transferring momentum to the walls per unit area per second.

```
          Z
          |     Face ABCDA (x = l)
          |       +--------+
          |      /        /|
          |     +--------+ |
          |     |        | |  Area = l^2
          |     |  * --> | |  vx1
          |     |   m    | |
          |     +--------+ /
          |     |________|/
          +------------------- X
         /      <--- l --->
        /
       Y
```

Consider a cubical container of side $l$ and volume $V = l^3$ containing $N$ identical gas molecules, each of mass $m$. 
Let the velocity $\vec{v}_1$ of an arbitrary molecule $1$ have components $(v_{1x}, v_{1y}, v_{1z})$ along the $x, y, z$ axes:
$$v_1^2 = v_{1x}^2 + v_{1y}^2 + v_{1z}^2$$

1. **Change in Momentum per Collision:**
   - Consider the collision of molecule $1$ with the container face $ABCDA$ perpendicular to the $x$-axis.
   - Initial momentum before collision: $p_{ix} = m v_{1x}$
   - Because the collision is perfectly elastic, the molecule rebounds with velocity $-v_{1x}$.
   - Final momentum after collision: $p_{fx} = -m v_{1x}$
   - Change in momentum of the molecule:
     $$\Delta p_x = p_{fx} - p_{ix} = -m v_{1x} - m v_{1x} = -2 m v_{1x}$$
   - Momentum transferred to the wall face $ABCDA$:
     $$\Delta p_{\text{wall}} = +2 m v_{1x}$$

2. **Time Between Collisions:**
   - After rebounding from face $ABCDA$, the molecule travels across the container to the opposite face $EFGH$, collides, rebounds, and travels back to face $ABCDA$, covering a round-trip distance of $2l$.
   - The time interval $\Delta t$ between two successive collisions with face $ABCDA$ is:
     $$\Delta t = \frac{2l}{v_{1x}}$$
   - Frequency of collisions per second with face $ABCDA$:
     $$f = \frac{1}{\Delta t} = \frac{v_{1x}}{2l}$$

3. **Force Exerted by Molecule 1 on Face $ABCDA$:**
   By Newton's second law of motion, the average force $F_{1x}$ exerted by molecule 1 is:
   $$F_{1x} = \frac{\Delta p_{\text{wall}}}{\Delta t} = \frac{2 m v_{1x}}{\frac{2l}{v_{1x}}} = \frac{m v_{1x}^2}{l}$$

4. **Total Force on Face $ABCDA$ due to all $N$ Molecules:**
   The total force $F_x$ exerted on the face is the sum of the forces exerted by all $N$ molecules:
   $$F_x = F_{1x} + F_{2x} + \dots + F_{Nx} = \frac{m}{l} \left(v_{1x}^2 + v_{2x}^2 + \dots + v_{Nx}^2\right)$$

5. **Pressure on Face $ABCDA$ ($P_x$):**
   Pressure is defined as the perpendicular force per unit area ($A = l^2$):
   $$P_x = \frac{F_x}{l^2} = \frac{m}{l^3} \left(v_{1x}^2 + v_{2x}^2 + \dots + v_{Nx}^2\right)$$
   Since the volume of the cube is $V = l^3$:
   $$P_x = \frac{m}{V} \sum_{i=1}^N v_{ix}^2 = \frac{m N}{V} \left(\frac{v_{1x}^2 + v_{2x}^2 + \dots + v_{Nx}^2}{N}\right)$$

   Where:
   - $\rho = \frac{mN}{V}$ is the mass density of the gas.
   - $\langle v_x^2 \rangle = \frac{1}{N} \sum_{i=1}^N v_{ix}^2$ is the **mean square velocity** along the $x$-axis.

   Therefore:
   $$P_x = \rho \langle v_x^2 \rangle$$

6. **Isotropy of Molecular Motion:**
   Because the molecules move randomly in all directions without any preferred orientation:
   $$\langle v_x^2 \rangle = \langle v_y^2 \rangle = \langle v_z^2 \rangle$$
   The total mean square velocity $\langle v^2 \rangle$ is:
   $$\langle v^2 \rangle = \langle v_x^2 \rangle + \langle v_y^2 \rangle + \langle v_z^2 \rangle = 3 \langle v_x^2 \rangle \implies \langle v_x^2 \rangle = \frac{1}{3} \langle v^2 \rangle$$

   Substituting this into the pressure expression:
   $$P = \frac{1}{3} \rho \langle v^2 \rangle$$

7. **Pressure in Terms of Kinetic Energy:**
   Substituting $\rho = \frac{mN}{V} = m N_0$ (where $N_0 = \frac{N}{V}$ is the number density of molecules):
   $$P = \frac{1}{3} \left(\frac{N}{V}\right) m \langle v^2 \rangle = \frac{2}{3} \left(\frac{N}{V}\right) \left\langle \frac{1}{2} m v^2 \right\rangle$$
   $$\mathbf{P = \frac{2}{3} N_0 \left\langle \frac{1}{2} m v^2 \right\rangle}$$

> **Physical Conclusion:**
> The pressure exerted by an ideal gas is directly proportional to the number of molecules per unit volume ($N_0$) and the **average translational kinetic energy** of the molecules.

---

### Interpretation of Temperature

From empirical gas experiments, the **ideal gas law** is expressed as:
$$P V = n R T$$
Where:
- $n$ is the number of moles of gas.
- $R$ is the universal gas constant ($R = 8.314\text{ J mol}^{-1}\text{ K}^{-1}$).
- $T$ is the absolute temperature in Kelvin.

If $N_A$ is Avogadro's number ($N_A = 6.022 \times 10^{23}\text{ molecules/mol}$), then $n = \frac{N}{N_A}$:
$$P V = \frac{N}{N_A} R T = N \left(\frac{R}{N_A}\right) T = N k T$$
Where $k = \frac{R}{N_A} = 1.38 \times 10^{-23}\text{ J K}^{-1}$ is the **Boltzmann constant** (the gas constant per molecule).

Now, multiplying the kinetic pressure equation by volume $V$:
$$P V = \frac{2}{3} N \left\langle \frac{1}{2} m v^2 \right\rangle$$

Equating the two expressions for $PV$:
$$N k T = \frac{2}{3} N \left\langle \frac{1}{2} m v^2 \right\rangle$$
$$\mathbf{T = \frac{2}{3k} \left\langle \frac{1}{2} m v^2 \right\rangle}$$

Or equivalently:
$$\mathbf{\left\langle \frac{1}{2} m v^2 \right\rangle = \frac{3}{2} k T}$$

> **Fundamental Principle:**
> The **absolute temperature** of an ideal gas is directly proportional to the **average translational kinetic energy** of its molecules. 
> Macro-scopically, what we perceive and measure as temperature is simply the macroscopic manifestation of microscopic molecular kinetic energy. At absolute zero ($T = 0\text{ K}$), translational molecular motion ceases entirely in classical physics.

---

### Derivation of Gas Laws from Kinetic Theory

#### 1. Boyle's Law
From the kinetic theory equation:
$$P V = \frac{2}{3} N \left\langle \frac{1}{2} m v^2 \right\rangle$$
If the temperature $T$ of the gas is kept constant, the average translational kinetic energy $\langle \frac{1}{2} m v^2 \rangle$ is constant. Since the total number of molecules $N$ is also fixed:
$$P V = \text{Constant} \implies P \propto \frac{1}{V} \quad (\text{at constant } T)$$
This is **Boyle's law**.

#### 2. Charles's Law
Rearranging the kinetic theory equation for volume $V$:
$$V = \frac{2}{3} \frac{N}{P} \left\langle \frac{1}{2} m v^2 \right\rangle$$
Since $\langle \frac{1}{2} m v^2 \rangle = \frac{3}{2} k T$:
$$V = \left(\frac{N k}{P}\right) T$$
If the pressure $P$ of a fixed mass of gas is kept constant, the bracketed quantity is constant:
$$V \propto T \quad (\text{at constant } P)$$
This is **Charles's law**.

---

### Solved Examples

#### Example 11.1
**Problem:** What is the average translational kinetic energy of molecules in a gas at temperature $27^\circ\text{C}$?

**Solution:**
- Temperature $T = 27^\circ\text{C} = 27 + 273 = 300\text{ K}$
- Boltzmann constant $k = 1.38 \times 10^{-23}\text{ J K}^{-1}$
- Average translational kinetic energy:
  $$\left\langle \frac{1}{2} m v^2 \right\rangle = \frac{3}{2} k T = \frac{3}{2} \times (1.38 \times 10^{-23}\text{ J K}^{-1}) \times 300\text{ K}$$
  $$\left\langle \frac{1}{2} m v^2 \right\rangle = 2.07 \times 10^{-23} \times 300 = 6.21 \times 10^{-21}\text{ J}$$

**Answer:** $\langle\text{K.E.}\rangle = 6.21 \times 10^{-21}\text{ J}$

---

#### Example 11.2
**Problem:** Find the average speed (root mean square speed) of oxygen molecules in air at S.T.P.

**Solution:**
- Standard temperature $T = 273\text{ K}$
- Boltzmann constant $k = 1.38 \times 10^{-23}\text{ J K}^{-1}$
- Molar mass of oxygen ($O_2$) $M = 32\text{ g/mol} = 0.032\text{ kg/mol}$
- Mass of a single $O_2$ molecule:
  $$m = \frac{M}{N_A} = \frac{0.032\text{ kg}}{6.022 \times 10^{23}} = 5.314 \times 10^{-26}\text{ kg}$$
- Using $\frac{1}{2} m v_{\text{rms}}^2 = \frac{3}{2} k T$:
  $$v_{\text{rms}} = \sqrt{\frac{3 k T}{m}} = \sqrt{\frac{3 \times (1.38 \times 10^{-23}\text{ J K}^{-1}) \times 273\text{ K}}{5.314 \times 10^{-26}\text{ kg}}}$$
  $$v_{\text{rms}}^2 = \frac{1.13022 \times 10^{-20}}{5.314 \times 10^{-26}} = 212,687\text{ m}^2\text{s}^{-2}$$
  $$v_{\text{rms}} = \sqrt{212,687} \approx 461\text{ ms}^{-1}$$

**Answer:** $v_{\text{rms}} = 461\text{ ms}^{-1}$

> **Do You Know?**
> A diatomic gas molecule (such as $O_2$ or $N_2$) possesses translational kinetic energy, rotational kinetic energy (spinning about perpendicular axes), and vibrational kinetic and potential energy associated with the spring-like interatomic bond.

---

## 11.2 Internal Energy

The **internal energy** ($U$) of a thermodynamic system is the total energy contained within it, defined as the sum of all microscopic forms of energy (kinetic and potential) possessed by its constituent atoms and molecules:
$$U = \sum (\text{K.E.})_{\text{molecular}} + \sum (\text{P.E.})_{\text{molecular}}$$

- **Molecular Kinetic Energy:** Includes translational, rotational, and vibrational motions.
- **Molecular Potential Energy:** Arises from intermolecular mutual forces of attraction and chemical bonds.

### Internal Energy of an Ideal Gas
For an **ideal gas**, the molecules are treated as non-interacting point masses with negligible intermolecular forces. Because intermolecular potential energy is identically zero, the internal energy of an ideal gas consists **entirely of the translational kinetic energy** of its molecules:
$$U = N \left\langle \frac{1}{2} m v^2 \right\rangle = \frac{3}{2} N k T = \frac{3}{2} n R T$$

> **Key Rule:**
> For an ideal gas, the internal energy $U$ depends **only upon its absolute temperature $T$**. If temperature remains constant, internal energy remains constant ($\Delta U = 0$).

### Internal Energy is a State Function
In thermodynamics, internal energy is a **state function (state variable)**:
- Its value depends solely upon the current thermodynamic state of the system (specified by state variables $P, V, T$) and is **completely independent of the path or past history** by which that state was reached.
- When a system undergoes a change from state $A$ ($P_a, V_a, T_a$) to state $B$ ($P_b, V_b, T_b$), the change in internal energy is always:
  $$\Delta U = U_b - U_a$$
  regardless of whether path 1, path 2, or any other path was followed.

Like gravitational potential energy, only the **change in internal energy ($\Delta U$)** has physical significance in practical thermodynamic processes.

---

## 11.3 Work and Heat

In thermodynamics, **heat** and **work** are not properties stored within a system; they represent **energy in transit** across the boundaries of a system.

### Sign Conventions
- **Heat ($Q$):**
  - $Q > 0$ (positive): Heat is absorbed/added to the system from the surroundings.
  - $Q < 0$ (negative): Heat is rejected/lost by the system to the surroundings.
- **Work ($W$):**
  - $W > 0$ (positive): Work is done **by the system** on the surroundings (expansion).
  - $W < 0$ (negative): Work is done **on the system** by the surroundings (compression).

```
                 +---------------+
                 |  Surroundings |
                 +---------------+
                    |         ^
          Heat In   |         |  Heat Out
          (+Q)      v         |  (-Q)
                 +---------------+
                 |    SYSTEM     |
                 +---------------+
                    ^         |
          Work On   |         |  Work Done By
          (-W)      |         v  (+W)
                 +---------------+
                 |  Surroundings |
                 +---------------+
```

---

### Derivation of Work Done by an Expanding Gas

Consider an ideal gas enclosed in a cylinder fitted with a frictionless, gas-tight movable piston of cross-sectional area $A$.

```
               Applied Force F = PA
                      |
                      v
            [=== Movable Piston ===]  ---.
            |                      |     | delta y
            |      Gas at P, V     |  ---'  (Expansion delta V = A * delta y)
            |                      |
            +----------------------+
```

1. If the gas is in equilibrium at pressure $P$, the outward force exerted by the gas against the piston is:
   $$F = P A$$
2. Let the gas expand very slowly (quasi-statically) so that the piston moves outward through an infinitesimal displacement $\Delta y$.
3. The work done by the expanding gas is:
   $$W = F \Delta y = (P A) \Delta y$$
4. Since the increase in volume of the cylinder is $\Delta V = A \Delta y$:
   $$\mathbf{W = P \Delta V}$$

### Work Done on a $P$-$V$ Diagram
On a Pressure-Volume ($P$-$V$) indicator diagram, the work done during any thermodynamic expansion or compression is equal to the **area under the $P$-$V$ curve**:
$$W = \int_{V_i}^{V_f} P \, dV$$
- For an expansion from $V_1$ to $V_2$ ($V_2 > V_1$), $\Delta V > 0$, so $W > 0$ (positive work).
- For a compression from $V_1$ to $V_2$ ($V_2 < V_1$), $\Delta V < 0$, so $W < 0$ (work done on the gas).
- In a cyclic process, the net work done during one complete cycle is equal to the **area enclosed by the cyclic loop** on the $P$-$V$ diagram.

---

## 11.4 First Law of Thermodynamics

The **first law of thermodynamics** is the fundamental statement of the **law of conservation of energy** applied to thermodynamic systems.

> **Statement of First Law:**
> When an amount of heat $Q$ is supplied to a thermodynamic system, it is apportioned into two parts: one part increases the internal energy of the system by $\Delta U$, and the remaining part is utilized by the system to do external mechanical work $W$ on its surroundings.

Mathematically:
$$\mathbf{Q = \Delta U + W}$$

Or equivalently:
$$\mathbf{\Delta U = Q - W}$$

### Everyday Examples of the First Law
1. **Bicycle Pump:** When a bicycle pump with a blocked outlet is pumped rapidly, mechanical work is done on the trapped air ($W < 0$). In rapid compression, negligible heat escapes ($Q \approx 0$), resulting in an increase in the internal energy of the air ($\Delta U = -W > 0$). Consequently, the barrel of the pump becomes noticeably warm.
2. **Human Metabolism:** When human beings exercise or perform physical work ($W$), internal energy is expended. The body maintains its constant internal energy and normal core body temperature ($37^\circ\text{C}$) through the chemical energy liberated from the metabolic oxidation of food intake ($Q$).

---

### Solved Example

#### Example 11.3
**Problem:** A gas is enclosed in a container fitted with a piston of cross-sectional area $0.10\text{ m}^2$. The pressure of the gas is maintained at $8000\text{ N m}^{-2}$. When heat is slowly transferred, the piston is pushed up through a distance of $4.0\text{ cm}$. If $42\text{ J}$ of heat is transferred to the system during the expansion, what is the change in internal energy of the system?

**Solution:**
- Pressure $P = 8000\text{ N m}^{-2}$
- Piston area $A = 0.10\text{ m}^2$
- Displacement $\Delta y = 4.0\text{ cm} = 0.04\text{ m}$
- Heat added $Q = 42\text{ J}$

1. **Work done by the expanding gas:**
   $$W = P \Delta V = P (A \Delta y) = 8000\text{ N m}^{-2} \times (0.10\text{ m}^2 \times 0.04\text{ m})$$
   $$W = 8000 \times 0.004 = 32\text{ N m} = 32\text{ J}$$

2. **Change in internal energy ($\Delta U$):**
   Using the First Law of Thermodynamics:
   $$\Delta U = Q - W = 42\text{ J} - 32\text{ J} = 10\text{ J}$$

**Answer:** $\Delta U = 10\text{ J}$

---

### Special Thermodynamic Processes

```
   Pressure P
       |
       |     .--- Isotherm (PV = const, delta U = 0)
       |    /
       |   *
       |           |     '--- Adiabat (PV^gamma = const, Q = 0) [Steeper]
       +----------------------- Volume V
```

#### 1. Isothermal Process
An **isothermal process** is one that takes place at a **constant temperature** ($T = \text{constant}$).
- Because the temperature does not change, Boyle's law is obeyed throughout:
  $$P_1 V_1 = P_2 V_2 = \text{Constant}$$
- For an ideal gas, internal energy depends only on temperature. Since $T = \text{constant}$:
  $$\Delta U = 0$$
- Applying the First Law of Thermodynamics:
  $$Q = \Delta U + W = 0 + W \implies \mathbf{Q = W}$$
- **Physical Meaning:** During isothermal expansion, all heat absorbed by the gas is converted completely into external work done by the gas. To maintain constant temperature, the gas must be enclosed in a container with highly conducting walls, and the expansion or compression must proceed **very slowly** to allow continuous heat exchange with the surrounding thermal reservoir.
- The curve representing an isothermal process on a $P$-$V$ diagram is called an **isotherm**.

#### 2. Adiabatic Process
An **adiabatic process** is one in which **no heat enters or leaves the system** ($Q = 0$).
- Applying the First Law of Thermodynamics ($Q = 0$):
  $$0 = \Delta U + W \implies \mathbf{W = -\Delta U} \quad \text{or} \quad \mathbf{\Delta U = -W}$$
- **Physical Meaning:**
  - **Adiabatic Expansion ($W > 0$):** The gas does work entirely at the expense of its own internal energy ($\Delta U < 0$), causing the **temperature of the gas to drop (cooling)**.
  - **Adiabatic Compression ($W < 0$):** Work is done on the gas, increasing its internal energy ($\Delta U > 0$), causing the **temperature of the gas to rise (heating)**.
- For an ideal gas undergoing a reversible adiabatic process:
  $$\mathbf{P V^\gamma = \text{Constant}}$$
  Where $\gamma = \frac{C_p}{C_v}$ is the ratio of molar specific heats.
- An adiabatic process occurs when the system is enclosed in thermally insulated walls, or when the expansion/compression occurs **extremely rapidly** so that there is no time for heat to transfer.
- The curve representing an adiabatic process on a $P$-$V$ diagram is called an **adiabat**. An adiabat is **steeper than an isotherm** because pressure changes more drastically due to simultaneous volume and temperature variations.

#### Real Examples of Adiabatic Processes:
1. **Bursting of a tire:** When compressed air suddenly escapes from a punctured or burst tire, it expands adiabatically against atmospheric pressure, resulting in substantial cooling.
2. **Sound Wave Propagation:** As sound travels through air, rapid compressions and rarefactions occur adiabatically because pressure changes occur too rapidly for heat conduction.
3. **Cloud Formation:** Warm moist air rising into regions of lower atmospheric pressure expands adiabatically and cools, causing water vapor to condense into clouds.

---

## 11.5 Molar Specific Heats of a Gas

The **molar specific heat** of a substance is the amount of heat required to raise the temperature of **one mole** of the substance through **$1\text{ K}$** (or $1^\circ\text{C}$).

Unlike solids and liquids (which expand very little upon heating), a gas undergoes significant changes in pressure and volume when heated. Therefore, the specific heat of a gas depends upon the conditions under which it is heated. Two conditions are standardized:
1. **Molar Specific Heat at Constant Volume ($C_v$)**
2. **Molar Specific Heat at Constant Pressure ($C_p$)**

---

### Molar Specific Heat at Constant Volume ($C_v$)
The amount of heat required to raise the temperature of one mole of an ideal gas through $1\text{ K}$ while maintaining its volume constant.

- Let $1\text{ mole}$ of gas be heated at constant volume ($\\Delta V = 0$) through a temperature increase $\Delta T$.
- The heat supplied is:
  $$Q_v = C_v \Delta T$$
- Because the volume is constant, the piston does not move, and external work done is zero:
  $$W = P \Delta V = 0$$
- Applying the First Law of Thermodynamics:
  $$Q_v = \Delta U + W \implies C_v \Delta T = \Delta U + 0$$
  $$\mathbf{\Delta U = C_v \Delta T}$$
*(This shows that the entire heat supplied at constant volume goes into increasing the internal energy and temperature of the gas).*

---

### Molar Specific Heat at Constant Pressure ($C_p$)
The amount of heat required to raise the temperature of one mole of an ideal gas through $1\text{ K}$ while maintaining its pressure constant.

- Let $1\text{ mole}$ of gas be heated at constant pressure through the same temperature rise $\Delta T$.
- The heat supplied is:
  $$Q_p = C_p \Delta T$$
- As the gas is heated, it expands against the constant external pressure, moving the piston and doing work:
  $$W = P \Delta V$$

---

### Derivation of $C_p - C_v = R$

Because internal energy of an ideal gas depends solely upon its temperature, for the same temperature rise $\Delta T$, the increase in internal energy $\Delta U$ is identical whether heated at constant volume or constant pressure:
$$\Delta U = C_v \Delta T$$

Applying the First Law of Thermodynamics to the constant-pressure process:
$$Q_p = \Delta U + W$$
$$C_p \Delta T = C_v \Delta T + P \Delta V$$

From the ideal gas equation for $n = 1\text{ mole}$:
$$P V = R T$$
Differentiating at constant pressure $P$:
$$P \Delta V = R \Delta T$$

Substituting $P \Delta V = R \Delta T$ into the First Law expression:
$$C_p \Delta T = C_v \Delta T + R \Delta T$$

Dividing throughout by $\Delta T$:
$$\mathbf{C_p - C_v = R}$$

> **Why is $C_p > C_v$?**
> - When a gas is heated at **constant volume**, all supplied heat is utilized solely to increase the internal energy and raise the temperature of the gas.
> - When a gas is heated at **constant pressure**, the gas expands. Therefore, the supplied heat must serve a dual purpose: it must increase the internal energy by the same amount, and it must also provide external work against atmospheric pressure ($P\Delta V = R\Delta T$).
> - Consequently, more heat is required at constant pressure for the same $1\text{ K}$ rise in temperature, making $C_p > C_v$ by an amount equal to the universal gas constant $R$.

The ratio of specific heats is defined as:
$$\gamma = \frac{C_p}{C_v} > 1$$
- For monoatomic gases (He, Ne, Ar): $\gamma \approx 1.67$
- For diatomic gases ($H_2, O_2, N_2$): $\gamma \approx 1.40$
- For polyatomic gases ($CO_2, CH_4$): $\gamma \approx 1.30$

---

## 11.6 Reversible and Irreversible Processes

### Reversible Process
A **reversible process** is one that can be retraced in the strictly reverse direction without producing any permanent change whatsoever in the system or the surroundings.
- In the reverse path, the working substance passes through exactly the same intermediate thermodynamic states in reverse order.
- Thermal and mechanical energy exchanges are exact reversals: if heat was absorbed during forward expansion, the identical quantity of heat is expelled during reverse compression; if work was done by the system, identical work is done on it.
- **Conditions for Reversibility:**
  1. The process must be quasi-static (infinitely slow, remaining in thermodynamic equilibrium at every stage).
  2. The system must be completely free from dissipative forces such as friction, viscosity, electrical resistance, and turbulence.
- **Examples:** Slow liquefaction and evaporation of a liquid; frictionless, quasi-static compression and expansion of a gas.

### Irreversible Process
An **irreversible process** is one that cannot be retraced in the reverse direction by reversing external factors. 
- All spontaneous natural processes are irreversible because real systems invariably involve friction, inelasticity, free expansion, or spontaneous heat flow across finite temperature differences.
- **Examples:** Chemical explosions; rapid expansion of gas into a vacuum; heat conduction from a hot cup of tea to cold room air; dissolving sugar in water.

---

## 11.7 Heat Engine

A **heat engine** is a mechanical device that operates in a cyclic manner to convert thermal energy (heat) into useful mechanical work.

```
       +-----------------------+
       |   Hot Reservoir (T1)  |
       +-----------------------+
                   |
                   | Heat Q1 absorbed
                   v
       +-----------------------+
       |     HEAT ENGINE       | ------> Net Work Output W = Q1 - Q2
       +-----------------------+
                   |
                   | Heat Q2 rejected
                   v
       +-----------------------+
       |   Cold Reservoir (T2) |
       +-----------------------+
```

### Essential Elements of a Heat Engine
1. **Heat Source (Hot Reservoir):** A large thermal reservoir at high absolute temperature $T_1$ capable of supplying heat without altering its own temperature.
2. **Working Substance:** A medium (such as steam, air, or petrol-air mixture) that absorbs heat, undergoes thermodynamic expansion to perform work, and rejects residual heat.
3. **Heat Sink (Cold Reservoir):** A low-temperature reservoir at absolute temperature $T_2$ ($T_2 < T_1$) that absorbs waste heat expelled by the engine.

### Cyclic Operation and Thermal Efficiency
Because the working substance returns to its initial state at the completion of each cycle, the net change in internal energy over a full cycle is zero:
$$\Delta U_{\text{cycle}} = 0$$

From the First Law of Thermodynamics:
$$W = Q_{\text{net}} = Q_1 - Q_2$$

The **thermal efficiency** ($\eta$) of a heat engine is defined as the ratio of useful net work output to the total heat input:
$$\eta = \frac{\text{Net Work Output}}{\text{Heat Input}} = \frac{W}{Q_1} = \frac{Q_1 - Q_2}{Q_1}$$
$$\mathbf{\eta = 1 - \frac{Q_2}{Q_1}}$$

---

## 11.8 Second Law of Thermodynamics

While the First Law states the conservation of energy, it places no constraint on the direction in which energy transformations can spontaneously occur (e.g., it does not forbid heat flowing spontaneously from a cold body to a hotter one). The **Second Law of Thermodynamics** specifies the natural direction of thermodynamic processes and dictates the fundamental limits on converting heat into work.

### 1. Lord Kelvin Statement (Engine Statement)
> **Kelvin-Planck Statement:**
> It is impossible to construct a heat engine operating in a cycle that absorbs heat from a single thermal reservoir and converts it entirely into mechanical work without rejecting any heat to a lower-temperature sink.

**Implication:** 
- A single heat reservoir cannot perform work. Two reservoirs at different temperatures ($T_1 > T_2$) are essential for the operation of any heat engine.
- A heat engine with $100\%$ thermal efficiency ($\\eta = 1$) is physically impossible. Heat rejection ($Q_2 > 0$) to the environment is an unavoidable requirement.
- We cannot harness the enormous thermal energy stored in ocean waters or ambient atmosphere to power ships or engines because there is no colder heat sink available.

### 2. Clausius Statement (Refrigerator Statement)
> **Clausius Statement:**
> It is impossible to construct a cyclic device whose sole effect is to transfer heat from a lower-temperature reservoir to a higher-temperature reservoir without requiring an external supply of work.

*(Note: The Kelvin-Planck and Clausius statements are logically equivalent: a violation of one implies a violation of the other).*

---

## 11.9 Carnot Engine and Carnot's Theorem

In 1824, French engineer Nicolas Léonard Sadi Carnot designed an idealized, theoretical heat engine operating on a completely reversible cycle—the **Carnot cycle**—which establishes the maximum theoretical efficiency any heat engine can achieve.

```
       Pressure P
           |
        P1 |   A (T1)
           |    *---.  Isothermal Expansion (Q1 in at T1)
           |         '---. B (T1)
        P2 |                         |               \  Adiabatic Expansion (T1 -> T2)
        P3 |            D   * C (T2)
           |             \ /  Isothermal Compression (Q2 out at T2)
        P4 |              *
           +--------------------------------- Volume V
                           V1 V2 V4 V3
```

### The Four Steps of the Carnot Cycle
1. **Isothermal Expansion ($A \to B$):** The cylinder containing ideal gas is placed on the hot reservoir at temperature $T_1$. The gas expands slowly and isothermally from $(P_1, V_1)$ to $(P_2, V_2)$, absorbing heat $Q_1$ from the reservoir at constant temperature $T_1$.
2. **Adiabatic Expansion ($B \to C$):** The cylinder is placed on a perfectly insulating stand. The gas expands adiabatically and reversibly from $(P_2, V_2)$ to $(P_3, V_3)$, performing work at the expense of internal energy until its temperature drops from $T_1$ to $T_2$.
3. **Isothermal Compression ($C \to D$):** The cylinder is placed on the cold reservoir at temperature $T_2$. The gas is compressed slowly and isothermally from $(P_3, V_3)$ to $(P_4, V_4)$, rejecting heat $Q_2$ into the cold reservoir at constant temperature $T_2$.
4. **Adiabatic Compression ($D \to A$):** The cylinder is returned to the insulating stand. The gas is compressed adiabatically from $(P_4, V_4)$ back to its initial state $(P_1, V_1, T_1)$, restoring its temperature to $T_1$ and completing the cycle.

---

### Efficiency of the Carnot Engine
For an ideal gas undergoing a reversible Carnot cycle, the ratio of heat transferred is strictly equal to the ratio of absolute temperatures:
$$\frac{Q_2}{Q_1} = \frac{T_2}{T_1}$$

Substituting this into the efficiency formula:
$$\mathbf{\eta_{\text{Carnot}} = 1 - \frac{T_2}{T_1} = \frac{T_1 - T_2}{T_1}}$$

Percentage efficiency:
$$\mathbf{\eta\% = \left(1 - \frac{T_2}{T_1}\right) \times 100\%}$$

### Fundamental Deductions from Carnot Efficiency:
1. **Dependency:** Carnot efficiency depends **only on the temperatures of the hot ($T_1$) and cold ($T_2$) reservoirs** and is completely independent of the nature of the working substance.
2. **Never 100%:** Efficiency $\eta = 1$ ($100\%$) only if $T_2 = 0\text{ K}$ (absolute zero). Because absolute zero is physically unattainable, no real or ideal heat engine can achieve $100\%$ efficiency.
3. **Higher Difference Yields Higher Efficiency:** The greater the temperature difference $(T_1 - T_2)$, the higher the efficiency.

### Carnot's Theorem
> **Statement 1:** No practical heat engine operating between two given temperatures can be more efficient than an ideal reversible Carnot engine operating between the same two temperatures.
>
> **Statement 2:** All reversible Carnot engines operating between the same two temperatures have exactly the same efficiency, irrespective of the nature of the working substance used.

---

### Solved Example

#### Example 11.4
**Problem:** The turbine in a steam power plant takes steam from a boiler at $427^\circ\text{C}$ and exhausts into a low-temperature reservoir at $77^\circ\text{C}$. What is the maximum possible efficiency?

**Solution:**
- Hot reservoir temperature $T_1 = 427^\circ\text{C} = 427 + 273 = 700\text{ K}$
- Cold reservoir temperature $T_2 = 77^\circ\text{C} = 77 + 273 = 350\text{ K}$
- Maximum theoretical efficiency (Carnot efficiency):
  $$\eta_{\text{max}} = 1 - \frac{T_2}{T_1} = 1 - \frac{350\text{ K}}{700\text{ K}} = 1 - 0.5 = 0.50$$
  $$\eta_{\text{max}}\% = 0.50 \times 100\% = 50\%$$

**Answer:** $\eta_{\text{max}} = 50\%$

---

## 11.10 Thermodynamic Scale of Temperature (Kelvin Scale)

Conventional thermometric scales (Celsius, Fahrenheit) depend upon thermometric properties of specific materials (mercury expansion, electrical resistance) which vary non-linearly over wide temperature ranges.

Lord Kelvin recognized that the Carnot engine efficiency provides the basis for an absolute thermodynamic temperature scale that is **completely independent of the physical properties of any working substance**:
$$\frac{Q_1}{Q_2} = \frac{T_1}{T_2}$$

### Standard Definition
The thermodynamic scale is defined by fixing two standard reference points:
1. **Absolute Zero ($0\text{ K}$):** The lowest possible temperature where molecular thermal motion ceases.
2. **Triple Point of Water:** The unique state at which pure solid ice, liquid water, and water vapor coexist in stable thermodynamic equilibrium. By international agreement, this fixed point is defined as exactly:
   $$T_{\text{triple}} = 273.16\text{ K} \quad (0.01^\circ\text{C} \text{ at } P = 4.58\text{ mm of Hg})$$

If a Carnot engine operates between an unknown temperature $T$ and the triple point of water, absorbing heat $Q$ and rejecting heat $Q_{\text{triple}}$:
$$\mathbf{T = 273.16 \left(\frac{Q}{Q_{\text{triple}}}\right)}$$

> **Definition of One Kelvin ($1\text{ K}$):**
> One Kelvin is defined as the fraction $\frac{1}{273.16}$ of the thermodynamic temperature of the triple point of water.

---

## 11.11 Internal Combustion Engines: Petrol and Diesel Engines

Practical internal combustion heat engines burn fuel directly inside the cylinder chamber.

```
       Intake Stroke      Compression Stroke       Power Stroke          Exhaust Stroke
         [Air+Fuel]           [Compress]             [Spark!]               [Exhaust]
           |    |               |    |                |    |                 |    |
           v    |               |    |                |    |                 |    ^
         ( Piston )           ( Piston )            ( Piston )             ( Piston )
           |  Down              |   Up                |  Down                |   Up
           v                    ^                     v                      ^
```

### Four-Stroke Petrol (Gasoline) Engine
Operates on the four-stroke Otto cycle:
1. **Intake Stroke:** The intake valve opens; the piston moves downward, drawing a mixture of petrol vapor and air from the carburetor into the cylinder at atmospheric pressure.
2. **Compression Stroke:** Both valves close; the piston moves upward, compressing the fuel-air mixture adiabatically to about $\frac{1}{8}$ of its original volume.
3. **Power Stroke:** A spark plug ignites the compressed mixture. Rapid combustion causes pressure and temperature to rise sharply. The burning gas expands adiabatically, driving the piston downward with great force, delivering useful work to the crankshaft.
4. **Exhaust Stroke:** The exhaust valve opens; the piston moves upward, expelling the spent combustion gases.

- **Actual Efficiency:** Typically **$25\%\text{ to }30\%$** due to friction, thermal conduction through cylinder walls, and incomplete combustion.

### Diesel Engine
- **Operation:** Operates without a spark plug. During the intake stroke, only pure air is drawn into the cylinder.
- **Compression:** The air is compressed adiabatically to an extremely high compression ratio (around $15:1$ to $20:1$), heating the air to temperatures well above $500^\circ\text{C}$.
- **Ignition:** At peak compression, diesel fuel is injected as a fine spray. The fuel ignites spontaneously upon contact with the hot compressed air, driving the piston downward.
- **Actual Efficiency:** Typically **$35\%\text{ to }40\%$**, higher than petrol engines due to the higher compression ratio.

---

## 11.12 Entropy

The concept of **entropy** was introduced in 1856 by Rudolf Clausius to provide a precise quantitative formulation of the Second Law of Thermodynamics.

> **Definition of Entropy:**
> If a system undergoes a reversible process absorbing an amount of heat $\Delta Q$ at an absolute temperature $T$, the change in entropy $\Delta S$ is defined as:
> $$\mathbf{\Delta S = \frac{\Delta Q}{T}}$$

- **SI Unit:** Joules per Kelvin ($\text{J K}^{-1}$).
- **State Function:** Like internal energy, entropy $S$ is a state variable whose value depends only on the current thermodynamic state.
- **Sign:**
  - $\Delta S > 0$ (positive) when heat is added to the system ($\\Delta Q > 0$).
  - $\Delta S < 0$ (negative) when heat is removed from the system ($\\Delta Q < 0$).

---

### Universal Increase of Entropy in Natural Processes

Consider an irreversible spontaneous flow of heat $Q$ from a hot reservoir at temperature $T_1$ to a cold reservoir at temperature $T_2$ ($T_1 > T_2$) via a conducting rod:
- Entropy lost by hot reservoir: $\Delta S_1 = -\frac{Q}{T_1}$
- Entropy gained by cold reservoir: $\Delta S_2 = +\frac{Q}{T_2}$
- Net change in total entropy of the system:
  $$\Delta S_{\text{total}} = \Delta S_1 + \Delta S_2 = -\frac{Q}{T_1} + \frac{Q}{T_2} = Q \left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

Since $T_1 > T_2$, $\frac{1}{T_2} > \frac{1}{T_1}$, the bracketed term is strictly positive:
$$\mathbf{\Delta S_{\text{total}} > 0}$$

> **Second Law in Terms of Entropy:**
> In any natural, spontaneous thermodynamic process, the total entropy of the universe (system plus surroundings) **always increases**:
> $$\Delta S_{\text{universe}} \ge 0$$
> (where the equality holds only for ideal, reversible processes).

---

### Microscopic Interpretation: Entropy as Disorder
At the molecular level, entropy is a quantitative measure of the **randomness or disorder** of a system:
- **Mixing liquids:** Mixing hot and cold water results in thermal equilibrium; the initially segregated energetic and slow molecules become randomly dispersed, increasing disorder and entropy.
- **Free expansion:** A gas expanding freely into a vacuum occupies more possible microscopic configurations (microstates), increasing disorder and entropy.
- **Phase change:** When solid ice melts into liquid water, rigid crystalline lattice order is broken into randomly tumbling molecules, causing a sharp increase in entropy.

### Degradation of Energy
Every time entropy increases in a natural process, the universe permanently loses some capacity to convert thermal energy into useful mechanical work:
- Energy is conserved (First Law), but its **quality degrades** (Second Law).
- Concentrated, high-grade energy (mechanical, chemical, or electrical) inevitably degrades into dispersed, low-temperature thermal energy that cannot be reclaimed.

---

### Solved Example

#### Example 11.5
**Problem:** Calculate the entropy change when $1.0\text{ kg}$ of ice at $0^\circ\text{C}$ melts into water at $0^\circ\text{C}$. (Latent heat of fusion of ice $L_f = 3.36 \times 10^5\text{ J kg}^{-1}$).

**Solution:**
- Mass of ice $m = 1.0\text{ kg}$
- Melting temperature $T = 0^\circ\text{C} = 273\text{ K}$
- Heat required for melting:
  $$\Delta Q = m L_f = 1.0\text{ kg} \times (3.36 \times 10^5\text{ J kg}^{-1}) = 3.36 \times 10^5\text{ J}$$
- Change in entropy:
  $$\Delta S = \frac{\Delta Q}{T} = \frac{3.36 \times 10^5\text{ J}}{273\text{ K}} = +1.23 \times 10^3\text{ J K}^{-1}$$

**Answer:** $\Delta S = +1.23 \times 10^3\text{ J K}^{-1}$

*(The positive sign confirms an increase in entropy, reflecting the transition from an ordered crystalline lattice to disordered liquid water).*

---

### Approximate Efficiencies of Energy Conversion Devices

| Device | Energy Conversion | Approximate Efficiency (%) |
| :--- | :--- | :---: |
| Electric generator | Mechanical $\to$ Electrical | 70 – 99 |
| Electric motor | Electrical $\to$ Mechanical | 50 – 93 |
| Dry cell battery | Chemical $\to$ Electrical | 90 |
| Domestic gas furnace | Chemical $\to$ Thermal | 70 – 85 |
| Storage battery | Chemical $\to$ Electrical | 72 |
| Hydrogen-oxygen fuel cell | Chemical $\to$ Electrical | 60 |
| Liquid-fuel rocket | Chemical $\to$ Mechanical | 47 |
| Steam turbine | Thermal $\to$ Mechanical | 35 – 40 |
| Fossil-fuel power plant | Chemical $\to$ Electrical | 30 – 35 |
| Nuclear power plant | Nuclear $\to$ Electrical | 30 |
| Aircraft gas turbine engine | Chemical $\to$ Mechanical | 20 – 30 |
| Internal combustion gasoline engine | Chemical $\to$ Mechanical | 25 – 30 |
| Diesel engine | Chemical $\to$ Mechanical | 35 – 40 |
| Gallium arsenide solar cell | Radiant $\to$ Electrical | 20 |
| Fluorescent lamp | Electrical $\to$ Light | 20 |
| Silicon solar cell | Radiant $\to$ Electrical | 12 – 16 |
| Steam locomotive | Thermal $\to$ Mechanical | 8 |
| Incandescent lamp | Electrical $\to$ Light | 5 |
| Watt's early steam engine | Thermal $\to$ Mechanical | 1 |

---

## 11.13 Environmental Crisis as an Entropy Crisis

From a physical perspective, the escalating global environmental crisis is fundamentally an **entropy crisis**:

1. **Thermal Pollution:** The Second Law dictates that no thermodynamic conversion of heat into work can be $100\%$ efficient. Every power plant, vehicle engine, and industrial facility must exhaust a significant portion of its consumed energy as low-temperature waste heat directly into rivers, lakes, and the atmosphere. This inevitable thermal pollution disrupts aquatic ecosystems and alters local weather patterns.
2. **Air Pollution and Resource Depletion:** Burning fossil fuels creates greenhouse gases ($CO_2$), particulates, and toxic byproducts, increasing geochemical disorder across the biosphere.
3. **The Ecological Imperative:** Whenever humans perform work to create local order (building infrastructure, manufacturing consumer goods), the Second Law requires an even greater net increase in disorder and entropy in the wider environment. To prevent irreversible degradation of Earth's fragile life-support systems, technological design must minimize waste, maximize thermodynamic efficiency, and embrace renewable energy flows.

---

## Chapter Summary

- **Kinetic Molecular Postulates:** Gases consist of numerous tiny, randomly moving particles undergoing perfectly elastic collisions with negligible intermolecular forces.
- **Pressure Equation:** $P = \frac{1}{3} \rho \langle v^2 \rangle = \frac{2}{3} N_0 \langle \frac{1}{2}mv^2 \rangle$. Gas pressure results from rate of momentum transfer per unit area.
- **Temperature Interpretation:** Absolute temperature is directly proportional to average translational kinetic energy: $T = \frac{2}{3k}\langle \frac{1}{2}mv^2 \rangle$ or $\langle \frac{1}{2}mv^2 \rangle = \frac{3}{2}kT$.
- **Gas Laws:** Boyle's Law ($PV = \text{const}$) and Charles's Law ($V/T = \text{const}$) derive directly from kinetic theory.
- **Internal Energy ($U$):** Sum of all microscopic kinetic and potential molecular energies. For an ideal gas, $U$ depends purely on temperature $T$.
- **Thermodynamic Work:** $W = P \Delta V$, represented by the area under a $P$-$V$ curve.
- **First Law of Thermodynamics:** Conservation of energy: $Q = \Delta U + W$.
  - Isothermal ($T = \text{const}$): $\Delta U = 0 \implies Q = W$.
  - Adiabatic ($Q = 0$): $W = -\Delta U$; $P V^\gamma = \text{const}$.
- **Molar Specific Heats:** $Q_v = C_v \Delta T$, $Q_p = C_p \Delta T$. Mayer's relation: $C_p - C_v = R$. Ratio $\gamma = C_p / C_v$.
- **Second Law of Thermodynamics:**
  - *Kelvin-Planck:* Heat from a single reservoir cannot be converted completely into work.
  - *Clausius:* Heat cannot spontaneously flow from cold to hot without external work.
- **Carnot Cycle:** Maximum theoretical efficiency between two temperatures: $\eta = 1 - \frac{T_2}{T_1}$.
- **Thermodynamic Temperature Scale:** Defined via triple point of water ($273.16\text{ K}$): $T = 273.16 \left(\frac{Q}{Q_{\text{triple}}}\right)$.
- **Entropy ($S$):** Measure of molecular disorder. $\Delta S = \frac{\Delta Q}{T}$. For all natural processes, $\Delta S_{\text{universe}} \ge 0$.

---

## Conceptual Questions and Answers

### Question 11.1: Why is the average velocity of the molecules in a gas zero but the average of the square of velocities is not zero?
**Answer:**
1. **Average Velocity is Zero ($\langle \vec{v} \rangle = 0$):**
   - Velocity is a vector quantity having both magnitude and direction.
   - Gas molecules are in chaotic, completely isotropic random motion. For every molecule moving in a particular direction with velocity $+\vec{v}$, there exists, on average, another molecule moving in the exact opposite direction with velocity $-\vec{v}$.
   - Summing these mutually canceling vectors across all $N$ molecules gives:
     $$\langle \vec{v} \rangle = \frac{1}{N} \sum_{i=1}^N \vec{v}_i = 0$$

2. **Average of the Square of Velocities is Non-Zero ($\langle v^2 \rangle \neq 0$):**
   - The square of velocity $v^2 = v_x^2 + v_y^2 + v_z^2$ is a scalar quantity that is always positive (or zero), regardless of the direction of motion.
   - Because all terms in the summation are positive numbers, their average cannot cancel out to zero:
     $$\langle v^2 \rangle = \frac{1}{N} \sum_{i=1}^N v_i^2 > 0$$
   *(This mean square velocity is directly related to the kinetic energy and temperature of the gas).*

---

### Question 11.2: Why does the pressure of a gas in a car tyre increase when it is driven through some distance?
**Answer:**
When a car is driven along a road:
1. Friction between the rotating tire and the road surface, together with internal flexing of the rubber tire walls, performs mechanical work.
2. This dissipated work generates heat, which is transferred to the trapped air inside the tire.
3. According to the First Law of Thermodynamics, this heat increases the internal energy of the air molecules, resulting in a **rise in absolute temperature ($T$)**.
4. By the kinetic theory of gases ($P \propto T$ at constant volume), an increase in temperature increases the average molecular speed ($v_{\text{rms}} \propto \sqrt{T}$). The molecules strike the inner tire walls more frequently and with greater momentum transfer, leading to an **increase in tire pressure ($P$)**.

---

### Question 11.3: A system undergoes from state $P_1V_1$ to state $P_2V_2$ as shown in Fig 11.12. What will be the change in internal energy?
*(Note: Fig 11.12 shows an isothermal expansion along an isotherm at constant temperature $T$).*
**Answer:**
**The change in internal energy is zero ($\Delta U = 0$).**

**Reason:**
- For an ideal gas, internal energy is solely a function of temperature ($U = \frac{3}{2} n R T$).
- Since the transition occurs along a curve of constant temperature ($T_1 = T_2$):
  $$\Delta T = 0$$
- Therefore:
  $$\Delta U = U_2 - U_1 = 0$$
- According to the First Law ($Q = \Delta U + W$), all heat added during this isothermal expansion is converted entirely into external work: $Q = W$.

---

### Question 11.4: Variation of volume by pressure is given in Fig 11.13. A gas is taken along the paths $ABCDA$, $ABCA$ and $A$ to $A$. What will be the change in internal energy?
**Answer:**
**In all three cases, the change in internal energy is zero ($\Delta U = 0$).**

**Reason:**
- Internal energy $U$ is a **thermodynamic state function**. Its value depends exclusively upon the current thermodynamic state coordinates ($P, V, T$) of the system and is completely independent of the path followed.
- In each case ($ABCDA$, $ABCA$, and $A \to A$), the path forms a **closed thermodynamic cycle** where the system returns precisely to its initial state $A$.
- Therefore:
  $$\Delta U = U_{\text{final}} - U_{\text{initial}} = U_A - U_A = 0$$

---

### Question 11.5: Specific heat of a gas at constant pressure is greater than specific heat at constant volume. Why?
**Answer:**
- **At Constant Volume ($C_v$):** When heat is supplied to a gas at constant volume ($\\Delta V = 0$), the gas does no external work ($W = P\Delta V = 0$). All supplied heat is used exclusively to increase the internal energy and raise the temperature of the gas.
- **At Constant Pressure ($C_p$):** When heat is supplied at constant pressure, the gas expands as temperature rises. Therefore, the supplied heat must perform **two tasks**:
  1. Increase the internal energy by the exact same amount as at constant volume to produce the same temperature rise $\Delta T$.
  2. Perform external mechanical work ($W = P\Delta V = R\Delta T$) against atmospheric pressure to allow expansion.
- Because additional energy is needed to perform this expansion work, more heat must be supplied at constant pressure than at constant volume for the same temperature rise ($1\text{ K}$). Hence:
  $$C_p > C_v \quad (C_p - C_v = R)$$

---

### Question 11.6: Give an example of a process in which no heat is transferred to or from the system but the temperature of the system changes.
**Answer:**
An **adiabatic process** is a prime example:
1. **Adiabatic Expansion:** When a gas expands rapidly against an external piston without any heat exchange ($Q = 0$), the work is performed at the expense of its internal energy ($W = -\Delta U$). Because internal energy decreases, the **temperature of the gas falls (cooling)**. 
   - *Example:* Rapid escape of air from a punctured tire.
2. **Adiabatic Compression:** When a gas is rapidly compressed ($Q = 0$), work is done on the gas ($W < 0$), increasing its internal energy ($\Delta U > 0$). Consequently, the **temperature of the gas rises**.
   - *Example:* Rapidly compressing air in a bicycle pump or in the cylinder of a diesel engine.

---

### Question 11.7: Is it possible to convert internal energy into mechanical energy? Explain with an example.
**Answer:**
**Yes**, internal energy can be converted into mechanical energy.

**Example: Adiabatic Expansion of a Gas**
- In an adiabatic expansion, the system is thermally insulated so no heat enters ($Q = 0$).
- By the First Law of Thermodynamics:
  $$Q = \Delta U + W \implies 0 = \Delta U + W \implies W = -\Delta U$$
- As the gas expands, it pushes an external piston, performing mechanical work ($W > 0$). This work comes entirely from the reduction of the gas's internal energy ($\Delta U < 0$).
- Practical manifestations include the power stroke in steam engines and internal combustion engines, where hot expanding gas converts its internal thermal energy into the mechanical rotational energy of the crankshaft.

---

### Question 11.8: Is it possible to construct a heat engine that will not expel heat into the atmosphere?
**Answer:**
**No, it is fundamentally impossible.**

**Reason:**
- According to the **Kelvin-Planck statement of the Second Law of Thermodynamics**, it is impossible to construct a heat engine operating in a cycle that converts all absorbed heat entirely into useful mechanical work without rejecting a portion of heat to a low-temperature sink.
- To complete a thermodynamic cycle and return the working substance to its initial state, heat must be rejected ($Q_2 > 0$). If no heat were rejected, the efficiency would be $\eta = 1 - \frac{Q_2}{Q_1} = 100\%$, which would violate the Second Law.

---

### Question 11.9: A thermos flask containing milk as a system is shaken rapidly. Does the temperature of the milk rise?
**Answer:**
**Yes, the temperature of the milk will rise.**

**Reason:**
- A thermos flask provides thermally insulated walls, so heat transfer is negligible ($Q \approx 0$).
- When the flask is vigorously shaken, external mechanical work ($W$) is performed on the liquid against internal viscous forces between milk layers.
- By the First Law of Thermodynamics ($Q = \Delta U + W$ where $W_{\text{on system}} = -W$):
  $$\Delta U = -W > 0$$
- This mechanical work is converted into internal energy, which manifests macroscopically as a measurable rise in the temperature of the milk.

---

### Question 11.10: What happens to the temperature of the room when an air conditioner is left running on a table in the middle of the room?
**Answer:**
**The temperature of the room will slightly increase.**

**Reason:**
- An air conditioner is a heat pump: it extracts heat $Q_2$ from its front (cooling side) and expels heat $Q_1$ from its rear (condenser coils) using electrical work $W$ supplied to the compressor motor.
- If placed entirely inside the room, both the cooling front and the exhaust coils release energy into the same enclosed space.
- According to the First Law of Thermodynamics:
  $$Q_1 = Q_2 + W$$
- The heat expelled into the room ($Q_1$) is greater than the heat removed ($Q_2$) by an amount equal to the electrical work $W$ consumed by the motor. Because all electrical energy consumed by the compressor is ultimately dissipated as heat into the room, the net effect is a gradual **rise in room temperature**.

---

### Question 11.11: Can mechanical energy be converted completely into heat energy? If so, give an example.
**Answer:**
**Yes**, mechanical energy can be converted **$100\%$ completely into thermal energy (heat)**.

*(Note: While the Second Law forbids converting 100% of heat into work, it places no restriction on converting 100% of mechanical work into heat).*

**Examples:**
1. **Frictional Rubbing:** When two rough blocks are rubbed against each other, all mechanical work done against friction is entirely converted into heat energy.
2. **Joule's Paddle-Wheel Experiment:** Mechanical work done by falling weights to rotate paddle wheels inside a viscous water calorimeter is completely converted into thermal energy, heating the water.
3. **Vehicle Braking:** When a car applies brakes to come to a stop, all kinetic energy of the vehicle is converted entirely into thermal energy in the brake pads and rotors.

---

### Question 11.12: Does the entropy of a system increase or decrease due to friction?
**Answer:**
**The entropy of the system increases.**

**Reason:**
- Friction is a non-conservative, dissipative, and strictly **irreversible** process.
- Whenever mechanical work is done against friction, ordered mechanical energy is dissipated into disordered microscopic thermal vibrations of atoms and molecules (heat $Q$).
- For any irreversible dissipative process, the Second Law of Thermodynamics dictates that:
  $$\Delta S > 0$$
- Hence, friction always produces a net increase in the entropy of the system and its environment.

---

### Question 11.13: Give an example of a natural process that involves an increase in entropy.
**Answer:**
**Examples of natural processes involving an increase in entropy:**
1. **Spontaneous Heat Conduction:** Heat flowing spontaneously from a hot body (e.g., a cup of boiling water) to cooler surroundings. The total entropy increases because:
   $$\Delta S = Q \left(\frac{1}{T_{\text{cold}}} - \frac{1}{T_{\text{hot}}}\right) > 0$$
2. **Melting of Ice at Room Temperature:** A block of ice at $0^\circ\text{C}$ spontaneously melts in ambient air. The ordered crystal structure of ice disintegrates into disordered liquid water molecules, increasing entropy.
3. **Free Diffusion of Gases:** When a scent bottle or gas valve is opened in a room, gas molecules diffuse spontaneously from high concentration to fill the room, increasing molecular spatial disorder and entropy.

---

### Question 11.14: Multiple Choice
**An adiabatic change is the one in which:**
- **a. No heat is added to or taken out of a system.** *(Correct)*
- b. No change of temperature takes place.
- c. Boyle's law is applicable.
- d. Pressure and volume remain constant.

---

### Question 11.15: Multiple Choice
**Which one of the following processes is irreversible?**
- a. Slow compressions of an elastic spring.
- b. Slow evaporation of a substance in an isolated vessel.
- c. Slow compression of a gas.
- **d. A chemical explosion.** *(Correct)*

---

### Question 11.16: Multiple Choice
**An ideal reversible heat engine has:**
- a. 100% efficiency.
- **b. Highest efficiency.** *(Correct)*
- c. An efficiency which depends on the nature of working substance.
- d. None of these.
*(Reason: By Carnot's theorem, no engine operating between the same two temperatures can exceed the efficiency of an ideal Carnot engine).*

---

## Step-by-Step Solved Numerical Problems

### Problem 11.1
**Statement:** Estimate the average speed (root mean square speed) of nitrogen molecules in air under standard conditions of pressure and temperature.

**Given Data:**
- Standard temperature $T = 0^\circ\text{C} = 273\text{ K}$
- Universal gas constant $R = 8.314\text{ J mol}^{-1}\text{ K}^{-1}$
- Molar mass of nitrogen ($N_2$):
  $$M = 28\text{ g mol}^{-1} = 28 \times 10^{-3}\text{ kg mol}^{-1} = 0.028\text{ kg mol}^{-1}$$

**Formula:**
$$v_{\text{rms}} = \sqrt{\frac{3 R T}{M}}$$

**Calculations:**
$$v_{\text{rms}} = \sqrt{\frac{3 \times 8.314\text{ J mol}^{-1}\text{ K}^{-1} \times 273\text{ K}}{0.028\text{ kg mol}^{-1}}}$$
$$v_{\text{rms}} = \sqrt{\frac{6809.166}{0.028}} = \sqrt{243184.5} = 493.14\text{ ms}^{-1} \approx 493\text{ ms}^{-1}$$

**Answer:**
$$v_{\text{rms}} = 493\text{ ms}^{-1}$$

---

### Problem 11.2
**Statement:** Show that the ratio of the root mean square speeds of molecules of two different gases at a certain temperature is equal to the square root of the inverse ratio of their masses.

**Proof:**
From kinetic theory, the average translational kinetic energy of a molecule of any gas at absolute temperature $T$ is given by:
$$\frac{1}{2} m v_{\text{rms}}^2 = \frac{3}{2} k T$$
Where $k$ is the Boltzmann constant and $m$ is the mass of a single molecule.

Rearranging for root mean square speed:
$$v_{\text{rms}} = \sqrt{\frac{3 k T}{m}}$$

Let gas 1 have molecular mass $m_1$ and gas 2 have molecular mass $m_2$. At the same temperature $T$:
- For Gas 1:
  $$v_{\text{rms1}} = \sqrt{\frac{3 k T}{m_1}}$$
- For Gas 2:
  $$v_{\text{rms2}} = \sqrt{\frac{3 k T}{m_2}}$$

Taking the ratio of the two speeds:
$$\frac{v_{\text{rms1}}}{v_{\text{rms2}}} = \frac{\sqrt{\frac{3 k T}{m_1}}}{\sqrt{\frac{3 k T}{m_2}}} = \sqrt{\frac{m_2}{m_1}}$$

Similarly, in terms of molar masses $M_1$ and $M_2$:
$$\mathbf{\frac{v_{\text{rms1}}}{v_{\text{rms2}}} = \sqrt{\frac{M_2}{M_1}}}$$
*(Hence proved: the root mean square speed is inversely proportional to the square root of the molecular mass).*

---

### Problem 11.3
**Statement:** A sample of gas is compressed to one half of its initial volume at a constant pressure of $1.25 \times 10^5\text{ N m}^{-2}$. During the compression, $100\text{ J}$ of work is done on the gas. Determine the final volume of the gas.

**Given Data:**
- Constant pressure $P = 1.25 \times 10^5\text{ N m}^{-2}$
- Initial volume $= V_1$
- Final volume $V_2 = \frac{1}{2} V_1 \implies V_1 = 2 V_2$
- Work done **on the gas**: $W = -100\text{ J}$

**Formula:**
$$W = P \Delta V = P (V_2 - V_1)$$

**Calculations:**
Substitute $V_1 = 2 V_2$:
$$\Delta V = V_2 - 2 V_2 = -V_2$$
$$W = P (-V_2) = -P V_2$$

Equating to $W = -100\text{ J}$:
$$-100\text{ J} = - (1.25 \times 10^5\text{ N m}^{-2}) V_2$$
$$V_2 = \frac{100}{1.25 \times 10^5} = \frac{100}{125000} = 8.0 \times 10^{-4}\text{ m}^3$$

**Answer:**
$$V_2 = 8 \times 10^{-4}\text{ m}^3$$

---

### Problem 11.4
**Statement:** A thermodynamic system undergoes a process in which its internal energy decreases by $300\text{ J}$. If at the same time $120\text{ J}$ of work is done on the system, find the heat lost by the system.

**Given Data:**
- Decrease in internal energy: $\Delta U = -300\text{ J}$
- Work done **on the system**: $W = -120\text{ J}$

**Formula:**
From the First Law of Thermodynamics:
$$Q = \Delta U + W$$

**Calculations:**
$$Q = (-300\text{ J}) + (-120\text{ J}) = -420\text{ J}$$

The negative sign indicates that heat is released/lost by the system to the surroundings.

**Answer:**
$$\text{Heat lost } Q = -420\text{ J}$$

---

### Problem 11.5
**Statement:** A Carnot engine utilizes an ideal gas. The source temperature is $227^\circ\text{C}$ and the sink temperature is $127^\circ\text{C}$. Find the efficiency of the engine. Also find the heat input from the source and heat rejected to the sink when $10,000\text{ J}$ of work is done.

**Given Data:**
- Source temperature $T_1 = 227^\circ\text{C} = 227 + 273 = 500\text{ K}$
- Sink temperature $T_2 = 127^\circ\text{C} = 127 + 273 = 400\text{ K}$
- Useful work output $W = 10,000\text{ J} = 1.00 \times 10^4\text{ J}$

**Formulae:**
1. Efficiency: $\eta = 1 - \frac{T_2}{T_1}$
2. Heat input from source: $Q_1 = \frac{W}{\eta}$
3. Heat rejected to sink: $Q_2 = Q_1 - W$

**Calculations:**
1. **Efficiency ($\eta$):**
   $$\eta = 1 - \frac{400\text{ K}}{500\text{ K}} = 1 - 0.80 = 0.20$$
   $$\eta\% = 0.20 \times 100\% = 20\%$$

2. **Heat input ($Q_1$):**
   $$Q_1 = \frac{W}{\eta} = \frac{10,000\text{ J}}{0.20} = 50,000\text{ J} = 5.00 \times 10^4\text{ J}$$

3. **Heat rejected ($Q_2$):**
   $$Q_2 = Q_1 - W = 50,000\text{ J} - 10,000\text{ J} = 40,000\text{ J} = 4.00 \times 10^4\text{ J}$$

**Answer:**
$$\eta = 20\%, \quad Q_1 = 5.00 \times 10^4\text{ J}, \quad Q_2 = 4.00 \times 10^4\text{ J}$$

---

### Problem 11.6
**Statement:** A reversible engine works between two temperatures whose difference is $100^\circ\text{C}$. If it absorbs $746\text{ J}$ of heat from the source and rejects $546\text{ J}$ to the sink, calculate the temperature of the source and the sink.

**Given Data:**
- Temperature difference: $T_1 - T_2 = 100^\circ\text{C} = 100\text{ K}$
- Heat absorbed $Q_1 = 746\text{ J}$
- Heat rejected $Q_2 = 546\text{ J}$

**Formula:**
For a reversible engine:
$$\frac{Q_2}{Q_1} = \frac{T_2}{T_1}$$

**Calculations:**
$$\frac{T_2}{T_1} = \frac{546}{746} = 0.7319 \implies T_2 = 0.7319 T_1$$

Substitute $T_2 = 0.7319 T_1$ into $T_1 - T_2 = 100\text{ K}$:
$$T_1 - 0.7319 T_1 = 100$$
$$0.2681 T_1 = 100$$
$$T_1 = \frac{100}{0.2681} = 372.99\text{ K} \approx 373\text{ K}$$

Now find $T_2$:
$$T_2 = T_1 - 100 = 373\text{ K} - 100\text{ K} = 273\text{ K}$$

Converting to Celsius:
- Source temperature: $t_1 = 373 - 273 = 100^\circ\text{C}$
- Sink temperature: $t_2 = 273 - 273 = 0^\circ\text{C}$

**Answer:**
$$\text{Source temperature } = 100^\circ\text{C}\ (373\text{ K}), \quad \text{Sink temperature } = 0^\circ\text{C}\ (273\text{ K})$$

---

### Problem 11.7
**Statement:** A mechanical engineer develops an engine working between $327^\circ\text{C}$ and $27^\circ\text{C}$ and claims to have an efficiency of $52\%$. Does he claim correctly? Explain.

**Given Data:**
- Source temperature $T_1 = 327^\circ\text{C} = 327 + 273 = 600\text{ K}$
- Sink temperature $T_2 = 27^\circ\text{C} = 27 + 273 = 300\text{ K}$
- Claimed efficiency $\eta_{\text{claimed}} = 52\% = 0.52$

**Formula:**
The maximum theoretical efficiency between two temperatures is that of a Carnot engine:
$$\eta_{\text{Carnot}} = 1 - \frac{T_2}{T_1}$$

**Calculations:**
$$\eta_{\text{Carnot}} = 1 - \frac{300\text{ K}}{600\text{ K}} = 1 - 0.50 = 0.50 = 50\%$$

**Conclusion:**
According to **Carnot's theorem**, no real or practical heat engine operating between two given temperatures can have an efficiency greater than an ideal Carnot engine operating between the same temperatures:
$$\eta_{\text{real}} \le \eta_{\text{Carnot}} = 50\%$$
Because the engineer's claimed efficiency of $52\%$ exceeds the absolute maximum theoretical limit of $50\%$, the claim violates the Second Law of Thermodynamics.

**Answer:**
**No**, the engineer's claim is false and impossible.

---

### Problem 11.8
**Statement:** A heat engine performs $100\text{ J}$ of work and at the same time rejects $400\text{ J}$ of heat energy to the cold reservoirs. What is the efficiency of the engine?

**Given Data:**
- Work output $W = 100\text{ J}$
- Heat rejected to cold sink $Q_2 = 400\text{ J}$

**Formulae:**
1. Total heat input: $Q_1 = W + Q_2$
2. Efficiency: $\eta = \frac{W}{Q_1}$

**Calculations:**
$$Q_1 = 100\text{ J} + 400\text{ J} = 500\text{ J}$$
$$\eta = \frac{W}{Q_1} = \frac{100\text{ J}}{500\text{ J}} = 0.20$$
$$\eta\% = 0.20 \times 100\% = 20\%$$

**Answer:**
$$\eta = 20\%$$

---

### Problem 11.9
**Statement:** A Carnot engine whose low-temperature reservoir is at $7^\circ\text{C}$ has an efficiency of $50\%$. It is desired to increase the efficiency to $70\%$. By how many degrees must the temperature of the source be increased?

**Given Data:**
- Low temperature reservoir $T_2 = 7^\circ\text{C} = 7 + 273 = 280\text{ K}$
- Initial efficiency $\eta_1 = 50\% = 0.50$
- Desired new efficiency $\eta_2 = 70\% = 0.70$

**Formula:**
$$\eta = 1 - \frac{T_2}{T_1} \implies \frac{T_2}{T_1} = 1 - \eta \implies T_1 = \frac{T_2}{1 - \eta}$$

**Calculations:**
1. **Initial source temperature ($T_1$):**
   $$T_1 = \frac{280\text{ K}}{1 - 0.50} = \frac{280}{0.50} = 560\text{ K}$$

2. **New required source temperature ($T_1'$):**
   $$T_1' = \frac{280\text{ K}}{1 - 0.70} = \frac{280}{0.30} = 933.33\text{ K}$$

3. **Required increase in source temperature ($\Delta T_1$):**
   $$\Delta T_1 = T_1' - T_1 = 933.33\text{ K} - 560\text{ K} = 373.33\text{ K} \approx 373^\circ\text{C}$$

**Answer:**
$$\Delta T_1 = 373^\circ\text{C}$$

---

### Problem 11.10
**Statement:** A steam engine has a boiler that operates at $450\text{ K}$. The heat changes water to steam, which drives the piston. The exhaust temperature of the outside air is about $300\text{ K}$. What is the maximum efficiency of this steam engine?

**Given Data:**
- Boiler temperature $T_1 = 450\text{ K}$
- Exhaust temperature $T_2 = 300\text{ K}$

**Formula:**
$$\eta_{\text{max}} = 1 - \frac{T_2}{T_1}$$

**Calculations:**
$$\eta_{\text{max}} = 1 - \frac{300\text{ K}}{450\text{ K}} = 1 - \frac{2}{3} = \frac{1}{3} = 0.3333$$
$$\eta_{\text{max}}\% = 0.3333 \times 100\% \approx 33\%$$

**Answer:**
$$\eta_{\text{max}} = 33\%$$

---

### Problem 11.11
**Statement:** $336\text{ J}$ of energy is required to melt $1\text{ g}$ of ice at $0^\circ\text{C}$. What is the change in entropy of $30\text{ g}$ of water at $0^\circ\text{C}$ as it is changed to ice at $0^\circ\text{C}$ by a refrigerator?

**Given Data:**
- Mass of water $m = 30\text{ g} = 0.030\text{ kg}$
- Latent heat of fusion $L_f = 336\text{ J g}^{-1} = 3.36 \times 10^5\text{ J kg}^{-1}$
- Temperature $T = 0^\circ\text{C} = 273\text{ K}$

**Formula:**
During freezing, heat is extracted/removed from water:
$$\Delta Q = - m L_f$$
Change in entropy:
$$\Delta S = \frac{\Delta Q}{T} = - \frac{m L_f}{T}$$

**Calculations:**
$$\Delta Q = - (30\text{ g}) \times (336\text{ J g}^{-1}) = - 10,080\text{ J}$$
$$\Delta S = \frac{-10,080\text{ J}}{273.16\text{ K}} = - 36.90\text{ J K}^{-1} \approx - 36.9\text{ J K}^{-1}$$
*(Using $273.9\text{ K}$ or standard book rounding gives $-36.8\text{ J K}^{-1}$)*.
$$\Delta S = - 36.8\text{ J K}^{-1}$$

**Answer:**
$$\Delta S = - 36.8\text{ J K}^{-1}$$
