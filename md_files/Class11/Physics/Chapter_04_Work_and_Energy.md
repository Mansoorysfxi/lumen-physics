# Chapter 4: Work and Energy

> **FSc Physics Part 1 (Class 11)**  
> *Punjab Curriculum and Textbook Board, Lahore*  
> *Textbook Pages: 77 – 98 (PDF Pages: 81 – 102)*

---

## Learning Objectives

At the end of this chapter, the students will be able to:

1. Understand the concept of **work** in terms of the product of force and displacement in the direction of the force.
2. Understand and derive the formula $\text{Work} = mgh$ for work done in a gravitational field near the Earth's surface.
3. Understand that work can be calculated from the **area under the force-displacement graph**.
4. Relate **power** to work done.
5. Define power as the **scalar product of force and velocity** ($\mathbf{F} \cdot \mathbf{v}$).
6. Quote examples of power from everyday life.
7. Explain the two types of **mechanical energy** (kinetic and potential).
8. Understand and apply the **work-energy principle**.
9. Derive an expression for **absolute gravitational potential energy**.
10. Define and calculate **escape velocity**.
11. Understand that in a resistive medium, the **loss of potential energy** of a body equals the **gain in kinetic energy plus work done against friction**.
12. Give examples of **conservation of energy** from everyday life.
13. Describe various **non-conventional sources of energy**.

---

## Introduction

In everyday life, the term "work" is commonly used to describe any physical or mental effort. In physics, however, work has a precise technical definition requiring two essential elements:
1. An applied **force**.
2. A **displacement** produced by the force.

---

## 4.1 Work Done by a Constant Force

Consider an object displaced through a displacement $\mathbf{d}$ while acted upon by a constant force $\mathbf{F}$ oriented at an angle $\theta$ to the direction of motion.

> The **work done** $W$ by a constant force is defined as the scalar (dot) product of the force $\mathbf{F}$ and the displacement $\mathbf{d}$:

$$W = \mathbf{F} \cdot \mathbf{d} = F d \cos\theta = (F \cos\theta) d \tag{4.1}$$

where $(F \cos\theta)$ represents the effective component of the force acting parallel to the direction of the displacement.

---

### Graphical Representation of Work Done
When a constant force acts through a distance $d$, the process can be represented on a force-displacement graph:
- Distance is plotted on the horizontal axis ($x$-axis) and force on the vertical axis ($y$-axis).
- For a constant force, the graph is a horizontal straight line.
- The area of the shaded rectangular region of length $d$ and height $F\cos\theta$ is $(F\cos\theta)d$, which equals the work done.

> **General Rule:**  
> The **area under the force-displacement curve** is numerically equal to the **work done** by the force.

---

### Characteristics and Sign of Work
1. **Work is a Scalar Quantity:** Although calculated from two vectors ($\mathbf{F}$ and $\mathbf{d}$), work has magnitude only.
2. **Positive Work ($0^\circ \le \theta < 90^\circ$):** When the component of force is in the same direction as displacement (e.g., pulling a trolley forward, $\cos\theta > 0$).
3. **Zero Work ($\theta = 90^\circ$):** When the force is perpendicular to displacement ($\cos 90^\circ = 0$).  
   *Examples:*
   - A person carrying a bucket of water horizontally at constant speed does zero work on the bucket because the lifting force is upward while displacement is horizontal.
   - Pushing against a rigid stationary wall does zero work because displacement $d = 0$.
   - Centripetal force in circular motion does zero work because $\mathbf{F}_c \perp \mathbf{v}$.
4. **Negative Work ($90^\circ < \theta \le 180^\circ$):** When the force opposes the displacement ($\cos\theta < 0$). For example, the work done by frictional or retarding forces ($\theta = 180^\circ, \cos 180^\circ = -1$).
5. **SI Unit of Work:** The SI unit of work is the **Joule** ($\text{J}$):
   $$1\text{ Joule} = 1\text{ Newton} \times 1\text{ Metre} = 1\text{ N}\cdot\text{m} = 1\text{ kg}\cdot\text{m}^2\cdot\text{s}^{-2}$$
   *One joule is defined as the amount of work done when a force of one newton displaces a body through a distance of one metre in the direction of the force.*

---

## 4.2 Work Done by a Variable Force

In most real physical situations, the applied force varies in magnitude, direction, or both as the body moves (e.g., the gravitational force on an ascending rocket varies as $1/r^2$, or the restoring force of an elastic spring varies as $F = kx$).

### Calculation Method
To calculate work done by a variable force along a path from point $a$ to point $b$:
1. Subdivide the total path into $n$ very small displacement intervals $\Delta \mathbf{d}_1, \Delta \mathbf{d}_2, \dots, \Delta \mathbf{d}_n$.
2. Choose intervals so small that the force $\mathbf{F}_i$ remains approximately constant during each interval.
3. The work done during the $i$-th interval is:
   $$\Delta W_i = \mathbf{F}_i \cdot \Delta \mathbf{d}_i = F_i \cos\theta_i \Delta d_i$$
4. The total work done is the sum of works over all intervals:
   $$W_{\text{total}} = \sum_{i=1}^n F_i \cos\theta_i \Delta d_i \tag{4.2}$$
