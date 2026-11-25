# Chapter 5: Circular Motion

> **FSc Physics Part 1 (Class 11)**  
> *Punjab Curriculum and Textbook Board, Lahore*  
> *Textbook Pages: 99 – 126 (PDF Pages: 103 – 130)*

---

## Learning Objectives

At the end of this chapter, the students will be able to:

1. Describe **angular motion**.
2. Define **angular displacement**, **angular velocity**, and **angular acceleration**.
3. Define the **radian** and convert an angle from radian measure to degrees and vice versa.
4. Use the equations $S = r\theta$, $v = r\omega$, and $a_t = r\alpha$.
5. Describe qualitatively motion in a curved path due to a perpendicular force and understand **centripetal acceleration** in uniform circular motion.
6. Derive the equations $a_c = r\omega^2 = \frac{v^2}{r}$ and $F_c = m r \omega^2 = \frac{m v^2}{r}$.
7. Understand and describe the **moment of inertia** of a body.
8. Understand the concept of **angular momentum**.
9. Describe examples of the **conservation of angular momentum**.
10. Understand and express the **rotational kinetic energy** of a disc and a hoop on an inclined plane.
11. Describe the motion of **artificial satellites**.
12. Understand why objects in orbiting satellites appear to be **weightless**.
13. Understand how and why **artificial gravity** is produced.
14. Calculate the radius of **geostationary orbits** and the orbital velocity of satellites.
15. Compare **Newton's and Einstein's views of gravitation**.

---

## Introduction

In previous chapters, kinematics and dynamics were studied primarily for linear (rectilinear) motion. In nature and engineering, however, many objects move along circular and rotational paths: planets revolving around stars, a stone whirled at the end of a string, a vehicle turning around a curve, spinning flywheels, and artificial satellites orbiting the Earth.

Because the direction of motion changes continuously in a curved path, the velocity vector changes even if the speed remains constant. Hence, circular motion is inherently accelerated motion requiring an inward centripetal force.

---

## 5.1 Angular Displacement

Consider the motion of a particle $P$ of mass $m$ constrained to move along a circular path of radius $r$ in the $xy$-plane, pivoted at origin $O$. A reference line $OP$ connects the origin to the particle:
- At time $t$, reference line $OP_1$ makes an angle $\theta$ with the positive $x$-axis.
- At a later time $t + \Delta t$, reference line $OP_2$ makes an angle $\theta + \Delta\theta$.

> The angle $\Delta\theta$ swept out by the rotating reference line in time interval $\Delta t$ is called the **angular displacement**.

### Vector Nature of Angular Displacement
- For finite angles, angular displacement does **not** obey the commutative law of vector addition ($\theta_1 + \theta_2 \ne \theta_2 + \theta_1$) and is therefore a scalar.
- For **infinitesimally small values** ($\Delta\theta \to 0$), angular displacements commute ($\Delta\theta_1 + \Delta\theta_2 = \Delta\theta_2 + \Delta\theta_1$) and are treated as **true vector quantities**.
- **Direction (Right-Hand Rule):** Grasp the axis of rotation with the fingers of the right hand curling in the sense of rotation; the erect thumb points along the axis in the direction of the angular displacement vector $\Delta\boldsymbol{\theta}$.
- Counter-clockwise rotation is taken as positive ($+$); clockwise rotation is taken as negative ($-$).

### Units of Angular Displacement
Three units are commonly used:
1. **Degree ($^\circ$):** $1\text{ revolution} = 360^\circ$.
2. **Revolution ($\text{rev}$):** One complete turn around the circle.
3. **Radian ($\text{rad}$):** The standard SI unit.

#### Definition of Radian
> One **radian** is the angle subtended at the center of a circle by an arc whose length is equal to the radius of the circle.

$$\theta = \frac{\text{Arc Length } S}{\text{Radius } r} \implies \mathbf{S = r \theta} \quad (\theta\text{ in radians}) \tag{5.1}$$

#### Conversion between Radian, Degree, and Revolution
For one complete revolution:
$$\text{Arc length } S = 2\pi r \implies \theta = \frac{2\pi r}{r} = 2\pi\text{ rad}$$
$$1\text{ rev} = 2\pi\text{ rad} = 360^\circ$$
$$1\text{ rad} = \frac{360^\circ}{2\pi} = \frac{180^\circ}{\pi} \approx \mathbf{57.3^\circ}$$

---

## 5.2 Angular Velocity

> The time rate of change of angular displacement is called **angular velocity**.

### Average Angular Velocity
$$\omega_{\text{av}} = \frac{\Delta\theta}{\Delta t} \tag{5.2}$$

### Instantaneous Angular Velocity
$$\boldsymbol{\omega} = \lim_{\Delta t \to 0} \frac{\Delta\boldsymbol{\theta}}{\Delta t} \tag{5.3}$$

- **Vector Direction:** Directed along the axis of rotation according to the right-hand rule.
- **SI Unit:** Radian per second ($\text{rad}\cdot\text{s}^{-1}$). Dimensions: $[T^{-1}]$.
- **Engineering Unit:** Revolutions per minute ($\text{rev}\cdot\text{min}^{-1}$ or $\text{rpm}$):
  $$1\text{ rpm} = \frac{2\pi\text{ rad}}{60\text{ s}} = \frac{\pi}{30}\text{ rad}\cdot\text{s}^{-1}$$

---

## 5.3 Angular Acceleration

> The time rate of change of angular velocity is called **angular acceleration**.

### Average Angular Acceleration
$$\alpha_{\text{av}} = \frac{\omega_f - \omega_i}{t_f - t_i} = \frac{\Delta\omega}{\Delta t} \tag{5.4}$$

### Instantaneous Angular Acceleration
$$\boldsymbol{\alpha} = \lim_{\Delta t \to 0} \frac{\Delta\boldsymbol{\omega}}{\Delta t} \tag{5.5}$$

