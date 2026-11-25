# Chapter 8: Waves

> **FSc Physics Part 1 (Class 11)**  
> *Punjab Curriculum and Textbook Board, Lahore*  
> *Textbook Pages: 161 – 192 (PDF Pages: 165 – 196)*

---

## Learning Objectives

At the end of this chapter, the students will be able to:

1. Recall the **generation and propagation of waves**.
2. Describe the nature of motion in **transverse** and **longitudinal waves**.
3. Understand and use the terms **wavelength**, **frequency**, and **speed of wave**.
4. Understand and use the wave speed equation $v = f \lambda$.
5. Understand and describe **Newton's formula for the speed of sound**.
6. Derive **Laplace's correction** in Newton's formula for the speed of sound in air.
7. Derive the temperature-dependence formula: $v = v_0 + 0.61 t$.
8. Recognize and describe the **factors on which the speed of sound in air depends** (pressure, density, temperature).
9. Explain and apply the **principle of superposition**.
10. Understand the terms **interference** and **beats**.
11. Describe the phenomena of interference and beats with examples of sound waves.
12. Understand and describe the **reflection of waves** at boundaries of rarer and denser media.
13. Describe experiments demonstrating **stationary waves** on stretched strings and in vibrating air columns.
14. Explain the formation of stationary waves using graphical methods.
15. Understand the terms **node** and **antinode**.
16. Understand and describe the **modes of vibration of a stretched string** and the harmonic series.
17. Understand and describe the **Doppler effect** and its mathematical derivations.
18. Recognize applications of the Doppler effect in **radar**, **sonar**, **astronomy (red/blue shifts)**, **satellite tracking**, and **traffic speed traps**.

---

## Introduction

Waves transport **energy and momentum** from one point in space to another without transporting matter. The energy is carried by a physical disturbance that spreads outward from a vibrating source through a succession of periodic oscillations.

- **Mechanical Waves:** Waves that require a material medium (solid, liquid, or gas) for their propagation via the elastic oscillations of particles (e.g., sound waves, water waves, waves on strings and springs, seismic waves).
- **Electromagnetic Waves:** Waves that do not require any material medium and propagate through vacuum via synchronized oscillations of electric and magnetic fields (e.g., light, radio waves, X-rays).

---

## 8.1 Progressive (Travelling) Waves

> A wave that transfers energy by propagating continuously away from the source of disturbance is called a **progressive** or **travelling wave**.

Progressive mechanical waves are divided into two fundamental classes based on the relative direction of particle motion:

### 1. Transverse Waves
> Transverse waves are waves in which the particles of the medium vibrate in a direction **perpendicular to the direction of propagation** of the wave.

- Composed of alternating **crests** (elevations above the equilibrium level) and **troughs** (depressions below the equilibrium level).
- *Examples:* Waves on a plucked guitar string, ripples on the surface of water, seismic S-waves.
- *Medium Constraint:* Because transverse waves require shear elasticity to propagate, they travel readily through solids and on liquid surfaces, but **cannot propagate through the interior of fluids (gases and bulk liquids)**.

### 2. Longitudinal (Compressional) Waves
> Longitudinal waves are waves in which the particles of the medium oscillate **parallel to the direction of propagation** of the wave.

- Composed of alternating **compressions** (regions where particles are compressed closer together under high density and pressure) and **rarefactions** (regions where particles are spread apart under low density and pressure).
- *Examples:* Sound waves in air, compressional pulses in a slinky spring, seismic P-waves.
- Can propagate through **solids, liquids, and gases**.

---

## 8.2 Periodic Waves

When a source executes continuous, regular simple harmonic motion, it generates **periodic waves** throughout the medium.

### 1. Transverse Periodic Waves and Fundamental Wave Equation
- **Wavelength ($\lambda$):** The linear distance between two consecutive crests or two consecutive troughs (or any two consecutive particles in the identical phase of vibration).
- In one time period $T$, a wave crest advances through a distance of exactly one wavelength $\lambda$.
- Therefore, the wave speed $v$ is:
  $$v = \frac{\text{Distance travelled}}{\text{Time taken}} = \frac{\lambda}{T} \tag{8.1}$$
- Since frequency $f = \frac{1}{T}$:
  $$\mathbf{v = f \lambda} \tag{8.2}$$

### 2. Phase Relationship Between Two Points on a Wave
- Points separated by integral multiples of the wavelength ($\Delta x = n\lambda, n = 1, 2, 3, \dots$) oscillate in **identical phase** (in step).
- Points separated by odd half-wavelength multiples ($\Delta x = (2n + 1)\frac{\lambda}{2}$) oscillate in **opposite phase** ($180^\circ$ or $\pi\text{ rad}$ out of step).
- The phase difference $\Delta\phi$ between two points separated by distance $\Delta x$ along the wave is:
  $$\mathbf{\Delta\phi = \left(\frac{2\pi}{\lambda}\right) \Delta x}$$

---

## 8.3 Speed of Sound in Air

Sound waves are longitudinal mechanical compressions and rarefactions. The speed of sound depends on the **elastic modulus ($E$)** and **density ($\rho$)** of the transmitting medium:

$$\mathbf{v = \sqrt{\frac{E}{\rho}}} \tag{8.3}$$

Because solids have an elasticity modulus thousands of times greater than gases, **sound travels fastest in solids, slower in liquids, and slowest in gases**:
- Sound speed in steel: $\approx 5100\text{ m}\cdot\text{s}^{-1}$
- Sound speed in water: $\approx 1483\text{ m}\cdot\text{s}^{-1}$
- Sound speed in air ($0^\circ\text{C}$): $\approx 332\text{ m}\cdot\text{s}^{-1}$

---

### 1. Newton's Formula for Speed of Sound
Sir Isaac Newton assumed that as sound waves travel through air, the heat generated during compression rapidly conducts away to adjacent cooler rarefactions, keeping the temperature constant (**isothermal process**).