5. In the limit where the number of intervals $n \to \infty$ and each $\Delta d_i \to 0$:
   $$W_{\text{total}} = \lim_{\Delta d \to 0} \sum_{i=1}^n F_i \cos\theta_i \Delta d_i \tag{4.3}$$

> **Graphical Interpretation:**  
> The work done by a variable force equals the **total area under the $F\cos\theta$ versus $d$ curve** between initial position $a$ and final position $b$.

---

### Solved Example 4.1
**Problem:** A force $F$ acting on an object varies with distance $x$ as follows:
- From $x = 0$ to $x = 4\text{ m}$, the force is constant at $5\text{ N}$.
- From $x = 4\text{ m}$ to $x = 6\text{ m}$, the force decreases uniformly from $5\text{ N}$ to $0\text{ N}$.  
Calculate the total work done by the force as the object moves from $x = 0$ to $x = 6\text{ m}$.

**Solution:**
The total work done equals the total area under the force-distance graph:
1. **Area of rectangular section ($x = 0$ to $x = 4\text{ m}$):**
   $$W_1 = \text{base} \times \text{height} = 4\text{ m} \times 5\text{ N} = \mathbf{20\text{ J}}$$
2. **Area of triangular section ($x = 4\text{ m}$ to $x = 6\text{ m}$):**
   $$W_2 = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times (6 - 4)\text{ m} \times 5\text{ N} = \frac{1}{2} \times 2 \times 5 = \mathbf{5\text{ J}}$$
3. **Total Work Done:**
   $$W_{\text{total}} = W_1 + W_2 = 20\text{ J} + 5\text{ J} = \mathbf{25\text{ J}}$$

---

## 4.3 Work Done by Gravitational Field

> The space around the Earth in which its gravitational attraction is exerted on other bodies is called the **gravitational field**.

Consider displacing an object of mass $m$ with constant velocity from point $A$ to point $B$ (vertical separation $h$) along three different paths in Earth's gravitational field:

### 1. Along Path 1 ($A \to D \to B$):
- Along horizontal segment $AD$: The gravitational force $m\mathbf{g}$ is directed vertically downward while displacement is horizontal ($\theta = 90^\circ$).
  $$W_{AD} = mg \cdot \Delta x \cos 90^\circ = 0$$
- Along vertical segment $DB$: The displacement is upward while gravity acts downward ($\theta = 180^\circ$).
  $$W_{DB} = mg \cdot h \cos 180^\circ = -mgh$$
- Total work along Path 1:
  $$W_{ADB} = W_{AD} + W_{DB} = 0 + (-mgh) = \mathbf{-mgh}$$

### 2. Along Path 2 ($A \to C \to B$):
- Along vertical segment $AC$:
  $$W_{AC} = mg \cdot h \cos 180^\circ = -mgh$$
- Along horizontal segment $CB$:
  $$W_{CB} = mg \cdot \Delta x \cos 90^\circ = 0$$
- Total work along Path 2:
  $$W_{ACB} = W_{AC} + W_{CB} = -mgh + 0 = \mathbf{-mgh}$$

### 3. Along Path 3 (Arbitrary Curved Path):
Subdivide the smooth curve into a staircase of $n$ infinitesimal horizontal ($\Delta x_i$) and vertical ($\Delta y_i$) steps:
- For every horizontal step: $\theta = 90^\circ \implies \Delta W_{xi} = 0$.
- For every vertical step: $\theta = 180^\circ \implies \Delta W_{yi} = -mg \Delta y_i$.
- Summing over all steps:
  $$W_{AB} = -mg \sum_{i=1}^n \Delta y_i = -mg h$$

> **Conclusion:**  
> The work done by the gravitational force in displacing an object between two points is **independent of the path followed**.

---

### Conservative Field and Conservative Forces
> A force field is said to be **conservative** if:
> 1. The work done by the field force in moving an object between two points depends only on the initial and final positions and is independent of the path followed.
> 2. The total work done around any closed loop is zero:
>    $$\oint \mathbf{F} \cdot d\mathbf{r} = 0$$

- **Examples of Conservative Forces:**
  - Gravitational force
  - Elastic restoring force of a spring
  - Electrostatic force between charges
- **Examples of Non-Conservative Forces:**
  - Frictional force (work done depends on path length and is always dissipative)
  - Viscous drag / air resistance
  - Tension in a flexible string
  - Propulsion forces of motors or rockets

---

## 4.4 Power

> **Power** is defined as the time rate of doing work or transferring energy.

### Average Power
If an amount of work $\Delta W$ is performed in time interval $\Delta t$:
$$P_{\text{av}} = \frac{\Delta W}{\Delta t} \tag{4.4}$$

### Instantaneous Power
The power delivered at any particular instant of time:
$$P = \lim_{\Delta t \to 0} \frac{\Delta W}{\Delta t} \tag{4.5}$$

### Power in Terms of Force and Velocity
Since $\Delta W = \mathbf{F} \cdot \Delta \mathbf{d}$:
$$P = \lim_{\Delta t \to 0} \left(\frac{\mathbf{F} \cdot \Delta \mathbf{d}}{\Delta t}\right) = \mathbf{F} \cdot \lim_{\Delta t \to 0}\left(\frac{\Delta \mathbf{d}}{\Delta t}\right)$$
$$\mathbf{P = \mathbf{F} \cdot \mathbf{v}} \tag{4.6}$$
Power is the scalar product of applied force $\mathbf{F}$ and instantaneous velocity $\mathbf{v}$.

