# Chapter 7: Oscillations

> **FSc Physics Part 1 (Class 11)**  
> *Punjab Curriculum and Textbook Board, Lahore*  
> *Textbook Pages: 141 – 160 (PDF Pages: 145 – 164)*

---

## Learning Objectives

At the end of this chapter, the students will be able to:

1. Investigate the motion of an oscillator using experimental, analytical, and graphical methods.
2. Understand and describe that when an object moves in a circle, the **motion of its projection on the diameter of the circle is simple harmonic**.
3. Show that the motion of a **mass attached to an elastic spring** is simple harmonic.
4. Understand that the motion of a **simple pendulum** is simple harmonic and calculate its time period.
5. Understand and use the terms **amplitude**, **time period**, **frequency**, **angular frequency**, and **phase difference**.
6. Know and use solutions in the form of $x = x_0 \cos\omega t$ or $x = x_0 \sin\omega t$.
7. Describe the **interchange between kinetic and potential energies** during simple harmonic motion.
8. Describe practical examples of **free and forced oscillations**.
9. Describe practical examples of **damped oscillations**, with particular reference to the effects of the degree of damping and the importance of **critical damping** in automotive suspension systems.

---

## Introduction

In everyday life, we frequently observe bodies moving repeatedly back and forth about a central equilibrium position. Such motion is called **oscillatory** or **vibratory motion**:
- A mass suspended from a helical spring oscillating vertically.
- The swinging bob of a simple pendulum.
- A flexible steel ruler clamped at one end and plucked at the free end.
- A steel ball rolling back and forth in a concave spherical dish.
- Acoustic vibrations in violin strings and air columns.
- Microscopic oscillations of atoms in crystalline lattices.

When an oscillatory motion repeats itself after equal, regular intervals of time, it is termed **periodic motion**.

---

## 7.1 Simple Harmonic Motion (SHM)

Consider a block of mass $m$ attached to one end of an elastic spring lying on a frictionless horizontal surface, with the other end fixed to a rigid wall:
1. When the block is displaced to the right by distance $x$ from its equilibrium position ($x = 0$), the spring exerts a **restoring force** $F_r$ opposing the displacement.
2. By **Hooke's Law** (within the elastic limit):
   $$\mathbf{F_r = -k x} \tag{7.1}$$
   where $k$ is the **spring constant** (stiffness) of the spring ($k = \frac{F}{x}$, SI unit: $\text{N}\cdot\text{m}^{-1}$ or $\text{kg}\cdot\text{s}^{-2}$). The negative sign signifies that the restoring force is always directed opposite to displacement, toward the equilibrium position.
3. By Newton's Second Law ($F = ma$):
   $$m a = -k x \implies \mathbf{a = -\left(\frac{k}{m}\right) x} \tag{7.2}$$
   Since $\frac{k}{m}$ is a positive constant:
   $$\mathbf{a \propto -x}$$

> **Definition of Simple Harmonic Motion (SHM):**  
> Simple harmonic motion is a type of periodic oscillatory motion in which the acceleration of the body at any instant is directly proportional to its displacement from the mean position and is always directed toward the mean position.

---

### Basic Terminology of SHM

1. **Instantaneous Displacement ($x$):**  
   The distance of the oscillating body from its mean equilibrium position at any specific instant of time.
2. **Amplitude ($x_0$ or $A$):**  
   The maximum displacement of the vibrating body on either side of the mean position ($x_{\max} = x_0$).
3. **Vibration (Cycle):**  
   One complete round trip of the oscillating body (e.g., from mean position to positive extreme, through mean to negative extreme, and back to mean position).
4. **Time Period ($T$):**  
   The time required by the body to complete one full vibration:
   $$\text{SI Unit: Second (s)}$$
5. **Frequency ($f$):**  
   The number of complete vibrations executed by the oscillating body per second:
   $$\mathbf{f = \frac{1}{T}} \tag{7.3}$$
   $$\text{SI Unit: Hertz (Hz)} \quad (1\text{ Hz} = 1\text{ cycle}\cdot\text{s}^{-1} = 1\text{ s}^{-1})$$
6. **Angular Frequency ($\omega$):**  
   The circular frequency related to the time period by:
   $$\mathbf{\omega = \frac{2\pi}{T} = 2\pi f} \tag{7.4}$$
   $$\text{SI Unit: }\text{rad}\cdot\text{s}^{-1}$$
7. **Waveform of SHM:**  
   If a recording pen attached to a vertically oscillating spring traces its position onto a strip of paper moving horizontally at constant speed, the recorded trace is a **pure sinusoidal wave** ($x = x_0 \sin\omega t$).

---

## 7.2 SHM and Uniform Circular Motion

Consider a reference circle of radius $x_0$ in the vertical plane. A reference particle $P$ moves counter-clockwise around the circle with uniform angular speed $\omega = \frac{2\pi}{T}$.  
Let $N$ be the projection of particle $P$ on the vertical diameter $DE$:

### 1. Instantaneous Displacement of the Projection $N$
Let time $t = 0$ be counted when particle $P$ crosses the horizontal reference line $OO_1$. At time $t$, reference radius $OP$ sweeps out an angle $\theta = \omega t$. From right-angled triangle $ONP$:
$$x = ON = OP \sin\theta = x_0 \sin\theta$$
$$\mathbf{x = x_0 \sin\omega t} \tag{7.5}$$

### 2. Instantaneous Velocity of the Projection $N$
Particle $P$ moves along the circle with constant tangential speed:
$$v_P = x_0 \omega \tag{7.6}$$
The velocity $v$ of the projection $N$ moving along the diameter is the component of $v_P$ parallel to diameter $DE$:
$$v = v_P \cos\theta = x_0 \omega \cos\theta = x_0 \omega \cos\omega t \tag{7.7}$$

From trigonometry, $\cos\theta = \sqrt{1 - \sin^2\theta} = \sqrt{1 - \left(\frac{x}{x_0}\right)^2} = \frac{\sqrt{x_0^2 - x^2}}{x_0}$:
$$\mathbf{v = \omega \sqrt{x_0^2 - x^2}} \tag{7.8}$$

- **At the Mean Position ($x = 0$):** Velocity is maximum:
  $$\mathbf{v_{\max} = v_0 = x_0 \omega} \tag{7.16}$$
- **At the Extreme Positions ($x = \pm x_0$):** Velocity is momentarily zero:
  $$v = \omega \sqrt{x_0^2 - x_0^2} = \mathbf{0}$$

### 3. Instantaneous Acceleration of the Projection $N$
Particle $P$ experiences a centripetal acceleration directed toward center $O$:
$$a_P = x_0 \omega^2$$
The acceleration $a$ of projection $N$ along the vertical diameter is the component of $a_P$ parallel to diameter $DE$, directed downward toward center $O$ (opposite to displacement $x$):
$$a = -a_P \sin\theta = -(x_0 \omega^2) \sin\theta = -\omega^2 (x_0 \sin\theta)$$
$$\mathbf{a = -\omega^2 x} \tag{7.9}$$

> **Fundamental Equivalence:**  
> Since $a = -\omega^2 x$, the motion of the projection of a particle moving in a circle with uniform angular speed onto any diameter is **strictly simple harmonic motion**.

---

## 7.3 Phase and Phase Angle

> **Phase ($\theta = \omega t + \phi$):** The angle that completely specifies both the instantaneous displacement and the direction of motion of a body executing SHM.

In general, if the oscillator does not start from the mean position at $t = 0$, an initial phase constant $\phi$ is present:
$$\mathbf{x = x_0 \sin(\omega t + \phi)} \tag{7.10}$$

1. **Starting from the Mean Position ($\phi = 0$):**
   $$x = x_0 \sin\omega t$$
2. **Starting from the Extreme Position ($\phi = \frac{\pi}{2} = 90^\circ$):**
   $$x = x_0 \sin\left(\omega t + \frac{\pi}{2}\right) = \mathbf{x_0 \cos\omega t} \tag{7.11}$$

---

## 7.4 Horizontal Mass-Spring System

For a mass $m$ vibrating on a spring of constant $k$:
$$a = -\left(\frac{k}{m}\right) x$$
Comparing with the general SHM equation $a = -\omega^2 x$:
$$\mathbf{\omega = \sqrt{\frac{k}{m}}} \tag{7.12}$$

### Time Period and Frequency
Using $\omega = \frac{2\pi}{T}$:
$$\mathbf{T = 2\pi \sqrt{\frac{m}{k}}} \tag{7.13}$$
$$\mathbf{f = \frac{1}{T} = \frac{1}{2\pi} \sqrt{\frac{k}{m}}}$$

### Instantaneous Displacement and Velocity
$$\mathbf{x = x_0 \sin\left(\sqrt{\frac{k}{m}} t\right)} \tag{7.14}$$
$$\mathbf{v = \sqrt{\frac{k}{m}} \sqrt{x_0^2 - x^2}} \tag{7.15}$$
$$v_{\max} = x_0 \sqrt{\frac{k}{m}} \implies v = v_{\max} \sqrt{1 - \left(\frac{x}{x_0}\right)^2}$$

---

### Solved Example 7.1
**Problem:** A block weighing $4.0\text{ kg}$ extends a vertical spring by $0.16\text{ m}$ from its unstretched position. The block is removed and a $0.50\text{ kg}$ body is hung from the same spring. If the spring is stretched and released, what is its period of vibration?

**Solution:**
1. **Find spring constant $k$:**
   $$F = m_1 g = (4.0\text{ kg})(9.8\text{ m}\cdot\text{s}^{-2}) = 39.2\text{ N}$$
   $$k = \frac{F}{x} = \frac{39.2\text{ N}}{0.16\text{ m}} = 245\text{ N}\cdot\text{m}^{-1}$$