- **Vector Direction:** Along the axis of rotation. If angular speed increases, $\boldsymbol{\alpha}$ is parallel to $\boldsymbol{\omega}$; if angular speed decreases, $\boldsymbol{\alpha}$ is antiparallel to $\boldsymbol{\omega}$.
- **SI Unit:** Radian per second squared ($\text{rad}\cdot\text{s}^{-2}$). Dimensions: $[T^{-2}]$.

---

## 5.4 Relation Between Angular and Linear Quantities

Consider a point $P$ at perpendicular distance $r$ from the fixed axis of rotation of a rigid body rotating with angular velocity $\omega$:

### 1. Displacement:
$$S = r \theta \tag{5.1}$$

### 2. Velocity:
Differentiating arc length with respect to time:
$$\frac{\Delta S}{\Delta t} = r \frac{\Delta\theta}{\Delta t} \implies \mathbf{v = r \omega} \tag{5.7}$$
In vector form:
$$\mathbf{v} = \boldsymbol{\omega} \times \mathbf{r}$$
The linear velocity $\mathbf{v}$ is directed along the tangent to the circular path at that point and is called the **tangential velocity**.

### 3. Acceleration:
Differentiating tangential velocity with respect to time:
$$\frac{\Delta v}{\Delta t} = r \frac{\Delta\omega}{\Delta t} \implies \mathbf{a_t = r \alpha} \tag{5.8}$$
In vector form:
$$\mathbf{a}_t = \boldsymbol{\alpha} \times \mathbf{r}$$
where $a_t$ is the **tangential acceleration**.

> **Rigid Body Rule:**  
> On a rigid rotating body, all points have the **exact same angular displacement $\theta$, angular velocity $\omega$, and angular acceleration $\alpha$** at any instant, but their linear/tangential speeds $v = r\omega$ and accelerations $a_t = r\alpha$ are directly proportional to their radial distance $r$ from the axis.

---

### Equations of Angular Motion (Constant Angular Acceleration)
For a fixed axis of rotation with uniform angular acceleration $\alpha$:

| Linear Motion | Angular Motion |
| :--- | :--- |
| $v_f = v_i + a t$ | $\mathbf{\omega_f = \omega_i + \alpha t}$ |
| $S = \left(\frac{v_i + v_f}{2}\right) t$ | $\mathbf{\theta = \left(\frac{\omega_i + \omega_f}{2}\right) t}$ |
| $S = v_i t + \frac{1}{2} a t^2$ | $\mathbf{\theta = \omega_i t + \frac{1}{2} \alpha t^2}$ |
| $2 a S = v_f^2 - v_i^2$ | $\mathbf{2 \alpha \theta = \omega_f^2 - \omega_i^2}$ |

---

### Solved Example 5.1
**Problem:** An electric fan rotating at $3.0\text{ rev}\cdot\text{s}^{-1}$ is switched off. It comes to rest in $18.0\text{ s}$. Assuming uniform deceleration, find:
(a) The angular deceleration.
(b) How many revolutions it turns before coming to rest.

**Solution:**
- $\omega_i = 3.0\text{ rev}\cdot\text{s}^{-1}$, $\omega_f = 0$, $t = 18.0\text{ s}$

**(a) Angular Acceleration:**
$$\alpha = \frac{\omega_f - \omega_i}{t} = \frac{0 - 3.0\text{ rev}\cdot\text{s}^{-1}}{18.0\text{ s}} = \mathbf{-0.167\text{ rev}\cdot\text{s}^{-2}}$$
*(or $-0.167 \times 2\pi \approx -1.05\text{ rad}\cdot\text{s}^{-2}$)*

**(b) Number of Revolutions:**
$$\theta = \left(\frac{\omega_i + \omega_f}{2}\right) t = \left(\frac{3.0 + 0}{2}\right) \times 18.0 = 1.5 \times 18.0 = \mathbf{27\text{ revolutions}}$$

---

## 5.5 Centripetal Force and Centripetal Acceleration

> **Centripetal Force:** The inward radial force required to bend an object's normally straight inertial path into a circular path.

Without centripetal force, an object moves off along the straight-line tangent according to Newton's First Law.

### Derivation of Centripetal Acceleration ($a_c$)
Consider a particle moving with constant speed $v$ along a circular path of radius $r$:
- At point $A$, velocity is $\mathbf{v}_1$.
- At point $B$, velocity is $\mathbf{v}_2$, where $|\mathbf{v}_1| = |\mathbf{v}_2| = v$.
- The change in velocity is $\Delta\mathbf{v} = \mathbf{v}_2 - \mathbf{v}_1$.
- Draw velocity vector triangle $PQR$ with sides $\mathbf{v}_1, \mathbf{v}_2$, and $\Delta\mathbf{v}$.
- By geometry, position triangle $OAB$ (with sides $r, r$, and arc length $\Delta S$) and velocity triangle $PQR$ are similar isosceles triangles:
  $$\frac{|\Delta\mathbf{v}|}{v} = \frac{\Delta S}{r} \implies |\Delta\mathbf{v}| = \frac{v}{r} \Delta S$$
- Dividing by $\Delta t$ and taking the limit $\Delta t \to 0$:
  $$a_c = \lim_{\Delta t \to 0} \frac{|\Delta\mathbf{v}|}{\Delta t} = \frac{v}{r} \lim_{\Delta t \to 0} \left(\frac{\Delta S}{\Delta t}\right) = \frac{v}{r} (v) = \mathbf{\frac{v^2}{r}} \tag{5.13}$$
- Using $v = r\omega$:
  $$\mathbf{a_c = r \omega^2} = \frac{v^2}{r}$$

- **Direction:** Radially inward toward the center of the circular orbit (perpendicular to tangential velocity).

### Centripetal Force Formulas
By Newton's Second Law ($F_c = m a_c$):
$$\mathbf{F_c = \frac{m v^2}{r} = m r \omega^2} \tag{5.14}$$

---