### Units of Power
- **SI Unit:** The **Watt** ($\text{W}$).
  $$1\text{ Watt} = 1\text{ Joule per second} = 1\text{ J}\cdot\text{s}^{-1} = 1\text{ kg}\cdot\text{m}^2\cdot\text{s}^{-3}$$
  *One watt is the power of an agency that does one joule of work in one second.*
- **Horsepower (hp):** An English engineering unit:
  $$1\text{ hp} = 746\text{ W} \approx 0.75\text{ kW}$$
- **Commercial Unit of Electrical Energy (Kilowatt-Hour):**
  > **One kilowatt-hour ($\text{kWh}$)** is the energy consumed by an agency working at a steady rate of one kilowatt for one hour.
  $$1\text{ kWh} = (1000\text{ W}) \times (3600\text{ s}) = 3.6 \times 10^6\text{ J} = \mathbf{3.6\text{ MJ}}$$

---

### Solved Example 4.2
**Problem:** A $70\text{ kg}$ man runs up a long flight of stairs in $4.0\text{ s}$. The vertical height of the stairs is $4.5\text{ m}$. Calculate his power output in watts.

**Solution:**
- Work done against gravity:
  $$W = m g h = (70\text{ kg})(9.8\text{ m}\cdot\text{s}^{-2})(4.5\text{ m}) = 3087\text{ J}$$
- Power output:
  $$P = \frac{W}{t} = \frac{3087\text{ J}}{4.0\text{ s}} \approx \mathbf{7.7 \times 10^2\text{ W} = 770\text{ W}}$$

---

## 4.5 Energy and the Work-Energy Principle

> The **energy** of a body is defined as its capacity to do work.

### Two Basic Forms of Mechanical Energy
1. **Kinetic Energy ($\text{K.E.}$):** Energy possessed by a body by virtue of its motion:
   $$\text{K.E.} = \frac{1}{2} m v^2 \tag{4.7}$$
