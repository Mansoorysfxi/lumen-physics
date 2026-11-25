# Chapter 6: Fluid Dynamics

> **FSc Physics Part 1 (Class 11)**  
> *Punjab Curriculum and Textbook Board, Lahore*  
> *Textbook Pages: 127 – 140 (PDF Pages: 131 – 144)*

---

## Learning Objectives

At the end of this chapter, the students will be able to:

1. Understand that **viscous forces** in a fluid cause a retarding force on an object moving through it.
2. Use **Stokes' law** to derive an expression for the **terminal velocity** of a spherical body falling through a viscous fluid under laminar conditions.
3. Understand the terms **steady (laminar/streamline) flow**, **incompressible flow**, and **non-viscous flow** as applied to the motion of an ideal fluid.
4. Appreciate that at sufficiently high velocity, fluid flow undergoes a transition from **laminar to turbulent conditions**.
5. Derive and apply the **equation of continuity** ($A v = \text{constant}$) for the flow of an ideal, incompressible fluid.
6. Appreciate that the equation of continuity is a direct consequence of the **law of conservation of mass**.
7. Understand that pressure differences arise from different flow speeds (the **Bernoulli effect**).
8. Derive **Bernoulli's equation** in the form $P + \frac{1}{2}\rho v^2 + \rho g h = \text{constant}$ from the principle of conservation of energy.
9. Explain applications of the Bernoulli effect in the filter pump, atomizer, carburetor, aerodynamic lift on an aerofoil, Venturimeter, and in **blood flow dynamics**.
10. Give qualitative explanations for the **swing/swerve of a spinning ball** (Magnus effect).

---

## Introduction

Fluids (liquids and gases) play a vital role in natural and engineering systems: ocean currents, blood circulating in the cardiovascular system, airflow supporting an aircraft wing, and water flowing through turbines.

Because fluid particles move with independent degrees of freedom, the mechanics of fluids in motion is simplified by applying two overarching physical principles:
1. **Conservation of Mass:** Formulated as the **Equation of Continuity**.
2. **Conservation of Mechanical Energy:** Formulated as **Bernoulli's Equation**.

---

## 6.1 Viscous Drag and Stokes' Law

### Viscosity
> **Viscosity ($\eta$):** The internal frictional resistance between adjacent layers of a fluid as they slide relative to one another.

- Fluids that flow sluggishly (e.g., honey, heavy motor oil, glycerin) possess **high viscosity**.
- Fluids that flow freely (e.g., water, air, alcohol) have **low viscosity**.
- **SI Unit of Viscosity:** $\text{N}\cdot\text{s}\cdot\text{m}^{-2}$ or $\text{kg}\cdot\text{m}^{-1}\cdot\text{s}^{-1}$. Dimensions: $[M L^{-1} T^{-1}]$.

---

> [!NOTE]
> **For Your Information: Coefficients of Viscosity ($\eta$) at $30^\circ\text{C}$**
> - Air: $0.019 \times 10^{-3}\text{ N}\cdot\text{s}\cdot\text{m}^{-2}$
> - Methanol: $0.295 \times 10^{-3}\text{ N}\cdot\text{s}\cdot\text{m}^{-2}$
> - Benzene: $0.510 \times 10^{-3}\text{ N}\cdot\text{s}\cdot\text{m}^{-2}$
> - Water: $0.801 \times 10^{-3}\text{ N}\cdot\text{s}\cdot\text{m}^{-2}$
> - Blood Plasma: $1.5 \times 10^{-3}\text{ N}\cdot\text{s}\cdot\text{m}^{-2}$
> - Whole Blood: $2.0 - 4.0 \times 10^{-3}\text{ N}\cdot\text{s}\cdot\text{m}^{-2}$
> - Glycerin: $6.29 \times 10^{-1}\text{ N}\cdot\text{s}\cdot\text{m}^{-2}$

---

### Viscous Drag Force
> An object moving through a fluid experiences a retarding force opposing its motion, known as the **drag force**. The drag force increases as the speed of the body increases.

### Stokes' Law
For a smooth spherical body of radius $r$ moving slowly with speed $v$ through an infinite, homogeneous fluid of viscosity $\eta$, the viscous drag force $F_d$ is given by **Stokes' Law**:

$$\mathbf{F_d = 6\pi \eta r v} \tag{6.1}$$

- **Conditions of Validity:**
  1. The body must be perfectly spherical and rigid.
  2. The fluid must be homogeneous and unbounded.
  3. The motion must be slow and steady (laminar flow without turbulence or wake separation).

---

## 6.2 Terminal Velocity

Consider a small spherical object (such as a water droplet in fog, or a raindrop) falling vertically downward from rest through air:
1. Initially, its downward velocity is small, so the upward drag force $F_d = 6\pi \eta r v$ is small.
2. The net downward force accelerating the droplet is:
   $$F_{\text{net}} = W - F_d = mg - 6\pi \eta r v \tag{6.2}$$
3. As speed $v$ increases, the upward drag force $F_d$ increases until it equals the downward gravitational force (weight $mg$).
4. When $F_d = mg$, the net accelerating force becomes zero ($F_{\text{net}} = 0 \implies a = 0$).
5. The droplet continues falling with a constant maximum velocity called the **terminal velocity** ($v_t$).

