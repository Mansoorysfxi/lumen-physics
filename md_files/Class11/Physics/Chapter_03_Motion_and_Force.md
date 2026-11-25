# Chapter 3: Motion and Force

> **FSc Physics Part 1 (Class 11)**  
> *Punjab Curriculum and Textbook Board, Lahore*  
> *Textbook Pages: 48 – 76 (PDF Pages: 52 – 80)*

---

## Learning Objectives

At the end of this chapter, the students will be able to:

1. Understand **displacement** from its definition and illustration.
2. Understand **velocity**, **average velocity**, and **instantaneous velocity**.
3. Understand **acceleration**, **average acceleration**, and **instantaneous acceleration**.
4. Understand the significance of the **area under a velocity-time graph**.
5. Recall and use equations representing **uniformly accelerated motion** in a straight line, including falling in a uniform gravitational field without air resistance.
6. Recall **Newton's Laws of motion**.
7. Describe **Newton's second law of motion** as the rate of change of momentum.
8. Define **impulse** as the product of impulsive force and time.
9. Describe the **law of conservation of momentum**.
10. Use the law of conservation of momentum in simple applications, including **elastic collisions** between two bodies in one dimension.
11. Describe the **force produced due to the flow of water**.
12. Understand the process of **rocket propulsion** (simple treatment).
13. Understand **projectile motion** in a non-resistive medium.
14. Derive the **time of flight**, **maximum height**, and **horizontal range** of projectile motion.
15. Appreciate the motion of **ballistic missiles** as projectile motion.

---

## Introduction

We live in a universe of continual motion. In every piece of matter, the atoms are in a state of never-ending agitation. We move around the Earth's surface, while the Earth moves in its orbit around the Sun. The Sun and stars are in motion relative to the galactic center. Everything in the vastness of space is in perpetual motion. 

Every physical process involves motion of some sort. Because of its fundamental importance in the physical world, the study of motion (kinematics and dynamics) forms the bedrock of classical physics. Motion and rest are relative concepts depending upon the choice of reference frame.

---

## 3.1 Displacement

> Whenever a body moves from one position to another, the change in its position is called **displacement**.

- Displacement is a **vector quantity** representing the straight-line directed segment from the initial position to the final position.
- Its magnitude is the shortest straight-line distance between the initial and final positions.
- **In terms of position vectors:** If $\mathbf{r}_1$ is the position vector of initial position $A$ and $\mathbf{r}_2$ is the position vector of final position $B$, then by the head-to-tail rule:
  $$\mathbf{r}_1 + \mathbf{d} = \mathbf{r}_2 \implies \mathbf{d} = \mathbf{r}_2 - \mathbf{r}_1$$
- **Path vs. Displacement:** When a body moves along a curved path, the distance travelled (actual path length) is a scalar and is generally greater than the magnitude of displacement. The displacement coincides with the path only for straight-line motion without reversal.
- **SI Unit:** Metre ($\text{m}$). Dimensions: $[L]$.

---

## 3.2 Velocity

> The time rate of change of displacement is known as **velocity**.

Velocity is a vector quantity pointing in the direction of the displacement.

### Average Velocity
If $\mathbf{d}$ is the total displacement of a body in total time interval $t$, the **average velocity** $\mathbf{v}_{\text{av}}$ is:
$$\mathbf{v}_{\text{av}} = \frac{\mathbf{d}}{t} \tag{3.1}$$

*Limitation:* Average velocity provides no detailed information about the path or intermediate speed variations between points $A$ and $B$. If a squash ball bounces off a wall and returns to its starting point, its net displacement is zero and hence its average velocity is zero, despite having been in continuous motion.

### Instantaneous Velocity
> The **instantaneous velocity** is defined as the limiting value of $\frac{\Delta \mathbf{d}}{\Delta t}$ as the time interval $\Delta t$ following time $t$ approaches zero.

$$\mathbf{v}_{\text{ins}} = \lim_{\Delta t \to 0} \frac{\Delta \mathbf{d}}{\Delta t} \tag{3.2}$$

As $\Delta t \to 0$, the ratio $\frac{\Delta \mathbf{d}}{\Delta t}$ approaches a finite limiting value, and the direction of $\Delta \mathbf{d}$ approaches the **tangent to the trajectory** at that instant.

### Uniform Velocity
If the instantaneous velocity of a body does not change over time (both magnitude and direction remain constant), the body is moving with **uniform velocity**. In this case:
$$\mathbf{v}_{\text{ins}} = \mathbf{v}_{\text{av}}$$

---

> [!NOTE]
> **For Your Information: Typical Speeds in the Universe**
> - Light and radio waves (in vacuum): $3 \times 10^8\text{ m}\cdot\text{s}^{-1}$
> - Earth's orbital speed around the Sun: $2.9 \times 10^4\text{ m}\cdot\text{s}^{-1}$ ($29\text{ km/s}$)
> - Satellite orbiting close to Earth: $7.9 \times 10^3\text{ m}\cdot\text{s}^{-1}$
> - Jet airliner: $\approx 250 - 300\text{ m}\cdot\text{s}^{-1}$
> - Sound in air ($20^\circ\text{C}$): $343\text{ m}\cdot\text{s}^{-1}$
> - Running cheetah: $\approx 30\text{ m}\cdot\text{s}^{-1}$
> - Human running (100 m sprint max): $\approx 10\text{ m}\cdot\text{s}^{-1}$
> - Walking ant: $\approx 0.01\text{ m}\cdot\text{s}^{-1}$

---

## 3.3 Acceleration

> The time rate of change of velocity of a body is called **acceleration**.

Because velocity is a vector, acceleration is produced by:
1. A change in the **magnitude** of velocity (speeding up or slowing down).
2. A change in the **direction** of velocity (such as in circular or curved motion).
3. A change in both magnitude and direction.

### Average Acceleration
If velocity changes from $\mathbf{v}_1$ to $\mathbf{v}_2$ during time interval $\Delta t$:
$$\mathbf{a}_{\text{av}} = \frac{\mathbf{v}_2 - \mathbf{v}_1}{\Delta t} = \frac{\Delta \mathbf{v}}{\Delta t} \tag{3.3}$$

### Instantaneous Acceleration
> The acceleration of a body at a particular instant of time, obtained as the limiting value of average acceleration as $\Delta t \to 0$:

$$\mathbf{a}_{\text{ins}} = \lim_{\Delta t \to 0} \frac{\Delta \mathbf{v}}{\Delta t} \tag{3.4}$$

- **SI Unit:** Metre per second squared ($\text{m}\cdot\text{s}^{-2}$). Dimensions: $[LT^{-2}]$.
- **Positive & Negative Acceleration:** If speed increases in the direction of motion, acceleration is positive. If speed decreases, acceleration is negative (termed **deceleration** or **retardation**).
- **Uniform Acceleration:** If velocity changes by equal amounts in equal intervals of time, the acceleration is uniform, and $\mathbf{a}_{\text{ins}} = \mathbf{a}_{\text{av}}$.

---

## 3.4 Velocity-Time Graph

A graph representing the variation of velocity with time is called a **velocity-time graph**.

1. **Constant Velocity:**  
   The graph is a **horizontal straight line** parallel to the time axis.
   $$\text{Slope} = 0 \implies a = 0$$
   The distance covered equals the **area of the rectangular region** between the graph and the time axis:
   $$S = v \times t$$

2. **Uniform Acceleration:**  
   The graph is an **inclined straight line**.
   $$\text{Average acceleration } a = \text{Slope of straight line} = \frac{\Delta v}{\Delta t}$$
   The distance covered equals the **area under the line** (triangle or trapezium):
   $$S = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} v t = v_{\text{av}} t$$

3. **Variable (Increasing) Acceleration:**  
   The graph is a **curve**. The instantaneous acceleration at any specific instant $t$ equals the **slope of the tangent** drawn to the curve at that point:
   $$a_{\text{ins}} = \text{Slope of tangent at point } P = \frac{\Delta v}{\Delta t}$$

> **Key Rule:**  
> The **area between the velocity-time graph and the time axis** is numerically equal to the **distance covered** by the object.

---