2. **Potential Energy ($\text{P.E.}$):** Energy possessed by a body by virtue of its position in a force field or its constrained configuration:
   - *Gravitational Potential Energy (near Earth's surface):*
     $$\text{P.E.}_g = m g h \tag{4.8}$$
   - *Elastic Potential Energy (compressed/stretched spring):*
     $$\text{P.E.}_e = \frac{1}{2} k x^2$$

---

### Work-Energy Principle
Consider a body of mass $m$ moving with initial speed $v_i$. A constant net force $F$ acts on it through distance $d$, accelerating it uniformly to speed $v_f$:
- From Newton's Second Law: $F = ma \implies a = \frac{F}{m}$
- From the third equation of motion:
  $$2 a d = v_f^2 - v_i^2 \implies 2\left(\frac{F}{m}\right) d = v_f^2 - v_i^2$$
  $$F d = \frac{1}{2} m v_f^2 - \frac{1}{2} m v_i^2 \tag{4.11}$$

> **Work-Energy Principle:**  
> The work done on a body by the net force equals the change in its kinetic energy:
> $$W_{\text{net}} = \Delta \text{K.E.} = \text{K.E.}_f - \text{K.E.}_i$$

*Extension:* If work is done against conservative forces, it is stored as potential energy:
- Lifting a body vertically: $W = \Delta \text{P.E.}_g = mgh$.
- Compressing an ideal spring: $W = \Delta \text{P.E.}_e = \frac{1}{2} k x^2$.

---

## 4.6 Absolute Gravitational Potential Energy

The formula $\text{P.E.} = mgh$ assumes a constant gravitational force $g$, which is valid only close to Earth's surface. Over astronomical distances, gravitational attraction obeys Newton's Law of Universal Gravitation:
$$F = \frac{G M m}{r^2}$$
where $M$ is Earth's mass, $m$ is the object's mass, and $r$ is the radial distance from Earth's center.

> **Absolute Potential Energy:**  
> The absolute gravitational potential energy of an object at a point is the work done by the gravitational field in displacing the object from that point to infinity (where the gravitational force becomes zero).

### Derivation
Divide the distance from point $1$ ($r_1$) to infinity into tiny steps $\Delta r = r_2 - r_1$:
1. The midpoint distance between $r_1$ and $r_2$ is $r \approx \sqrt{r_1 r_2}$, so:
   $$F \approx \frac{G M m}{r_1 r_2}$$
2. Work done in moving mass $m$ from point $1$ to point $2$ against gravity ($\theta = 180^\circ$):
   $$\Delta W_{1 \to 2} = -F \Delta r = -\frac{G M m}{r_1 r_2} (r_2 - r_1) = -G M m \left(\frac{1}{r_1} - \frac{1}{r_2}\right)$$
3. Similarly, for subsequent steps up to point $N$ at distance $r_N$:
   $$W_{1 \to N} = -G M m \left[\left(\frac{1}{r_1} - \frac{1}{r_2}\right) + \left(\frac{1}{r_2} - \frac{1}{r_3}\right) + \dots + \left(\frac{1}{r_{N-1}} - \frac{1}{r_N}\right)\right]$$
   $$W_{1 \to N} = -G M m \left(\frac{1}{r_1} - \frac{1}{r_N}\right)$$
4. Setting point $N$ at infinity ($r_N = \infty \implies \frac{1}{\infty} = 0$) and $r_1 = r$:
   $$\mathbf{U(r) = -\frac{G M m}{r}} \tag{4.14}$$

### Absolute P.E. on the Surface of Earth
Setting $r = R$ (Earth's radius):
$$\mathbf{U_g = -\frac{G M m}{R}} \tag{4.15}$$

- **Physical Significance of the Negative Sign:** The negative sign indicates an **attractive force field**. The mass $m$ is gravitationally bound to the Earth. To free the mass completely, an amount of energy equal to $+\frac{GMm}{R}$ must be supplied.

---

## 4.7 Escape Velocity

> **Escape velocity** is the minimum initial velocity with which an object must be projected vertically upward from the surface of a celestial body so that it completely overcomes the body's gravitational pull and never returns.

### Derivation
For an object of mass $m$ launched from Earth's surface ($r = R$) to escape to infinity, its initial kinetic energy must equal the work required to take it from the surface to infinity:
$$\text{Initial K.E.} = \text{Increase in P.E. to }\infty$$
$$\frac{1}{2} m v_{\text{esc}}^2 = \frac{G M m}{R}$$
$$v_{\text{esc}}^2 = \frac{2 G M}{R} \tag{4.16}$$

Since acceleration due to gravity at Earth's surface is $g = \frac{G M}{R^2} \implies G M = g R^2$:
$$v_{\text{esc}} = \sqrt{\frac{2(g R^2)}{R}} = \mathbf{\sqrt{2 g R}} \tag{4.17}$$

### Numerical Value for Earth
Using $g = 9.8\text{ m}\cdot\text{s}^{-2}$ and Earth's radius $R = 6.4 \times 10^6\text{ m}$:
$$v_{\text{esc}} = \sqrt{2 \times 9.8 \times 6.4 \times 10^6} = \sqrt{1.254 \times 10^8} \approx 1.12 \times 10^4\text{ m}\cdot\text{s}^{-1} \approx \mathbf{11.2\text{ km}\cdot\text{s}^{-1}}$$

> [!NOTE]
> **For Your Information: Escape Speeds of Heavenly Bodies**
> - Moon: $2.4\text{ km}\cdot\text{s}^{-1}$
> - Mercury: $4.3\text{ km}\cdot\text{s}^{-1}$
> - Mars: $5.0\text{ km}\cdot\text{s}^{-1}$
> - Earth: $11.2\text{ km}\cdot\text{s}^{-1}$
> - Uranus: $22.4\text{ km}\cdot\text{s}^{-1}$
> - Saturn: $37.0\text{ km}\cdot\text{s}^{-1}$
> - Jupiter: $61.0\text{ km}\cdot\text{s}^{-1}$
> - Sun: $618\text{ km}\cdot\text{s}^{-1}$

---

## 4.8 Interconversion of Potential and Kinetic Energy

Consider an object of mass $m$ dropped from rest from a height $h$ above the ground in the absence of air friction:

1. **At Position $A$ (initial release at height $h$):**
   - Velocity $v_A = 0 \implies \text{K.E.}_A = 0$
   - Height $= h \implies \text{P.E.}_A = mgh$
   - Total mechanical energy:
     $$E_A = \text{P.E.}_A + \text{K.E.}_A = mgh + 0 = \mathbf{mgh}$$

2. **At Position $B$ (after falling through distance $x$, remaining height $h - x$):**
   - Height $= h - x \implies \text{P.E.}_B = mg(h - x)$
   - Velocity: $v_B^2 = 0 + 2gx = 2gx \implies \text{K.E.}_B = \frac{1}{2} m v_B^2 = \frac{1}{2} m (2gx) = mgx$
   - Total mechanical energy:
     $$E_B = \text{P.E.}_B + \text{K.E.}_B = mg(h - x) + mgx = \mathbf{mgh}$$

3. **At Position $C$ (just before striking the ground, height $= 0$):**
   - Height $= 0 \implies \text{P.E.}_C = 0$
   - Velocity: $v_C^2 = 0 + 2gh = 2gh \implies \text{K.E.}_C = \frac{1}{2} m (2gh) = mgh$
   - Total mechanical energy:
     $$E_C = \text{P.E.}_C + \text{K.E.}_C = 0 + mgh = \mathbf{mgh}$$

> **General Law for Frictionless Motion:**  
> $$\mathbf{\text{Loss in P.E.} = \text{Gain in K.E.}}$$
> $$mg(h_1 - h_2) = \frac{1}{2} m (v_2^2 - v_1^2) \tag{4.19}$$

### Motion in the Presence of Air Friction
When a resistive force $f$ opposes motion, work $f \cdot h$ must be done against friction:
$$mgh = \frac{1}{2} m v^2 + f h \tag{4.20}$$
$$\mathbf{\text{Loss in P.E.} = \text{Gain in K.E.} + \text{Work done against friction}}$$

---

### Solved Example 4.3
**Problem:** A brick of mass $2.0\text{ kg}$ is dropped from rest from a height of $5.0\text{ m}$ above the ground. What is its velocity at a height of $3.0\text{ m}$ above the ground?

**Solution:**
Using energy conservation (Loss in P.E. = Gain in K.E.):
$$mg(h_1 - h_2) = \frac{1}{2} m (v_2^2 - v_1^2)$$
Since $v_1 = 0$:
$$g(h_1 - h_2) = \frac{1}{2} v_2^2 \implies v_2 = \sqrt{2g(h_1 - h_2)}$$
$$v_2 = \sqrt{2 \times 9.8\text{ m}\cdot\text{s}^{-2} \times (5.0 - 3.0)\text{ m}} = \sqrt{2 \times 9.8 \times 2.0} = \sqrt{39.2} \approx \mathbf{6.3\text{ m}\cdot\text{s}^{-1}}$$

---

## 4.9 Law of Conservation of Energy

> **Law of Conservation of Energy:**  
> Energy cannot be created nor destroyed. It can only be transformed from one form into another, but the total amount of energy in an isolated system remains constant.

$$\text{Total Energy} = \text{K.E.} + \text{P.E.} + \text{Other Energy Forms} = \text{Constant}$$

In any macroscopic energy transfer, dissipative forces (friction, viscosity, air resistance) inevitably convert useful mechanical energy into ambient thermal energy (heat) and acoustic energy (sound). This degradation of energy necessitates the continuous discovery and harnessing of new energy sources.

---

## 4.10 Non-Conventional Energy Sources

Non-conventional (renewable) energy sources are clean alternatives to fossil fuels that replenish naturally and minimize environmental pollution:

1. **Energy from Tides:**
   - Gravitational interaction with the Moon and Sun creates ocean tides twice daily.
   - A tidal barrage/dam traps sea water during high tide. At low tide, the stored water is released through hydro-turbines to drive electrical generators.
   - *Advantage:* Zero fuel consumption, highly predictable cycle.

2. **Energy from Waves:**
   - Ocean surface waves, generated by winds, carry massive mechanical energy.
   - Harnessing devices include **Salter's Duck** (invented by Prof. Stephen Salter), comprising a buoyant "duck float" oscillating relative to a stabilized "balance float" to actuate hydraulic pumps and electric generators.

3. **Solar Energy:**
   - **Solar Constant:** The solar radiation intensity incident normally outside Earth's atmosphere is $\approx 1.4\text{ kW}\cdot\text{m}^{-2}$. At ground level on a clear day, intensity is $\approx 1.0\text{ kW}\cdot\text{m}^{-2}$.
   - **Solar Thermal Devices:** Flat-plate collectors heat water to $\approx 70^\circ\text{C}$ for domestic use; parabolic concentrators focus sunlight to generate high-pressure steam for turbines.
   - **Photovoltaic (PV) Cells:** Thin semiconductor silicon wafers that convert sunlight directly into electricity via the photovoltaic effect. Cells connected in series form solar panels, used in satellites, remote weather stations, and solar power stations.

4. **Energy from Biomass:**
   - Organic matter (crop residue, animal dung, municipal sewage).
   - **Direct Combustion:** Burning solid waste in boilers to produce steam.
   - **Fermentation:** Biological distillation to produce biofuels (ethanol, methanol).
   - **Biogas Digester:** Anaerobic bacterial decomposition of dung and agricultural waste in an airtight digester produces methane-rich biogas for domestic heating/cooking, leaving nitrogen-rich organic fertilizer as residue.

5. **Energy from Waste Products:**
   - Incineration of municipal solid refuse in specialized power plants to generate heat and electricity while reducing landfill volume.

6. **Geothermal Energy:**
   - Heat originating from the Earth's molten core, radioactive decay of long-lived isotopes ($^{238}\text{U}, ^{232}\text{Th}, ^{40}\text{K}$), and primordial compression.
   - Deep hot aquifers yield pressurized steam and hot water to drive geothermal power plants.
   - Manifests naturally as geysers, hot springs, and fumaroles.

---

## Summary of Key Concepts

1. Work by a constant force: $W = \mathbf{F} \cdot \mathbf{d} = F d \cos\theta$. Work is the area under the force-displacement graph.
2. In a gravitational field, work is independent of the path and zero over any closed loop: gravity is a **conservative field**.
3. **Power** is the rate of doing work: $P = \frac{\Delta W}{\Delta t} = \mathbf{F} \cdot \mathbf{v}$. $1\text{ kWh} = 3.6\text{ MJ}$.
4. **Work-Energy Principle:** Net work done equals the change in kinetic energy: $W_{\text{net}} = \Delta \text{K.E.}$
5. **Absolute Potential Energy:** $U(r) = -\frac{G M m}{r}$. On Earth's surface: $U_g = -\frac{G M m}{R}$.
6. **Escape Velocity:** Minimum launch speed to escape Earth's gravity: $v_{\text{esc}} = \sqrt{2 g R} \approx 11.2\text{ km}\cdot\text{s}^{-1}$.
7. Interconversion in free fall: $\text{Loss in P.E.} = \text{Gain in K.E.} + \text{Work against friction}$ ($mgh = \frac{1}{2}mv^2 + fh$).
8. Total energy in any isolated system is conserved: energy can neither be created nor destroyed.

---

## Conceptual Questions and Answers

### Question 4.1
**A person holds a bag of groceries while standing still, talking to a friend. A car is stationary with its engine running. From the standpoint of work, how are these two situations similar?**

**Answer:**
In both situations, the **mechanical work done from the standpoint of physics is zero**:
- For the person holding groceries: The upward supporting force exerts zero displacement on the bag ($d = 0 \implies W = F \times 0 = 0$).
- For the stationary car: Although the engine consumes chemical energy and does internal thermodynamic work dissipated as heat and vibration, the net external force produces zero displacement of the car ($d = 0 \implies W = 0$).

---

### Question 4.2
**Calculate the work done in kilojoules in lifting a mass of $10\text{ kg}$ (at a steady velocity) through a vertical height of $10\text{ m}$.**

**Answer:**
$$\text{Force required } F = mg = 10\text{ kg} \times 9.8\text{ m}\cdot\text{s}^{-2} = 98\text{ N}$$
$$W = F \times h = 98\text{ N} \times 10\text{ m} = 980\text{ J} = \mathbf{0.98\text{ kJ}}$$

---

### Question 4.3
**A force $F$ acts through a distance $L$. The force is then increased to $3F$ and acts through a further distance of $2L$. Draw the work diagram to scale.**

**Answer:**
On a force-displacement graph:
- **Interval 1 ($x = 0$ to $x = L$):** Horizontal line at height $F$.
  $$\text{Area}_1 = F \times L = F L$$
- **Interval 2 ($x = L$ to $x = 3L$):** Horizontal line at height $3F$.
  $$\text{Area}_2 = 3F \times 2L = 6 F L$$
- **Total Work Done:**
  $$W = F L + 6 F L = \mathbf{7 F L}$$

---

### Question 4.4
**In which case is more work done: when a $50\text{ kg}$ bag of books is lifted through $50\text{ cm}$, or when a $50\text{ kg}$ crate is pushed through $2\text{ m}$ across the floor with a force of $50\text{ N}$?**

**Answer:**
1. **Case 1 (Lifting bag of books):**
   $$W_1 = m g h = (50\text{ kg})(9.8\text{ m}\cdot\text{s}^{-2})(0.50\text{ m}) = \mathbf{245\text{ J}}$$
2. **Case 2 (Pushing crate):**
   $$W_2 = F \times d = 50\text{ N} \times 2\text{ m} = \mathbf{100\text{ J}}$$

**Conclusion:** More work is done in **Case 1 (lifting the bag of books)** ($245\text{ J} > 100\text{ J}$).

---

### Question 4.5
**An object has $1\text{ J}$ of potential energy. Explain what this means.**

**Answer:**
It means that by virtue of its position in a force field (or its strained state), the object possesses the capacity to do $1\text{ Joule}$ of work when moving to the chosen reference level of zero potential energy; or equivalently, $1\text{ Joule}$ of work was performed by an external agent against the field force in bringing the object from the zero reference level to its current position.

---

### Question 4.6
**A ball of mass $m$ is held at a height $h_1$ above a table. The tabletop is at a height $h_2$ above the floor. One student says that the ball has potential energy $mgh_1$, but another says that it is $mg(h_1 + h_2)$. Who is correct?**

**Answer:**
**Both students are correct.**  
Gravitational potential energy is defined relative to an arbitrary reference datum:
- The first student chose the **tabletop** as the reference level ($h = 0$), so $\text{P.E.} = mgh_1$.
- The second student chose the **floor** as the reference level ($h = 0$), so $\text{P.E.} = mg(h_1 + h_2)$.  
In all physical processes, only the **difference in potential energy** ($\Delta \text{P.E.}$) between two points is physically significant, and both reference choices yield identical differences.

---

### Question 4.7
**When a rocket re-enters the atmosphere, its nose cone becomes very hot. Where does this heat energy come from?**

**Answer:**
The heat energy comes from the **loss of mechanical energy (kinetic and potential energy)** of the re-entering rocket due to the work done against aerodynamic air friction and atmospheric drag ($W_{\text{friction}} = f \cdot d$).

---

### Question 4.8
**What sort of energy is present in the following:**
- (a) **Compressed spring:** Elastic Potential Energy.
- (b) **Water in a high dam:** Gravitational Potential Energy.
- (c) **A moving car:** Kinetic Energy.

---

### Question 4.9
**A girl drops a cup from a certain height, which breaks into pieces. What energy changes are involved?**

**Answer:**
1. At the initial height: **Gravitational Potential Energy**.
2. While falling: Potential energy converts into **Kinetic Energy**.
3. Upon impact with the floor: Kinetic energy transforms into:
   - **Strain energy** that does work to shatter molecular bonds and break the cup.
   - **Sound energy** (the sharp crash).
   - **Thermal energy** (heat warming the fragments and floor).
   - Kinetic energy of the scattering shards.

---

### Question 4.10
**A boy uses a catapult to throw a stone which accidentally smashes a greenhouse window. List the possible energy changes.**

**Answer:**
1. Muscular chemical energy of the boy $\to$ **Elastic Potential Energy** of the stretched rubber bands of the catapult.
2. Upon release: Elastic potential energy $\to$ **Kinetic Energy** of the projectile stone.
3. Upon collision with glass: Kinetic energy $\to$ **Fracture energy** (breaking the glass), **Sound energy**, **Thermal energy**, and **Kinetic energy** of the flying glass shards.

---

## Fully Solved Numerical Problems

### Numerical 4.1
**Problem:** A man pushes a lawnmower with a $40\text{ N}$ force directed at an angle of $20^\circ$ downward from the horizontal. Find the work done by the man as he cuts a strip of grass $20\text{ m}$ long.

**Solution:**
- Force $F = 40\text{ N}$
- Angle with horizontal $\theta = 20^\circ$
- Distance $d = 20\text{ m}$

$$W = F d \cos\theta = (40\text{ N})(20\text{ m})\cos 20^\circ = 800 \times 0.9397 \approx \mathbf{7.5 \times 10^2\text{ J} = 752\text{ J}}$$

---

### Numerical 4.2
**Problem:** A raindrop ($m = 3.35 \times 10^{-5}\text{ kg}$) falls vertically at a constant speed under the influence of gravity and friction. In falling through $100\text{ m}$, how much work is done by:
(a) Gravity  
(b) Friction

**Solution:**
**(a) Work done by gravity:**
Displacement is downward ($\theta = 0^\circ$ with gravitational force $mg$):
$$W_g = m g h = (3.35 \times 10^{-5}\text{ kg})(9.8\text{ m}\cdot\text{s}^{-2})(100\text{ m}) = \mathbf{+0.0328\text{ J}}$$

**(b) Work done by friction:**
Since the drop falls at constant speed (terminal velocity), the net force is zero:
$$F_{\text{net}} = 0 \implies f_{\text{friction}} = mg\text{ (directed upward)}$$
Since displacement is downward while friction is upward ($\theta = 180^\circ$):
$$W_f = f h \cos 180^\circ = -mgh = \mathbf{-0.0328\text{ J}}$$

---

### Numerical 4.3
**Problem:** Ten bricks, each $6.0\text{ cm}$ thick and mass $1.5\text{ kg}$, lie flat on a table. How much work is required to stack them one on top of another?

**Solution:**
- Mass of each brick $m = 1.5\text{ kg}$, thickness $h = 6.0\text{ cm} = 0.06\text{ m}$.
- The 1st brick remains on the table: height lifted $= 0$.
- The 2nd brick is lifted by $1h$.
- The 3rd brick is lifted by $2h$.
- The $n$-th brick is lifted by $(n - 1)h$.
- Total work done:
  $$W = m g h [0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9]$$
  $$\text{Sum} = \frac{9 \times 10}{2} = 45$$
  $$W = (1.5\text{ kg})(9.8\text{ m}\cdot\text{s}^{-2})(0.06\text{ m}) \times 45 = 0.882 \times 45 \approx \mathbf{39.69\text{ J} \approx 40\text{ J}}$$

---

### Numerical 4.4
**Problem:** A car of mass $800\text{ kg}$ travelling at $54\text{ km}\cdot\text{h}^{-1}$ is brought to rest in $60\text{ m}$. Find the average retarding force on the car. What has happened to the original kinetic energy?

**Solution:**
- Mass $m = 800\text{ kg}$
- Initial speed $v_i = 54\text{ km}\cdot\text{h}^{-1} = \frac{54 \times 1000}{3600} = 15\text{ m}\cdot\text{s}^{-1}$
- Final speed $v_f = 0$
- Stopping distance $d = 60\text{ m}$

1. **Retarding Force:**
   By the work-energy principle:
   $$W = \Delta \text{K.E.} \implies -F d = 0 - \frac{1}{2} m v_i^2$$
   $$F = \frac{m v_i^2}{2 d} = \frac{(800)(15)^2}{2(60)} = \frac{800 \times 225}{120} = \frac{180,000}{120} = \mathbf{1500\text{ N}}$$
2. **Fate of Original K.E.:**
   The initial kinetic energy ($\text{K.E.} = \frac{1}{2}(800)(15)^2 = 90,000\text{ J} = 90\text{ kJ}$) has been converted through friction into **thermal energy (heat) and sound** in the brake pads, tyres, and road surface.

---

### Numerical 4.5
**Problem:** A $1000\text{ kg}$ automobile at the top of an incline $10\text{ m}$ high and $100\text{ m}$ long is released and rolls down the hill. What is its speed at the bottom of the incline if the average retarding force due to friction is $480\text{ N}$?

**Solution:**
- Mass $m = 1000\text{ kg}$
- Height $h = 10\text{ m}$
- Length of incline $S = 100\text{ m}$
- Frictional force $f = 480\text{ N}$

By energy conservation in a resistive medium:
$$\text{Loss in P.E.} = \text{Gain in K.E.} + \text{Work against friction}$$
$$m g h = \frac{1}{2} m v^2 + f S$$
$$(1000)(9.8)(10) = \frac{1}{2}(1000) v^2 + (480)(100)$$
$$98,000 = 500 v^2 + 48,000$$
$$500 v^2 = 98,000 - 48,000 = 50,000$$
$$v^2 = \frac{50,000}{500} = 100 \implies \mathbf{v = 10\text{ m}\cdot\text{s}^{-1}}$$

---

### Numerical 4.6
**Problem:** $100\text{ m}^3$ of water is pumped from a reservoir into a tank $10\text{ m}$ higher than the reservoir in $20\text{ minutes}$. If the density of water is $1000\text{ kg}\cdot\text{m}^{-3}$, find:
(a) The increase in P.E.  
(b) The power delivered by the pump.

**Solution:**
- Volume $V = 100\text{ m}^3$
- Mass of water $m = V \times \rho = 100 \times 1000 = 10^5\text{ kg}$
- Height $h = 10\text{ m}$
- Time $t = 20\text{ min} = 20 \times 60 = 1200\text{ s}$

**(a) Increase in Potential Energy:**
$$\Delta \text{P.E.} = m g h = (10^5\text{ kg})(9.8\text{ m}\cdot\text{s}^{-2})(10\text{ m}) = \mathbf{9.8 \times 10^6\text{ J}}$$

**(b) Power Delivered by Pump:**
$$P = \frac{W}{t} = \frac{9.8 \times 10^6\text{ J}}{1200\text{ s}} \approx 8167\text{ W} \approx \mathbf{8.2\text{ kW}}$$

---

### Numerical 4.7
**Problem:** A force (thrust) of $400\text{ N}$ is required to overcome road friction and air resistance in propelling an automobile at $80\text{ km}\cdot\text{h}^{-1}$. What power ($\text{kW}$) must the engine develop?

**Solution:**
- Force $F = 400\text{ N}$
- Speed $v = 80\text{ km}\cdot\text{h}^{-1} = \frac{80 \times 1000}{3600} \approx 22.22\text{ m}\cdot\text{s}^{-1}$

$$P = F \times v = (400\text{ N})(22.22\text{ m}\cdot\text{s}^{-1}) \approx 8888\text{ W} \approx \mathbf{8.9\text{ kW}}$$

---

### Numerical 4.8
**Problem:** How large a force is required to accelerate an electron ($m = 9.1 \times 10^{-31}\text{ kg}$) from rest to a speed of $2.0 \times 10^7\text{ m}\cdot\text{s}^{-1}$ through a distance of $5.0\text{ cm}$?

**Solution:**
- Mass $m = 9.1 \times 10^{-31}\text{ kg}$
- $v_i = 0$, $v_f = 2.0 \times 10^7\text{ m}\cdot\text{s}^{-1}$
- Distance $d = 5.0\text{ cm} = 0.05\text{ m}$

By the work-energy principle:
$$F \times d = \frac{1}{2} m v_f^2$$
$$F \times (0.05) = \frac{1}{2}(9.1 \times 10^{-31})(2.0 \times 10^7)^2$$
$$0.05 F = \frac{1}{2}(9.1 \times 10^{-31})(4.0 \times 10^{14}) = 1.82 \times 10^{-16}$$
$$F = \frac{1.82 \times 10^{-16}}{0.05} = \mathbf{3.64 \times 10^{-15}\text{ N} \approx 3.6 \times 10^{-15}\text{ N}}$$

---

### Numerical 4.9
**Problem:** A diver weighing $750\text{ N}$ dives from a board $10\text{ m}$ above the surface of a pool of water. Use conservation of mechanical energy to find his speed at a point $5.0\text{ m}$ above the water surface, neglecting air friction.

**Solution:**
- Height $h_1 = 10\text{ m}$, Height $h_2 = 5.0\text{ m}$
- Initial velocity $v_1 = 0$

By conservation of mechanical energy:
$$\text{Loss in P.E.} = \text{Gain in K.E.}$$
$$m g (h_1 - h_2) = \frac{1}{2} m v_2^2 \implies v_2 = \sqrt{2 g (h_1 - h_2)}$$
$$v_2 = \sqrt{2 \times 9.8 \times (10 - 5.0)} = \sqrt{2 \times 9.8 \times 5.0} = \sqrt{98} \approx \mathbf{9.9\text{ m}\cdot\text{s}^{-1}}$$

---

### Numerical 4.10
**Problem:** A child starts from rest at the top of a slide of height $4.0\text{ m}$.
(a) What is his speed at the bottom if the slide is frictionless?
(b) If he reaches the bottom with a speed of $6.0\text{ m}\cdot\text{s}^{-1}$, what percentage of his total energy at the top of the slide is lost as a result of friction?

**Solution:**
**(a) Speed without friction:**
$$m g h = \frac{1}{2} m v^2 \implies v = \sqrt{2 g h} = \sqrt{2 \times 9.8 \times 4.0} = \sqrt{78.4} \approx \mathbf{8.85\text{ m}\cdot\text{s}^{-1} \approx 8.8\text{ m}\cdot\text{s}^{-1}}$$

**(b) Percentage of energy lost to friction:**
- Total initial energy at top $E_i = m g h = m(9.8)(4.0) = 39.2 m\text{ J}$
- Actual kinetic energy at bottom $E_f = \frac{1}{2} m v_{\text{actual}}^2 = \frac{1}{2} m (6.0)^2 = 18.0 m\text{ J}$
- Energy lost:
  $$\Delta E = E_i - E_f = 39.2 m - 18.0 m = 21.2 m\text{ J}$$
- Percentage of energy lost:
  $$\text{Percentage Lost} = \left(\frac{\Delta E}{E_i}\right) \times 100\% = \left(\frac{21.2 m}{39.2 m}\right) \times 100\% \approx \mathbf{54.08\% \approx 54\%}$$

---