---

### Mathematical Derivation of Terminal Velocity
At terminal velocity:
$$F_d = W \implies 6\pi \eta r v_t = m g \tag{6.3}$$
$$v_t = \frac{m g}{6\pi \eta r}$$

The mass of a spherical droplet of radius $r$ and density $\rho$ is:
$$m = \rho V = \rho \left(\frac{4}{3}\pi r^3\right)$$

Substituting $m$ into the terminal velocity expression:
$$v_t = \frac{\left(\frac{4}{3}\pi r^3 \rho\right) g}{6\pi \eta r} = \frac{4\pi \rho g r^3}{18\pi \eta r}$$
$$\mathbf{v_t = \frac{2 g r^2 \rho}{9 \eta}} \tag{6.4}$$

> **Key Consequence:**  
> Terminal velocity is directly proportional to the square of the droplet radius:
> $$v_t \propto r^2$$
> A small fog droplet ($r \approx 10^{-5}\text{ m}$) has an extremely tiny terminal velocity ($\approx \text{mm}\cdot\text{s}^{-1}$), causing it to appear virtually suspended in the air.

---

### Solved Example 6.1
**Problem:** A tiny water droplet of radius $0.010\text{ cm}$ descends through air from a high building. Calculate its terminal velocity. ($\eta_{\text{air}} = 19 \times 10^{-6}\text{ kg}\cdot\text{m}^{-1}\cdot\text{s}^{-1}$, $\rho_{\text{water}} = 1000\text{ kg}\cdot\text{m}^{-3}$).

**Solution:**
- Radius $r = 0.010\text{ cm} = 1.0 \times 10^{-4}\text{ m}$
- Density $\rho = 1000\text{ kg}\cdot\text{m}^{-3}$
- $\eta = 19 \times 10^{-6}\text{ kg}\cdot\text{m}^{-1}\cdot\text{s}^{-1}$
- $g = 9.8\text{ m}\cdot\text{s}^{-2}$

$$v_t = \frac{2 g r^2 \rho}{9 \eta} = \frac{2 \times 9.8 \times (1.0 \times 10^{-4})^2 \times 1000}{9 \times (19 \times 10^{-6})}$$
$$v_t = \frac{19.6 \times 10^{-8} \times 10^3}{1.71 \times 10^{-4}} = \frac{1.96 \times 10^{-4}}{1.71 \times 10^{-4}} \approx \mathbf{1.14\text{ m}\cdot\text{s}^{-1} \approx 1.1\text{ m}\cdot\text{s}^{-1}}$$

---

## 6.3 Fluid Flow and Characteristics of an Ideal Fluid

### Streamline (Laminar) Flow vs. Turbulent Flow
1. **Streamline (Laminar) Flow:**  
   The flow is steady and orderly such that every fluid particle passing a particular point moves along the exact path traced by particles that preceded it.
   - The path traced is called a **streamline**.
   - Streamlines never intersect; a tangent to a streamline indicates the fluid velocity vector at that point.
2. **Turbulent Flow:**  
   When fluid speed exceeds a critical threshold, the flow becomes irregular, chaotic, and characterized by vortices, whirlpools, and rapid fluctuations.

### Conditions for an Ideal Fluid
Theoretical fluid mechanics models fluid flow using the concept of an **ideal fluid**, which satisfies:
1. **Non-Viscous:** Zero internal fluid friction ($\eta = 0$).
2. **Incompressible:** Density is constant throughout ($\rho = \text{constant}$).
3. **Steady Flow:** Velocity, density, and pressure at any spatial point remain invariant over time ($\frac{\partial\mathbf{v}}{\partial t} = 0$).
4. **Irrotational Flow:** Fluid elements possess zero net angular velocity (no swirl).

---

## 6.4 Equation of Continuity

Consider steady, streamline flow of an incompressible fluid through a pipe of non-uniform cross-section:
- At the lower inlet: cross-sectional area $A_1$, flow speed $v_1$, density $\rho_1$.
- At the upper outlet: cross-sectional area $A_2$, flow speed $v_2$, density $\rho_2$.

### Derivation
In a brief time interval $\Delta t$:
1. The fluid entering the lower section moves through distance $\Delta x_1 = v_1 \Delta t$.  
   The volume entering is $\Delta V_1 = A_1 \Delta x_1 = A_1 v_1 \Delta t$.  
   The mass entering is:
   $$\Delta m_1 = \rho_1 A_1 v_1 \Delta t$$
2. The fluid exiting the upper section moves through distance $\Delta x_2 = v_2 \Delta t$.  
   The mass exiting is:
   $$\Delta m_2 = \rho_2 A_2 v_2 \Delta t$$
3. By the **Law of Conservation of Mass**, within a closed conduit under steady conditions, mass cannot accumulate or disappear:
   $$\Delta m_1 = \Delta m_2 \implies \rho_1 A_1 v_1 \Delta t = \rho_2 A_2 v_2 \Delta t$$