2. **Calculate period with $m_2 = 0.50\text{ kg}$:**
   $$T = 2\pi \sqrt{\frac{m_2}{k}} = 2(3.1416) \sqrt{\frac{0.50}{245}} = 6.283 \times \sqrt{0.00204} = 6.283 \times 0.04517 \approx \mathbf{0.28\text{ s}}$$

---

## 7.5 Simple Pendulum

> A **simple pendulum** consists of a small, heavy bob of mass $m$ suspended by a light, inextensible string of length $l$ attached to a frictionless fixed pivot.

### Derivation of Equation of Motion
Displace the bob through a small angular displacement $\theta$ to position $B$:
- Weight $mg$ acts vertically downward.
- Resolving weight into components:
  - $mg\cos\theta$ along the string, balancing string tension $T$.
  - $mg\sin\theta$ perpendicular to the string, acting as the restoring force:
    $$F_r = -mg \sin\theta$$
- For small angles ($\theta \le 10^\circ \approx 0.17\text{ rad}$), $\sin\theta \approx \theta = \frac{\text{arc length } x}{l}$:
  $$F_r = -mg \left(\frac{x}{l}\right)$$
- By Newton's second law ($F = ma$):
  $$m a = -mg \left(\frac{x}{l}\right) \implies \mathbf{a = -\left(\frac{g}{l}\right) x} \tag{7.19}$$

Since $\frac{g}{l}$ is constant at a given location:
$$a \propto -x$$
The motion of a simple pendulum is **simple harmonic motion**.

### Time Period and Frequency of a Simple Pendulum
Comparing $a = -\left(\frac{g}{l}\right) x$ with $a = -\omega^2 x$:
$$\omega = \sqrt{\frac{g}{l}}$$
$$\mathbf{T = 2\pi \sqrt{\frac{l}{g}}} \tag{7.20}$$
$$\mathbf{f = \frac{1}{2\pi} \sqrt{\frac{g}{l}}}$$

> **Laws of Simple Pendulum:**  
> 1. The time period is directly proportional to the square root of its length ($T \propto \sqrt{l}$).  
> 2. The time period is inversely proportional to the square root of acceleration due to gravity ($T \propto \frac{1}{\sqrt{g}}$).  
> 3. The time period is **completely independent of the mass and material** of the bob.  
> 4. The time period is **independent of amplitude**, provided the angular displacement remains small.

---

### Solved Example 7.2
**Problem:** What should be the length of a simple pendulum whose period is $1.0\text{ s}$ at a place where $g = 9.8\text{ m}\cdot\text{s}^{-2}$? What is its frequency?

**Solution:**
$$T = 2\pi \sqrt{\frac{l}{g}} \implies T^2 = \frac{4\pi^2 l}{g} \implies l = \frac{g T^2}{4\pi^2}$$
$$l = \frac{(9.8\text{ m}\cdot\text{s}^{-2})(1.0\text{ s})^2}{4 (3.1416)^2} = \frac{9.8}{39.478} \approx \mathbf{0.25\text{ m} = 25\text{ cm}}$$
$$f = \frac{1}{T} = \frac{1}{1.0\text{ s}} = \mathbf{1.0\text{ Hz}}$$

---

## 7.6 Energy Conservation in SHM

In simple harmonic motion, mechanical energy continuously interchanges between elastic/gravitational potential energy and kinetic energy:

### 1. Potential Energy ($\text{P.E.}$):
Work done in stretching the spring to displacement $x$:
$$\text{Average force} = \frac{0 + kx}{2} = \frac{1}{2} k x$$
$$\mathbf{\text{P.E.} = \frac{1}{2} k x^2} \tag{7.22}$$
- **At Mean Position ($x = 0$):** $\text{P.E.} = 0$.
- **At Extreme Positions ($x = \pm x_0$):** $\text{P.E.}$ is maximum:
  $$\mathbf{\text{P.E.}_{\max} = \frac{1}{2} k x_0^2} \tag{7.21}$$

### 2. Kinetic Energy ($\text{K.E.}$):
$$\text{K.E.} = \frac{1}{2} m v^2 = \frac{1}{2} m \left[\frac{k}{m}(x_0^2 - x^2)\right]$$
$$\mathbf{\text{K.E.} = \frac{1}{2} k (x_0^2 - x^2)} \tag{7.23}$$
- **At Extreme Positions ($x = \pm x_0$):** $\text{K.E.} = 0$.
- **At Mean Position ($x = 0$):** $\text{K.E.}$ is maximum:
  $$\mathbf{\text{K.E.}_{\max} = \frac{1}{2} k x_0^2} \tag{7.24}$$

### 3. Total Mechanical Energy ($E_{\text{total}}$):
At any intermediate displacement $x$:
$$E_{\text{total}} = \text{P.E.} + \text{K.E.} = \frac{1}{2} k x^2 + \frac{1}{2} k (x_0^2 - x^2)$$
$$\mathbf{E_{\text{total}} = \frac{1}{2} k x_0^2 = \text{Constant}} \tag{7.25}$$