### Solved Example 3.1
**Problem:** The velocity-time graph of a car moving on a straight road is shown below:
- The car starts from rest, and its velocity increases uniformly to $20\text{ m}\cdot\text{s}^{-1}$ in $5\text{ s}$.
- Its velocity remains constant from $5\text{ s}$ to $15\text{ s}$.
- It then decelerates uniformly to rest from $15\text{ s}$ to $19\text{ s}$.  
Describe the motion and find the total distance covered.

**Solution:**
1. **First 5 seconds ($0$ to $5\text{ s}$):**
   $$a_1 = \frac{20 - 0}{5} = \mathbf{4\text{ m}\cdot\text{s}^{-2}}$$
   Distance $S_1 = \text{Area of }\Delta ABF = \frac{1}{2} \times 5 \times 20 = \mathbf{50\text{ m}}$

2. **Next 10 seconds ($5$ to $15\text{ s}$):**
   $$a_2 = 0\text{ (uniform velocity)}$$
   Distance $S_2 = \text{Area of rectangle } BCEF = 10 \times 20 = \mathbf{200\text{ m}}$

3. **Last 4 seconds ($15$ to $19\text{ s}$):**
   $$a_3 = \frac{0 - 20}{4} = \mathbf{-5\text{ m}\cdot\text{s}^{-2}}\text{ (retardation)}$$
   Distance $S_3 = \text{Area of }\Delta CDE = \frac{1}{2} \times 4 \times 20 = \mathbf{40\text{ m}}$

4. **Total Distance Covered:**
   $$S = S_1 + S_2 + S_3 = 50 + 200 + 40 = \mathbf{290\text{ m}}$$

---

## 3.5 Equations of Uniformly Accelerated Motion

For a body moving along a straight line with uniform acceleration $a$, initial velocity $v_i$, final velocity $v_f$ after time $t$, and distance $S$:

$$\mathbf{v_f = v_i + a t} \tag{3.5}$$
$$\mathbf{S = v_{\text{av}} t = \left(\frac{v_i + v_f}{2}\right) t} \tag{3.6}$$
$$\mathbf{S = v_i t + \frac{1}{2} a t^2} \tag{3.7}$$
$$\mathbf{2 a S = v_f^2 - v_i^2} \tag{3.8}$$

### Motion in a Uniform Gravitational Field (Free Fall)
Near the surface of the Earth, when air resistance is neglected, all objects fall with the same uniform acceleration due to gravity:
$$g \approx 9.8\text{ m}\cdot\text{s}^{-2} \approx 9.80\text{ m}\cdot\text{s}^{-2}$$

- Taking the upward direction as positive: $a = -g = -9.8\text{ m}\cdot\text{s}^{-2}$.
- Equations for vertical free fall:
  $$v_f = v_i - g t$$
  $$h = v_i t - \frac{1}{2} g t^2$$
  $$-2 g h = v_f^2 - v_i^2$$

---

## 3.6 Newton's Laws of Motion

First systematically published by Sir Isaac Newton in 1687 in the *Philosophiae Naturalis Principia Mathematica* (*Principia*). Earlier, Muslim scholar **Abu Ali Sina (Avicenna, 980–1037)** noted: *"No body begins to move or comes to rest of itself,"* anticipating the concept of inertia.

### 1. Newton's First Law of Motion (Law of Inertia)
> A body at rest continues in its state of rest, and a body in uniform motion continues moving with constant velocity in a straight line, unless acted upon by a net unbalanced external force.

- **Inertia:** The inherent property of matter by virtue of which it resists any change in its state of rest or uniform motion.
- **Mass as a Measure of Inertia:** The mass of an object is the quantitative measure of its inertia. Greater mass requires a greater external force to produce the same change in velocity.
- **Inertial Frame of Reference:** A reference frame in which Newton's first law is valid (i.e., a non-accelerating frame). A frame fixed to the Earth is approximately an inertial frame.

### 2. Newton's Second Law of Motion
> When an unbalanced external force acts on a body, it produces an acceleration in the direction of the force. The magnitude of this acceleration is directly proportional to the force and inversely proportional to the mass of the body.

$$a \propto \frac{F}{m} \implies \mathbf{F = m a} \tag{3.9}$$

- **SI Unit of Force:** Newton ($\text{N}$). $1\text{ N} = 1\text{ kg}\cdot\text{m}\cdot\text{s}^{-2}$.

### 3. Newton's Third Law of Motion
> To every action, there is always an equal and opposite reaction.

$$\mathbf{F}_{AB} = -\mathbf{F}_{BA}$$
- Action and reaction forces **never act on the same body**; each acts on a different body. Hence, they never cancel each other out.
- They occur simultaneously as an interaction pair.

---

> [!TIP]
> **Points to Ponder:**
> 1. *A car accelerates along a road. Which force actually moves the car?*  
>    **Answer:** The static friction force exerted by the road on the tyres in the forward direction (reaction to the tyre pushing backward on the road).
> 2. *Which is more effective at knocking down a wooden block: a rubber bullet or a lead bullet of the same mass and speed?*  
>    **Answer:** The **rubber bullet**, because it rebounds, undergoing a momentum change $\Delta p \approx 2mv$, whereas the lead bullet deforms/embeds with $\Delta p \approx mv$. The greater impulse delivered by the rubber bullet knocks the block over more effectively.

---

## 3.7 Linear Momentum and Impulse

### Linear Momentum
> The **linear momentum** of a body is the quantity of motion it possesses, defined mathematically as the product of its mass and velocity:

$$\mathbf{p} = m \mathbf{v} \tag{3.10}$$

- It is a vector quantity pointing in the direction of $\mathbf{v}$.
- **SI Unit:** $\text{kg}\cdot\text{m}\cdot\text{s}^{-1}$ or Newton-second ($\text{N}\cdot\text{s}$).

### Momentum and Newton's Second Law
If a force $\mathbf{F}$ acts on mass $m$ for time $t$, producing acceleration $\mathbf{a} = \frac{\mathbf{v}_f - \mathbf{v}_i}{t}$:
$$\mathbf{F} = m \mathbf{a} = m \left(\frac{\mathbf{v}_f - \mathbf{v}_i}{t}\right) = \frac{m\mathbf{v}_f - m\mathbf{v}_i}{t} = \frac{\Delta \mathbf{p}}{t} \tag{3.11}$$

> **Newton's Second Law in Terms of Momentum:**  
> The time rate of change of momentum of a body equals the applied force.

$$\mathbf{F} = \frac{\Delta \mathbf{p}}{\Delta t}$$

*Advantage:* This formulation is valid even when mass varies with time (such as a burning rocket or relativistic speeds).

### Impulse
When a large force acts for a very brief duration (such as a bat striking a ball), the force varies continuously. The combined effect is measured by **impulse**:
$$\mathbf{I} = \mathbf{F}_{\text{av}} \times \Delta t = \Delta \mathbf{p} = m\mathbf{v}_f - m\mathbf{v}_i \tag{3.12}$$

> **Impulse-Momentum Theorem:**  
> The impulse of a force equals the change in momentum of the body on which it acts.

- **SI Unit:** $\text{N}\cdot\text{s}$ or $\text{kg}\cdot\text{m}\cdot\text{s}^{-1}$.

---

### Solved Example 3.2
**Problem:** A $1500\text{ kg}$ car has its velocity reduced from $20\text{ m}\cdot\text{s}^{-1}$ to $15\text{ m}\cdot\text{s}^{-1}$ in $3.0\text{ s}$. How large was the average retarding force?

**Solution:**
$$F \times t = m v_f - m v_i$$
$$F \times 3.0 = 1500(15) - 1500(20) = 22,500 - 30,000 = -7,500\text{ N}\cdot\text{s}$$
$$F = \frac{-7500}{3.0} = \mathbf{-2500\text{ N} = -2.5\text{ kN}}$$
The negative sign shows that the force opposes the direction of motion (retarding force).

---

## 3.8 Law of Conservation of Momentum

### Isolated System
> An **isolated system** is a collection of interacting bodies on which no external agency exerts a net unbalanced force. (For example, gas molecules colliding inside an insulated rigid container).