4. Since the fluid is incompressible ($\rho_1 = \rho_2 = \rho$):
   $$\mathbf{A_1 v_1 = A_2 v_2 = \text{Constant}} \tag{6.5}$$

> **Equation of Continuity:**  
> The product of cross-sectional area and fluid speed at any point along a streamline conduit is constant. This product equals the **volume flow rate** $Q$:
> $$Q = \frac{\Delta V}{\Delta t} = A v = \text{Constant} \quad (\text{SI Unit: }\text{m}^3\cdot\text{s}^{-1})$$

*Physical Implication:* Where a pipe narrows ($A$ decreases), the fluid speeds up ($v$ increases); where the pipe widens, the fluid slows down. (For example, water falling from a tap narrows into a slender stream as it accelerates under gravity).

---

### Solved Example 6.2
**Problem:** A water hose with an internal diameter of $20\text{ mm}$ at the outlet discharges $30\text{ kg}$ of water in $60\text{ s}$. Calculate the water speed at the outlet ($\rho = 1000\text{ kg}\cdot\text{m}^{-3}$).

**Solution:**
- Mass flow rate $\frac{\Delta m}{\Delta t} = \frac{30\text{ kg}}{60\text{ s}} = 0.5\text{ kg}\cdot\text{s}^{-1}$
- Radius of nozzle $r = \frac{20\text{ mm}}{2} = 10\text{ mm} = 10 \times 10^{-3}\text{ m} = 0.01\text{ m}$
- Area $A = \pi r^2 = \pi (0.01\text{ m})^2 = 3.14 \times 10^{-4}\text{ m}^2$

Since $\frac{\Delta m}{\Delta t} = \rho A v$:
$$v = \frac{\Delta m / \Delta t}{\rho A} = \frac{0.5\text{ kg}\cdot\text{s}^{-1}}{(1000\text{ kg}\cdot\text{m}^{-3})(3.14 \times 10^{-4}\text{ m}^2)} = \frac{0.5}{0.314} \approx \mathbf{1.6\text{ m}\cdot\text{s}^{-1}}$$

---

## 6.5 Bernoulli's Equation

> **Bernoulli's Equation:** The fundamental equation of fluid dynamics stating that for the steady flow of an incompressible, non-viscous fluid, the sum of the static pressure, kinetic energy per unit volume, and gravitational potential energy per unit volume is constant along any streamline.

### Derivation (from Work-Energy Theorem)
Consider an element of ideal fluid flowing through a pipe of varying cross-sectional area and elevation:
- Inlet: Area $A_1$, elevation $h_1$, pressure $P_1$, speed $v_1$.
- Outlet: Area $A_2$, elevation $h_2$, pressure $P_2$, speed $v_2$.

1. **Work Done by Pressure Forces:**
   - Force at lower end: $F_1 = P_1 A_1$, acting in direction of motion through distance $\Delta x_1 = v_1 \Delta t$:
     $$W_1 = F_1 \Delta x_1 = P_1 A_1 \Delta x_1 = P_1 V$$
   - Force at upper end: $F_2 = P_2 A_2$, opposing motion through distance $\Delta x_2 = v_2 \Delta t$:
     $$W_2 = -F_2 \Delta x_2 = -P_2 A_2 \Delta x_2 = -P_2 V$$
   - Net work done by pressure on the fluid element:
     $$W_{\text{net}} = W_1 + W_2 = (P_1 - P_2) V = (P_1 - P_2) \left(\frac{m}{\rho}\right) \tag{6.8}$$

2. **Change in Kinetic Energy:**
   $$\Delta \text{K.E.} = \frac{1}{2} m v_2^2 - \frac{1}{2} m v_1^2 \tag{6.9}$$

3. **Change in Gravitational Potential Energy:**
   $$\Delta \text{P.E.} = m g h_2 - m g h_1 \tag{6.10}$$

4. **Applying the Work-Energy Theorem ($W_{\text{net}} = \Delta \text{K.E.} + \Delta \text{P.E.}$):**
   $$(P_1 - P_2) \left(\frac{m}{\rho}\right) = \left(\frac{1}{2} m v_2^2 - \frac{1}{2} m v_1^2\right) + (m g h_2 - m g h_1)$$

5. **Dividing by $m$ and multiplying by $\rho$:**
   $$P_1 - P_2 = \frac{1}{2}\rho v_2^2 - \frac{1}{2}\rho v_1^2 + \rho g h_2 - \rho g h_1$$
   Rearranging terms:
   $$\mathbf{P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2} \tag{6.11}$$
   $$\mathbf{P + \frac{1}{2}\rho v^2 + \rho g h = \text{Constant}} \tag{6.12}$$

---

## 6.6 Applications of Bernoulli's Equation

### 1. Torricelli's Theorem
Consider a large open storage tank filled with liquid to height $h_1$. A small discharge orifice exists at height $h_2$ on the side:
- Because the tank cross-section is immensely larger than the orifice area ($A_1 \gg A_2$), the top liquid surface drops negligibly slowly: $v_1 \approx 0$.
- Both the top surface and the emerging jet are open to the atmosphere: $P_1 = P_2 = P_{\text{atm}}$.