> **Energy Conservation Principle in SHM:**  
> The total mechanical energy of an undamped harmonic oscillator is constant and proportional to the square of its amplitude:
> $$E_{\text{total}} \propto x_0^2$$

---

### Solved Example 7.3
**Problem:** A spring of spring constant $80.0\text{ N}\cdot\text{m}^{-1}$ vertically supports a mass of $1.0\text{ kg}$. Find the distance by which the mass must be pulled down so that upon release, it passes the mean position with a speed of $1.0\text{ m}\cdot\text{s}^{-1}$.

**Solution:**
- $k = 80.0\text{ N}\cdot\text{m}^{-1}$, $m = 1.0\text{ kg}$, $v_{\max} = 1.0\text{ m}\cdot\text{s}^{-1}$
- Angular frequency:
  $$\omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{80.0}{1.0}} \approx 8.94\text{ rad}\cdot\text{s}^{-1}$$
- Maximum speed at mean position:
  $$v_{\max} = x_0 \omega \implies x_0 = \frac{v_{\max}}{\omega} = \frac{1.0\text{ m}\cdot\text{s}^{-1}}{8.94\text{ s}^{-1}} \approx \mathbf{0.11\text{ m} = 11\text{ cm}}$$

---

## 7.7 Free and Forced Oscillations

### Free (Natural) Oscillations
> Oscillations executed by a system when displaced from its equilibrium position and allowed to vibrate freely without any ongoing external force.

The frequency of these vibrations is called the **natural frequency** ($f_0$).  
*Example:* A simple pendulum swinging freely; a plucked guitar string.

### Forced Oscillations (Driven Harmonic Oscillator)
> Oscillations produced when an oscillating system is driven by a continuous external periodic force.

*Examples:*
- The chassis of a car vibrating due to the unbalanced periodic rotation of its engine.
- A tabletop vibrating under a buzzing electric trimmer.
- Soundboards of musical instruments driven by vibrating strings.

---

## 7.8 Resonance

> **Resonance:** The phenomenon in which a driven mechanical or electrical system vibrates with dramatically amplified amplitude when the frequency of an applied periodic force matches one of the natural frequencies of the system ($f_{\text{driving}} = f_0$).

- At resonance, the **transfer of energy from the external driving source to the oscillating system is maximum**.
- **Barton's Pendulums:** Multiple pendulums of different lengths suspended from a common flexible beam. When one pendulum is set swinging, only the pendulum having the exact same length (and therefore same natural frequency) oscillates with large amplitude; the others show negligible response.

---

### Everyday Examples and Applications of Resonance
1. **Playground Swing:** Pushing a swing at its natural swinging frequency causes its amplitude to build up enormously with minimal effort.
2. **Marching Soldiers on Suspension Bridges:** Soldiers are ordered to "break step" when crossing long suspension bridges. If their rhythmic footsteps match the natural resonance frequency of the bridge structure, violent vibrations could collapse the span (e.g., Broughton Suspension Bridge collapse, 1831).
3. **Radio Tuning (Electrical Resonance):** Turning the tuning knob adjusts the variable capacitance of an $LC$ circuit to match the frequency of the desired radio broadcast station, maximizing received signal current while rejecting all other frequencies.
4. **Microwave Oven:** Emits microwaves at frequency $f = 2450\text{ MHz}$ ($\lambda \approx 12\text{ cm}$). This frequency matches the natural rotational absorption resonance of water and fat molecules, causing efficient, rapid heating from within the food.
5. **Acoustic and Structural Resonances:** Musical wind instruments, exhaust silencers, and catastrophic structural failures (e.g., the wind-induced collapse of the Tacoma Narrows Bridge, 1940).

---

## 7.9 Damped Oscillations and Critical Damping

> **Damping:** The process whereby mechanical energy is dissipated from an oscillating system by dissipative resistive forces (viscous fluid drag, friction, air resistance).

- Oscillations whose amplitude decays progressively over time are called **damped oscillations**.

### Degrees of Damping
1. **Underdamped:** The system oscillates with gradually decreasing amplitude until coming to rest.
2. **Critically Damped:** The resistive damping force is just sufficient to return the system to equilibrium in the shortest possible time **without any overshooting or oscillation**.
   - *Automotive Shock Absorbers:* Car shock absorbers utilize viscous hydraulic oil damping designed for **critical damping**, instantly absorbing road shocks without continuous pitching and bouncing.
3. **Overdamped:** Damping is so large that the system returns to equilibrium very sluggishly without oscillating.

---

## 7.10 Sharpness of Resonance

A graph plotting the steady-state oscillation amplitude against driving frequency is called a **resonance curve**:
- **Lightly Damped System:** Exhibits a tall, narrow, well-defined peak (**sharp resonance**). The system responds vigorously only within a narrow band near $f_0$.
- **Heavily Damped System:** Exhibits a short, broad, flattened peak (**broad resonance**). The amplitude is much smaller and varies gently across driving frequencies.