### Solved Example 5.2
**Problem:** A $1000\text{ kg}$ car turns round a corner at $10\text{ m}\cdot\text{s}^{-1}$ along a circular arc of radius $10\text{ m}$. How large a force must be exerted by the pavement on the tyres to hold the car on the curve?

**Solution:**
$$F_c = \frac{m v^2}{r} = \frac{(1000\text{ kg})(10\text{ m}\cdot\text{s}^{-1})^2}{10\text{ m}} = \frac{1000 \times 100}{10} = \mathbf{1.0 \times 10^4\text{ N}}$$
This force must be supplied by the lateral static friction between tyres and asphalt.

---

### Solved Example 5.3
**Problem:** A ball tied to the end of a string is swung in a vertical circle of radius $r$ under gravity. What will be the tension in the string when the ball is at the highest point $A$ with speed $v$?

**Solution:**
At the highest point $A$, both the downward tension $T$ and downward weight $W = mg$ act radially inward to furnish the required centripetal force:
$$T + m g = \frac{m v^2}{r}$$
$$\mathbf{T = \frac{m v^2}{r} - m g = m\left(\frac{v^2}{r} - g\right)}$$
- **Critical Minimum Speed:** If $T = 0$, the string just remains taut:
  $$\frac{m v_{\min}^2}{r} = mg \implies \mathbf{v_{\min} = \sqrt{g r}}$$

---

## 5.6 Moment of Inertia

In translational motion, mass $m$ represents inertia (resistance to linear acceleration, $F = ma$). In rotational motion, the resistance to angular acceleration depends not only on mass, but also on how that mass is distributed relative to the axis of rotation.

### Rotational Analogue of Newton's Second Law
For a particle of mass $m$ at distance $r$ from a pivot, acted upon by a tangential force $F$:
$$F = m a_t = m (r \alpha)$$
Multiplying both sides by $r$:
$$\tau = r F = m r^2 \alpha$$
Defining the **moment of inertia** $I$:
$$I = m r^2$$
$$\mathbf{\tau = I \alpha} \tag{5.16}$$

> **Moment of Inertia ($I$):**  
> The rotational analogue of mass, representing a body's opposition to change in its rotational state:
> $$I = \sum_{i=1}^n m_i r_i^2 \tag{5.17}$$

- **SI Unit:** Kilogram metre squared ($\text{kg}\cdot\text{m}^2$). Dimensions: $[ML^2]$.

---

### Moments of Inertia of Standard Uniform Rigid Bodies

| Body Type | Axis of Rotation | Moment of Inertia ($I$) |
| :--- | :--- | :--- |
| **Thin Cylindrical Rod** | Perpendicular through center | $\frac{1}{12} M L^2$ |
| **Thin Hoop or Ring** | Central axis of symmetry | $M R^2$ |
| **Solid Disc or Cylinder** | Central axis of symmetry | $\frac{1}{2} M R^2$ |
| **Solid Sphere** | Any diameter | $\frac{2}{5} M R^2$ |

---

## 5.7 Angular Momentum

> **Angular Momentum ($\mathbf{L}$):** The moment of linear momentum about a reference axis:

$$\mathbf{L} = \mathbf{r} \times \mathbf{p} \tag{5.18}$$

- Magnitude: $L = r p \sin\theta = m v r \sin\theta$.
- For circular motion ($\theta = 90^\circ$):
  $$L = m v r = m (r\omega) r = m r^2 \omega$$
- For a rigid rotating body:
  $$\mathbf{L = I \boldsymbol{\omega}}$$

- **SI Unit:** $\text{kg}\cdot\text{m}^2\cdot\text{s}^{-1}$ or Joule-second ($\text{J}\cdot\text{s}$). Dimensions: $[ML^2T^{-1}]$.
- **Direction:** Along the axis of rotation given by the right-hand rule.

### Spin vs. Orbital Angular Momentum
- **Spin Angular Momentum ($L_s$):** Angular momentum associated with rotation about an internal axis passing through the body's center of mass (e.g., Earth spinning on its daily axis).
- **Orbital Angular Momentum ($L_o$):** Angular momentum associated with revolution along an external orbit (e.g., Earth revolving around the Sun):
  $$L_o = m v_o r$$

---

### Solved Example 5.4
**Problem:** The mass of Earth is $6.00 \times 10^{24}\text{ kg}$ and its distance from the Sun is $1.50 \times 10^{11}\text{ m}$. Calculate its orbital angular momentum assuming a circular orbit completed once per year ($3.16 \times 10^7\text{ s}$).

**Solution:**
- Orbital speed:
  $$v_o = \frac{2\pi r}{T} = \frac{2\pi (1.50 \times 10^{11}\text{ m})}{3.16 \times 10^7\text{ s}} \approx 2.98 \times 10^4\text{ m}\cdot\text{s}^{-1}$$
- Orbital angular momentum:
  $$L_o = m v_o r = (6.00 \times 10^{24}\text{ kg})(2.98 \times 10^4\text{ m}\cdot\text{s}^{-1})(1.50 \times 10^{11}\text{ m})$$
  $$L_o \approx \mathbf{2.67 \times 10^{40}\text{ kg}\cdot\text{m}^2\cdot\text{s}^{-1} = 2.67 \times 10^{40}\text{ J}\cdot\text{s}}$$

---

## 5.8 Law of Conservation of Angular Momentum

> **Law of Conservation of Angular Momentum:**  
> If no external net torque acts on a system, the total angular momentum of the system remains constant:

$$\mathbf{L}_{\text{total}} = I_1 \boldsymbol{\omega}_1 = I_2 \boldsymbol{\omega}_2 = \text{Constant}$$

### Physical Applications:
1. **Diving and Gymnastics:** A diver pushing off a springboard tucks arms and legs close to the body, drastically reducing moment of inertia ($I_2 < I_1$), causing angular speed to increase ($\omega_2 > \omega_1$) for somersaults. Extending the limbs before water entry increases $I$, slowing rotation.
2. **Ice Skater:** Pulling outstretched arms inward reduces $I$, producing a rapid spin.
3. **Planetary Stability:** Since the gravitational pull of the Sun on Earth passes through Earth's center of mass, external torque is zero ($\boldsymbol{\tau}_{\text{ext}} = 0$). Hence, Earth's axis of rotation maintains a fixed orientation in space.