### Derivation for Two Colliding Balls
Consider two smooth spheres of masses $m_1$ and $m_2$ moving along a straight line with initial velocities $v_1$ and $v_2$. After collision, their velocities become $v_1'$ and $v_2'$:
- Force exerted by $m_2$ on $m_1$ is $\mathbf{F}'$:
  $$\mathbf{F}' \times t = m_1 v_1' - m_1 v_1$$
- Force exerted by $m_1$ on $m_2$ is $\mathbf{F}$:
  $$\mathbf{F} \times t = m_2 v_2' - m_2 v_2$$

By Newton's Third Law, action and reaction are equal and opposite: $\mathbf{F} = -\mathbf{F}' \implies \mathbf{F} + \mathbf{F}' = \mathbf{0}$. Adding both equations:
$$(\mathbf{F} + \mathbf{F}') t = (m_1 v_1' - m_1 v_1) + (m_2 v_2' - m_2 v_2) = \mathbf{0}$$
$$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2' \tag{3.13}$$

$$\text{Total initial linear momentum} = \text{Total final linear momentum}$$

> **Law of Conservation of Linear Momentum:**  
> The total linear momentum of an isolated system remains constant.

---

### Solved Example 3.3
**Problem:** Two spherical balls of masses $2.0\text{ kg}$ and $3.0\text{ kg}$ move towards each other with velocities $6.0\text{ m}\cdot\text{s}^{-1}$ and $4.0\text{ m}\cdot\text{s}^{-1}$ respectively. What must be the velocity of the smaller ball after collision if the velocity of the bigger ball is $-3.0\text{ m}\cdot\text{s}^{-1}$?

**Solution:**
- $m_1 = 2.0\text{ kg}$, $v_1 = +6.0\text{ m}\cdot\text{s}^{-1}$
- $m_2 = 3.0\text{ kg}$, $v_2 = -4.0\text{ m}\cdot\text{s}^{-1}$
- Initial momentum:
  $$p_i = m_1 v_1 + m_2 v_2 = (2.0)(6.0) + (3.0)(-4.0) = 12 - 12 = 0$$
- Final momentum:
  $$p_f = m_1 v_1' + m_2 v_2' = (2.0) v_1' + (3.0)(-3.0) = 2.0 v_1' - 9.0$$
- By conservation of momentum ($p_i = p_f$):
  $$0 = 2.0 v_1' - 9.0 \implies 2.0 v_1' = 9.0 \implies v_1' = \mathbf{+4.5\text{ m}\cdot\text{s}^{-1}}$$

---

## 3.9 Elastic and Inelastic Collisions

- **Elastic Collision:** A collision in which **both kinetic energy and linear momentum** are conserved.
- **Inelastic Collision:** A collision in which **linear momentum is conserved**, but **kinetic energy is not conserved** (some kinetic energy is transformed into thermal energy, acoustic energy, or internal deformation work).

---

### Elastic Collision in One Dimension
Consider two smooth, non-rotating spheres of masses $m_1$ and $m_2$ colliding head-on along the x-axis with initial velocities $v_1$ and $v_2$, and final velocities $v_1'$ and $v_2'$.

1. **Conservation of Linear Momentum:**
   $$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$$
   $$m_1 (v_1 - v_1') = m_2 (v_2' - v_2) \tag{3.14}$$

2. **Conservation of Kinetic Energy:**
   $$\frac{1}{2} m_1 v_1^2 + \frac{1}{2} m_2 v_2^2 = \frac{1}{2} m_1 v_1'^2 + \frac{1}{2} m_2 v_2'^2$$
   $$m_1 (v_1^2 - v_1'^2) = m_2 (v_2'^2 - v_2^2)$$
   $$m_1 (v_1 - v_1')(v_1 + v_1') = m_2 (v_2' - v_2)(v_2' + v_2) \tag{3.15}$$

3. **Relative Velocity of Approach and Separation:**
   Dividing Eq. (3.15) by Eq. (3.14):
   $$v_1 + v_1' = v_2' + v_2$$
   $$\mathbf{v_1 - v_2 = -(v_1' - v_2')} \tag{3.16}$$
   > In a 1D elastic collision, the relative speed of approach equals the relative speed of separation, with the direction reversed.

4. **Formulas for Final Velocities:**
   Solving Eqs. (3.14) and (3.16) for $v_1'$ and $v_2'$:
   $$\mathbf{v_1' = \left(\frac{m_1 - m_2}{m_1 + m_2}\right) v_1 + \left(\frac{2m_2}{m_1 + m_2}\right) v_2} \tag{3.17}$$
   $$\mathbf{v_2' = \left(\frac{2m_1}{m_1 + m_2}\right) v_1 + \left(\frac{m_2 - m_1}{m_1 + m_2}\right) v_2} \tag{3.18}$$

---

### Special Cases of 1D Elastic Collisions

- **Case 1: Equal Masses ($m_1 = m_2$):**
  $$v_1' = v_2, \quad v_2' = v_1$$
  *The two bodies exchange their velocities completely upon collision.*

- **Case 2: Equal Masses with Target at Rest ($m_1 = m_2, v_2 = 0$):**
  $$v_1' = 0, \quad v_2' = v_1$$
  *The incident body comes to a complete halt, and the target moves off with the incident body's initial velocity (as observed in billiard balls).*

- **Case 3: Light Body Colliding with Massive Body at Rest ($m_1 \ll m_2, v_2 = 0$):**
  Neglecting $m_1$ relative to $m_2$:
  $$v_1' \approx -v_1, \quad v_2' \approx 0$$
  *The light body rebounds with its initial speed; the massive body remains essentially stationary (e.g., a squash ball hitting a wall).*

- **Case 4: Massive Body Colliding with Light Body at Rest ($m_1 \gg m_2, v_2 = 0$):**
  Neglecting $m_2$ relative to $m_1$:
  $$v_1' \approx v_1, \quad v_2' \approx 2v_1$$
  *The massive body continues moving with its original velocity, while the light stationary body shoots forward with double the incident speed.*

---

### Solved Example 3.4
**Problem:** A $70\text{ g}$ ball moving at $9\text{ m}\cdot\text{s}^{-1}$ to the right collides elastically with a $140\text{ g}$ ball initially at rest. Find the velocities of both balls after the collision.

**Solution:**
- $m_1 = 70\text{ g}$, $m_2 = 140\text{ g}$, $v_1 = 9\text{ m}\cdot\text{s}^{-1}$, $v_2 = 0$.
- Using Eq. (3.17):
  $$v_1' = \left(\frac{70 - 140}{70 + 140}\right)(9) = \left(\frac{-70}{210}\right)(9) = -\frac{1}{3} \times 9 = \mathbf{-3\text{ m}\cdot\text{s}^{-1}}$$
- Using Eq. (3.18):
  $$v_2' = \left(\frac{2 \times 70}{70 + 140}\right)(9) = \left(\frac{140}{210}\right)(9) = \frac{2}{3} \times 9 = \mathbf{+6\text{ m}\cdot\text{s}^{-1}}$$

---

### Solved Example 3.5
**Problem:** A $100\text{ g}$ golf ball moving at $20\text{ m}\cdot\text{s}^{-1}$ collides elastically head-on with an $8\text{ kg}$ stationary steel ball. Compute their velocities after collision.

**Solution:**
- $m_1 = 0.1\text{ kg}$, $m_2 = 8.0\text{ kg}$, $v_1 = 20\text{ m}\cdot\text{s}^{-1}$, $v_2 = 0$.
- For golf ball:
  $$v_1' = \left(\frac{0.1 - 8.0}{0.1 + 8.0}\right)(20) = \left(\frac{-7.9}{8.1}\right)(20) \approx \mathbf{-19.5\text{ m}\cdot\text{s}^{-1}}$$
- For steel ball:
  $$v_2' = \left(\frac{2 \times 0.1}{0.1 + 8.0}\right)(20) = \left(\frac{0.2}{8.1}\right)(20) \approx \mathbf{+0.5\text{ m}\cdot\text{s}^{-1}}$$

---

### Force Due to Water Flow
When a horizontal stream of water of mass $m$ strikes a vertical wall normally with speed $v$ and comes to rest ($\Delta v = 0 - v = -v$):
$$\text{Force on water } F_{\text{water}} = \frac{m}{t}(0 - v) = -\frac{m}{t} v \tag{3.19}$$

By Newton's Third Law, the force exerted by the water on the wall is equal and opposite:
$$\mathbf{F_{\text{wall}} = \left(\frac{m}{t}\right) v}$$
$$\text{Force} = (\text{mass per second}) \times (\text{change in velocity})$$

---

### Solved Example 3.6
**Problem:** A hose pipe ejects water at a speed of $0.3\text{ m}\cdot\text{s}^{-1}$ through a nozzle of cross-sectional area $50\text{ cm}^2$. If the water strikes a wall normally and comes to rest, calculate the force exerted on the wall.

**Solution:**
- Area $A = 50\text{ cm}^2 = 50 \times 10^{-4}\text{ m}^2 = 0.005\text{ m}^2$
- Speed $v = 0.3\text{ m}\cdot\text{s}^{-1}$
- Volume of water per second = $A \times v = 0.005 \times 0.3 = 0.0015\text{ m}^3\cdot\text{s}^{-1}$
- Mass per second $\frac{m}{t} = \text{Volume per second} \times \rho_{\text{water}} = 0.0015 \times 1000 = 1.5\text{ kg}\cdot\text{s}^{-1}$
- Force on wall:
  $$F = \left(\frac{m}{t}\right) v = 1.5 \times 0.3 = \mathbf{0.45\text{ N}}$$

---

## 3.10 Momentum and Explosive Forces

Explosive forces are internal to the system. Since internal forces occur in equal and opposite pairs, the **total linear momentum of an isolated exploding system is conserved**.

- **Exploding Bomb:** When a bomb explodes in flight, the vector sum of momenta of all fragments equals the original momentum of the intact bomb.
- **Recoil of a Rifle:** A rifle of mass $M$ firing a bullet of mass $m$ with velocity $v$:
  $$p_i = 0 \implies m v + M v' = 0 \implies v' = -\frac{m}{M} v \tag{3.20}$$
  Because $M \gg m$, the recoil velocity $v'$ of the rifle is a small fraction of the bullet's velocity.

---

## 3.11 Rocket Propulsion

Rockets accelerate in space by expelling high-velocity burning exhaust gases from their rear nozzles:
- The fuel (liquid hydrogen and liquid oxygen) burns in a combustion chamber at extremely high pressure and is expelled at exhaust speeds $v > 4000\text{ m}\cdot\text{s}^{-1}$.
- By conservation of momentum, the backward momentum gained by the exhaust gases equals the forward momentum gained by the rocket.
- Typical consumption: $\approx 10,000\text{ kg}\cdot\text{s}^{-1}$ of propellant. More than $80\%$ of launch mass is fuel.

### Rocket Acceleration
If mass $m$ of gases is ejected per second with velocity $v$ relative to the rocket, the forward thrust is $F = m v$. By Newton's second law:
$$M a = m v \implies \mathbf{a = \frac{m v}{M}} \tag{3.21}$$
where $M$ is the instantaneous mass of the rocket. As fuel is consumed, $M$ steadily decreases, causing the rocket's acceleration to increase continuously throughout the burn.

---

## 3.12 Projectile Motion

> **Projectile motion** is two-dimensional motion under a constant downward acceleration due to gravity, with zero horizontal acceleration in the absence of air resistance.

The path followed by a projectile is called its **trajectory** (which is a **parabola** in a uniform gravitational field without drag).

### Independence of Horizontal and Vertical Motions
The motion can be resolved into two mutually independent 1D motions:

| Parameter | Horizontal Motion ($x$) | Vertical Motion ($y$) |
| :--- | :--- | :--- |
| **Acceleration** | $a_x = 0$ | $a_y = -g = -9.8\text{ m}\cdot\text{s}^{-2}$ |
| **Initial Velocity** | $v_{ix} = v_i \cos\theta$ | $v_{iy} = v_i \sin\theta$ |
| **Velocity at Time $t$** | $v_{fx} = v_i \cos\theta = \text{const}$ | $v_{fy} = v_i \sin\theta - g t$ |
| **Displacement at Time $t$** | $x = (v_i \cos\theta) t$ | $y = (v_i \sin\theta) t - \frac{1}{2} g t^2$ |

- **Instantaneous Speed:**
  $$v = \sqrt{v_{fx}^2 + v_{fy}^2} \tag{3.25}$$
- **Instantaneous Direction:**
  $$\phi = \tan^{-1}\left(\frac{v_{fy}}{v_{fx}}\right) \tag{3.26}$$

---

### Derivations of Projectile Parameters

#### 1. Maximum Height of the Projectile ($H$)
At the maximum height, the vertical velocity becomes zero: $v_{fy} = 0$.  
Using $2 a_y S = v_{fy}^2 - v_{iy}^2$:
$$2(-g) H = 0 - (v_i \sin\theta)^2$$
$$-2g H = -v_i^2 \sin^2\theta$$
$$\mathbf{H = \frac{v_i^2 \sin^2\theta}{2g}} \tag{3.27}$$

#### 2. Time of Flight ($T$)
The time taken to return to the initial launch level ($y = 0$):
$$y = v_{iy} T - \frac{1}{2} g T^2 \implies 0 = (v_i \sin\theta) T - \frac{1}{2} g T^2$$
$$T \left(v_i \sin\theta - \frac{1}{2} g T\right) = 0$$
Since $T \ne 0$:
$$\mathbf{T = \frac{2v_i \sin\theta}{g}} \tag{3.28}$$
*(Time to reach highest point is $t_{1/2} = \frac{v_i \sin\theta}{g}$).*

#### 3. Horizontal Range of the Projectile ($R$)
The total horizontal distance covered during the time of flight:
$$R = v_{ix} \times T = (v_i \cos\theta) \left(\frac{2v_i \sin\theta}{g}\right) = \frac{v_i^2 (2 \sin\theta \cos\theta)}{g}$$
Using identity $2\sin\theta\cos\theta = \sin 2\theta$:
$$\mathbf{R = \frac{v_i^2 \sin 2\theta}{g}} \tag{3.29}$$

#### Condition for Maximum Range
$R$ is maximum when $\sin 2\theta$ reaches its maximum value of $1$:
$$\sin 2\theta = 1 \implies 2\theta = 90^\circ \implies \mathbf{\theta = 45^\circ}$$
$$\mathbf{R_{\max} = \frac{v_i^2}{g}}$$

> **Complementary Angles Property:**  
> The horizontal range is identical for complementary launch angles ($\theta$ and $90^\circ - \theta$). For example, angles of $30^\circ$ and $60^\circ$, or $15^\circ$ and $75^\circ$, yield identical ranges for the same launch speed $v_i$.

---

### Application to Ballistic Missiles
- **Ballistic Flight:** An unpowered and unguided flight under inertia and gravity after an initial launch impulse.
- **Ballistic Missile vs. Guided Missile:**
  - *Ballistic Missiles:* Follow a ballistic trajectory determined solely by initial velocity and gravity. Useful for short to medium ranges.
  - *Guided Missiles:* Powered and actively guided by onboard computer/aerodynamic controls throughout flight for precision at long ranges.
- **Trajectory Geometry:** For short ranges, the trajectory is parabolic; for long intercontinental flights over a spherical Earth, the true orbit is an ellipse with the center of the Earth at one focus. Aerodynamic friction significantly reduces the actual range compared to the ideal vacuum parabola.

---

### Solved Example 3.7
**Problem:** A ball is thrown with a speed of $30\text{ m}\cdot\text{s}^{-1}$ at an angle of $30^\circ$ above the horizontal. Determine: (i) Maximum height, (ii) Time of flight, (iii) Horizontal range.

**Solution:**
- $v_i = 30\text{ m}\cdot\text{s}^{-1}$, $\theta = 30^\circ$, $g = 9.8\text{ m}\cdot\text{s}^{-2}$
- $v_{ix} = 30\cos 30^\circ = 25.98\text{ m}\cdot\text{s}^{-1}$
- $v_{iy} = 30\sin 30^\circ = 15.0\text{ m}\cdot\text{s}^{-1}$

1. **Maximum Height:**
   $$H = \frac{v_i^2 \sin^2 30^\circ}{2g} = \frac{(30)^2 (0.5)^2}{2(9.8)} = \frac{900 \times 0.25}{19.6} = \frac{225}{19.6} \approx \mathbf{11.5\text{ m}}$$

2. **Time of Flight:**
   $$T = \frac{2 v_i \sin 30^\circ}{g} = \frac{2(30)(0.5)}{9.8} = \frac{30}{9.8} \approx \mathbf{3.1\text{ s}}$$

3. **Horizontal Range:**
   $$R = \frac{v_i^2 \sin 60^\circ}{g} = \frac{(30)^2 (0.866)}{9.8} = \frac{900 \times 0.866}{9.8} \approx \mathbf{79.5\text{ m}} \approx \mathbf{80\text{ m}}$$

---

### Solved Example 3.8
**Problem:** In Example 3.7, calculate the maximum range and height reached by the ball if projected at: (i) $45^\circ$, (ii) $60^\circ$.

**Solution:**
**(i) At $\theta = 45^\circ$:**
- Height:
  $$H = \frac{(30)^2 \sin^2 45^\circ}{2(9.8)} = \frac{900(0.5)}{19.6} = \frac{450}{19.6} \approx \mathbf{23.0\text{ m}}$$
- Range:
  $$R = \frac{(30)^2 \sin 90^\circ}{9.8} = \frac{900(1)}{9.8} \approx \mathbf{91.8\text{ m}}\text{ (Maximum Range)}$$

**(ii) At $\theta = 60^\circ$:**
- Height:
  $$H = \frac{(30)^2 \sin^2 60^\circ}{2(9.8)} = \frac{900(0.75)}{19.6} = \frac{675}{19.6} \approx \mathbf{34.4\text{ m}}$$
- Range:
  $$R = \frac{(30)^2 \sin 120^\circ}{9.8} = \frac{900(0.866)}{9.8} \approx \mathbf{79.5\text{ m}} \approx \mathbf{80\text{ m}}$$
*(Notice that the range at $60^\circ$ equals the range at $30^\circ$).*

---

## Summary of Key Concepts

1. **Displacement** is the shortest directed distance from initial to final position: $\mathbf{d} = \mathbf{r}_2 - \mathbf{r}_1$.
2. **Velocity** is the rate of change of displacement. Instantaneous velocity is $\mathbf{v} = \lim_{\Delta t \to 0}\frac{\Delta \mathbf{d}}{\Delta t}$.
3. **Acceleration** is the rate of change of velocity: $\mathbf{a} = \lim_{\Delta t \to 0}\frac{\Delta \mathbf{v}}{\Delta t}$.
4. The **slope** of a velocity-time graph equals the acceleration; the **area under the graph** equals the distance covered.
5. In free fall under gravity without air resistance, $g = 9.8\text{ m}\cdot\text{s}^{-2}$ directed downward.
6. **Newton's Laws:**
   - 1st Law: Law of inertia.
   - 2nd Law: $\mathbf{F} = m\mathbf{a} = \frac{\Delta \mathbf{p}}{\Delta t}$.
   - 3rd Law: Action and reaction are equal and opposite, acting on different bodies.
7. **Impulse** $\mathbf{I} = \mathbf{F}\Delta t = \Delta \mathbf{p}$.
8. **Law of Conservation of Linear Momentum:** Total momentum of an isolated system remains constant.
9. **Elastic Collisions:** Both momentum and kinetic energy are conserved ($v_1 - v_2 = -(v_1' - v_2')$).
10. **Projectile Motion:** 2D motion with constant horizontal velocity and constant downward gravitational acceleration ($g$). Maximum range occurs at launch angle $\theta = 45^\circ$.

---

## Conceptual Questions and Answers

### Question 3.1
**What is the difference between uniform and variable velocity? From the explanation of variable velocity, define acceleration. Give SI units of velocity and acceleration.**

**Answer:**
- **Uniform Velocity:** A body has uniform velocity if it covers equal displacements in equal intervals of time, however short the interval may be. Both its speed and direction of motion remain constant.
- **Variable Velocity:** A body has variable velocity if either its speed changes, its direction of motion changes, or both change over time.
- **Acceleration:** The time rate of change of velocity of a body is called acceleration:
  $$\mathbf{a} = \lim_{\Delta t \to 0} \frac{\Delta \mathbf{v}}{\Delta t}$$
- **SI Units:**
  - Velocity: $\text{m}\cdot\text{s}^{-1}$
  - Acceleration: $\text{m}\cdot\text{s}^{-2}$

---

### Question 3.2
**An object is thrown vertically upward. Discuss the sign of acceleration due to gravity, relative to velocity, while the object is in air.**

**Answer:**
Taking the upward direction as positive:
1. **During upward motion:** Velocity is upward ($v > 0$) while acceleration due to gravity is downward ($a = -g < 0$). Velocity and acceleration have **opposite signs** (deceleration).
2. **At the highest point:** Velocity is instantaneously zero ($v = 0$), while acceleration remains downward ($a = -g$).
3. **During downward motion:** Velocity is downward ($v < 0$) and acceleration is downward ($a = -g < 0$). Velocity and acceleration have the **same sign** (speeding up).

---

### Question 3.3
**Can the velocity of an object reverse its direction when acceleration is constant? If so, give an example.**

**Answer:**
**Yes.** When a ball is thrown vertically upward, it moves under a constant downward acceleration due to gravity ($g = 9.8\text{ m}\cdot\text{s}^{-2}$). As it rises, it slows down, instantaneously stops at the highest point, and then reverses its direction of motion to fall downward, while its acceleration remains constant throughout.

---

### Question 3.4
**Specify the correct statements:**
- (a) An object can have a constant velocity even if its speed is changing.
- (b) An object can have a constant speed even if its velocity is changing.
- (c) An object can have a zero velocity even if its acceleration is not zero.
- (d) An object subjected to a constant acceleration can reverse its velocity.

**Answer:**
- **(a) Incorrect:** Velocity includes speed; if speed changes, velocity must change.
- **(b) Correct:** In uniform circular motion, the speed is constant but the velocity changes continuously due to changing direction.
- **(c) Correct:** At the peak of a vertical projectile's path, velocity is instantaneously zero while acceleration is $g \ne 0$.
- **(d) Correct:** A vertically thrown ball under constant gravitational acceleration reverses its velocity.

---

### Question 3.5
**A man standing on top of a tower throws a ball straight up with initial velocity $v_i$ and at the same time throws a second ball straight downward with the same speed. Which ball will have the larger speed when it strikes the ground? Ignore air friction.**

**Answer:**
**Both balls strike the ground with the exact same speed.**  
*Reason:* The ball thrown upward rises, momentarily stops, and descends past the release point with the same speed $v_i$ (due to energy conservation). From that point, both balls fall through the same height $h$ with identical downward speeds, striking the ground with speed:
$$v = \sqrt{v_i^2 + 2gh}$$

---

### Question 3.6
**Explain the circumstances in which the velocity $\mathbf{v}$ and acceleration $\mathbf{a}$ of a car are:**
1. **Parallel:** Car moving in a straight line with increasing speed.
2. **Anti-parallel:** Car moving in a straight line with brakes applied (decelerating).
3. **Perpendicular to one another:** Car negotiating a circular curve with constant speed (centripetal acceleration).
4. **$\mathbf{v}$ is zero but $\mathbf{a}$ is not zero:** The instant the car starts moving from rest, or a vertically thrown ball at the highest point.
5. **$\mathbf{a}$ is zero but $\mathbf{v}$ is not zero:** Car cruising along a straight highway at constant speed.

---

### Question 3.7
**Motion with constant velocity is a special case of motion with constant acceleration. Is this statement true? Discuss.**

**Answer:**
**Yes, the statement is true.** Constant velocity means the velocity does not change with time ($\Delta \mathbf{v} = 0$). The acceleration is:
$$\mathbf{a} = \frac{\Delta \mathbf{v}}{\Delta t} = 0$$
Since zero is a constant value, motion with constant velocity is a special case of motion with constant acceleration where $\mathbf{a} = 0$. All kinematic equations remain valid with $a = 0$.

---

### Question 3.8
**Find the change in momentum for an object subjected to a given force for a given time and state the law of motion in terms of momentum.**

**Answer:**
By Newton's second law:
$$\mathbf{F} = m\mathbf{a} = m\left(\frac{\mathbf{v}_f - \mathbf{v}_i}{t}\right) \implies \mathbf{F}t = m\mathbf{v}_f - m\mathbf{v}_i = \Delta \mathbf{p}$$
The change in momentum equals the product of applied force and time ($\Delta \mathbf{p} = \mathbf{F} t$).  
**Statement:** The time rate of change of linear momentum of a body equals the net applied force, acting in the direction of the force:
$$\mathbf{F} = \frac{\Delta \mathbf{p}}{\Delta t}$$

---

### Question 3.9
**Define impulse and show how it is related to linear momentum.**

**Answer:**
**Impulse:** The product of a large force and the short time duration for which it acts:
$$\mathbf{I} = \mathbf{F}_{\text{av}} \times \Delta t$$
Since $\mathbf{F} = \frac{\Delta \mathbf{p}}{\Delta t}$, substituting gives:
$$\mathbf{I} = \left(\frac{\Delta \mathbf{p}}{\Delta t}\right)\Delta t = \Delta \mathbf{p} = \mathbf{p}_f - \mathbf{p}_i$$
**Impulse-Momentum Theorem:** The impulse imparted to a body equals the change in its linear momentum.

---

### Question 3.10
**State the law of conservation of linear momentum, pointing out the importance of an isolated system. Explain why under certain conditions the law is useful even though the system is not completely isolated.**

**Answer:**
- **Law:** The total linear momentum of an isolated system remains constant ($m_1 \mathbf{v}_1 + m_2 \mathbf{v}_2 = m_1 \mathbf{v}_1' + m_2 \mathbf{v}_2'$).
- **Importance of Isolated System:** External forces would produce external impulses ($\Delta \mathbf{p} = \mathbf{F}_{\text{ext}}\Delta t$), causing total momentum to change.
- **Application to Non-Isolated Systems:** During extremely brief, explosive interactions (e.g., collisions, explosions, firing a gun), the internal impact forces are immensely larger than external forces (like gravity or friction). Over the short impact interval $\Delta t \approx 0$, the external impulse $\mathbf{F}_{\text{ext}}\Delta t$ is negligible, so momentum conservation remains highly accurate.

---

### Question 3.11
**Explain the difference between elastic and inelastic collisions. Explain how a bouncing ball behaves in each case. Give plausible reasons why K.E. is not conserved in most cases.**

**Answer:**
1. **Elastic Collision:** Both total momentum and kinetic energy are conserved. A bouncing ball dropped from height $h$ on a rigid floor would rebound back to the exact same height $h$.
2. **Inelastic Collision:** Momentum is conserved, but kinetic energy is not conserved. A bouncing ball rebounds to a height less than $h$.
3. **Reasons K.E. is lost:**
   - Work done in deforming the colliding bodies against internal friction.
   - Dissipation as acoustic (sound) energy and thermal (heat) energy.

---

### Question 3.12
**Explain what is meant by projectile motion. Derive expressions for: (a) Time of flight, (b) Range of projectile. Show that range is maximum at $45^\circ$.**

**Answer:**
*(Derivations fully detailed in Section 3.12 above).*
- $T = \frac{2v_i \sin\theta}{g}$
- $R = \frac{v_i^2 \sin 2\theta}{g}$
- Maximum value of $\sin 2\theta$ is $1 \implies 2\theta = 90^\circ \implies \theta = 45^\circ$, giving $R_{\max} = \frac{v_i^2}{g}$.

---

### Question 3.13
**At what point or points in its path does a projectile have its minimum speed and its maximum speed?**

**Answer:**
- **Minimum Speed:** At the **highest point (apex)** of its trajectory. Here vertical velocity is zero ($v_y = 0$), so speed is purely horizontal: $v_{\min} = v_{ix} = v_i\cos\theta$.
- **Maximum Speed:** At the **instant of projection** and at the **instant of striking the ground** (same level), where both horizontal and vertical components are present: $v_{\max} = v_i = \sqrt{v_{ix}^2 + v_{iy}^2}$.

---

### Question 3.14
**Multiple Choice Conceptual Questions:**

**(i) What is meant by a ballistic trajectory?**
- (a) The path followed by an un-powered and un-guided projectile.
- (b) The path followed by a powered and unguided projectile.
- (c) The path followed by an un-powered but guided projectile.
- (d) The path followed by a powered and guided projectile.  
**Answer: (a)** The path followed by an un-powered and unguided projectile.

**(ii) What happens when a system of two bodies undergoes an elastic collision?**
- (a) The momentum of the system changes.
- (b) The momentum of the system does not change.
- (c) The bodies come to rest after collision.
- (d) The energy conservation law is violated.  
**Answer: (b)** The momentum of the system does not change.

---

## Fully Solved Numerical Problems

### Numerical 3.1
**Problem:** A helicopter is ascending vertically at the rate of $19.6\text{ m}\cdot\text{s}^{-1}$. When it is at a height of $156.8\text{ m}$ above the ground, a stone is dropped. How long does the stone take to reach the ground?

**Solution:**
Taking upward as positive:
- Initial velocity of the stone $v_i = +19.6\text{ m}\cdot\text{s}^{-1}$
- Displacement to the ground $S = -156.8\text{ m}$
- Acceleration due to gravity $a = -g = -9.8\text{ m}\cdot\text{s}^{-2}$

Using $S = v_i t + \frac{1}{2} a t^2$:
$$-156.8 = 19.6 t - \frac{1}{2}(9.8) t^2$$
$$-156.8 = 19.6 t - 4.9 t^2$$
Rearranging into standard quadratic form:
$$4.9 t^2 - 19.6 t - 156.8 = 0$$
Divide the entire equation by $4.9$:
$$t^2 - 4 t - 32 = 0$$
Factorizing:
$$(t - 8)(t + 4) = 0$$
Since time cannot be negative:
$$\mathbf{t = 8.0\text{ s}}$$

---

### Numerical 3.2
**Problem:** Using the following data, draw a velocity-time graph for a short journey on a straight road of a motorbike:

| Time (s) | 0 | 30 | 60 | 90 | 120 | 150 | 180 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Velocity ($\text{m}\cdot\text{s}^{-1}$)** | 0 | 10 | 20 | 20 | 20 | 20 | 0 |

Use the graph to calculate:
(a) The initial acceleration  
(b) The final acceleration  
(c) The total distance travelled by the motorcyclist.

**Solution:**
**(a) Initial acceleration ($0$ to $60\text{ s}$):**
$$a_i = \text{Slope} = \frac{v_2 - v_1}{t_2 - t_1} = \frac{20 - 0}{60 - 0} = \frac{20}{60} = \mathbf{0.33\text{ m}\cdot\text{s}^{-2}}$$

**(b) Final acceleration ($150$ to $180\text{ s}$):**
$$a_f = \text{Slope} = \frac{0 - 20}{180 - 150} = \frac{-20}{30} = \mathbf{-0.67\text{ m}\cdot\text{s}^{-2}}\text{ (or retardation of } 0.67\text{ m}\cdot\text{s}^{-2}\text{)}$$

**(c) Total distance travelled:**
The velocity-time graph forms a trapezium with parallel sides of length $180\text{ s}$ and $(150 - 60) = 90\text{ s}$, and height $20\text{ m}\cdot\text{s}^{-1}$:
$$S = \text{Area of trapezium} = \frac{1}{2} \times (\text{sum of parallel sides}) \times \text{height}$$
$$S = \frac{1}{2} \times (180 + 90) \times 20 = 270 \times 10 = \mathbf{2700\text{ m} = 2.7\text{ km}}$$

---

### Numerical 3.3
**Problem:** A proton moving with a speed of $1.0 \times 10^7\text{ m}\cdot\text{s}^{-1}$ passes through a $0.020\text{ cm}$ thick sheet of paper and emerges with a speed of $2.0 \times 10^6\text{ m}\cdot\text{s}^{-1}$. Assuming uniform deceleration, find:
(a) The retardation  
(b) The time taken to pass through the paper.

**Solution:**
- $v_i = 1.0 \times 10^7\text{ m}\cdot\text{s}^{-1}$
- $v_f = 2.0 \times 10^6\text{ m}\cdot\text{s}^{-1}$
- Distance $S = 0.020\text{ cm} = 0.020 \times 10^{-2}\text{ m} = 2.0 \times 10^{-4}\text{ m}$

**(a) Acceleration / Retardation:**
Using $2 a S = v_f^2 - v_i^2$:
$$2 a (2.0 \times 10^{-4}) = (2.0 \times 10^6)^2 - (1.0 \times 10^7)^2$$
$$4.0 \times 10^{-4} a = 4.0 \times 10^{12} - 1.0 \times 10^{14} = 4.0 \times 10^{12} - 100 \times 10^{12} = -96 \times 10^{12}$$
$$a = \frac{-96 \times 10^{12}}{4.0 \times 10^{-4}} = \mathbf{-2.4 \times 10^{17}\text{ m}\cdot\text{s}^{-2}}$$
$$\text{Retardation} = \mathbf{2.4 \times 10^{17}\text{ m}\cdot\text{s}^{-2}}$$

**(b) Time taken:**
Using $S = \left(\frac{v_i + v_f}{2}\right) t$:
$$2.0 \times 10^{-4} = \left(\frac{1.0 \times 10^7 + 0.2 \times 10^7}{2}\right) t = (0.6 \times 10^7) t$$
$$t = \frac{2.0 \times 10^{-4}}{6.0 \times 10^6} \approx \mathbf{3.3 \times 10^{-11}\text{ s}}$$

---

### Numerical 3.4
**Problem:** Two masses $m_1$ and $m_2$ are initially at rest with a spring compressed between them. What is the ratio of the magnitude of their velocities after the spring has been released?

**Solution:**
Before release, the system is at rest:
$$p_i = 0$$
After release, let the velocities be $v_1$ and $v_2$. By conservation of linear momentum:
$$m_1 v_1 + m_2 v_2 = 0 \implies m_1 v_1 = -m_2 v_2$$
Taking the ratio of the magnitudes of velocities:
$$\frac{|v_1|}{|v_2|} = \mathbf{\frac{m_2}{m_1}}$$

---

### Numerical 3.5
**Problem:** An amoeba of mass $1.0 \times 10^{-12}\text{ kg}$ propels itself through water by blowing a jet of water through a tiny orifice. The amoeba ejects water with a speed of $1.0 \times 10^{-4}\text{ m}\cdot\text{s}^{-1}$ at a rate of $1.0 \times 10^{-13}\text{ kg}\cdot\text{s}^{-1}$. Assume that the water is continuously replenished so that the mass of the amoeba remains constant.
(a) If there were no force on the amoeba other than the reaction force caused by the emerging jet, what would be the acceleration of the amoeba?
(b) If the amoeba moves with constant velocity through water, what is the force of the surrounding water (exclusive of the jet) on the amoeba?

**Solution:**
**(a) Acceleration:**
Reaction thrust produced by the water jet:
$$F = \left(\frac{\Delta m}{\Delta t}\right) v_{\text{water}} = (1.0 \times 10^{-13}\text{ kg}\cdot\text{s}^{-1})(1.0 \times 10^{-4}\text{ m}\cdot\text{s}^{-1}) = 1.0 \times 10^{-17}\text{ N}$$
Acceleration of the amoeba:
$$a = \frac{F}{M_{\text{amoeba}}} = \frac{1.0 \times 10^{-17}\text{ N}}{1.0 \times 10^{-12}\text{ kg}} = \mathbf{1.0 \times 10^{-5}\text{ m}\cdot\text{s}^{-2}}$$

**(b) Force of surrounding water:**
When the amoeba moves with constant velocity, net force is zero:
$$\sum F = 0 \implies F_{\text{drag}} = F_{\text{jet}} = \mathbf{1.0 \times 10^{-17}\text{ N}}$$

---

### Numerical 3.6
**Problem:** A boy places a firecracker of negligible mass in an empty can of mass $40\text{ g}$. He plugs the end with a wooden block of mass $200\text{ g}$. After igniting the firecracker, he throws the can straight up. It explodes at the top of its path. If the block shoots out with a speed of $3.0\text{ m}\cdot\text{s}^{-1}$, how fast will the can be going?

**Solution:**
At the top of the path, the initial velocity is zero: $p_i = 0$.
- Mass of block $m_1 = 200\text{ g} = 0.2\text{ kg}$, velocity $v_1 = 3.0\text{ m}\cdot\text{s}^{-1}$
- Mass of can $m_2 = 40\text{ g} = 0.04\text{ kg}$, velocity $v_2 = ?$

By conservation of linear momentum:
$$m_1 v_1 + m_2 v_2 = 0$$
$$(0.2)(3.0) + (0.04) v_2 = 0$$
$$0.6 + 0.04 v_2 = 0 \implies v_2 = -\frac{0.6}{0.04} = -15\text{ m}\cdot\text{s}^{-1}$$
$$\text{Speed of can} = \mathbf{15\text{ m}\cdot\text{s}^{-1}}\text{ (in opposite direction to block)}$$

---

### Numerical 3.7
**Problem:** An electron ($m_1 = 9.1 \times 10^{-31}\text{ kg}$) travelling at $2.0 \times 10^7\text{ m}\cdot\text{s}^{-1}$ undergoes a head-on elastic collision with a hydrogen atom ($m_2 = 1.67 \times 10^{-27}\text{ kg}$) initially at rest. Find the velocity of the hydrogen atom after collision.

**Solution:**
- $v_1 = 2.0 \times 10^7\text{ m}\cdot\text{s}^{-1}$, $v_2 = 0$
- Since $m_1 \ll m_2$, using the elastic collision formula for $v_2'$:
  $$v_2' = \left(\frac{2m_1}{m_1 + m_2}\right) v_1 \approx \frac{2m_1}{m_2} v_1$$
$$v_2' = \frac{2(9.1 \times 10^{-31})}{1.67 \times 10^{-27}} \times (2.0 \times 10^7)$$
$$v_2' = \frac{36.4 \times 10^{-24}}{1.67 \times 10^{-27}} = 21.8 \times 10^3\text{ m}\cdot\text{s}^{-1} \approx \mathbf{2.2 \times 10^4\text{ m}\cdot\text{s}^{-1}}$$

---

### Numerical 3.8
**Problem:** A truck weighing $2500\text{ kg}$ moving with a velocity of $21\text{ m}\cdot\text{s}^{-1}$ collides with a stationary car weighing $1000\text{ kg}$. The truck and car move together after impact. Calculate their common velocity.

**Solution:**
- $m_1 = 2500\text{ kg}$, $v_1 = 21\text{ m}\cdot\text{s}^{-1}$
- $m_2 = 1000\text{ kg}$, $v_2 = 0$
- Let common velocity be $V$.

By conservation of linear momentum:
$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) V$$
$$(2500)(21) + 0 = (2500 + 1000) V$$
$$52,500 = 3500 V \implies V = \frac{52,500}{3500} = \mathbf{15\text{ m}\cdot\text{s}^{-1}}$$

---

### Numerical 3.9
**Problem:** Two blocks of masses $2.0\text{ kg}$ and $0.50\text{ kg}$ are attached at the two ends of a compressed spring. The elastic potential energy stored in the spring is $10\text{ J}$. Find the velocities of the blocks if the spring delivers its energy to the blocks when released.

**Solution:**
Let $m_1 = 2.0\text{ kg}$ and $m_2 = 0.50\text{ kg}$.
1. **Conservation of Linear Momentum:**
   $$m_1 v_1 + m_2 v_2 = 0 \implies (2.0) v_1 + (0.50) v_2 = 0 \implies v_2 = -4 v_1$$

2. **Conservation of Energy:**
   $$\frac{1}{2} m_1 v_1^2 + \frac{1}{2} m_2 v_2^2 = E_{\text{stored}}$$
   $$\frac{1}{2}(2.0) v_1^2 + \frac{1}{2}(0.50) (-4 v_1)^2 = 10$$
   $$v_1^2 + 0.25 (16 v_1^2) = 10$$
   $$v_1^2 + 4 v_1^2 = 10 \implies 5 v_1^2 = 10 \implies v_1^2 = 2$$
   $$\mathbf{v_1 = \sqrt{2} \approx 1.41\text{ m}\cdot\text{s}^{-1} \approx 1.4\text{ m}\cdot\text{s}^{-1}}$$
   $$\mathbf{v_2 = -4(1.41) \approx -5.6\text{ m}\cdot\text{s}^{-1}}$$

---

### Numerical 3.10
**Problem:** A football is thrown upward at an angle of $30^\circ$ with respect to the horizontal. To complete a $40\text{ m}$ pass, what must be the initial speed of the ball?

**Solution:**
Given:
- Range $R = 40\text{ m}$
- Launch angle $\theta = 30^\circ \implies 2\theta = 60^\circ$
- Acceleration due to gravity $g = 9.8\text{ m}\cdot\text{s}^{-2}$

Formula for horizontal range:
$$R = \frac{v_i^2 \sin 2\theta}{g}$$
$$40 = \frac{v_i^2 \sin 60^\circ}{9.8}$$
$$v_i^2 = \frac{40 \times 9.8}{\sin 60^\circ} = \frac{392}{0.866} \approx 452.65$$
$$v_i = \sqrt{452.65} \approx \mathbf{21.3\text{ m}\cdot\text{s}^{-1} \approx 21\text{ m}\cdot\text{s}^{-1}}$$

---

### Numerical 3.11
**Problem:** A ball is thrown horizontally from a height of $10\text{ m}$ with a velocity of $21\text{ m}\cdot\text{s}^{-1}$. How far off does it hit the ground and with what velocity?

**Solution:**
- Height $h = 10\text{ m}$, initial horizontal velocity $v_{ix} = 21\text{ m}\cdot\text{s}^{-1}$, initial vertical velocity $v_{iy} = 0$.
- Time to hit the ground:
  $$h = \frac{1}{2} g t^2 \implies 10 = \frac{1}{2}(9.8) t^2 = 4.9 t^2 \implies t = \sqrt{\frac{10}{4.9}} \approx 1.428\text{ s}$$
- Horizontal distance ($x$):
  $$x = v_{ix} \times t = 21 \times 1.428 \approx \mathbf{30\text{ m}}$$
- Velocity upon impact:
  - $v_{fx} = v_{ix} = 21\text{ m}\cdot\text{s}^{-1}$
  - $v_{fy} = v_{iy} + g t = 0 + (9.8)(1.428) \approx 14.0\text{ m}\cdot\text{s}^{-1}$ (downward)
  - Resultant speed:
    $$v = \sqrt{v_{fx}^2 + v_{fy}^2} = \sqrt{(21)^2 + (14)^2} = \sqrt{441 + 196} = \sqrt{637} \approx \mathbf{25.2\text{ m}\cdot\text{s}^{-1} \approx 25\text{ m}\cdot\text{s}^{-1}}$$

---

### Numerical 3.12
**Problem:** A bomber dropped a bomb at a height of $490\text{ m}$ when its velocity along the horizontal was $300\text{ km}\cdot\text{h}^{-1}$.
(a) How long was it in the air?
(b) At what distance from the point vertically below the bomber at the instant the bomb was dropped did it strike the ground?

**Solution:**
- Height $h = 490\text{ m}$, $g = 9.8\text{ m}\cdot\text{s}^{-2}$
- Horizontal speed $v_x = 300\text{ km}\cdot\text{h}^{-1} = \frac{300 \times 1000}{3600} = \frac{300}{3.6} \approx 83.33\text{ m}\cdot\text{s}^{-1}$
- Initial vertical speed $v_{iy} = 0$

**(a) Time in air ($t$):**
$$h = \frac{1}{2} g t^2 \implies 490 = \frac{1}{2}(9.8) t^2 = 4.9 t^2$$
$$t^2 = \frac{490}{4.9} = 100 \implies \mathbf{t = 10\text{ s}}$$

**(b) Horizontal distance ($x$):**
$$x = v_x \times t = 83.33 \times 10 \approx \mathbf{833.3\text{ m} \approx 833\text{ m}}$$

---

### Numerical 3.13
**Problem:** Find the angle of projection of a projectile for which its maximum height and horizontal range are equal.

**Solution:**
Given $H = R$:
$$\frac{v_i^2 \sin^2\theta}{2g} = \frac{v_i^2 \sin 2\theta}{g}$$
$$\frac{\sin^2\theta}{2} = \sin 2\theta = 2\sin\theta\cos\theta$$
Dividing both sides by $\sin\theta\cos\theta$ (since $\sin\theta \ne 0, \cos\theta \ne 0$):
$$\frac{\sin\theta}{2\cos\theta} = 2 \implies \frac{\tan\theta}{2} = 2 \implies \tan\theta = 4$$
$$\theta = \tan^{-1}(4) \approx \mathbf{75.96^\circ \approx 76^\circ}$$

---

### Numerical 3.14
**Problem:** Prove that for angles of projection which exceed or fall short of $45^\circ$ by equal amounts, the ranges are equal.

**Solution:**
Let the two angles of projection be:
$$\theta_1 = 45^\circ + \phi$$
$$\theta_2 = 45^\circ - \phi$$

1. **For $\theta_1 = 45^\circ + \phi$:**
   $$R_1 = \frac{v_i^2 \sin[2(45^\circ + \phi)]}{g} = \frac{v_i^2 \sin(90^\circ + 2\phi)}{g}$$
   Using trigonometric identity $\sin(90^\circ + \alpha) = \cos\alpha$:
   $$R_1 = \frac{v_i^2 \cos 2\phi}{g}$$

2. **For $\theta_2 = 45^\circ - \phi$:**
   $$R_2 = \frac{v_i^2 \sin[2(45^\circ - \phi)]}{g} = \frac{v_i^2 \sin(90^\circ - 2\phi)}{g}$$
   Using trigonometric identity $\sin(90^\circ - \alpha) = \cos\alpha$:
   $$R_2 = \frac{v_i^2 \cos 2\phi}{g}$$

Since $R_1 = R_2$, the horizontal ranges are **strictly equal** for angles differing equally from $45^\circ$.

---

### Numerical 3.15
**Problem:** A SLBM (submarine-launched ballistic missile) is fired from a distance of $3000\text{ km}$. If the Earth is considered flat and the angle of launch is $45^\circ$ with the horizontal, find the velocity with which the missile is fired and the time taken by the SLBM to hit the target.

**Solution:**
Given:
- Range $R = 3000\text{ km} = 3 \times 10^6\text{ m}$
- Launch angle $\theta = 45^\circ \implies \sin 2\theta = \sin 90^\circ = 1$
- $g = 9.8\text{ m}\cdot\text{s}^{-2}$

1. **Launch Velocity ($v_i$):**
   $$R = \frac{v_i^2 \sin 2\theta}{g} = \frac{v_i^2 (1)}{g} \implies v_i = \sqrt{R g}$$
   $$v_i = \sqrt{(3 \times 10^6\text{ m}) \times 9.8\text{ m}\cdot\text{s}^{-2}} = \sqrt{2.94 \times 10^7} \approx \mathbf{5422\text{ m}\cdot\text{s}^{-1} \approx 5.42\text{ km}\cdot\text{s}^{-1}}$$

2. **Time of Flight ($T$):**
   $$T = \frac{2 v_i \sin 45^\circ}{g} = \frac{2 (5422) (0.7071)}{9.8} = \frac{7668}{9.8} \approx 782.4\text{ s}$$
   In minutes:
   $$T = \frac{782.4}{60} \approx \mathbf{13.04\text{ min} \approx 13\text{ min}}$$

---