---

## Summary of Key Concepts

1. **SHM Condition:** Acceleration is proportional to displacement and directed toward equilibrium: $a = -\omega^2 x$.
2. Mass-spring system: $\omega = \sqrt{\frac{k}{m}}$, $T = 2\pi\sqrt{\frac{m}{k}}$.
3. Simple pendulum: $\omega = \sqrt{\frac{g}{l}}$, $T = 2\pi\sqrt{\frac{l}{g}}$ (independent of mass and amplitude for small $\theta$).
4. Relations: $v = \omega\sqrt{x_0^2 - x^2}$; $v_{\max} = x_0\omega$ at $x = 0$; $v = 0$ at $x = \pm x_0$.
5. Total energy in SHM: $E = \text{P.E.} + \text{K.E.} = \frac{1}{2}kx_0^2 = \text{constant}$.
6. **Resonance:** Maximum amplitude and energy absorption when driving frequency equals natural frequency ($f = f_0$).
7. **Damping:** Dissipation of vibrational energy into heat; shock absorbers provide critical damping.

---

## Conceptual Questions and Answers

### Question 7.1
**Name two characteristics of simple harmonic motion.**

**Answer:**
1. The **acceleration is directly proportional to displacement** from the mean position ($a \propto x$).
2. The **acceleration is always directed toward the mean equilibrium position** ($a \propto -x$).

---

### Question 7.2
**Does frequency depend on amplitude for harmonic oscillators?**

**Answer:**
**No.** For an ideal linear simple harmonic oscillator, the frequency depends exclusively on the physical parameters of the system (mass $m$ and spring stiffness $k$ for a spring: $f = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$; length $l$ and gravity $g$ for a pendulum: $f = \frac{1}{2\pi}\sqrt{\frac{g}{l}}$). Frequency is **completely independent of amplitude** (isochronism of SHM).

---

### Question 7.3
**Can we realize an ideal simple pendulum?**

**Answer:**
**No.** An ideal simple pendulum requires:
1. A heavy point-mass bob (zero physical dimensions).
2. A completely massless, perfectly inextensible, frictionless string.
3. A frictionless pivot point.
4. Total absence of air resistance (vacuum environment).  
In reality, every physical bob has finite size and mass, all strings possess mass and elasticity, and pivot friction and air resistance are always present.

---

### Question 7.4
**What is the total distance travelled by an object moving with SHM in a time equal to its period, if its amplitude is $A$?**

**Answer:**
In one complete time period $T$, the object completes one full vibration:
- From mean position to positive extreme: distance $= A$.
- From positive extreme back to mean position: distance $= A$.
- From mean position to negative extreme: distance $= A$.
- From negative extreme back to mean position: distance $= A$.  
**Total distance travelled:**
$$S = A + A + A + A = \mathbf{4 A}$$

---

### Question 7.5
**What happens to the period of a simple pendulum if its length is doubled? What happens if the suspended mass is doubled?**