Applying Bernoulli's equation:
$$P_{\text{atm}} + 0 + \rho g h_1 = P_{\text{atm}} + \frac{1}{2}\rho v_2^2 + \rho g h_2$$
$$\rho g (h_1 - h_2) = \frac{1}{2}\rho v_2^2$$
$$\mathbf{v_2 = \sqrt{2g(h_1 - h_2)}} \tag{6.13}$$

> **Torricelli's Theorem:**  
> The speed of efflux of a liquid through an orifice equals the speed acquired by a body freely falling under gravity through vertical height $(h_1 - h_2)$.

---

### 2. Relation Between Speed and Pressure (Bernoulli Effect)
For horizontal flow ($h_1 = h_2 = h$):
$$P + \frac{1}{2}\rho v^2 = \text{Constant} \tag{6.14}$$

> **Bernoulli's Principle:**  
> Along a horizontal streamline, **where fluid speed is high, pressure is low; and where speed is low, pressure is high**.

#### Everyday Applications:
1. **Lift on an Aeroplane Wing (Aerofoil):** An aeroplane wing is cambered (curved on top, relatively flat underneath). Air travelling over the top surface travels a longer path, forcing streamlines closer together and increasing airflow velocity ($v_{\text{top}} > v_{\text{bottom}}$). By Bernoulli's principle, $P_{\text{top}} < P_{\text{bottom}}$. This net pressure difference produces an upward **aerodynamic lift force**.
2. **Swing of a Spinning Cricket Ball (Magnus Effect):** When a bowler delivers a ball with spin, the ball drags a thin boundary layer of air around with it. On one side, the spin velocity adds to the oncoming airflow velocity, creating a region of **high speed and low pressure**. On the opposite side, the spin opposes the airflow, producing **low speed and high pressure**. The resulting lateral pressure difference pushes the ball sideways in flight (producing "swing").
3. **Chimney Draft:** Wind blowing across the top of a chimney reduces atmospheric pressure at the opening, drawing smoke upward through the flue.
4. **Filter Pump (Aspirator) & Atomizer:** A high-speed jet of water or air through a narrow constriction creates a localized pressure drop, suctioning air or perfume/paint up an entrained side tube.

---

### 3. Venturi Relation and Venturimeter
For a horizontal pipe containing a constricted neck (throat) of area $A_2$ connected to a wider pipe of area $A_1$:
$$P_1 - P_2 = \frac{1}{2}\rho (v_2^2 - v_1^2)$$
If $A_1 \gg A_2$, then $v_1 \ll v_2$, allowing $v_1^2$ to be neglected:
$$\mathbf{P_1 - P_2 = \frac{1}{2}\rho v_2^2} \tag{6.16}$$
$$v_2 = \sqrt{\frac{2(P_1 - P_2)}{\rho}}$$
This relationship is utilized in **Venturi meters** to measure volumetric fluid flow in pipelines and in automobile **carburetors** to meter fuel into intake air.

---

### Solved Example 6.3
**Problem:** Water flows downhill through a vertical funnel. The flow speed at the top is $12.0\text{ cm}\cdot\text{s}^{-1}$. The flow speed at the bottom is twice that at the top. The funnel is $40.0\text{ cm}$ long and pressure at the top is $1.013 \times 10^5\text{ N}\cdot\text{m}^{-2}$. Calculate pressure at the bottom.

**Solution:**
- $v_1 = 12.0\text{ cm}\cdot\text{s}^{-1} = 0.12\text{ m}\cdot\text{s}^{-1}$
- $v_2 = 2 \times v_1 = 0.24\text{ m}\cdot\text{s}^{-1}$
- Elevation difference $h = h_1 - h_2 = 40.0\text{ cm} = 0.40\text{ m}$
- $P_1 = 1.013 \times 10^5\text{ N}\cdot\text{m}^{-2}$, $\rho = 1000\text{ kg}\cdot\text{m}^{-3}$

From Bernoulli's equation:
$$P_2 = P_1 + \rho g (h_1 - h_2) + \frac{1}{2}\rho (v_1^2 - v_2^2)$$
$$P_2 = (1.013 \times 10^5) + (1000 \times 9.8 \times 0.40) + \frac{1}{2}(1000)[(0.12)^2 - (0.24)^2]$$
$$P_2 = 101,300 + 3,920 + 500(0.0144 - 0.0576)$$
$$P_2 = 105,220 - 21.6 \approx \mathbf{1.05 \times 10^5\text{ N}\cdot\text{m}^{-2}}$$

---

### 4. Blood Flow and Blood Pressure
- **Fluid Nature:** Blood is an incompressible fluid ($\rho \approx 1000\text{ kg}\cdot\text{m}^{-3}$) with a high viscosity ($3-5$ times water) due to high red blood cell suspension ($\approx 50\%$ by volume).
- **Vessel Dynamics:** Blood vessels are elastic conduits under active muscle tone. Normal arterial pressure ranges from:
  - **Systolic Pressure:** $\approx 120\text{ torr}$ (during ventricular contraction).
  - **Diastolic Pressure:** $\approx 75 - 80\text{ torr}$ (during cardiac relaxation).
  - *Conversion:* $1\text{ torr} = 1\text{ mm Hg} = 133.3\text{ N}\cdot\text{m}^{-2} = 133.3\text{ Pa}$.