For an isothermal process, Boyle's Law applies:
$$P V = \text{Constant}$$
If pressure changes from $P$ to $P + \Delta P$, volume changes from $V$ to $V - \Delta V$:
$$(P + \Delta P)(V - \Delta V) = P V$$
$$P V - P \Delta V + V \Delta P - \Delta P \Delta V = P V$$
Neglecting the second-order small product $\Delta P \Delta V$:
$$V \Delta P = P \Delta V \implies P = \frac{\Delta P}{\Delta V / V} = E_{\text{isothermal}}$$
Thus, the isothermal bulk modulus of a gas equals its static pressure: $E = P$.  
Substituting into Eq. (8.3) yields **Newton's Formula**:
$$\mathbf{v = \sqrt{\frac{P}{\rho}}} \tag{8.5}$$

#### Evaluation at Standard Temperature and Pressure (STP):
At STP: $P = 1.013 \times 10^5\text{ N}\cdot\text{m}^{-2}$, $\rho_{\text{air}} = 1.29\text{ kg}\cdot\text{m}^{-3}$:
$$v = \sqrt{\frac{1.013 \times 10^5}{1.29}} \approx \mathbf{280\text{ m}\cdot\text{s}^{-1}}$$
*Error:* This theoretical value is about $16\%$ lower than the experimentally measured speed of sound in air ($332\text{ m}\cdot\text{s}^{-1}$).

---

### 2. Laplace's Correction
In 1816, the French mathematician **Pierre-Simon Laplace** pointed out that sound compressions and rarefactions occur thousands of times per second. Air is a poor conductor of heat, and the half-period of oscillation is far too brief for thermal conduction between compressions and rarefactions. Consequently, sound propagation is an **adiabatic process** (no heat exchange, $Q = 0$).

For an adiabatic process:
$$P V^\gamma = \text{Constant} \tag{8.6}$$
where $\gamma = \frac{C_p}{C_v}$ is the ratio of molar specific heat at constant pressure to that at constant volume ($\gamma = 1.40$ for diatomic air).

Differentiating adiabatically:
$$(P + \Delta P)(V - \Delta V)^\gamma = P V^\gamma$$
$$(P + \Delta P) V^\gamma \left(1 - \frac{\Delta V}{V}\right)^\gamma = P V^\gamma$$
Using the Binomial Theorem and neglecting higher-order terms:
$$(P + \Delta P)\left(1 - \gamma \frac{\Delta V}{V}\right) = P$$
$$P - \gamma P \frac{\Delta V}{V} + \Delta P - \gamma \Delta P \frac{\Delta V}{V} = P$$
$$\Delta P = \gamma P \frac{\Delta V}{V} \implies E_{\text{adiabatic}} = \frac{\Delta P}{\Delta V / V} = \mathbf{\gamma P}$$

Substituting $E_{\text{adiabatic}} = \gamma P$ into Eq. (8.3) gives **Laplace's Formula**:
$$\mathbf{v = \sqrt{\frac{\gamma P}{\rho}}} \tag{8.7}$$

#### Evaluation at STP:
$$v = \sqrt{\frac{1.40 \times 1.013 \times 10^5\text{ N}\cdot\text{m}^{-2}}{1.29\text{ kg}\cdot\text{m}^{-3}}} = \sqrt{\frac{141,820}{1.29}} = \sqrt{109,938} \approx \mathbf{332\text{ m}\cdot\text{s}^{-1}}$$
This result matches experimental observations within experimental uncertainty, fully validating Laplace's adiabatic model.

---

### Factors Affecting the Speed of Sound in Gases

1. **Effect of Pressure:**  
   **No effect.** By the ideal gas equation ($P = \frac{\rho R T}{M}$), at constant temperature, density is directly proportional to pressure ($\rho \propto P$). Therefore, the ratio $\frac{P}{\rho}$ is constant:
   $$\text{Variation in pressure produces no change in the speed of sound at constant temperature.}$$

2. **Effect of Density:**  
   At constant temperature and pressure, for gases with the same $\gamma$:
   $$v \propto \frac{1}{\sqrt{\rho}}$$
   *Example:* Oxygen is 16 times denser than hydrogen ($\rho_{\text{O}_2} = 16 \rho_{\text{H}_2}$). Hence, sound travels **4 times faster in hydrogen than in oxygen** ($v_{\text{H}_2} = 4 v_{\text{O}_2}$).

3. **Effect of Temperature:**  
   Heating a gas expands its volume, decreasing its density ($\rho \propto \frac{1}{T}$). Using $P = \frac{\rho R T}{M}$:
   $$\frac{\gamma P}{\rho} = \frac{\gamma R T}{M} \implies \mathbf{v \propto \sqrt{T}} \tag{8.10}$$
   > The speed of sound in a gas is directly proportional to the square root of its absolute temperature (in Kelvin).

#### Variation with Celsius Temperature:
Let $v_0$ be the speed at $0^\circ\text{C}$ ($T_0 = 273\text{ K}$) and $v_t$ be the speed at $t^\circ\text{C}$ ($T = 273 + t$):
$$\frac{v_t}{v_0} = \sqrt{\frac{273 + t}{273}} = \left(1 + \frac{t}{273}\right)^{1/2}$$
Using the Binomial expansion:
$$v_t = v_0 \left(1 + \frac{t}{546}\right) = v_0 + \left(\frac{v_0}{546}\right) t$$
Taking $v_0 = 332\text{ m}\cdot\text{s}^{-1}$:
$$\frac{v_0}{546} = \frac{332}{546} \approx 0.61\text{ m}\cdot\text{s}^{-1}\cdot{^\circ\text{C}}^{-1}$$
$$\mathbf{v_t = v_0 + 0.61 t} \tag{8.11}$$
> The speed of sound in air increases by **$0.61\text{ m}\cdot\text{s}^{-1}$ for every $1^\circ\text{C}$ rise in temperature**.