---

## 5.9 Rotational Kinetic Energy

The kinetic energy of a body rotating about a fixed axis with angular velocity $\omega$ is the sum of translational kinetic energies of all its individual particles:
$$\text{K.E.}_{\text{rot}} = \sum_{i=1}^n \frac{1}{2} m_i v_i^2 = \sum_{i=1}^n \frac{1}{2} m_i (r_i \omega)^2 = \frac{1}{2} \left(\sum_{i=1}^n m_i r_i^2\right) \omega^2$$
$$\mathbf{\text{K.E.}_{\text{rot}} = \frac{1}{2} I \omega^2} \tag{5.19}$$

---

### Rolling of a Disc and a Hoop Down an Inclined Plane
When an object rolls down an incline of vertical height $h$ without slipping, initial potential energy converts into both translational and rotational kinetic energy:
$$mgh = \text{K.E.}_{\text{trans}} + \text{K.E.}_{\text{rot}} = \frac{1}{2} m v^2 + \frac{1}{2} I \omega^2$$
Using $\omega = \frac{v}{R}$:

1. **For a Solid Disc ($I = \frac{1}{2} m R^2$):**
   $$\text{K.E.}_{\text{rot}} = \frac{1}{2}\left(\frac{1}{2} m R^2\right)\left(\frac{v}{R}\right)^2 = \frac{1}{4} m v^2$$
   $$mgh = \frac{1}{2} m v^2 + \frac{1}{4} m v^2 = \frac{3}{4} m v^2$$
   $$\mathbf{v_{\text{disc}} = \sqrt{\frac{4gh}{3}} \approx 1.155\sqrt{gh}} \tag{5.23}$$

2. **For a Hoop or Ring ($I = m R^2$):**
   $$\text{K.E.}_{\text{rot}} = \frac{1}{2}(m R^2)\left(\frac{v}{R}\right)^2 = \frac{1}{2} m v^2$$
   $$mgh = \frac{1}{2} m v^2 + \frac{1}{2} m v^2 = m v^2$$
   $$\mathbf{v_{\text{hoop}} = \sqrt{gh}} \tag{5.24}$$

> **Conclusion:**  
> Since $\sqrt{\frac{4gh}{3}} > \sqrt{gh}$, the **disc moves faster and reaches the bottom of the incline earlier than the hoop**, regardless of their respective masses or radii.

---

### Solved Example 5.5
**Problem:** A disc rolls down a hill of height $10.0\text{ m}$ without slipping. If it starts from rest, what is its speed at the bottom?

**Solution:**
$$v = \sqrt{\frac{4gh}{3}} = \sqrt{\frac{4 \times 9.80\text{ m}\cdot\text{s}^{-2} \times 10.0\text{ m}}{3}} = \sqrt{\frac{392}{3}} = \sqrt{130.67} \approx \mathbf{11.4\text{ m}\cdot\text{s}^{-1}}$$

---

## 5.10 Artificial Satellites and Orbital Velocity

An artificial satellite orbits Earth when gravitational attraction provides the exact centripetal force required for circular orbit:
$$\frac{G M m_s}{r^2} = \frac{m_s v^2}{r} \implies \mathbf{v = \sqrt{\frac{G M}{r}}} \tag{5.29}$$

- The orbital velocity is **independent of the satellite's mass** $m_s$.
- **Low-Altitude Orbit ($r \approx R = 6400\text{ km}$):**
  $$v = \sqrt{g R} = \sqrt{9.8 \times 6.4 \times 10^6} \approx \mathbf{7.9\text{ km}\cdot\text{s}^{-1}}\text{ (Critical Velocity)}$$
- **Orbital Period ($T$):**
  $$T = \frac{2\pi R}{v} = \frac{2\pi (6.4 \times 10^6\text{ m})}{7.9 \times 10^3\text{ m}\cdot\text{s}^{-1}} \approx 5060\text{ s} \approx \mathbf{84\text{ minutes}}$$

---

### Solved Example 5.6
**Problem:** An Earth satellite is in a circular orbit at an altitude of $384,000\text{ km}$. What is its orbital period in days? ($M = 6.0 \times 10^{24}\text{ kg}$, $R = 6400\text{ km}$).

**Solution:**
- Total orbital radius $r = R + h = 6400 + 384,000 = 390,400\text{ km} = 3.904 \times 10^8\text{ m}$.
- Orbital speed:
  $$v = \sqrt{\frac{G M}{r}} = \sqrt{\frac{(6.67 \times 10^{-11})(6.0 \times 10^{24})}{3.904 \times 10^8}} = \sqrt{1.025 \times 10^6} \approx 1.01 \times 10^3\text{ m}\cdot\text{s}^{-1} = 1.01\text{ km}\cdot\text{s}^{-1}$$
- Period $T$:
  $$T = \frac{2\pi r}{v} = \frac{2\pi (3.904 \times 10^8\text{ m})}{1.01 \times 10^3\text{ m}\cdot\text{s}^{-1}} \approx 2.428 \times 10^6\text{ s}$$
  In days:
  $$T = \frac{2.428 \times 10^6}{86,400} \approx \mathbf{27.5\text{ days}}\text{ (matching the lunar month)}$$

---

## 5.11 Real and Apparent Weight

- **Real Weight ($w$):** The actual gravitational force exerted by Earth on a body ($w = mg$).
- **Apparent Weight ($T$):** The upward supporting force recorded by a scale or balance.

### Apparent Weight in an Elevator:
Consider mass $m$ suspended from a spring scale in an elevator:

1. **At Rest or Moving with Uniform Velocity ($\mathbf{a} = 0$):**
   $$T - mg = 0 \implies \mathbf{T = mg} \quad (\text{Apparent weight} = \text{Real weight})$$