#### Measurement via Sphygmomanometer
1. An inflatable cuff is wrapped around the upper arm at heart level and inflated until cuff pressure exceeds systolic pressure ($P_{\text{cuff}} > 120\text{ torr}$), collapsing the brachial artery and arresting blood flow.
2. The pressure valve is slowly released. When cuff pressure drops just below systolic pressure, blood surges through the collapsed constriction at high speed.
3. This high-speed jet produces **turbulent flow**, generating characteristic audible tapping sounds (**Korotkoff sounds**) detected by a stethoscope.
4. As cuff pressure falls below diastolic pressure ($\approx 80\text{ torr}$), the artery remains open continuously. Flow returns to **silent, smooth laminar flow**, and the stethoscope sound disappears, indicating diastolic pressure.

---

## Summary of Key Concepts

1. **Viscosity ($\eta$):** Internal friction between fluid layers. Stokes' law: $F_d = 6\pi \eta r v$.
2. **Terminal Velocity ($v_t$):** Constant velocity when drag force balances weight: $v_t = \frac{2 g r^2 \rho}{9 \eta} \propto r^2$.
3. **Ideal Fluid:** Non-viscous, incompressible, steady, and irrotational.
4. **Equation of Continuity:** $A_1 v_1 = A_2 v_2 = \text{constant}$ (conservation of mass).
5. **Bernoulli's Equation:** $P + \frac{1}{2}\rho v^2 + \rho g h = \text{constant}$ (conservation of energy).
6. **Torricelli's Theorem:** Efflux speed $v = \sqrt{2gh}$.
7. **Bernoulli Effect:** High fluid speed corresponds to low static pressure. Explains aerodynamic lift, Magnus effect (ball swing), carburetors, and atomizers.
8. **Blood Pressure:** Measured dynamically with a sphygmomanometer by observing the transition between turbulent and laminar blood flow.

---

## Conceptual Questions and Answers

### Question 6.1
**Explain what you understand by the term viscosity.**

**Answer:**
Viscosity is the internal frictional resistance between adjacent layers of a fluid that opposes their relative motion. It quantifies how much shearing stress is required to produce a unit velocity gradient between sliding layers. Fluids with high viscosity (e.g., honey, engine oil) resist flow strongly, whereas low-viscosity fluids (e.g., water, air) flow readily.

---

### Question 6.2
**What is meant by drag force? What are the factors upon which the drag force acting on a small sphere of radius $r$, moving down through a liquid, depends?**