---

### Solved Example 8.1
**Problem:** Find the temperature at which the velocity of sound in air is twice its velocity at $10^\circ\text{C}$.

**Solution:**
- $T_1 = 10^\circ\text{C} + 273 = 283\text{ K}$
- $v_2 = 2 v_1$
- Since $v \propto \sqrt{T}$:
  $$\frac{v_2}{v_1} = \sqrt{\frac{T_2}{T_1}} \implies 2 = \sqrt{\frac{T_2}{283}}$$
  $$4 = \frac{T_2}{283} \implies T_2 = 4 \times 283 = \mathbf{1132\text{ K}}$$
  In Celsius:
  $$t_2 = 1132 - 273 = \mathbf{859^\circ\text{C}}$$

---

## 8.4 Principle of Superposition

> **Principle of Superposition:**  
> When two or more waves travel simultaneously through the same medium, the resultant displacement of any particle of the medium at any instant is the algebraic (vector) sum of the displacements that would have been produced by the individual waves independently:

$$\mathbf{y = y_1 + y_2 + y_3 + \dots + y_n}$$

### Manifestations of Superposition:
1. Two waves of **same frequency travelling in the same direction** $\implies$ **Interference**.
2. Two waves of **slightly different frequencies travelling in the same direction** $\implies$ **Beats**.
3. Two waves of **identical frequency and amplitude travelling in opposite directions** $\implies$ **Stationary (Standing) Waves**.

---

## 8.5 Interference of Sound Waves

> **Interference:** The phenomenon in which two sound waves of the same frequency and constant phase difference (coherent sources) superpose, resulting in regions of enhanced intensity and regions of cancelled intensity.

### Conditions for Interference:
1. **Constructive Interference (Maximum Loudness):**  
   The two waves arrive in phase (compressions meet compressions). The path difference $\Delta S$ must be an integral multiple of the wavelength:
   $$\mathbf{\Delta S = n \lambda} \quad (n = 0, 1, 2, 3, \dots) \tag{8.12}$$

2. **Destructive Interference (Silence / Minimum Loudness):**  
   The two waves arrive completely out of phase (compressions meet rarefactions). The path difference must be an odd integral multiple of half-wavelengths:
   $$\mathbf{\Delta S = (2n + 1)\frac{\lambda}{2}} \quad (n = 0, 1, 2, 3, \dots) \tag{8.13}$$

---

## 8.6 Beats

> **Beats:** The periodic waxing and waning (rising and falling) of sound intensity heard when two sound sources of slightly different frequencies are sounded together.

### Beat Frequency
- **Beat:** One complete cycle of maximum loudness and minimum loudness.
- **Beat Frequency ($n$):** The number of beats heard per second equals the absolute difference between the frequencies of the two sound sources:
  $$\mathbf{n = |f_1 - f_2|}$$
- Human hearing can discern distinct beats only when $|f_1 - f_2| \le 10\text{ Hz}$. Above $10\text{ Hz}$, the ear perceives a single harsh, dissonant tone.
- **Application:** Tuning pianos, violins, and other instruments by sounding them against standard reference tuning forks and tightening/loosening pegs until all beats cease ($n = 0$).

---

### Solved Example 8.2
**Problem:** A tuning fork $A$ produces $4\text{ beats}\cdot\text{s}^{-1}$ with tuning fork $B$. When $B$ is loaded with wax, the beat frequency increases to $6\text{ beats}\cdot\text{s}^{-1}$. If $f_A = 320\text{ Hz}$, determine the frequency of $B$ when loaded.