2. **Accelerating Upward ($+\mathbf{a}$):**
   $$T - mg = ma \implies \mathbf{T = m(g + a)} \quad (\text{Apparent weight} > \text{Real weight})$$

3. **Accelerating Downward ($-\mathbf{a}$):**
   $$mg - T = ma \implies \mathbf{T = m(g - a)} \quad (\text{Apparent weight} < \text{Real weight})$$

4. **Freely Falling Elevator ($\mathbf{a} = \mathbf{g}$):**
   $$T = m(g - g) = \mathbf{0} \quad (\mathbf{Weightlessness})$$

---

## 5.12 Weightlessness in Satellites

An Earth-orbiting satellite is in continuous free fall toward Earth under gravity. Its high tangential velocity causes its falling curvature to precisely match Earth's spherical curvature.

Because both the spacecraft and all objects within it accelerate downward at the identical rate $g$, no normal reaction force exists between astronauts and the spacecraft floor ($T = 0$). Hence, an orbiting spacecraft represents a **gravity-free (weightless) system**.

---

## 5.13 Artificial Gravity

Extended periods in zero-gravity cause astronaut bone density loss, muscular atrophy, and cardiovascular deconditioning. To counteract this, **artificial gravity** is created by setting the spacecraft into rotation about its central axis.

Centripetal acceleration at outer rim of radius $R$:
$$a_c = R \omega^2 = R (2\pi f)^2 = 4\pi^2 R f^2$$
To simulate Earth's surface gravity ($a_c = g$):
$$4\pi^2 R f^2 = g \implies \mathbf{f = \frac{1}{2\pi} \sqrt{\frac{g}{R}}} \tag{5.30}$$
Rotating at this frequency provides a centrifugal reaction on astronauts' feet equivalent to normal weight.

---

## 5.14 Geostationary Orbits and Communication Satellites

> A **geostationary (geosynchronous) satellite** is one whose orbital period matches Earth's rotational period ($T = 24\text{ hours}$), orbiting eastward above the equator so that it remains permanently positioned over a fixed terrestrial longitude.

### Derivation of Geostationary Orbital Radius
Equating orbital speed formulas:
$$v = \sqrt{\frac{G M}{r}} = \frac{2\pi r}{T}$$
$$\frac{G M}{r} = \frac{4\pi^2 r^2}{T^2} \implies r^3 = \frac{G M T^2}{4\pi^2}$$
$$\mathbf{r = \left(\frac{G M T^2}{4\pi^2}\right)^{1/3}} \tag{5.31}$$

Substituting $G = 6.67 \times 10^{-11}\text{ N}\cdot\text{m}^2\cdot\text{kg}^{-2}$, $M = 6.0 \times 10^{24}\text{ kg}$, $T = 86,400\text{ s}$:
$$r = 4.23 \times 10^7\text{ m} = \mathbf{42,300\text{ km}}$$

- **Height above Earth's surface:**
  $$h = r - R = 42,300 - 6400 \approx \mathbf{36,000\text{ km}}$$
- **Orbital Speed:**
  $$v = \frac{2\pi r}{T} \approx \mathbf{3.1\text{ km}\cdot\text{s}^{-1}}$$

### Global Satellite Coverage
A single geostationary satellite illuminates an angular span of $120^\circ$ of longitude. Therefore, a network of **three properly spaced geostationary satellites** ($120^\circ$ apart) provides complete global telecommunication and television coverage.

---

## 5.15 Newton's and Einstein's Views of Gravitation