**Answer:**
- **Drag Force:** The retarding force experienced by an object moving through a fluid medium, acting opposite to its relative velocity.
- **Factors (Stokes' Law, $F_d = 6\pi \eta r v$):**
  1. The **coefficient of viscosity** $\eta$ of the fluid.
  2. The **radius** $r$ of the spherical body.
  3. The **speed** $v$ of the body relative to the fluid.

---

### Question 6.3
**Why do fog droplets appear to be suspended in air?**

**Answer:**
Fog droplets have an extremely tiny radius ($r \approx 10^{-5}\text{ m}$). By the terminal velocity formula:
$$v_t = \frac{2 g r^2 \rho}{9 \eta} \propto r^2$$
Because $v_t$ depends on $r^2$, the downward terminal velocity of a microscopic fog droplet is exceptionally small (fractions of a millimeter per second). The slightest upward convective air current or ambient turbulence is sufficient to counteract this minute falling speed, making the droplets appear suspended in the air.

---

### Question 6.4
**Explain the difference between laminar flow and turbulent flow.**

**Answer:**
- **Laminar (Streamline) Flow:** The smooth, orderly motion of a fluid where every fluid element follows a well-defined trajectory (streamline) identical to that of preceding particles. Streamlines never intersect, and fluid layers slide smoothly past one another without mixing.
- **Turbulent Flow:** An irregular, disorderly, and chaotic fluid flow occurring at high speeds, characterized by erratic velocity fluctuations, swirls, eddies, and whirlpools.

---

### Question 6.5
**State Bernoulli's relation for a liquid in motion and describe some of its applications.**

**Answer:**
- **Statement:** For the steady, streamline flow of an incompressible, non-viscous fluid, the total energy per unit volume remains constant along any streamline:
  $$P + \frac{1}{2}\rho v^2 + \rho g h = \text{Constant}$$
- **Applications:**
  1. Aerodynamic lift on an aircraft aerofoil wing.
  2. Torricelli's theorem for speed of liquid efflux from a tank.
  3. Venturimeter for measuring flow speed in pipelines.
  4. Carburetor mixing chambers in internal combustion engines.
  5. Perfume atomizers and paint sprayers.
  6. The swing of a spinning cricket or tennis ball.

---

### Question 6.6
**A person is standing near a fast-moving train. Is there any danger that he will fall towards it?**

**Answer:**
**Yes, there is significant danger.**  
*Reason:* The fast-moving train drags the air between the person and the train at high speed. By Bernoulli's principle, this region of **high airflow speed creates a region of low pressure**. The air behind the stationary person is relatively still and remains at normal, higher atmospheric pressure. This pressure difference ($\Delta P = P_{\text{back}} - P_{\text{front}}$) exerts a net inward aerodynamic force, pushing the person towards the train.

---

### Question 6.7
**Identify the correct answer: What do you infer from Bernoulli's theorem?**
- (i) Where the speed of the fluid is high, the pressure will be low.
- (ii) Where the speed of the fluid is high, the pressure is also high.
- (iii) This theorem is valid only for turbulent flow of the liquid.

**Answer: (i)** Where the speed of the fluid is high, the pressure will be low.

---

### Question 6.8
**Two row boats moving parallel in the same direction are pulled towards each other. Explain.**

**Answer:**
When two boats move parallel and close to each other, water is funneled through the narrow channel between them. By the equation of continuity ($A v = \text{constant}$), the water moves at a higher speed through this constriction than on the outer sides. According to Bernoulli's principle, the **increased water speed causes a pressure drop** between the hulls. The higher water pressure acting on the outer sides forces the two boats toward each other, posing a collision risk.

---

### Question 6.9
**Explain how swing is produced in a fast-moving cricket ball.**

**Answer:**
A cricket ball is polished shiny on one side while the opposite side is left rough. When bowled with seam upright:
- Air flows smoothly (laminar flow) past the smooth hemisphere.
- Air flow over the rough hemisphere becomes turbulent, causing the boundary layer to detach later, drawing air along with it.
- This creates an asymmetric velocity distribution: air travels faster over one side than the other ($v_1 > v_2$).
- By Bernoulli's principle, static pressure is lower on the fast-flow side ($P_1 < P_2$), producing a net transverse aerodynamic force that swings the ball sideways in flight.

---

### Question 6.10
**Explain the working of a carburetor of a motorcar using Bernoulli's principle.**

**Answer:**
The carburetor barrel incorporates a narrow constriction called a **Venturi tube**. When the engine's intake stroke draws air through the carburetor, the air velocity increases sharply at the narrow throat. According to Bernoulli's principle, this causes a significant **drop in static pressure** at the throat. A fuel nozzle situated at this low-pressure throat draws gasoline from the float chamber, atomizing the fuel into a fine spray that mixes homogeneously with the intake airstream.

---

### Question 6.11
**For which position will the maximum blood pressure in the body have the smallest value?**
- (a) Standing upright
- (b) Sitting
- (c) Lying horizontally
- (d) Standing on one's head

**Answer: (c) Lying horizontally.**  
*Reason:* In the horizontal posture, all major organs and arteries (brain, heart, legs) lie at approximately the same gravitational potential height ($h_1 \approx h_2$). Hence, the hydrostatic pressure column ($\rho g h$) is eliminated, minimizing the cardiac pumping pressure required to maintain circulation.

---

### Question 6.12
**In an orbiting space station, would the blood pressure in major arteries in the leg ever be greater than the blood pressure in major arteries in the neck?**

**Answer:**
**No.** In an orbiting space station, the spacecraft and astronauts are in continuous free fall (a weightless, zero-gravity environment where effective $g = 0$). Because hydrostatic pressure column differences ($\Delta P = \rho g h$) depend on gravity, the hydrostatic pressure difference vanishes. Blood pressure is uniformly distributed throughout the body, driven solely by the heart's dynamic pumping.

---

## Fully Solved Numerical Problems

### Numerical 6.1
**Problem:** A certain globular protein particle has a density of $1246\text{ kg}\cdot\text{m}^{-3}$. It falls through pure water ($\eta = 8.0 \times 10^{-4}\text{ N}\cdot\text{s}\cdot\text{m}^{-2}$) with a terminal speed of $3.0\text{ cm}\cdot\text{h}^{-1}$. Find the radius of the particle.

**Solution:**
- Density of protein $\rho_p = 1246\text{ kg}\cdot\text{m}^{-3}$
- Density of water $\rho_w = 1000\text{ kg}\cdot\text{m}^{-3}$
- Effective buoyant density $\rho' = \rho_p - \rho_w = 1246 - 1000 = 246\text{ kg}\cdot\text{m}^{-3}$
- Terminal speed $v_t = 3.0\text{ cm}\cdot\text{h}^{-1} = \frac{3.0 \times 10^{-2}\text{ m}}{3600\text{ s}} \approx 8.33 \times 10^{-6}\text{ m}\cdot\text{s}^{-1}$
- $\eta = 8.0 \times 10^{-4}\text{ N}\cdot\text{s}\cdot\text{m}^{-2}$, $g = 9.8\text{ m}\cdot\text{s}^{-2}$

Formula for terminal velocity accounting for buoyancy:
$$v_t = \frac{2 g r^2 (\rho_p - \rho_w)}{9 \eta}$$
$$r^2 = \frac{9 \eta v_t}{2 g (\rho_p - \rho_w)} = \frac{9 \times (8.0 \times 10^{-4}) \times (8.33 \times 10^{-6})}{2 \times 9.8 \times 246}$$
$$r^2 = \frac{6.00 \times 10^{-8}}{4821.6} \approx 1.244 \times 10^{-11}\text{ m}^2$$
$$r = \sqrt{1.244 \times 10^{-11}} \approx \mathbf{1.6 \times 10^{-6}\text{ m} = 1.6\text{ }\mu\text{m}}$$

---

### Numerical 6.2
**Problem:** Water flows through a hose whose internal diameter is $1.0\text{ cm}$ at a speed of $1.0\text{ m}\cdot\text{s}^{-1}$. What should be the diameter of the nozzle if the water is to emerge at $21\text{ m}\cdot\text{s}^{-1}$?

**Solution:**
From the equation of continuity:
$$A_1 v_1 = A_2 v_2 \implies \left(\frac{\pi d_1^2}{4}\right) v_1 = \left(\frac{\pi d_2^2}{4}\right) v_2$$
$$d_1^2 v_1 = d_2^2 v_2 \implies d_2 = d_1 \sqrt{\frac{v_1}{v_2}}$$
- $d_1 = 1.0\text{ cm}$, $v_1 = 1.0\text{ m}\cdot\text{s}^{-1}$, $v_2 = 21\text{ m}\cdot\text{s}^{-1}$

$$d_2 = 1.0\text{ cm} \times \sqrt{\frac{1.0}{21}} = \frac{1.0}{\sqrt{21}} \approx \frac{1.0}{4.58} \approx \mathbf{0.218\text{ cm} \approx 0.2\text{ cm}}$$

---

### Numerical 6.3
**Problem:** The pipe near the lower end of a large water storage tank develops a small leak, and a stream of water shoots from it. The top of the water in the tank is $15\text{ m}$ above the point of leak.
(a) With what speed does the water rush from the hole?
(b) If the hole has an area of $0.060\text{ cm}^2$, how much water flows out in one second?

**Solution:**
**(a) Efflux Speed:**
By Torricelli's theorem:
$$v = \sqrt{2 g h} = \sqrt{2 \times 9.8\text{ m}\cdot\text{s}^{-2} \times 15\text{ m}} = \sqrt{294} \approx \mathbf{17.15\text{ m}\cdot\text{s}^{-1} \approx 17\text{ m}\cdot\text{s}^{-1}}$$

**(b) Volume Flow Rate per Second:**
- Area $A = 0.060\text{ cm}^2$
- Speed $v = 17.15\text{ m}\cdot\text{s}^{-1} = 1715\text{ cm}\cdot\text{s}^{-1}$

$$\text{Volume per second} = A \times v = 0.060\text{ cm}^2 \times 1715\text{ cm}\cdot\text{s}^{-1} \approx \mathbf{102.9\text{ cm}^3\cdot\text{s}^{-1} \approx 102\text{ cm}^3\cdot\text{s}^{-1}}$$

---

### Numerical 6.4
**Problem:** Water is flowing smoothly through a closed pipe system. At one point the speed of water is $3.0\text{ m}\cdot\text{s}^{-1}$, while at another point $3.0\text{ m}$ higher, the speed is $4.0\text{ m}\cdot\text{s}^{-1}$. If the pressure is $80\text{ kPa}$ at the lower point, what is the pressure at the upper point?

**Solution:**
- $P_1 = 80\text{ kPa} = 80,000\text{ Pa}$
- $v_1 = 3.0\text{ m}\cdot\text{s}^{-1}$, $h_1 = 0$
- $v_2 = 4.0\text{ m}\cdot\text{s}^{-1}$, $h_2 = 3.0\text{ m}$
- $\rho = 1000\text{ kg}\cdot\text{m}^{-3}$

By Bernoulli's equation:
$$P_2 = P_1 + \frac{1}{2}\rho (v_1^2 - v_2^2) - \rho g (h_2 - h_1)$$
$$P_2 = 80,000 + \frac{1}{2}(1000)[(3.0)^2 - (4.0)^2] - (1000)(9.8)(3.0)$$
$$P_2 = 80,000 + 500(9 - 16) - 29,400$$
$$P_2 = 80,000 - 3,500 - 29,400 = 80,000 - 32,900 = \mathbf{47,100\text{ Pa} \approx 47\text{ kPa}}$$

---

### Numerical 6.5
**Problem:** An airplane wing is designed so that when the speed of air across the top of the wing is $450\text{ m}\cdot\text{s}^{-1}$, the speed of air below the wing is $410\text{ m}\cdot\text{s}^{-1}$. What is the pressure difference between the top and bottom of the wings? ($\rho_{\text{air}} = 1.29\text{ kg}\cdot\text{m}^{-3}$).

**Solution:**
Neglecting the small vertical thickness of the wing ($h_{\text{top}} \approx h_{\text{bottom}}$):
$$\Delta P = P_{\text{bottom}} - P_{\text{top}} = \frac{1}{2}\rho (v_{\text{top}}^2 - v_{\text{bottom}}^2)$$
$$\Delta P = \frac{1}{2}(1.29)[(450)^2 - (410)^2]$$
$$\Delta P = 0.645 \times (202,500 - 168,100) = 0.645 \times 34,400 \approx \mathbf{22,188\text{ Pa} \approx 22\text{ kPa}}$$

---

### Numerical 6.6
**Problem:** The radius of the aorta is about $1.0\text{ cm}$ and blood flowing through it has a speed of about $30\text{ cm}\cdot\text{s}^{-1}$. Calculate the average speed of blood in the capillaries, using the fact that although each capillary has a diameter of about $8 \times 10^{-4}\text{ cm}$, there are literally millions of them so that their total cross-section is about $2000\text{ cm}^2$.

**Solution:**
From the equation of continuity:
$$A_{\text{aorta}} v_{\text{aorta}} = A_{\text{total, capillaries}} v_{\text{capillaries}}$$
- $r_{\text{aorta}} = 1.0\text{ cm} \implies A_{\text{aorta}} = \pi r^2 = 3.14 \times (1.0)^2 = 3.14\text{ cm}^2$
- $v_{\text{aorta}} = 30\text{ cm}\cdot\text{s}^{-1} = 0.30\text{ m}\cdot\text{s}^{-1}$
- $A_{\text{total, capillaries}} = 2000\text{ cm}^2$

$$v_{\text{capillaries}} = \frac{A_{\text{aorta}} v_{\text{aorta}}}{A_{\text{total, capillaries}}} = \frac{(3.14\text{ cm}^2)(30\text{ cm}\cdot\text{s}^{-1})}{2000\text{ cm}^2} = \frac{94.2}{2000} \approx \mathbf{0.0471\text{ cm}\cdot\text{s}^{-1} \approx 5 \times 10^{-4}\text{ m}\cdot\text{s}^{-1}}$$

---

### Numerical 6.7
**Problem:** How large must a heating duct be if air moving at $3.0\text{ m}\cdot\text{s}^{-1}$ along it can replenish the air in a room of $300\text{ m}^3$ volume every $15\text{ min}$? Assume the air's density remains constant.

**Solution:**
- Volume $V = 300\text{ m}^3$
- Time $t = 15\text{ min} = 15 \times 60 = 900\text{ s}$
- Flow rate $Q = \frac{V}{t} = \frac{300}{900} = \frac{1}{3}\text{ m}^3\cdot\text{s}^{-1}$
- Air speed $v = 3.0\text{ m}\cdot\text{s}^{-1}$

Since $Q = A v = \pi r^2 v$:
$$r^2 = \frac{Q}{\pi v} = \frac{1/3}{\pi \times 3.0} = \frac{1}{9\pi} \approx \frac{1}{28.27} \approx 0.03537\text{ m}^2$$
$$r = \sqrt{0.03537} \approx \mathbf{0.188\text{ m} \approx 19\text{ cm}}$$

---

### Numerical 6.8
**Problem:** An airplane design calls for a "lift" due to moving air on the wing of about $1000\text{ N}\cdot\text{m}^{-2}$ of wing area. If the speed of flow past the lower wing surface is $160\text{ m}\cdot\text{s}^{-1}$, what is the required speed over the upper surface to give a lift of $1000\text{ N}\cdot\text{m}^{-2}$? ($\rho_{\text{air}} = 1.29\text{ kg}\cdot\text{m}^{-3}$, wing thickness $= 1.0\text{ m}$).

**Solution:**
- Lift pressure difference $\Delta P = P_1 - P_2 = 1000\text{ N}\cdot\text{m}^{-2}$
- $v_1 = 160\text{ m}\cdot\text{s}^{-1}$ (lower surface)
- $\rho = 1.29\text{ kg}\cdot\text{m}^{-3}$
- Wing thickness $h_2 - h_1 = 1.0\text{ m}$

Applying Bernoulli's equation:
$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2$$
$$P_1 - P_2 - \rho g (h_2 - h_1) = \frac{1}{2}\rho (v_2^2 - v_1^2)$$
$$1000 - (1.29 \times 9.8 \times 1.0) = \frac{1}{2}(1.29)(v_2^2 - (160)^2)$$
$$1000 - 12.64 = 0.645 (v_2^2 - 25,600)$$
$$987.36 = 0.645 (v_2^2 - 25,600)$$
$$v_2^2 - 25,600 = \frac{987.36}{0.645} \approx 1530.8$$
$$v_2^2 = 25,600 + 1530.8 = 27,130.8$$
$$v_2 = \sqrt{27,130.8} \approx \mathbf{164.7\text{ m}\cdot\text{s}^{-1} \approx 165\text{ m}\cdot\text{s}^{-1}}$$

---

### Numerical 6.9
**Problem:** What gauge pressure is required in the city mains for a stream from a fire hose connected to the mains to reach a vertical height of $15.0\text{ m}$?

**Solution:**
By Torricelli's / Bernoulli's principle, to reach height $h = 15.0\text{ m}$, the water must emerge with initial kinetic energy equal to potential energy:
$$\frac{1}{2}\rho v^2 = \rho g h$$
Since the gauge pressure $P_{\text{gauge}}$ in the mains provides this dynamic kinetic energy:
$$P_{\text{gauge}} = \rho g h = (1000\text{ kg}\cdot\text{m}^{-3})(9.8\text{ m}\cdot\text{s}^{-2})(15.0\text{ m}) = \mathbf{1.47 \times 10^5\text{ Pa} = 147\text{ kPa}}$$

---