**Solution:**
- Originally: $|f_A - f_B| = 4 \implies f_B = 320 + 4 = 324\text{ Hz}$ or $f_B = 320 - 4 = 316\text{ Hz}$.
- Loading fork $B$ with wax increases its inertia, which **decreases its frequency** ($f_B' < f_B$).
- If $f_B$ were $324\text{ Hz}$, decreasing it would lower the difference from $320\text{ Hz}$ (beat frequency would decrease).
- If $f_B$ was $316\text{ Hz}$, decreasing it further (to $314\text{ Hz}$) increases the difference to $|320 - 314| = 6\text{ Hz}$ (matches the problem).
- Therefore:
  - Original frequency: $f_B = \mathbf{316\text{ Hz}}$
  - Loaded frequency: $f_B' = 320 - 6 = \mathbf{314\text{ Hz}}$

---

## 8.7 Reflection of Waves

When a wave reaches the interface between two different media:
1. **Reflection at a Denser Boundary (Fixed End):**  
   The wave exerts a force on the rigid boundary; by Newton's Third Law, the boundary exerts an equal and opposite reaction force back on the medium. An incident crest reflects as a **trough** (phase reversal of **$180^\circ$ or $\pi\text{ radians}$**).
2. **Reflection at a Rarer Boundary (Free End):**  
   The boundary is free to move. An incident crest reflects as a **crest** (**zero phase change**).

---

## 8.8 Stationary (Standing) Waves

> When two identical transverse or longitudinal waves of equal amplitude and frequency travel through a medium in **opposite directions**, their superposition creates a **stationary (standing) wave**.

### Characteristics of Standing Waves:
1. **Nodes ($N$):** Points along the medium that remain permanently at rest (zero displacement amplitude). Distance between two consecutive nodes:
   $$\mathbf{d_{N-N} = \frac{\lambda}{2}}$$
2. **Antinodes ($A$):** Points of maximum oscillation amplitude, located midway between adjacent nodes. Distance between two consecutive antinodes:
   $$\mathbf{d_{A-A} = \frac{\lambda}{2}}$$
3. Distance between a node and the adjacent antinode:
   $$\mathbf{d_{N-A} = \frac{\lambda}{4}}$$
4. **Energy:** Because the nodes remain permanently motionless, **no energy flows past the nodes**. Mechanical energy remains trapped between nodes, alternating between potential energy (at extreme displacements) and kinetic energy (at zero displacement).

---

## 8.9 Stationary Waves in a Stretched String

Consider a string of length $l$ and linear mass density $m$ ($\text{kg}\cdot\text{m}^{-1}$) stretched under tension $F$. The speed of transverse waves on the string is:
$$\mathbf{v = \sqrt{\frac{F}{m}}} \tag{8.15}$$

Both fixed clamped ends must be **nodes**.

### Modes of Vibration:
1. **First Mode (Fundamental Harmonic, $n = 1$):**  
   Vibrates in 1 loop ($N - A - N$):
   $$l = \frac{\lambda_1}{2} \implies \lambda_1 = 2l \tag{8.14}$$
   $$\mathbf{f_1 = \frac{v}{\lambda_1} = \frac{v}{2l} = \frac{1}{2l}\sqrt{\frac{F}{m}}} \tag{8.17}$$

2. **Second Mode (Second Harmonic / First Overtone, $n = 2$):**  
   Vibrates in 2 loops:
   $$l = 2\left(\frac{\lambda_2}{2}\right) = \lambda_2 \implies \mathbf{f_2 = 2 f_1} \tag{8.19}$$

3. **$n$-th Mode ($n$-th Harmonic):**  
   Vibrates in $n$ loops:
   $$\lambda_n = \frac{2l}{n} \tag{8.21}$$
   $$\mathbf{f_n = n f_1 = \frac{n v}{2l} = \frac{n}{2l}\sqrt{\frac{F}{m}}} \quad (n = 1, 2, 3, \dots) \tag{8.20}$$

> **Harmonic Series:**  
> The allowed frequencies form a discrete set of integer multiples of the fundamental: $f_1, 2f_1, 3f_1, 4f_1, \dots$.

---

### Solved Example 8.3
**Problem:** A steel wire hangs vertically from a fixed point supporting an $80\text{ N}$ weight. The wire has diameter $0.50\text{ mm}$, length $1.5\text{ m}$, and density $7.8 \times 10^3\text{ kg}\cdot\text{m}^{-3}$. Calculate the fundamental frequency.

**Solution:**
- Radius $r = \frac{0.50\text{ mm}}{2} = 0.25 \times 10^{-3}\text{ m}$
- Area $A = \pi r^2 = \pi (0.25 \times 10^{-3})^2 \approx 1.963 \times 10^{-7}\text{ m}^2$
- Linear mass density $m = \rho A = (7.8 \times 10^3\text{ kg}\cdot\text{m}^{-3})(1.963 \times 10^{-7}\text{ m}^2) \approx 1.53 \times 10^{-3}\text{ kg}\cdot\text{m}^{-1}$
- Tension $F = 80\text{ N}$, Length $l = 1.5\text{ m}$

$$f_1 = \frac{1}{2l} \sqrt{\frac{F}{m}} = \frac{1}{2(1.5)} \sqrt{\frac{80}{1.53 \times 10^{-3}}} = \frac{1}{3.0} \sqrt{52,287} = \frac{228.66}{3.0} \approx \mathbf{76\text{ Hz}}$$

---

## 8.10 Stationary Waves in Air Columns (Organ Pipes)

- An **open end** allows free particle displacement and behaves as a **displacement antinode**.
- A **closed end** restricts particle motion and behaves as a **displacement node**.

### 1. Pipe Open at Both Ends
Both ends are antinodes ($A - N - A$):
- **Fundamental ($n = 1$):** $l = \frac{\lambda_1}{2} \implies \lambda_1 = 2l \implies f_1 = \frac{v}{2l}$.
- **$n$-th Harmonic:**
  $$\mathbf{\lambda_n = \frac{2l}{n}}, \quad \mathbf{f_n = n f_1 = \frac{n v}{2l}} \quad (n = 1, 2, 3, 4, \dots) \tag{8.23}$$
- **All harmonics (even and odd) are present.** This rich spectrum gives open organ pipes a bright, pleasing acoustic timbre.

### 2. Pipe Closed at One End
Closed end is a node; open end is an antinode ($N - A$):
- **Fundamental ($n = 1$):** $l = \frac{\lambda_1}{4} \implies \lambda_1 = 4l \implies f_1 = \frac{v}{4l}$.
- **$n$-th Harmonic:**
  $$\mathbf{\lambda_n = \frac{4l}{n}}, \quad \mathbf{f_n = n f_1 = \frac{n v}{4l}} \quad (\mathbf{n = 1, 3, 5, 7, \dots\text{ only}}) \tag{8.24}$$
- **Only odd harmonics are present.** The fundamental frequency of a closed pipe is half that of an open pipe of the same length.

---

### Solved Example 8.4
**Problem:** An organ pipe has a length of $1.0\text{ m}$ ($v = 340\text{ m}\cdot\text{s}^{-1}$). Determine the frequencies of the fundamental and first two overtones if:
(a) The pipe is open at both ends.
(b) The pipe is closed at one end.

**Solution:**
**(a) Pipe Open at Both Ends:**
- $f_1 = \frac{v}{2l} = \frac{340}{2(1.0)} = \mathbf{170\text{ Hz}}$
- $f_2 = 2 f_1 = 2(170) = \mathbf{340\text{ Hz}}$
- $f_3 = 3 f_1 = 3(170) = \mathbf{510\text{ Hz}}$

**(b) Pipe Closed at One End:**
- $f_1 = \frac{v}{4l} = \frac{340}{4(1.0)} = \mathbf{85\text{ Hz}}$
- $f_3 = 3 f_1 = 3(85) = \mathbf{255\text{ Hz}}$ (1st overtone)
- $f_5 = 5 f_1 = 5(85) = \mathbf{425\text{ Hz}}$ (2nd overtone)

---

## 8.11 The Doppler Effect

> **Doppler Effect:** The apparent shift in the observed frequency (or pitch) of waves caused by relative motion between the source of waves and the observer.

Let $v$ be the speed of sound in air, $f$ be the emitted source frequency, and $\lambda = \frac{v}{f}$ be the true wavelength:

### Case 1: Observer Moving, Source Stationary
The true wavelength $\lambda$ is unaltered, but the relative speed of sound changes:

- **Subcase A: Observer moves toward stationary source ($u_o$):**  
  Relative speed increases to $(v + u_o)$:
  $$\mathbf{f_A = \left(\frac{v + u_o}{v}\right) f} \quad (\mathbf{f_A > f}) \tag{8.25}$$

- **Subcase B: Observer moves away from stationary source ($u_o$):**  
  Relative speed decreases to $(v - u_o)$:
  $$\mathbf{f_B = \left(\frac{v - u_o}{v}\right) f} \quad (\mathbf{f_B < f}) \tag{8.26}$$

---

### Case 2: Source Moving, Observer Stationary
Relative speed in air remains $v$, but the physical waves are compressed or stretched in space (**Doppler shift in wavelength** $\Delta\lambda = \frac{u_s}{f}$):

- **Subcase C: Source moves toward stationary observer ($u_s$):**  
  Wavelength compresses: $\lambda' = \lambda - \Delta\lambda = \frac{v - u_s}{f}$.
  $$\mathbf{f_C = \frac{v}{\lambda'} = \left(\frac{v}{v - u_s}\right) f} \quad (\mathbf{f_C > f}) \tag{8.27}$$

- **Subcase D: Source moves away from stationary observer ($u_s$):**  
  Wavelength elongates: $\lambda'' = \lambda + \Delta\lambda = \frac{v + u_s}{f}$.
  $$\mathbf{f_D = \frac{v}{\lambda''} = \left(\frac{v}{v + u_s}\right) f} \quad (\mathbf{f_D < f}) \tag{8.28}$$

---

### Solved Example 8.5
**Problem:** A train approaching a station at $90\text{ km}\cdot\text{h}^{-1}$ sounds a $1000\text{ Hz}$ whistle ($v = 340\text{ m}\cdot\text{s}^{-1}$). Find the apparent frequency heard by an observer on the platform: (i) as the train approaches, (ii) as the train recedes at the same speed.

**Solution:**
- Train speed $u_s = 90\text{ km}\cdot\text{h}^{-1} = \frac{90 \times 1000}{3600} = 25\text{ m}\cdot\text{s}^{-1}$
- $v = 340\text{ m}\cdot\text{s}^{-1}$, $f = 1000\text{ Hz}$

**(i) Train Approaching:**
$$f' = \left(\frac{v}{v - u_s}\right) f = \left(\frac{340}{340 - 25}\right) \times 1000 = \left(\frac{340}{315}\right) \times 1000 \approx \mathbf{1079.4\text{ Hz}}$$

**(ii) Train Receding:**
$$f'' = \left(\frac{v}{v + u_s}\right) f = \left(\frac{340}{340 + 25}\right) \times 1000 = \left(\frac{340}{365}\right) \times 1000 \approx \mathbf{931.5\text{ Hz}}$$

---

### Practical Applications of the Doppler Effect
1. **Radar Navigation:** Emits microwaves to determine aircraft velocity from the Doppler frequency shift of reflected waves.
2. **Sonar (Sound Navigation and Ranging):** Ultrasonic echo-ranging systems detect submarine velocity and map ocean trenches.
3. **Astronomy and Cosmology:**
   - **Red Shift:** Starlight from receding galaxies shifts to longer wavelengths (lower frequencies). Edwin Hubble's observation of universal galactic red shift provided direct proof of the expanding universe.
   - **Blue Shift:** Celestial bodies moving toward Earth show spectrum shifts toward shorter wavelengths.
4. **Police Radar Speed Traps:** Microwaves reflected off moving vehicles measure vehicle speed instantaneously.
5. **Medical Diagnostic Ultrasound:** Doppler flowmeters transmit ultrasonic waves ($5 - 10\text{ MHz}$) to measure blood velocity and detect arterial stenosis.

---

## Summary of Key Concepts

1. **Waves** transfer energy and momentum without transferring matter.
2. **Transverse waves** vibrate perpendicular to propagation; **longitudinal waves** vibrate parallel.
3. Wave relationship: $v = f \lambda$.
4. **Newton's formula** ($v = \sqrt{P/\rho}$) assumes isothermal conditions ($280\text{ m/s}$).
5. **Laplace's correction** ($v = \sqrt{\gamma P/\rho}$) accounts for adiabatic compression ($332\text{ m/s}$ at STP).
6. Temperature dependence of sound in air: $v_t = v_0 + 0.61 t$.
7. **Interference:** Constructive when $\Delta S = n\lambda$; destructive when $\Delta S = (2n + 1)\frac{\lambda}{2}$.
8. **Beats:** $n = |f_1 - f_2|$.
9. **Reflection:** $180^\circ$ phase shift at denser boundary; $0^\circ$ at rarer boundary.
10. **Standing waves on a string:** $f_n = n\left(\frac{v}{2l}\right) = \frac{n}{2l}\sqrt{\frac{F}{m}}$.
11. **Organ pipes:** Open pipe has all harmonics ($f_n = n\frac{v}{2l}$); closed pipe has odd harmonics only ($f_n = n\frac{v}{4l}, n = 1, 3, 5, \dots$).
12. **Doppler effect:** Apparent frequency increases on approach and decreases on recession.

---

## Conceptual Questions and Answers

### Question 8.1
**What features do longitudinal waves have in common with transverse waves?**

**Answer:**
1. Both obey the fundamental wave equation: $v = f \lambda$.
2. Both transport energy and momentum without transporting matter.
3. Both obey the **principle of superposition**.
4. Both undergo **reflection, refraction, interference, and diffraction**.
5. Both can form **stationary (standing) waves**.

---

### Question 8.2
**The five possible waveforms obtained on a CRO screen under identical controls are shown. Indicate the waveform which represents: (a) The loudest note, (b) The highest frequency.**

**Answer:**
- **(a) Loudest Note:** The trace with the **largest vertical amplitude** (since sound loudness $\propto \text{amplitude}^2$).
- **(b) Highest Frequency:** The trace with the **greatest number of complete cycles/waves per unit length** on the time-base axis.

---

### Question 8.3
**Is it possible for two identical waves travelling in the same direction along a string to give rise to a stationary wave?**

**Answer:**
**No.** Stationary waves require two identical waves travelling in **opposite directions** along the same medium. Two identical waves moving in the *same* direction produce travelling wave interference, not stationary waves.

---

### Question 8.4
**A wave is produced along a stretched string but some of its particles permanently show zero displacement. What type of wave is it?**

**Answer:**
It is a **stationary (standing) wave**. The points that permanently remain at zero displacement are called **nodes**.

---

### Question 8.5
**Explain the terms: crest, trough, node, and antinode.**

**Answer:**
1. **Crest:** The portion of a transverse wave where particles have maximum positive displacement above the equilibrium level.
2. **Trough:** The portion of a transverse wave where particles have maximum negative displacement below the equilibrium level.
3. **Node:** A point in a stationary wave that permanently exhibits **zero displacement** and zero velocity.
4. **Antinode:** A point in a stationary wave that oscillates with **maximum displacement amplitude**.

---

### Question 8.6
**Why does sound travel faster in solids than in gases?**

**Answer:**
From $v = \sqrt{\frac{E}{\rho}}$, the speed of sound depends on the ratio of elastic modulus $E$ to density $\rho$. Although solids are denser than gases, their **elastic modulus $E$ (Young's/Bulk modulus) is thousands of times greater** than that of gases due to strong interatomic bonds. Consequently, the ratio $\frac{E}{\rho}$ is far larger in solids, enabling sound to propagate $4$ to $15$ times faster than in gases.

---

### Question 8.7
**How are beats useful in tuning musical instruments?**

**Answer:**
When a musical instrument string is sounded simultaneously with a standard tuning fork of known frequency, audible beats are heard if their frequencies differ ($n = |f_1 - f_2|$). The musician slowly adjusts the string tension until the **beat frequency decreases to zero ($n = 0$)**, confirming that the instrument is tuned to the exact reference pitch.

---

### Question 8.8
**When two notes of frequencies $f_1$ and $f_2$ are sounded together, beats are formed. If $f_1 > f_2$, what will be the frequency of beats?**
- (i) $f_1 + f_2$
- (ii) $\frac{f_1 + f_2}{2}$
- (iii) $f_1 - f_2$
- (iv) $\frac{f_1 - f_2}{2}$

**Answer: (iii) $f_1 - f_2$.**

---

### Question 8.9
**As a result of a distant explosion, an observer senses a ground tremor and then hears the explosion. Explain the time difference.**

**Answer:**
Sound waves travel through Earth's crust as seismic elastic waves with speeds of $4000 - 6000\text{ m}\cdot\text{s}^{-1}$ due to the high elasticity of rock, whereas sound travels through air at only $\approx 340\text{ m}\cdot\text{s}^{-1}$. Because seismic waves travel $12$ to $18$ times faster, the ground tremor arrives well before the airborne acoustic blast.

---

### Question 8.10
**Explain why sound travels faster in warm air than in cold air.**

**Answer:**
From Laplace's formula, the speed of sound in a gas is directly proportional to the square root of its absolute temperature:
$$v \propto \sqrt{T}$$
Warm air has a higher temperature, causing gas molecules to move with greater average thermal velocity and lowering the air's density at constant pressure. This enables acoustic pressure pulses to transmit more rapidly ($v_t = v_0 + 0.61 t$).

---

### Question 8.11
**How should a sound source move with respect to an observer so that the frequency of its sound does not change?**

**Answer:**
The sound source should move in a **circle of constant radius centered on the stationary observer**. In this configuration, the distance between source and observer remains strictly constant, and the source velocity is perpendicular to the line of sight ($u_{\text{radial}} = 0$). Hence, no Doppler frequency shift occurs.

---

## Fully Solved Numerical Problems

### Numerical 8.1
**Problem:** The wavelength of signals from a radio transmitter is $1500\text{ m}$ and the frequency is $200\text{ kHz}$.
(a) With what speed do the radio waves travel?
(b) What is the wavelength for a transmitter operating at $1000\text{ kHz}$?

**Solution:**
**(a) Speed of radio waves:**
- $\lambda_1 = 1500\text{ m}$, $f_1 = 200\text{ kHz} = 200 \times 10^3\text{ Hz} = 2.0 \times 10^5\text{ Hz}$
$$c = f_1 \lambda_1 = (2.0 \times 10^5\text{ s}^{-1})(1500\text{ m}) = \mathbf{3.0 \times 10^8\text{ m}\cdot\text{s}^{-1}}$$

**(b) Wavelength at $f_2 = 1000\text{ kHz} = 1.0 \times 10^6\text{ Hz}$:**
$$\lambda_2 = \frac{c}{f_2} = \frac{3.0 \times 10^8\text{ m}\cdot\text{s}^{-1}}{1.0 \times 10^6\text{ Hz}} = \mathbf{300\text{ m}}$$

---

### Numerical 8.2
**Problem:** Two speakers are arranged $3.00\text{ m}$ apart and emit a constant tone of $344\text{ Hz}$. A microphone $P$ is moved along a line parallel to and $4.00\text{ m}$ from the line connecting the two speakers. A tone of maximum loudness is heard directly opposite each speaker and at the center of the line. Calculate the speed of sound.

**Solution:**
- Speaker separation $d = 3.00\text{ m}$, perpendicular distance $D = 4.00\text{ m}$.
- Center point has path difference $\Delta S = 0$ (central maximum).
- A microphone directly opposite speaker $S_1$ is at distance $x = 1.50\text{ m}$ from the center line.
  - Distance from $S_1$: $r_1 = D = 4.00\text{ m}$
  - Distance from $S_2$: $r_2 = \sqrt{D^2 + d^2} = \sqrt{(4.00)^2 + (3.00)^2} = \sqrt{16 + 9} = \sqrt{25} = 5.00\text{ m}$
- Path difference at this first maximum ($n = 1$):
  $$\Delta S = r_2 - r_1 = 5.00 - 4.00 = 1.00\text{ m} = \lambda$$
- Speed of sound:
  $$v = f \lambda = (344\text{ Hz})(1.00\text{ m}) = \mathbf{344\text{ m}\cdot\text{s}^{-1}}$$

---

### Numerical 8.3
**Problem:** A stationary wave is established in a string $120\text{ cm}$ long fixed at both ends. The string vibrates in four segments at a frequency of $120\text{ Hz}$. Determine its wavelength and the fundamental frequency.

**Solution:**
- Length $l = 120\text{ cm} = 1.20\text{ m}$
- Number of loops $n = 4$
- Frequency $f_4 = 120\text{ Hz}$

1. **Wavelength:**
   $$\lambda_n = \frac{2l}{n} \implies \lambda_4 = \frac{2(1.20\text{ m})}{4} = \mathbf{0.60\text{ m} = 60\text{ cm}}$$

2. **Fundamental Frequency ($f_1$):**
   $$f_4 = 4 f_1 \implies f_1 = \frac{f_4}{4} = \frac{120\text{ Hz}}{4} = \mathbf{30\text{ Hz}}$$

---

### Numerical 8.4
**Problem:** The frequency of the note emitted by a stretched string is $300\text{ Hz}$. What will be the frequency of this note when:
(a) The length of the string is reduced by one-third without changing the tension?
(b) The tension is increased by one-third without changing the length?

**Solution:**
Original: $f = \frac{v}{2l} = \frac{1}{2l}\sqrt{\frac{F}{m}} = 300\text{ Hz}$.

**(a) Length reduced by one-third ($l' = l - \frac{1}{3}l = \frac{2}{3}l$):**
$$f' = \frac{1}{2l'}\sqrt{\frac{F}{m}} = \frac{1}{2(\frac{2}{3}l)}\sqrt{\frac{F}{m}} = \frac{3}{2} f = \frac{3}{2}(300\text{ Hz}) = \mathbf{450\text{ Hz}}$$

**(b) Tension increased by one-third ($F' = F + \frac{1}{3}F = \frac{4}{3}F$):**
$$f'' = \frac{1}{2l}\sqrt{\frac{4/3 F}{m}} = \sqrt{\frac{4}{3}} f = \frac{2}{\sqrt{3}}(300) = \frac{600}{1.732} \approx \mathbf{346.4\text{ Hz} \approx 346\text{ Hz}}$$

---

### Numerical 8.5
**Problem:** An organ pipe has a length of $50\text{ cm}$. Find the frequency of its fundamental note and the next harmonic when:
(a) Open at both ends
(b) Closed at one end  
($v = 350\text{ m}\cdot\text{s}^{-1}$).

**Solution:**
Length $l = 50\text{ cm} = 0.50\text{ m}$, $v = 350\text{ m}\cdot\text{s}^{-1}$.

**(a) Pipe open at both ends:**
- Fundamental ($n = 1$):
  $$f_1 = \frac{v}{2l} = \frac{350}{2(0.50)} = \mathbf{350\text{ Hz}}$$
- Next harmonic ($n = 2$):
  $$f_2 = 2 f_1 = 2 \times 350 = \mathbf{700\text{ Hz}}$$

**(b) Pipe closed at one end:**
- Fundamental ($n = 1$):
  $$f_1 = \frac{v}{4l} = \frac{350}{4(0.50)} = \frac{350}{2.0} = \mathbf{175\text{ Hz}}$$
- Next harmonic ($n = 3$, odd harmonics only):
  $$f_3 = 3 f_1 = 3 \times 175 = \mathbf{525\text{ Hz}}$$

---

### Numerical 8.6
**Problem:** A church organ consists of pipes, each open at one end (closed-open pipe), of different lengths. The minimum length is $30\text{ mm}$ and the longest is $4.0\text{ m}$. Calculate the frequency range of the fundamental notes ($v = 340\text{ m}\cdot\text{s}^{-1}$).

**Solution:**
For a pipe closed at one end:
$$f_1 = \frac{v}{4l}$$
- For longest pipe ($l_{\max} = 4.0\text{ m}$):
  $$f_{\min} = \frac{340\text{ m}\cdot\text{s}^{-1}}{4(4.0\text{ m})} = \frac{340}{16} = \mathbf{21.25\text{ Hz} \approx 21\text{ Hz}}$$
- For shortest pipe ($l_{\min} = 30\text{ mm} = 0.030\text{ m}$):
  $$f_{\max} = \frac{340\text{ m}\cdot\text{s}^{-1}}{4(0.030\text{ m})} = \frac{340}{0.12} \approx \mathbf{2833.3\text{ Hz} \approx 2833\text{ Hz}}$$
**Frequency Range:** $\mathbf{21\text{ Hz} \text{ to } 2833\text{ Hz}}$.

---

### Numerical 8.7
**Problem:** Two tuning forks exhibit beats at a beat frequency of $3\text{ Hz}$. The frequency of one fork is $256\text{ Hz}$. Its frequency is then lowered slightly by adding wax to one prong. The two forks then exhibit a beat frequency of $1\text{ Hz}$. Determine the frequency of the second tuning fork.

**Solution:**
Let $f_1 = 256\text{ Hz}$.
Since original beat frequency is $3\text{ Hz}$, the second fork's frequency $f_2$ is:
$$f_2 = 256 + 3 = 259\text{ Hz} \quad \text{or} \quad f_2 = 256 - 3 = 253\text{ Hz}$$
- Adding wax to fork 1 lowers its frequency ($f_1' < 256\text{ Hz}$, say $254\text{ Hz}$).
- If $f_2$ were $259\text{ Hz}$, lowering $f_1$ would increase the difference $|259 - 254| = 5\text{ Hz}$ (contradicts observation).
- If $f_2 = 253\text{ Hz}$, lowering $f_1$ to $254\text{ Hz}$ gives $|254 - 253| = 1\text{ Hz}$ (matches observation).
- Therefore, the frequency of the second fork is:
  $$\mathbf{f_2 = 253\text{ Hz}}$$

---

### Numerical 8.8
**Problem:** Two cars $P$ and $Q$ travel along a motorway in the same direction. Leading car $P$ travels at a steady speed of $12\text{ m}\cdot\text{s}^{-1}$; following car $Q$, travelling at $20\text{ m}\cdot\text{s}^{-1}$, sounds its horn. Car $P$'s driver estimates the frequency at $830\text{ Hz}$. What frequency does $Q$'s own driver hear? ($v = 340\text{ m}\cdot\text{s}^{-1}$).

**Solution:**
- Car $Q$ is the source moving forward: $u_s = 20\text{ m}\cdot\text{s}^{-1}$ (toward $P$).
- Car $P$ is the observer moving forward: $u_o = 12\text{ m}\cdot\text{s}^{-1}$ (away from $Q$).
- Observed frequency $f' = 830\text{ Hz}$.

Doppler formula for moving source and moving observer in the same direction:
$$f' = \left(\frac{v - u_o}{v - u_s}\right) f$$
$$830 = \left(\frac{340 - 12}{340 - 20}\right) f = \left(\frac{328}{320}\right) f$$
$$f = 830 \times \left(\frac{320}{328}\right) \approx \mathbf{809.76\text{ Hz} \approx 810\text{ Hz}}$$

---

### Numerical 8.9
**Problem:** A train sounds its horn before departure, and an observer on the platform estimates its frequency at $1200\text{ Hz}$. The train moves off with steady acceleration. Fifty seconds after departure, the driver sounds the horn again, and the platform observer estimates the frequency at $1140\text{ Hz}$. Calculate:
(a) The train speed $50\text{ s}$ after departure.
(b) How far from the station the train is after $50\text{ s}$ ($v = 340\text{ m}\cdot\text{s}^{-1}$).

**Solution:**
- True horn frequency $f = 1200\text{ Hz}$
- Apparent receding frequency $f' = 1140\text{ Hz}$
- Speed of sound $v = 340\text{ m}\cdot\text{s}^{-1}$

**(a) Train speed ($u_s$):**
$$f' = \left(\frac{v}{v + u_s}\right) f \implies 1140 = \left(\frac{340}{340 + u_s}\right) 1200$$
$$340 + u_s = 340 \times \left(\frac{1200}{1140}\right) = 340 \times 1.05263 = 357.89\text{ m}\cdot\text{s}^{-1}$$
$$u_s = 357.89 - 340 \approx \mathbf{17.89\text{ m}\cdot\text{s}^{-1} \approx 17.9\text{ m}\cdot\text{s}^{-1}}$$

**(b) Distance from station ($S$):**
Assuming uniform acceleration from rest ($v_i = 0, v_f = 17.9\text{ m}\cdot\text{s}^{-1}, t = 50\text{ s}$):
$$S = \left(\frac{v_i + v_f}{2}\right) t = \left(\frac{0 + 17.9}{2}\right) \times 50 = 8.95 \times 50 \approx \mathbf{447.5\text{ m} \approx 448\text{ m}}$$

---

### Numerical 8.10
**Problem:** The absorption spectrum of a faint galaxy is measured and the wavelength of the Calcium line is found to be $478\text{ nm}$. The same line has a laboratory wavelength of $397\text{ nm}$.
(a) Is the galaxy moving towards or away from the Earth?
(b) Calculate the speed of the galaxy relative to Earth ($c = 3.0 \times 10^8\text{ m}\cdot\text{s}^{-1}$).

**Solution:**
**(a) Direction of motion:**
Since the observed wavelength is longer than the rest wavelength ($\lambda' = 478\text{ nm} > \lambda_0 = 397\text{ nm}$), the light has undergone a **red shift**. Therefore, the galaxy is **moving away from the Earth**.

**(b) Speed of the galaxy ($v$):**
Doppler wavelength shift:
$$\Delta\lambda = \lambda' - \lambda_0 = 478 - 397 = 81\text{ nm}$$
Using the astronomical Doppler relation for $v \ll c$:
$$\frac{\Delta\lambda}{\lambda_0} = \frac{v}{c} \implies v = c \left(\frac{\Delta\lambda}{\lambda_0}\right)$$
$$v = (3.0 \times 10^8\text{ m}\cdot\text{s}^{-1}) \times \left(\frac{81\text{ nm}}{397\text{ nm}}\right) = 3.0 \times 10^8 \times 0.2040 \approx \mathbf{6.12 \times 10^7\text{ m}\cdot\text{s}^{-1} \approx 6.1 \times 10^7\text{ m}\cdot\text{s}^{-1}}$$

---