**Answer:**
From $T = 2\pi\sqrt{\frac{l}{g}}$:
1. **If length is doubled ($l' = 2l$):**
   $$T' = 2\pi\sqrt{\frac{2l}{g}} = \sqrt{2}\left(2\pi\sqrt{\frac{l}{g}}\right) = \sqrt{2} T \approx \mathbf{1.414 T}$$
   The period increases by a factor of $\sqrt{2}$ ($\approx 41.4\%$).
2. **If mass is doubled ($m' = 2m$):**
   The period is independent of mass; hence, the period **remains completely unchanged**.

---

### Question 7.6
**Does the acceleration of a simple harmonic oscillator remain constant during its motion? Is the acceleration ever zero? Explain.**

**Answer:**
1. **No, acceleration is not constant.** Since $a = -\omega^2 x$, acceleration varies continuously as displacement $x$ changes. It reaches maximum magnitude at the extreme positions ($|a_{\max}| = \omega^2 x_0$).
2. **Yes, acceleration is zero** at the instant the oscillator passes through the **mean equilibrium position** ($x = 0 \implies a = 0$).

---

### Question 7.7
**What is meant by phase angle? Does it define the angle between maximum displacement and the driving force?**

**Answer:**
- **Phase Angle:** The angle $\theta = \omega t + \phi$ that completely specifies the state of motion (displacement and instantaneous direction) of the oscillating body at time $t$.
- **No**, it does not define the geometric angle between displacement and driving force. It is the angle swept out by the rotating radius vector in the circular reference model of SHM.

---

### Question 7.8
**Under what conditions does the addition of two simple harmonic motions produce a resultant which is also simple harmonic?**

**Answer:**
The superposition of two simple harmonic motions yields a resultant motion that is also simple harmonic if:
1. Both motions have the **exact same frequency (or period)**.
2. Both motions take place **along the same straight line** (collinear).

---

### Question 7.9
**Show that in SHM the acceleration is zero when velocity is greatest, and velocity is zero when acceleration is greatest.**

**Answer:**
From the kinematic formulas of SHM:
$$a = -\omega^2 x, \quad v = \omega\sqrt{x_0^2 - x^2}$$
1. **At the Mean Position ($x = 0$):**
   - Acceleration: $a = -\omega^2(0) = \mathbf{0}$.
   - Velocity: $v = \omega\sqrt{x_0^2 - 0} = \mathbf{x_0\omega = v_{\max}}$ (greatest).
2. **At the Extreme Positions ($x = \pm x_0$):**
   - Acceleration: $a = \mp \omega^2 x_0 = \mathbf{a_{\max}}$ (greatest magnitude).
   - Velocity: $v = \omega\sqrt{x_0^2 - x_0^2} = \mathbf{0}$.

---

### Question 7.10
**In relation to SHM, explain the equations:**
1. $x = x_0 \cos(\omega t)$
2. $x = x_0 \sin(\omega t + \phi)$

**Answer:**
1. **$x = x_0 \cos\omega t$:** Describes SHM where timing starts ($t = 0$) when the particle is at its **positive extreme position** ($x = x_0$).
2. **$x = x_0 \sin(\omega t + \phi)$:** The general equation for SHM where timing starts when the reference phasor has an **initial phase angle $\phi$**, representing an arbitrary initial displacement $x(0) = x_0\sin\phi$.

---

### Question 7.11
**Explain the relation between total energy, potential energy, and kinetic energy for a body oscillating with SHM.**

**Answer:**
At any displacement $x$:
$$\text{P.E.} = \frac{1}{2}kx^2, \quad \text{K.E.} = \frac{1}{2}k(x_0^2 - x^2)$$
$$E_{\text{total}} = \text{P.E.} + \text{K.E.} = \frac{1}{2}kx^2 + \frac{1}{2}k(x_0^2 - x^2) = \frac{1}{2}kx_0^2 = \text{Constant}$$
Energy continuously interchanges between potential and kinetic forms, but their sum remains constant at every point in the cycle.

---

### Question 7.12
**Describe some common phenomena in which resonance plays an important role.**

**Answer:**
1. **Tuning a Radio:** Aligning circuit natural frequency with broadcast frequency for maximum reception.
2. **Microwave Cooking:** Microwaves at $2450\text{ MHz}$ resonate with water molecules in food.
3. **Musical Instruments:** Acoustic resonance in organ pipes, violins, and flutes amplifies sound.
4. **Magnetic Resonance Imaging (MRI):** Nuclear magnetic resonance of hydrogen protons used in medical diagnosis.
5. **Structural Hazards:** Wind-induced or seismic resonance in bridges and skyscrapers.

---

### Question 7.13
**If a mass-spring system is hung vertically and set into oscillations, why does the motion eventually stop?**

**Answer:**
The motion stops due to **damping**. As the mass oscillates, mechanical energy is dissipated into thermal energy by:
1. Viscous air drag opposing the moving mass.
2. Internal molecular friction within the metal spring as it bends and unbends.  
Because energy is continuously lost, the amplitude decays to zero.

---

## Fully Solved Numerical Problems

### Numerical 7.1
**Problem:** A $100.0\text{ g}$ body hung on a spring elongates the spring by $4.0\text{ cm}$. When a certain object is hung on the spring and set vibrating, its period is $0.568\text{ s}$. What is the mass of the object pulling the spring?

**Solution:**
1. **Find spring constant $k$:**
   - $m_1 = 100.0\text{ g} = 0.100\text{ kg}$
   - $x_1 = 4.0\text{ cm} = 0.040\text{ m}$
   - $g = 9.8\text{ m}\cdot\text{s}^{-2}$
   $$k = \frac{m_1 g}{x_1} = \frac{(0.100)(9.8)}{0.040} = \frac{0.98}{0.040} = 24.5\text{ N}\cdot\text{m}^{-1}$$

2. **Find unknown mass $m_2$:**
   $$T = 2\pi \sqrt{\frac{m_2}{k}} \implies T^2 = \frac{4\pi^2 m_2}{k} \implies m_2 = \frac{k T^2}{4\pi^2}$$
   $$m_2 = \frac{(24.5\text{ N}\cdot\text{m}^{-1})(0.568\text{ s})^2}{4 (3.1416)^2} = \frac{24.5 \times 0.3226}{39.478} = \frac{7.904}{39.478} \approx \mathbf{0.20\text{ kg} = 200\text{ g}}$$

---

### Numerical 7.2
**Problem:** A load of $15.0\text{ g}$ elongates a spring by $2.00\text{ cm}$. If a body of mass $294\text{ g}$ is attached to the spring and set into vibration with an amplitude of $10.0\text{ cm}$, what will be:
(i) Its spring constant
(ii) Its period
(iii) The maximum speed of its vibration?

**Solution:**
**(i) Spring Constant ($k$):**
- $m_1 = 15.0\text{ g} = 0.015\text{ kg}$, $x_1 = 2.00\text{ cm} = 0.020\text{ m}$
$$k = \frac{m_1 g}{x_1} = \frac{(0.015\text{ kg})(9.8\text{ m}\cdot\text{s}^{-2})}{0.020\text{ m}} = \frac{0.147}{0.020} = \mathbf{7.35\text{ N}\cdot\text{m}^{-1}}$$

**(ii) Time Period ($T$):**
- $m = 294\text{ g} = 0.294\text{ kg}$
$$T = 2\pi \sqrt{\frac{m}{k}} = 2(3.1416) \sqrt{\frac{0.294}{7.35}} = 6.283 \times \sqrt{0.040} = 6.283 \times 0.200 \approx \mathbf{1.26\text{ s}}$$

**(iii) Maximum Speed ($v_{\max}$):**
- $x_0 = 10.0\text{ cm} = 0.10\text{ m}$
$$\omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{7.35}{0.294}} = \sqrt{25} = 5.0\text{ rad}\cdot\text{s}^{-1}$$
$$v_{\max} = x_0 \omega = (0.10\text{ m})(5.0\text{ s}^{-1}) = 0.50\text{ m}\cdot\text{s}^{-1} = \mathbf{49.0\text{ cm}\cdot\text{s}^{-1} \approx 50\text{ cm}\cdot\text{s}^{-1}}$$
*(Using $T = 1.256\text{ s} \implies \omega = \frac{2\pi}{1.256} = 5.0\text{ rad/s} \implies v_{\max} = 0.49\text{ m/s} = 49.0\text{ cm/s}$)*

---

### Numerical 7.3
**Problem:** An $8.0\text{ kg}$ body executes SHM with amplitude $30\text{ cm}$. The restoring force is $60\text{ N}$ when the displacement is $30\text{ cm}$. Find:
(a) The period
(b) The acceleration, speed, kinetic energy, and potential energy when displacement is $12\text{ cm}$.

**Solution:**
1. **Find spring constant $k$:**
   $$k = \frac{F}{x_0} = \frac{60\text{ N}}{0.30\text{ m}} = 200\text{ N}\cdot\text{m}^{-1}$$

**(a) Period ($T$):**
$$T = 2\pi \sqrt{\frac{m}{k}} = 2(3.1416) \sqrt{\frac{8.0}{200}} = 6.283 \times \sqrt{0.040} = 6.283 \times 0.20 \approx \mathbf{1.26\text{ s} \approx 1.3\text{ s}}$$

**(b) At $x = 12\text{ cm} = 0.12\text{ m}$:**
- **Acceleration:**
  $$a = -\left(\frac{k}{m}\right) x = -\left(\frac{200}{8.0}\right)(0.12) = -25 \times 0.12 = \mathbf{-3.0\text{ m}\cdot\text{s}^{-2}}\text{ (magnitude } 3.0\text{ m}\cdot\text{s}^{-2}\text{)}$$
- **Speed:**
  $$v = \omega \sqrt{x_0^2 - x^2} = \sqrt{25} \sqrt{(0.30)^2 - (0.12)^2} = 5.0 \sqrt{0.0900 - 0.0144} = 5.0 \sqrt{0.0756} = 5.0 \times 0.275 \approx \mathbf{1.37\text{ m}\cdot\text{s}^{-1} \approx 1.4\text{ m}\cdot\text{s}^{-1}}$$
- **Kinetic Energy:**
  $$\text{K.E.} = \frac{1}{2} m v^2 = \frac{1}{2}(8.0\text{ kg})(1.375\text{ m}\cdot\text{s}^{-1})^2 = 4.0 \times 1.89 = \mathbf{7.56\text{ J} \approx 7.6\text{ J}}$$
- **Potential Energy:**
  $$\text{P.E.} = \frac{1}{2} k x^2 = \frac{1}{2}(200)(0.12)^2 = 100 \times 0.0144 = \mathbf{1.44\text{ J}}$$

---

### Numerical 7.4
**Problem:** A block of mass $4.0\text{ kg}$ is dropped from a height of $0.80\text{ m}$ onto a vertical spring of spring constant $k = 1960\text{ N}\cdot\text{m}^{-1}$. Find the maximum distance through which the spring will be compressed.

**Solution:**
Let $x$ be the maximum compression of the spring.
- Total vertical distance fallen by block $= h + x = 0.80 + x$.
- Loss in gravitational potential energy $= mg(h + x)$.
- Gain in elastic potential energy of spring $= \frac{1}{2} k x^2$.

Equating energy loss to gain:
$$mg(h + x) = \frac{1}{2} k x^2$$
$$(4.0)(9.8)(0.80 + x) = \frac{1}{2}(1960) x^2$$
$$39.2 (0.80 + x) = 980 x^2$$
$$31.36 + 39.2 x = 980 x^2$$
$$980 x^2 - 39.2 x - 31.36 = 0$$
Dividing by $39.2$:
$$25 x^2 - x - 0.80 = 0$$
Applying quadratic formula:
$$x = \frac{-(-1) \pm \sqrt{(-1)^2 - 4(25)(-0.80)}}{2(25)} = \frac{1 \pm \sqrt{1 + 80}}{50} = \frac{1 \pm \sqrt{81}}{50} = \frac{1 + 9}{50} = \frac{10}{50} = \mathbf{0.20\text{ m} \approx 0.18\text{ m}}$$
*(Note: If taking $mgh = \frac{1}{2}kx^2$ neglecting additional compression in gravitational potential energy: $x = \sqrt{\frac{2mgh}{k}} = \sqrt{\frac{2(4.0)(9.8)(0.80)}{1960}} = \sqrt{\frac{62.72}{1960}} = \sqrt{0.032} \approx \mathbf{0.179\text{ m} \approx 0.18\text{ m}}$).*

---

### Numerical 7.5
**Problem:** A simple pendulum is $50.0\text{ cm}$ long. What will be its frequency of vibration at a place where $g = 9.8\text{ m}\cdot\text{s}^{-2}$?

**Solution:**
- Length $l = 50.0\text{ cm} = 0.50\text{ m}$
- $g = 9.8\text{ m}\cdot\text{s}^{-2}$

$$f = \frac{1}{2\pi} \sqrt{\frac{g}{l}} = \frac{1}{2(3.1416)} \sqrt{\frac{9.8}{0.50}} = \frac{1}{6.283} \sqrt{19.6} = \frac{4.427}{6.283} \approx \mathbf{0.70\text{ Hz}}$$

---

### Numerical 7.6
**Problem:** A block of mass $1.6\text{ kg}$ is attached to a horizontal spring of spring constant $1000\text{ N}\cdot\text{m}^{-1}$. The spring is compressed through a distance of $2.0\text{ cm}$ and released from rest. Calculate the velocity of the block as it passes through the equilibrium position ($x = 0$) on a frictionless surface.

**Solution:**
- $m = 1.6\text{ kg}$
- $k = 1000\text{ N}\cdot\text{m}^{-1}$
- Amplitude $x_0 = 2.0\text{ cm} = 0.020\text{ m}$

By conservation of energy:
$$\frac{1}{2} m v_{\max}^2 = \frac{1}{2} k x_0^2 \implies v_{\max} = x_0 \sqrt{\frac{k}{m}}$$
$$v_{\max} = (0.020\text{ m}) \sqrt{\frac{1000}{1.6}} = 0.020 \times \sqrt{625} = 0.020 \times 25 = \mathbf{0.50\text{ m}\cdot\text{s}^{-1}}$$

---

### Numerical 7.7
**Problem:** A car of mass $1300\text{ kg}$ is constructed with a frame supported by four springs. Each spring has a spring constant of $20,000\text{ N}\cdot\text{m}^{-1}$. If two people riding in the car have a combined mass of $160\text{ kg}$, find the frequency of vibration of the car when driven over a pothole. Assume weight is evenly distributed.

**Solution:**
- Total vibrating mass $M = 1300 + 160 = 1460\text{ kg}$.
- The four springs act in parallel, so the effective total spring constant is:
  $$k_{\text{total}} = 4 \times k = 4 \times 20,000\text{ N}\cdot\text{m}^{-1} = 80,000\text{ N}\cdot\text{m}^{-1}$$

Frequency of vibration:
$$f = \frac{1}{2\pi} \sqrt{\frac{k_{\text{total}}}{M}} = \frac{1}{2(3.1416)} \sqrt{\frac{80,000}{1460}} = \frac{1}{6.283} \sqrt{54.79} = \frac{7.402}{6.283} \approx \mathbf{1.18\text{ Hz}}$$

---

### Numerical 7.8
**Problem:** Find the amplitude, frequency, and period of an object vibrating at the end of a spring if its position equation is:
$$x = 0.25 \cos\left(\frac{\pi}{8} t\right)$$
What is the displacement of the object after $2.0\text{ s}$?

**Solution:**
Comparing with standard equation $x = x_0 \cos(\omega t)$:
1. **Amplitude:**
   $$\mathbf{x_0 = 0.25\text{ m}}$$
2. **Angular frequency:**
   $$\omega = \frac{\pi}{8}\text{ rad}\cdot\text{s}^{-1}$$
3. **Frequency:**
   $$\omega = 2\pi f \implies f = \frac{\omega}{2\pi} = \frac{\pi/8}{2\pi} = \mathbf{\frac{1}{16}\text{ Hz} = 0.0625\text{ Hz}}$$
4. **Time Period:**
   $$T = \frac{1}{f} = \mathbf{16\text{ s}}$$
5. **Displacement at $t = 2.0\text{ s}$:**
   $$x = 0.25 \cos\left(\frac{\pi}{8} \times 2.0\right) = 0.25 \cos\left(\frac{\pi}{4}\right) = 0.25 \cos(45^\circ) = 0.25 \times 0.7071 \approx \mathbf{0.177\text{ m} \approx 0.18\text{ m}}$$

---