| Aspect | Sir Isaac Newton (1687) | Albert Einstein (1915 - General Relativity) |
| :--- | :--- | :--- |
| **Basic Concept** | Gravity is an intrinsic attractive force acting instantaneously at a distance between masses. | Gravity is not a force; massive bodies warp and curve the fabric of four-dimensional **spacetime**. |
| **Mechanism** | Follows the inverse-square law ($F = \frac{GMm}{r^2}$), but gives no mechanism *why* space mediates it. | Bodies and light rays follow the straightest possible paths (**geodesics**) through curved spacetime (rubber sheet analogy). |
| **Deflection of Light** | Predicted a deflection angle $\theta$ treating light as corpuscular particles. | Predicted light bends by **exactly twice the Newtonian angle** ($1.745\text{ arcseconds}$ near the Sun). |
| **Experimental Proof** | Planetary orbits (Kepler's laws). | Arthur Eddington's 1919 solar eclipse observation confirmed the exact Einsteinian deflection of starlight. |

---

## Summary of Key Concepts

1. **Radian measure:** $S = r\theta$; $1\text{ rev} = 2\pi\text{ rad} = 360^\circ \implies 1\text{ rad} \approx 57.3^\circ$.
2. **Linear-angular relationships:** $v = r\omega$, $a_t = r\alpha$.
3. **Centripetal force:** $F_c = \frac{mv^2}{r} = mr\omega^2$, directed radially inward.
4. **Moment of inertia:** $I = \sum m_i r_i^2$. Rotational analogue of mass ($\tau = I\alpha$).
5. **Angular momentum:** $\mathbf{L} = \mathbf{r} \times \mathbf{p} = I\boldsymbol{\omega}$. Conserved when net external torque is zero ($I_1\omega_1 = I_2\omega_2$).
6. **Rotational kinetic energy:** $\text{K.E.}_{\text{rot}} = \frac{1}{2}I\omega^2$. A rolling disc reaches the bottom of an incline faster than a hoop ($v_{\text{disc}} = \sqrt{4gh/3} > v_{\text{hoop}} = \sqrt{gh}$).
7. **Critical orbital speed:** $v = \sqrt{gR} \approx 7.9\text{ km}\cdot\text{s}^{-1}$; orbital period $T \approx 84\text{ minutes}$.
8. **Artificial gravity:** Produced by spinning spacecraft at frequency $f = \frac{1}{2\pi}\sqrt{\frac{g}{R}}$.
9. **Geostationary orbit:** Orbital radius $r \approx 42,300\text{ km}$, height $h \approx 36,000\text{ km}$, orbital speed $v \approx 3.1\text{ km}\cdot\text{s}^{-1}$. Three satellites provide global coverage.

---

## Conceptual Questions and Answers

### Question 5.1
**Explain the difference between tangential velocity and angular velocity. If one of these is given for a wheel of known radius, how will you find the other?**

**Answer:**
- **Tangential Velocity ($v$):** The linear speed of a point along the tangent to the circular path. It depends on radial distance $r$ and is measured in $\text{m}\cdot\text{s}^{-1}$.
- **Angular Velocity ($\omega$):** The rate of change of angular displacement of the rotating body. It is identical for all points on a rigid body and is measured in $\text{rad}\cdot\text{s}^{-1}$.
- **Relation:**
  $$v = r\omega \implies \omega = \frac{v}{r}$$

---

### Question 5.2
**Explain what is meant by centripetal force and why it must be furnished to an object if the object is to follow a circular path.**

**Answer:**
According to Newton's First Law, an object in motion tends to continue along a straight-line trajectory with constant velocity. To deflect it into a curved circular path, an unbalanced inward force perpendicular to the velocity vector must continuously act upon it. This inward deflecting force is called **centripetal force** ($F_c = \frac{mv^2}{r}$). Without it, the object flies off along the tangent.

---

### Question 5.3
**What is meant by moment of inertia? Explain its significance.**

**Answer:**
- **Definition:** The moment of inertia $I = \sum m_i r_i^2$ is the measure of a body's resistance to angular acceleration about a rotational axis.
- **Significance:** It is the rotational counterpart of inertial mass in linear motion ($\tau = I\alpha \leftrightarrow F = ma$). It depends on both total mass and the spatial distribution of mass relative to the axis of rotation.

---

### Question 5.4
**What is meant by angular momentum? Explain the law of conservation of angular momentum.**

**Answer:**
- **Angular Momentum:** The cross product of position vector and linear momentum: $\mathbf{L} = \mathbf{r} \times \mathbf{p} = I\boldsymbol{\omega}$.
- **Law of Conservation:** If no net external torque acts on a system ($\boldsymbol{\tau}_{\text{ext}} = 0$), the total angular momentum remains constant:
  $$I_1 \omega_1 = I_2 \omega_2 = \text{Constant}$$

---

### Question 5.5
**Show that orbital angular momentum $L_o = mvr$.**

**Answer:**
By definition:
$$\mathbf{L}_o = \mathbf{r} \times \mathbf{p}$$
In magnitude:
$$L_o = r p \sin\theta = r (mv) \sin\theta$$
For a circular orbit, the position vector $\mathbf{r}$ is perpendicular to the tangential velocity $\mathbf{v}$ ($\theta = 90^\circ, \sin 90^\circ = 1$):
$$\mathbf{L_o = mvr}$$

---

### Question 5.6
**Describe what should be the minimum velocity for a satellite to orbit close to the Earth around it.**

**Answer:**
For a low-altitude satellite ($r \approx R = 6400\text{ km}$), gravity supplies the entire centripetal acceleration:
$$\frac{v^2}{R} = g \implies v = \sqrt{g R} = \sqrt{9.8\text{ m}\cdot\text{s}^{-2} \times 6.4 \times 10^6\text{ m}} \approx \mathbf{7.9\text{ km}\cdot\text{s}^{-1}}$$
This minimum speed is called the **critical orbital velocity**.

---

### Question 5.7
**State the direction of the following vectors in simple situations: angular momentum and angular velocity.**

**Answer:**
Both angular velocity $\boldsymbol{\omega}$ and angular momentum $\mathbf{L} = I\boldsymbol{\omega}$ are axial vectors directed along the **axis of rotation**. Their specific sense is determined by the **right-hand rule**: grasp the axis of rotation with fingers curling in the direction of rotation; the outstretched thumb points in the direction of $\boldsymbol{\omega}$ and $\mathbf{L}$.

---

### Question 5.8
**Explain why an object orbiting the Earth is said to be freely falling. Use your explanation to point out why objects appear weightless under certain circumstances.**

**Answer:**
An orbiting satellite has a high horizontal speed such that while falling toward Earth under gravity with acceleration $g$, Earth's surface curves away at the identical rate ($4.9\text{ m}$ in $8\text{ km}$). The satellite and everything inside it are in perpetual free fall. Because the floor and the occupants accelerate downward at the identical rate $g$, the apparent contact force between them is zero ($T = m(g - g) = 0$), causing apparent **weightlessness**.

---

### Question 5.9
**When mud flies off the tyre of a moving bicycle, in what direction does it fly? Explain.**

**Answer:**
Mud flies off along the **tangent to the circumference of the tyre** at the point of detachment. The adhesive force between mud and tyre provides the centripetal force. When rotational speed increases, the required centripetal force exceeds adhesion; the mud breaks free and moves tangentially in accordance with Newton's First Law.

---

### Question 5.10
**A disc and a hoop start moving down from the top of an inclined plane at the same time. Which one will be moving faster on reaching the bottom?**

**Answer:**
The **disc moves faster**.  
- $v_{\text{disc}} = \sqrt{\frac{4gh}{3}} \approx 1.155\sqrt{gh}$
- $v_{\text{hoop}} = \sqrt{gh}$  
Because the hoop has a larger moment of inertia ($I_{\text{hoop}} = mR^2 > I_{\text{disc}} = \frac{1}{2}mR^2$), more of its potential energy is converted into rotational kinetic energy, leaving less for translational speed.

---

### Question 5.11
**Why does a diver change his body positions before and after diving in the pool?**

**Answer:**
By curling into a tight tuck position, the diver brings mass closer to the axis of rotation, decreasing moment of inertia ($I_2 < I_1$). By conservation of angular momentum ($I_1\omega_1 = I_2\omega_2$), angular speed $\omega$ increases sharply, allowing multiple somersaults. Before entering the water, extending arms and legs increases $I$, slowing rotation for a clean vertical entry.

---

### Question 5.12
**A student holds two dumbbells with outstretched arms while sitting on a rotating turntable. He pulls the dumbbells toward his chest. What will be the effect on his rate of rotation?**

**Answer:**
His **rate of rotation (angular speed $\omega$) increases**.  
*Reason:* Pulling the dumbbells inward reduces the mass distance $r$ from the axis, reducing the total moment of inertia ($I_2 < I_1$). Since net external torque is zero, angular momentum is conserved:
$$I_1 \omega_1 = I_2 \omega_2 \implies \omega_2 = \left(\frac{I_1}{I_2}\right)\omega_1 > \omega_1$$

---

### Question 5.13
**Explain how many minimum number of geostationary satellites are required for global coverage of TV transmission.**

**Answer:**
A minimum of **three geostationary satellites** are required. Each geostationary satellite at an altitude of $36,000\text{ km}$ covers an angular span of $120^\circ$ of longitude. Spaced $120^\circ$ apart above the equator, three satellites cover the entire populated globe ($3 \times 120^\circ = 360^\circ$).

---

## Fully Solved Numerical Problems

### Numerical 5.1
**Problem:** A tiny laser beam is directed from Earth to the Moon. If the beam is to have a diameter of $2.50\text{ m}$ at the Moon, how small must the divergence angle be for the beam? The distance of the Moon from Earth is $3.8 \times 10^8\text{ m}$.

**Solution:**
- Arc length (beam diameter) $S = 2.50\text{ m}$
- Radius (distance to Moon) $r = 3.8 \times 10^8\text{ m}$

$$\theta = \frac{S}{r} = \frac{2.50\text{ m}}{3.8 \times 10^8\text{ m}} \approx \mathbf{6.58 \times 10^{-9}\text{ rad} \approx 6.6 \times 10^{-9}\text{ rad}}$$

---

### Numerical 5.2
**Problem:** A gramophone record turntable accelerates from rest to an angular velocity of $45.0\text{ rev}\cdot\text{min}^{-1}$ in $1.60\text{ s}$. What is its average angular acceleration?

**Solution:**
- $\omega_i = 0$
- $\omega_f = 45.0\text{ rev}\cdot\text{min}^{-1} = \frac{45.0 \times 2\pi\text{ rad}}{60\text{ s}} = 1.5\pi\text{ rad}\cdot\text{s}^{-1} \approx 4.712\text{ rad}\cdot\text{s}^{-1}$
- Time $t = 1.60\text{ s}$

$$\alpha = \frac{\omega_f - \omega_i}{t} = \frac{4.712\text{ rad}\cdot\text{s}^{-1}}{1.60\text{ s}} \approx \mathbf{2.95\text{ rad}\cdot\text{s}^{-2}}$$

---

### Numerical 5.3
**Problem:** A body of moment of inertia $I = 0.80\text{ kg}\cdot\text{m}^2$ about a fixed axis rotates with a constant angular velocity of $100\text{ rad}\cdot\text{s}^{-1}$. Calculate its angular momentum $L$ and the torque to sustain this motion.

**Solution:**
1. **Angular Momentum:**
   $$L = I \omega = (0.80\text{ kg}\cdot\text{m}^2)(100\text{ rad}\cdot\text{s}^{-1}) = \mathbf{80\text{ J}\cdot\text{s} = 80\text{ kg}\cdot\text{m}^2\cdot\text{s}^{-1}}$$
2. **Torque:**
   Since angular velocity is constant ($\omega = \text{const} \implies \alpha = 0$):
   $$\tau = I \alpha = (0.80)(0) = \mathbf{0\text{ N}\cdot\text{m}}$$

---

### Numerical 5.4
**Problem:** A cylinder of mass $m = 5.0\text{ kg}$ and radius $r = 0.20\text{ m}$ is acted upon by a tangential force $F = 0.60\text{ N}$. Calculate:
(a) The torque acting on the cylinder.
(b) The angular acceleration of the cylinder ($I = \frac{1}{2}mr^2$).

**Solution:**
**(a) Torque:**
$$\tau = r \times F = (0.20\text{ m})(0.60\text{ N}) = \mathbf{0.12\text{ N}\cdot\text{m}}$$

**(b) Angular Acceleration:**
- Moment of inertia:
  $$I = \frac{1}{2} m r^2 = \frac{1}{2}(5.0\text{ kg})(0.20\text{ m})^2 = \frac{1}{2}(5.0)(0.04) = 0.10\text{ kg}\cdot\text{m}^2$$
- Angular acceleration:
  $$\alpha = \frac{\tau}{I} = \frac{0.12\text{ N}\cdot\text{m}}{0.10\text{ kg}\cdot\text{m}^2} = \mathbf{1.2\text{ rad}\cdot\text{s}^{-2}}$$

---

### Numerical 5.5
**Problem:** Calculate the angular momentum of a star of mass $2.0 \times 10^{30}\text{ kg}$ and radius $7.0 \times 10^5\text{ km}$. If it makes one complete rotation about its axis once in $20\text{ days}$, what is its rotational kinetic energy? ($I = \frac{2}{5} M R^2$).

**Solution:**
- $M = 2.0 \times 10^{30}\text{ kg}$
- $R = 7.0 \times 10^5\text{ km} = 7.0 \times 10^8\text{ m}$
- Period $T = 20\text{ days} = 20 \times 86,400\text{ s} = 1.728 \times 10^6\text{ s}$
- Angular velocity:
  $$\omega = \frac{2\pi}{T} = \frac{2\pi}{1.728 \times 10^6\text{ s}} \approx 3.636 \times 10^{-6}\text{ rad}\cdot\text{s}^{-1}$$
- Moment of inertia:
  $$I = \frac{2}{5} M R^2 = \frac{2}{5}(2.0 \times 10^{30})(7.0 \times 10^8)^2 = (0.8 \times 10^{30})(49 \times 10^{16}) = 3.92 \times 10^{47}\text{ kg}\cdot\text{m}^2$$

1. **Angular Momentum ($L$):**
   $$L = I \omega = (3.92 \times 10^{47})(3.636 \times 10^{-6}) \approx \mathbf{1.4 \times 10^{42}\text{ J}\cdot\text{s}}$$

2. **Rotational Kinetic Energy ($\text{K.E.}_{\text{rot}}$):**
   $$\text{K.E.}_{\text{rot}} = \frac{1}{2} I \omega^2 = \frac{1}{2}(3.92 \times 10^{47})(3.636 \times 10^{-6})^2 \approx \mathbf{2.5 \times 10^{36}\text{ J}}$$

---

### Numerical 5.6
**Problem:** A $1000\text{ kg}$ car travels with a speed of $144\text{ km}\cdot\text{h}^{-1}$ round a curve of radius $100\text{ m}$. Find the necessary centripetal force.

**Solution:**
- Mass $m = 1000\text{ kg}$
- Speed $v = 144\text{ km}\cdot\text{h}^{-1} = \frac{144 \times 1000}{3600} = 40\text{ m}\cdot\text{s}^{-1}$
- Radius $r = 100\text{ m}$

$$F_c = \frac{m v^2}{r} = \frac{(1000)(40)^2}{100} = \frac{1000 \times 1600}{100} = \mathbf{1.60 \times 10^4\text{ N} = 16\text{ kN}}$$

---

### Numerical 5.7
**Problem:** What is the least speed at which an aeroplane can execute a vertical loop of $1.0\text{ km}$ radius so that there will be no tendency for the pilot to fall down at the highest point?

**Solution:**
At the highest point of the loop, the condition for the pilot not to leave the seat (apparent weight $\ge 0$):
$$\frac{m v^2}{r} \ge mg \implies v_{\min} = \sqrt{g r}$$
- Radius $r = 1.0\text{ km} = 1000\text{ m}$
- $g = 9.8\text{ m}\cdot\text{s}^{-2}$

$$v_{\min} = \sqrt{9.8 \times 1000} = \sqrt{9800} \approx \mathbf{98.99\text{ m}\cdot\text{s}^{-1} \approx 99\text{ m}\cdot\text{s}^{-1}}$$

---

### Numerical 5.8
**Problem:** The Moon orbits Earth so that the same side always faces Earth ($T_{\text{spin}} = T_{\text{orbital}}$). Determine the ratio of its spin angular momentum to its orbital angular momentum. (Treat Moon as a uniform sphere for spin, and as a point particle for orbit). Distance to Earth $r = 3.85 \times 10^8\text{ m}$, Radius of Moon $R_m = 1.74 \times 10^6\text{ m}$.

**Solution:**
Since $T_{\text{spin}} = T_{\text{orbital}}$, the angular speeds are identical: $\omega_{\text{spin}} = \omega_{\text{orbital}} = \omega$.
- Spin angular momentum:
  $$L_s = I_s \omega = \left(\frac{2}{5} M R_m^2\right) \omega$$
- Orbital angular momentum:
  $$L_o = I_o \omega = (M r^2) \omega$$
- Ratio:
  $$\frac{L_s}{L_o} = \frac{\frac{2}{5} M R_m^2 \omega}{M r^2 \omega} = \frac{2}{5} \left(\frac{R_m}{r}\right)^2$$
$$\frac{L_s}{L_o} = \frac{2}{5} \left(\frac{1.74 \times 10^6}{3.85 \times 10^8}\right)^2 = 0.4 \times (4.519 \times 10^{-3})^2 = 0.4 \times (2.042 \times 10^{-5}) \approx \mathbf{8.2 \times 10^{-6}}$$

---

### Numerical 5.9
**Problem:** Earth rotates on its axis once a day. Suppose by some process Earth contracts so that its radius is only half as large as at present ($R' = \frac{1}{2}R$). How fast will it be rotating then? ($I = \frac{2}{5}MR^2$).

**Solution:**
Since no external torque acts on Earth, angular momentum is conserved:
$$I_1 \omega_1 = I_2 \omega_2$$
$$\left(\frac{2}{5} M R_1^2\right) \left(\frac{2\pi}{T_1}\right) = \left(\frac{2}{5} M R_2^2\right) \left(\frac{2\pi}{T_2}\right)$$
$$\frac{R_1^2}{T_1} = \frac{R_2^2}{T_2} \implies T_2 = T_1 \left(\frac{R_2}{R_1}\right)^2$$
Since $R_2 = \frac{1}{2} R_1$ and $T_1 = 24\text{ hours}$:
$$T_2 = 24 \times \left(\frac{1}{2}\right)^2 = 24 \times \frac{1}{4} = \mathbf{6\text{ hours}}$$
*(The Earth would complete one full rotation in 6 hours).*

---

### Numerical 5.10
**Problem:** What should be the orbiting speed to launch a satellite in a circular orbit $900\text{ km}$ above the surface of Earth? ($M = 6.0 \times 10^{24}\text{ kg}$, $R = 6400\text{ km}$).

**Solution:**
- Altitude $h = 900\text{ km}$
- Radius of orbit $r = R + h = 6400 + 900 = 7300\text{ km} = 7.3 \times 10^6\text{ m}$
- $G = 6.67 \times 10^{-11}\text{ N}\cdot\text{m}^2\cdot\text{kg}^{-2}$
- $M = 6.0 \times 10^{24}\text{ kg}$

$$v = \sqrt{\frac{G M}{r}} = \sqrt{\frac{(6.67 \times 10^{-11})(6.0 \times 10^{24})}{7.3 \times 10^6}} = \sqrt{\frac{4.002 \times 10^{14}}{7.3 \times 10^6}} = \sqrt{5.48 \times 10^7} \approx \mathbf{7.4 \times 10^3\text{ m}\cdot\text{s}^{-1} = 7.4\text{ km}\cdot\text{s}^{-1}}$$

---
