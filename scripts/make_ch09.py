# -*- coding: utf-8 -*-
"""Script to generate Chapter_09_Physical_Optics.md"""

content = """# CHAPTER 9: PHYSICAL OPTICS

---

## Learning Objectives
At the end of this chapter the students will be able to:
1. Understand the concept of wavefront.
2. State Huygens' principle.
3. Use Huygens' principle to explain linear superposition of light.
4. Understand interference of light.
5. Describe Young's double slit experiment and the evidence it provided to support the wave theory of light.
6. Recognize and express colour patterns in thin films.
7. Describe the formation of Newton's rings.
8. Understand the working of Michelson's interferometer and its uses.
9. Explain the meaning of the term diffraction.
10. Describe diffraction at a single slit.
11. Derive the formula for angular position of first minimum.
12. Derive the equation $d \\sin\\theta = m\\lambda$.
13. Carry out calculations using the diffraction grating formula.
14. Describe the phenomenon of diffraction of X-rays by crystals.
15. Appreciate the use of diffraction of X-rays by crystals.
16. Understand polarization as a phenomenon associated with transverse waves.
17. Recognize and express that polarization is produced by a Polaroid.
18. Understand the effect of rotation of Polaroid on polarization.
19. Understand how plane polarized light is produced and detected.

---

## Introduction

Light is a form of energy which produces the sensation of vision. In 1678, the eminent Dutch physicist Christian Huygens proposed that light energy emitted from a luminous source travels in space in the form of waves. In Huygens' time, experimental evidence in support of the wave theory was not convincing because light casts sharp shadows, seemingly indicating straight-line (corpuscular) propagation as proposed by Sir Isaac Newton.

However, in 1801, Thomas Young performed his historic double-slit interference experiment, which conclusively proved the wave nature of light and validated Huygens' wave theory. Later, James Clerk Maxwell established that light waves are electromagnetic in nature and consist of oscillating electric and magnetic fields. In this chapter, we study the fundamental properties of light associated with its wave nature: interference, diffraction, and polarization.

---

## 9.1 Wavefronts

Consider a point source of light $S$ situated in a homogeneous isotropic medium. Light waves emitted from this point source propagate outwards uniformly in all directions with speed $c$. After a time $t$, the disturbance reaches the surface of an imaginary sphere of radius $r = ct$ centered at $S$. 

Every point on the surface of this sphere is equidistant from the source and is set into vibration at the same instant. Consequently, all points on this spherical surface oscillate in the identical state of vibration—that is, they have the **same phase**.

> **Definition of Wavefront:**
> A surface passing through all the points having the same phase of vibration is known as a **wavefront**.

```
       .  .  .  .  .  .
     .                 .
    .         ^         .
   .          |          .
  .     <-- ( S ) -->     .   Spherical Wavefronts
   .          |          .
    .         v         .
     .                 .
       .  .  .  .  .  .
```

- **Spherical Wavefront:** When light is emitted by a point source, the wavefronts are concentric spheres expanding outward. The radius of each successive spherical wavefront increases by one wavelength $\\lambda$.
- **Ray of Light:** A line drawn normal (perpendicular) to the wavefront showing the direction of propagation of light energy is called a **ray of light**. In an isotropic medium, rays are always perpendicular to the wavefronts.
- **Plane Wavefront:** As the spherical wavefront moves farther and farther from the source, its radius of curvature becomes extremely large. A small segment of such a huge spherical wavefront appears practically flat and is regarded as a **plane wavefront**. For example, sunlight reaching the surface of the Earth consists of plane wavefronts.
- **Production of Plane Waves:** A plane wavefront can be produced in the laboratory by placing a point light source at the principal focus of a convex lens. The rays emerging from the lens become parallel to the principal axis, and the corresponding wavefronts are planes perpendicular to the parallel beam.

> **Do You Know?**
> Small segments of large spherical wavefronts approximate a plane wavefront.

---

## 9.2 Huygens' Principle

Knowing the shape and location of a wavefront at any instant $t$, **Huygens' principle** provides a geometrical method to determine the shape and position of the wavefront at a later time $t + \\Delta t$.

The principle consists of two fundamental postulates:
1. **Every point of a primary wavefront may be considered as a source of secondary wavelets**, which spread out in the forward direction with a speed equal to the speed of propagation of the wave in that medium.
2. **The new position of the wavefront after a time interval $\\Delta t$ is given by the envelope (tangent surface) touching all the forward secondary wavelets.**

### Geometrical Construction
- **Spherical Wavefront:** Let $AB$ represent a spherical wavefront at time $t$. To locate the new wavefront at time $t + \\Delta t$, take several points on $AB$ as centers and draw forward spherical wavelets of radius $r = c\\Delta t$ (where $c$ is the speed of light). The forward envelope $A'B'$ touching these spherical wavelets represents the new spherical wavefront at $t + \\Delta t$.
- **Plane Wavefront:** Let $CD$ represent a plane wavefront at time $t$. Taking points on $CD$ as centers, spherical wavelets of radius $c\\Delta t$ are drawn. The common tangent plane $C'D'$ touching the fronts of these wavelets is the new plane wavefront at time $t + \\Delta t$.

---

## 9.3 Interference of Light Waves

Interference is the phenomenon in which two or more light waves travel in the same medium and superpose, leading to a redistribution of light energy resulting in regions of enhanced brightness (constructive interference) and darkness (destructive interference).

### Conditions for Detectable (Sustained) Interference
Under ordinary circumstances, interference of light is not easily observed because light emitted from conventional sources consists of millions of independent atomic emissions with random and rapidly changing phases. To observe a stable and detectable interference pattern, two essential conditions must be satisfied:

1. **Monochromatic Light:** The interfering beams must be monochromatic, meaning they must consist of light of a single wavelength (or frequency).
2. **Coherent Sources:** The interfering beams must be coherent. Monochromatic sources that emit waves having a constant phase difference (or zero phase difference) over time are called **coherent sources**.

> **Monochromatic Light:**
> Sodium chloride introduced into a flame emits pure yellow light ($\\\\lambda \\\\approx 589\\\\text{ nm}$). This yellow light is not a mixture of red and green; it is monochromatic.

### Production of Coherent Sources
Because two independent light sources cannot maintain a constant phase relationship, coherent beams are produced by splitting light originating from a single source into two beams. This can be achieved by:
- **Division of wavefront:** Using two narrow slits illuminated by a single source (as in Young's experiment).
- **Division of amplitude:** Using partial reflection and partial transmission at the boundary of a medium (as in thin films and Michelson's interferometer).

---

## 9.4 Young's Double Slit Experiment

In 1801, Thomas Young provided the first experimental proof of the wave nature of light through his classic double-slit experiment.

```
                  Slits
Monochromatic       | 
Source S            |           Screen
   *       |-->   S1|--- ray 1 -----. P (Fringe position y)
           |        |              / 
           |      d |             /
           |-->   S2|--- ray 2 --'
                    |
                    |<------ L ------>|
```

### Experimental Setup
A monochromatic light source illuminates a narrow pinhole or slit $S$. The cylindrical wavefronts emerging from $S$ illuminate two parallel, closely spaced narrow slits $S_1$ and $S_2$ separated by a distance $d$. According to Huygens' principle, $S_1$ and $S_2$ act as coherent secondary sources. The wavelets spreading outward from $S_1$ and $S_2$ overlap in the region beyond the slits, and the resulting interference pattern of alternating bright and dark bands (fringes) is received on a screen placed at a distance $L$ parallel to the plane of the slits.

### Mathematical Derivation of Path Difference
Consider an arbitrary point $P$ on the screen at a distance $y$ from the central axis $O$.
- Let the distance between the slits be $S_1S_2 = d$.
- Let the distance between the slit plane and the screen be $CO = L$.
- Let ray 1 travel a distance $S_1P$ and ray 2 travel a distance $S_2P$.
- Drop a perpendicular $S_1D$ from $S_1$ onto $S_2P$. 

Because the screen distance $L$ is very large compared to the slit separation $d$ ($L \\gg d$), the rays $S_1P$ and $S_2P$ are nearly parallel, making an angle $\\theta$ with the central axis $CO$. In $\\Delta S_1 S_2 D$:
$$\\angle S_2 S_1 D = \\theta$$

The path difference between the two waves arriving at point $P$ is:
$$\\text{Path Difference } (\\text{P.D.}) = S_2D = d \\sin\\theta$$

### Condition for Bright Fringes (Maxima)
Constructive interference occurs at point $P$ if the two waves arrive in phase, which requires the path difference to be an integral multiple of the wavelength $\\lambda$:
$$\\text{P.D.} = d \\sin\\theta = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\pm 3, \\dots)$$

- For $m = 0$, $\\theta = 0$: The central bright fringe occurs at $O$.
- For $m = \\pm 1$: First-order bright fringes occur symmetrically on either side of $O$.
- For $m = \\pm 2$: Second-order bright fringes, and so on.

### Condition for Dark Fringes (Minima)
Destructive interference occurs at point $P$ if the two waves arrive completely out of phase (phase difference of $\\pi, 3\\pi, \\dots$), which requires the path difference to be an odd half-integral multiple of wavelength:
$$d \\sin\\theta = \\left(m + \\frac{1}{2}\\right)\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\dots)$$

- For $m = 0$: $d\\sin\\theta = \\frac{1}{2}\\lambda$ gives the first dark fringe.
- For $m = 1$: $d\\sin\\theta = \\frac{3}{2}\\lambda$ gives the second dark fringe.

### Linear Fringe Position ($y$) and Fringe Spacing ($\\Delta y$)
For small angles $\\theta$, $\\sin\\theta \\approx \\tan\\theta$. From the right triangle formed by point $P$, center $O$, and the midpoint between the slits $C$:
$$\\tan\\theta = \\frac{y}{L} \\implies \\sin\\theta \\approx \\frac{y}{L}$$

#### Position of $m$-th Bright Fringe:
$$d \\left(\\frac{y_m}{L}\\right) = m\\lambda \\implies y_m = m \\frac{\\lambda L}{d}$$

#### Position of $m$-th Dark Fringe:
$$d \\left(\\frac{y'_m}{L}\\right) = \\left(m + \\frac{1}{2}\\right)\\lambda \\implies y'_m = \\left(m + \\frac{1}{2}\\right) \\frac{\\lambda L}{d}$$

#### Fringe Spacing (Fringe Width $\\Delta y$):
The distance between two consecutive bright fringes ($y_{m+1} - y_m$) is:
$$\\Delta y = (m+1)\\frac{\\lambda L}{d} - m\\frac{\\lambda L}{d} = \\frac{\\lambda L}{d}$$

Similarly, the distance between two consecutive dark fringes is:
$$\\Delta y = \\left(m + 1 + \\frac{1}{2}\\right)\\frac{\\lambda L}{d} - \\left(m + \\frac{1}{2}\\right)\\frac{\\lambda L}{d} = \\frac{\\lambda L}{d}$$

> **Important Conclusions:**
> 1. All bright and dark fringes are of **equal width** and are **equally spaced**.
> 2. Fringe spacing $\\Delta y$ is directly proportional to wavelength $\\lambda$ (red light fringes are wider than blue light fringes).
> 3. $\\Delta y$ is directly proportional to the screen distance $L$.
> 4. $\\Delta y$ is inversely proportional to slit separation $d$.
> 5. Measurement of $d$, $L$, and $\\Delta y$ allows highly accurate determination of the wavelength of light:
> $$\\lambda = \\frac{d \\cdot \\Delta y}{L}$$

---

### Solved Examples

#### Example 9.1
**Problem:** The distance between the slits in Young's double slit experiment is $0.25\\text{ cm}$. Interference fringes are formed on a screen placed at a distance of $100\\text{ cm}$ from the slits. The distance of the third dark fringe from the central bright fringe is $0.059\\text{ cm}$. Find the wavelength of the incident light.

**Solution:**
- Slit separation $d = 0.25\\text{ cm} = 2.5 \\times 10^{-3}\\text{ m}$
- Distance to screen $L = 100\\text{ cm} = 1.0\\text{ m}$
- Distance of 3rd dark fringe from central maximum $y_3' = 0.059\\text{ cm} = 5.9 \\times 10^{-4}\\text{ m}$
- For the 3rd dark fringe, $m = 2$:
  $$y_3' = \\left(2 + \\frac{1}{2}\\right) \\frac{\\lambda L}{d} = \\frac{5}{2} \\frac{\\lambda L}{d}$$
- Rearranging for $\\lambda$:
  $$\\lambda = \\frac{2 \\cdot d \\cdot y_3'}{5 L} = \\frac{2 \\times (2.5 \\times 10^{-3}\\text{ m}) \\times (5.9 \\times 10^{-4}\\text{ m})}{5 \\times 1.0\\text{ m}}$$
  $$\\lambda = \\frac{2.95 \\times 10^{-6}}{5} = 5.90 \\times 10^{-7}\\text{ m} = 590\\text{ nm}$$

**Answer:** $\\lambda = 590\\text{ nm}$

---

#### Example 9.2
**Problem:** Yellow sodium light of wavelength $589\\text{ nm}$, emitted by a single source, passes through two narrow slits $1.00\\text{ mm}$ apart. The interference pattern is observed on a screen $225\\text{ cm}$ away. How far apart are two adjacent bright fringes?

**Solution:**
- Wavelength $\\lambda = 589\\text{ nm} = 589 \\times 10^{-9}\\text{ m}$
- Slit separation $d = 1.00\\text{ mm} = 1.00 \\times 10^{-3}\\text{ m}$
- Screen distance $L = 225\\text{ cm} = 2.25\\text{ m}$
- Fringe spacing $\\Delta y$:
  $$\\Delta y = \\frac{\\lambda L}{d} = \\frac{589 \\times 10^{-9}\\text{ m} \\times 2.25\\text{ m}}{1.00 \\times 10^{-3}\\text{ m}}$$
  $$\\Delta y = 1325.25 \\times 10^{-6}\\text{ m} = 1.33 \\times 10^{-3}\\text{ m} = 1.33\\text{ mm}$$

**Answer:** $\\Delta y = 1.33\\text{ mm}$

---

## 9.5 Interference in Thin Films

A **thin film** is a transparent medium whose thickness is of the order of the wavelength of light (typically a fraction of a micrometer). Examples include a soap bubble film or a thin oil slick floating on water.

### Mechanism of Interference
When monochromatic light strikes the upper surface of a thin film:
1. Part of the incident beam is reflected directly from the top surface ($BC$).
2. The remaining part is refracted into the film, travels to the lower boundary, and is partly reflected back toward the upper surface ($DE$).
3. At the upper surface, this wave is refracted into the air along $EF$.

The two reflected beams $BC$ and $EF$ originate from the same parent wave, so they are coherent. Because the film is extremely thin, these two rays are very close together and enter the observer's eye simultaneously, superposing to produce interference.

### Determinants of Path Difference
The path difference between $BC$ and $EF$ depends on:
1. The **thickness** ($t$) of the film.
2. The **refractive index** ($n$) of the film material.
3. The **angle of incidence** (angle of viewing).

### Phase Change on Reflection
When a light wave traveling in an optically rarer medium reflects from the boundary of an optically denser medium, it undergoes a phase change of $\\pi$ radians ($180^\\circ$), which is equivalent to introducing an additional path difference of $\\frac{\\lambda}{2}$. No phase change occurs when reflection takes place from a rarer medium.

### Thin Film Colors with White Light
When white light illuminates a film of varying thickness:
- At any particular spot, for a given angle of incidence, the condition for destructive interference is satisfied for a specific wavelength (colour).
- That specific colour is subtracted from the reflected light.
- The observer sees the complementary constituent colors of white light. Because the thickness varies across the surface, brilliant variegated colored patterns appear across the soap bubble or oil film.

> **Do You Know?**
> The vivid, shimmering iridescence of peacock feathers is not caused by pigmentation, but by interference of light reflected from their complex layered microstructure.

---

## 9.6 Newton's Rings

When a plano-convex lens of large radius of curvature (long focal length) is placed with its curved surface in contact with an optically flat glass plate, a thin wedge-shaped air film of thickness varying from zero at the point of contact to a few micrometers at the edge is enclosed between the lens and the plate.

```
       Light from Source
             |
             v
       [ Glass Sheet at 45° ] ----> Monochromatic parallel light
             |
             v
       ( Plano-convex Lens L )
       =======================  Air film enclosed
       [ Flat Glass Plate ]
```

### Formation of Rings
- Monochromatic light is reflected downward onto the plano-convex lens using a flat glass sheet held at $45^\\circ$.
- Light reflects from the curved lower surface of the lens (upper boundary of the air film) and from the top flat surface of the glass plate (lower boundary of the air film).
- The thickness of the air film is constant along concentric circles centered at the point of contact $O$.
- Interference between the two reflected coherent beams produces a series of concentric dark and bright rings centered at $O$, known as **Newton's rings**.
- Viewed through a traveling microscope focused on the film, these circular fringes are seen clearly.

### Why the Center of Newton's Rings is Dark
At the point of contact $O$, the physical thickness of the air film is zero ($t = 0$), so one might expect zero path difference and hence a bright spot. However:
- The ray reflected from the lens surface undergoes **no phase change** (glass to air boundary).
- The ray reflected from the top surface of the flat plate undergoes a **phase shift of $\\pi$ ($180^\\circ$)**, equivalent to an extra path difference of $\\frac{\\lambda}{2}$ (reflection from a denser medium).
- Therefore, the effective path difference at the point of contact is:
  $$\\text{P.D.} = 0 + \\frac{\\lambda}{2} = \\frac{\\lambda}{2}$$
- This satisfies the condition for destructive interference, making the central spot **completely dark**.

---

## 9.7 Michelson's Interferometer

The **Michelson interferometer**, invented by Albert A. Michelson in 1881, is an optical instrument that utilizes the interference of light to measure distances with extremely high precision (fractions of a wavelength of light).

### Construction and Optical Arrangement
The essential components of the Michelson interferometer are:
1. **Beam Splitter $G_1$:** A plane-parallel glass plate whose rear surface is half-silvered. It splits an incident beam into two equal-intensity perpendicular beams (50% reflected, 50% transmitted).
2. **Compensating Plate $G_2$:** An un-silvered glass plate identical in thickness and material to $G_1$, placed parallel to $G_1$ in the path of the transmitted beam. It ensures that both beams traverse identical thicknesses of glass.
3. **Movable Mirror $M_1$:** A highly polished plane mirror that can be translated along its normal with extreme precision using a micrometer screw.
4. **Fixed Mirror $M_2$:** A stationary plane mirror mounted perpendicular to the path of the transmitted beam.

```
                  Mirror M1 (Movable)
                        |
                        ^ Beam I
                        |
  Source S ----> [ Glass Plate G1 ] ----> [ Compensator G2 ] ----> Mirror M2 (Fixed)
  (Monochromatic)       |
                        | Beam II
                        v
                     Observer / Telescope
```

### Working Principle
1. A beam of monochromatic light from an extended source strikes $G_1$ at $45^\\circ$.
2. Beam I reflects upward to mirror $M_1$, travels a distance $L_1$, reflects back, passes through $G_1$, and enters the observer's eye.
3. Beam II transmits through $G_1$, passes through compensator $G_2$, travels distance $L_2$ to mirror $M_2$, reflects back, and is partially reflected by $G_1$ into the observer's eye.
4. The two returning coherent beams interfere, producing parallel or circular interference fringes viewed through a telescope.

### Formula for Fringe Shift and Distance Measurement
When movable mirror $M_1$ is displaced along its normal by a distance $L$:
- The optical path of Beam I changes by $2L$ (since light travels to the mirror and back).
- Whenever the path changes by one full wavelength $\\lambda$, the path difference changes by $\\lambda$, causing exactly **one fringe** to cross the crosshairs of the telescope:
  $$2L = \\lambda \\implies L = \\frac{\\lambda}{2}$$
- For a displacement $L$ resulting in the passage of $m$ fringes:
  $$2L = m\\lambda \\implies L = m\\frac{\\lambda}{2}$$

### High Precision and Standard Metre
- A mirror displacement of just $\\frac{\\lambda}{4}$ converts a bright fringe into a dark fringe. For $\\lambda = 400\\text{ nm}$, this provides a measurement resolution of $100\\text{ nm} = 10^{-4}\\text{ mm}$.
- In 1892, Michelson standardized the international metre in terms of the wavelength of the red line of cadmium light, demonstrating that:
  $$\\mathbf{1\\text{ standard metre} = 1,553,163.5\\text{ wavelengths of red cadmium light}}$$

---

## 9.8 Diffraction of Light

Under ordinary circumstances, light appears to travel in straight lines because its wavelength is exceedingly small ($\\\\sim 10^{-7}\\\\text{ m}$). However, when light encounters an obstacle or aperture whose dimensions are comparable to its wavelength, it deviates from rectilinear propagation.

> **Definition of Diffraction:**
> The bending of light around the sharp edges of obstacles and its spreading into the geometrical shadow of the obstacle is called **diffraction**.

### Experimental Demonstration (Arago-Poisson Bright Spot)
If a small, smooth steel sphere (approx. $3\\text{ mm}$ diameter) is illuminated by a point source of light and its shadow is caught on a screen, the center of the shadow is not completely dark—it displays a distinct **bright spot** at its center. 

**Explanation:** By Huygens' principle, every point along the circular rim of the obstacle acts as a coherent source of secondary wavelets. Because all points on the rim are equidistant from the center of the geometrical shadow, wavelets arriving at the center travel equal path lengths and interfere constructively, producing a bright central spot.

### Condition for Observable Diffraction
Diffraction is prominent only when the dimension of the aperture or obstacle $d$ is comparable to the wavelength $\\lambda$ of the wave:
$$\\frac{\\lambda}{d} \\gtrsim 1$$
Because sound waves have large wavelengths (several centimeters to meters), sound diffracts easily around doors and corners. Light waves have tiny wavelengths, so their diffraction is observable only with very small openings or sharp edges.

> **Point to Ponder:**
> Hold two fingers very close together to form a very narrow slit. Look at a bright light bulb filament through the slit. You will observe fine alternating bright and dark diffraction bands parallel to your fingers.

---

## 9.9 Diffraction Due to a Narrow Slit

Consider a narrow slit $AB$ of width $d$ illuminated normally by a parallel beam of monochromatic light of wavelength $\\lambda$. A screen is placed at a distance $D$ behind the slit.

```
       Incident
       Wavefront     Slit
          |           A
          |          |---|
          |          |   | \  ray 1
          |          | d |  \
          |          |   |   \ ray 5 ------> Screen Point P (Minimum)
          |          |   |    \
          |          B---|     \
```

### Analysis of Diffraction Minima
Divide the slit of width $d$ into two equal halves, each of width $\\frac{d}{2}$:
- Consider ray 1 starting from edge $A$ and ray 5 starting from the center of the slit ($d/2$ away).
- The path difference between ray 1 and ray 5 traveling at diffraction angle $\\theta$ is:
  $$\\text{P.D.} = \\frac{d}{2} \\sin\\theta$$
- If this path difference equals $\\frac{\\lambda}{2}$, ray 1 and ray 5 will interfere destructively:
  $$\\frac{d}{2} \\sin\\theta = \\frac{\\lambda}{2} \\implies d \\sin\\theta = \\lambda$$
- Similarly, for every point in the upper half of the slit, there exists a corresponding point in the lower half whose wavelet arrives at point $P$ exactly $\\frac{\\lambda}{2}$ out of phase. The wavelets cancel in pairs, producing total darkness.

Thus, the condition for the **first diffraction minimum** is:
$$d \\sin\\theta = \\lambda$$

By dividing the slit into $2m$ equal segments ($4, 6, 8, \\dots$), we obtain the general condition for the **$m$-th diffraction minimum**:
$$d \\sin\\theta = m\\lambda \\quad (m = \\pm 1, \\pm 2, \\pm 3, \\dots)$$

The central region between the first minima on either side ($\\theta = -\\frac{\\lambda}{d}$ to $+\\frac{\\lambda}{d}$) is the **central diffraction maximum**, which contains most of the optical energy.

---

## 9.10 Diffraction Grating

A **diffraction grating** is an optical device consisting of a glass plate with a very large number of close, equidistant, parallel lines ruled mechanically upon its surface. The transparent spaces between the opaque scratch rulings act as separate, coherent slits. A typical laboratory grating contains **400 to 5,000 lines per centimeter**.

### Grating Element ($d$)
The distance between the centers of two adjacent transparent slits is called the **grating element** ($d$). If $N$ lines are ruled on a grating of length $L$:
$$d = \\frac{L}{N}$$
For example, for a grating with $5000\\text{ lines/cm}$:
$$d = \\frac{1\\text{ cm}}{5000} = \\frac{1 \\times 10^{-2}\\text{ m}}{5000} = 2.0 \\times 10^{-6}\\text{ m}$$

### Condition for Principal Maxima (Grating Equation)
Let a parallel beam of monochromatic light of wavelength $\\lambda$ fall normally upon the grating. The path difference between diffracted rays emerging at angle $\\theta$ from two adjacent slits is:
$$\\text{P.D.} = d \\sin\\theta$$

Constructive interference across all slits occurs when this path difference equals an integral number of wavelengths:
$$\\mathbf{d \\sin\\theta = n\\lambda} \\quad (n = 0, \\pm 1, \\pm 2, \\pm 3, \\dots)$$

Where:
- $n = 0$: **Zero-order maximum** ($\\\\theta = 0$), undiffracted central beam.
- $n = 1$: **First-order principal maximum**.
- $n = 2$: **Second-order principal maximum**, and so forth.

Because the number of slits is very large (thousands), destructive interference occurs for almost all intermediate angles, resulting in extremely sharp, intense, narrow spectral lines separated by wide dark spaces. When white light is used, each constituent wavelength diffracts at a distinct angle $\\theta$, producing a complete rainbow spectrum in each order $n \\ge 1$.

> **Interesting Information:**
> The fine circular tracks on a compact disc (CD), spaced approximately $1.6\\ \\mu\\text{m}$ apart, act as a reflective diffraction grating. When white light illuminates a CD, beautiful rainbow diffraction bands appear.

---

## 9.11 Diffraction of X-rays by Crystals

X-rays are electromagnetic waves with extremely short wavelengths, typically of the order of $10^{-10}\\text{ m}$ ($0.1\\text{ nm}$). Because ordinary optical gratings have rulings spaced around $10^{-6}\\text{ m}$, their spacing is roughly 10,000 times too large to produce measurable diffraction angles for X-rays.

In 1912, Max von Laue suggested that the regular, periodic three-dimensional arrangement of atoms in a crystal lattice could act as a natural three-dimensional diffraction grating for X-rays, because the interatomic plane spacing is typically around $10^{-10}\\text{ m}$.

### Bragg's Law
In 1914, W. H. Bragg and W. L. Bragg successfully demonstrated X-ray diffraction and derived the fundamental relationship governing specular reflection of X-rays from crystal lattice planes.

```
  Incident Beam                     Reflected Beam
      \                                 /
       \  theta                 theta  /
  ------*-----------------------------*------ Plane 1
         \                           /
          \                         /
  ---------*-----------------------*--------- Plane 2
           |<------- d ----------->|
```

Consider parallel lattice planes with interplanar spacing $d$:
- An X-ray beam strikes the crystal face at glancing angle $\\theta$ (Bragg angle).
- Ray 1 reflects from the top plane; Ray 2 reflects from the plane immediately beneath it.
- Dropping perpendiculars onto the incident and reflected rays, the extra distance traveled by Ray 2 is:
  $$\\text{Extra Path} = d \\sin\\theta + d \\sin\\theta = 2d \\sin\\theta$$

For constructive interference and an intense reflected beam:
$$\\mathbf{2d \\sin\\theta = n\\lambda} \\quad (n = 1, 2, 3, \\dots)$$

This is known as the **Bragg equation**, where $n$ represents the order of reflection.

### Biological and Scientific Applications
X-ray crystallography has revolutionized molecular biology and materials science:
1. Determining the structure of complex biological macromolecules such as **hemoglobin** (the oxygen-carrying protein in red blood cells).
2. Elucidating the **double-helix structure of DNA** by Rosalind Franklin, James Watson, and Francis Crick.

---

### Solved Example

#### Example 9.3
**Problem:** Light of wavelength $450\\text{ nm}$ is incident on a diffraction grating on which $5000\\text{ lines/cm}$ have been ruled.
(i) How many orders of spectra can be observed on either side of the direct beam?
(ii) Determine the angle corresponding to each order.

**Solution:**
- Wavelength $\\lambda = 450\\text{ nm} = 450 \\times 10^{-9}\\text{ m}$
- Number of lines per cm = $5000 \\implies N = 5000 \\times 10^2 = 500,000\\text{ lines/m}$
- Grating element:
  $$d = \\frac{1}{500,000}\\text{ m} = 2.0 \\times 10^{-6}\\text{ m}$$

**(i) Maximum number of orders:**
The maximum theoretical diffraction angle is $\\theta = 90^\\circ$ (where $\\sin 90^\\circ = 1$):
$$n_{\\text{max}} = \\frac{d \\sin 90^\\circ}{\\lambda} = \\frac{2.0 \\times 10^{-6}\\text{ m} \\times 1}{450 \\times 10^{-9}\\text{ m}} = 4.44$$
Because the order of spectrum $n$ must be an integer:
$$\\mathbf{n_{\\text{max}} = 4}$$
Hence, a maximum of **4 orders** can be observed on either side of the central beam.

**(ii) Angle corresponding to each order:**
Using $\\sin\\theta_n = \\frac{n\\lambda}{d}$:

1. **For $n = 1$:**
   $$\\sin\\theta_1 = \\frac{1 \\times (450 \\times 10^{-9})}{2.0 \\times 10^{-6}} = 0.225 \\implies \\theta_1 = \\sin^{-1}(0.225) = 13.0^\\circ$$

2. **For $n = 2$:**
   $$\\sin\\theta_2 = \\frac{2 \\times (450 \\times 10^{-9})}{2.0 \\times 10^{-6}} = 0.450 \\implies \\theta_2 = \\sin^{-1}(0.450) = 26.7^\\circ$$

3. **For $n = 3$:**
   $$\\sin\\theta_3 = \\frac{3 \\times (450 \\times 10^{-9})}{2.0 \\times 10^{-6}} = 0.675 \\implies \\theta_3 = \\sin^{-1}(0.675) = 42.5^\\circ$$

4. **For $n = 4$:**
   $$\\sin\\theta_4 = \\frac{4 \\times (450 \\times 10^{-9})}{2.0 \\times 10^{-6}} = 0.900 \\implies \\theta_4 = \\sin^{-1}(0.900) = 64.2^\\circ$$

---

## 9.12 Polarization

### Transverse vs. Longitudinal Waves
- In **longitudinal waves** (such as sound waves), particle oscillations are along the direction of wave propagation, exhibiting complete cylindrical symmetry about the ray direction.
- In **transverse waves** (such as waves on a stretched string), particle vibrations are perpendicular to the propagation direction and can be confined to a single plane.

An electromagnetic wave consists of mutually perpendicular oscillating electric field ($\\vec{E}$) and magnetic field ($\\vec{B}$) vectors, both perpendicular to the direction of propagation. By convention, the direction of the electric field vector $\\vec{E}$ defines the direction of polarization.

### Unpolarized vs. Plane Polarized Light
- **Unpolarized Light:** In ordinary light (from the Sun, incandescent filaments, fluorescent lamps), billions of atoms radiate independently. The resulting electric vectors point randomly in all possible planes perpendicular to the propagation axis.
- **Plane Polarized Light:** If the electric field vibrations are confined to oscillate in a single plane containing the direction of propagation, the light is said to be **plane polarized** (or linearly polarized).

```
   Unpolarized Light                     Polaroid Sheet                Plane Polarized Light
         \ | /                              |   |   |                           |
       --- * ---      -------->             |   |   |       -------->           |
         / | \                              |   |   |                           |
  (Vibrations in all planes)            (Transmission Axis)             (Vibrations in one plane)
```

### Production and Detection of Polarized Light
Polarized light can be produced from unpolarized light by four primary methods:
1. **Selective Absorption (Dichroism):** Certain crystalline materials transmit light waves whose electric field vectors vibrate parallel to a specific crystallographic axis (transmission axis) while absorbing vibrations in other directions. Commercial synthetic sheets utilizing this property are called **Polaroids**.
2. **Reflection:** When unpolarized light reflects from a smooth non-metallic dielectric surface (such as water, glass, or plastic) at Brewster's angle, the reflected light is completely plane-polarized parallel to the surface.
3. **Refraction (Double Refraction):** Crystals such as calcite or quartz split an incident ray into two refracted rays (ordinary and extraordinary) polarized in mutually perpendicular planes.
4. **Scattering:** Light scattered by small particles or air molecules in the Earth's atmosphere is partially plane-polarized.

### Polaroid Experiment: Conclusive Proof of Transverse Wave Nature
1. Place a Polaroid sheet (**Polarizer**) in the path of unpolarized light. The transmitted light is plane-polarized.
2. Place a second identical Polaroid sheet (**Analyzer**) behind the first.
3. When the transmission axes of both sheets are **parallel**, light passes through the analyzer with maximum intensity.
4. When the analyzer is rotated so its transmission axis is **perpendicular (crossed)** to the polarizer, no light emerges (complete extinction).
5. As the analyzer continues rotating, the transmitted light reappears, reaching maximum intensity again at $180^\\circ$.

> **Significance:**
> This experiment proves conclusively that **light waves are transverse**. If light were longitudinal (like sound), rotating the analyzer around the beam would have no effect on the transmitted intensity.

### Practical Applications
- **Polaroid Sunglasses:** Light reflected from wet roads, car hoods, water surfaces, and snow produces intense, blinding glare because it is predominantly horizontally polarized. Polaroid sunglasses have vertical transmission axes, effectively blocking this glare.
- **Stress Analysis:** Transparent plastic models of mechanical parts under mechanical stress exhibit colorful birefringence patterns when viewed between crossed polarizers, revealing internal stress concentrations.

### Optical Rotation
When plane-polarized light passes through certain crystals (such as quartz or sodium chlorate) or solutions of certain organic compounds (such as sugar or tartaric acid), the plane of vibration of the light is rotated through an angle $\\theta$. Such substances are called **optically active**.

The angle of optical rotation depends upon:
1. The thickness/path length through the medium.
2. The concentration of the optically active substance in solution.
3. The wavelength of light used.

> **Application (Polarimetry):**
> Measuring the angle of optical rotation using an instrument called a polarimeter provides an accurate method for determining the concentration of sugar solutions in commercial and medical laboratories.

---

## Chapter Summary

- **Wavefront:** A surface passing through all adjacent points having the same phase of vibration. A point source produces spherical wavefronts; distant segments approximate plane wavefronts.
- **Rays:** Radial straight lines perpendicular to wavefronts showing the direction of energy propagation.
- **Huygens' Principle:** Every point on a primary wavefront serves as a source of secondary wavelets. The forward envelope touching these wavelets forms the new wavefront at a later time.
- **Coherent Sources:** Sources that maintain a constant phase difference over time.
- **Interference:** Superposition of two or more coherent light waves producing alternate bright and dark bands.
  - Bright fringes (constructive): $d \\sin\\theta = m\\lambda$
  - Dark fringes (destructive): $d \\sin\\theta = \\left(m + \\frac{1}{2}\\right)\\lambda$
  - Fringe spacing: $\\Delta y = \\frac{\\lambda L}{d}$
- **Thin Film Interference:** Colors in soap bubbles and oil films arise from interference between light reflected from the upper and lower surfaces of the film.
- **Newton's Rings:** Circular interference fringes produced in the thin air film between a plano-convex lens and a flat glass plate. The central spot is dark due to a $\\pi$ phase shift upon reflection at the denser medium.
- **Michelson's Interferometer:** Displacing the movable mirror by $L$ causes a shift of $m$ fringes according to $L = m\\frac{\\lambda}{2}$. It defines the standard metre as $1,553,163.5$ wavelengths of cadmium red light.
- **Diffraction:** The bending of light around edges and spreading into the geometrical shadow:
  - Single slit minima: $d \\sin\\theta = m\\lambda$
  - Diffraction grating maxima: $d \\sin\\theta = n\\lambda$, where grating element $d = \\frac{L}{N}$.
  - X-ray diffraction (Bragg's Law): $2d \\sin\\theta = n\\lambda$.
- **Polarization:** Confining electric field vibrations to a single plane. It proves light consists of transverse waves.

---

## Conceptual Questions and Answers

### Question 9.1: Under what conditions two or more sources of light behave as coherent sources?
**Answer:**
Two or more light sources behave as coherent sources if they satisfy the following two conditions:
1. **Equal Wavelength/Frequency:** They must emit light of the exact same wavelength and frequency (monochromatic light).
2. **Constant Phase Difference:** They must maintain a constant phase relationship (or zero phase difference) with each other over time.

Because independent light sources emit light through uncoordinated, random atomic transitions lasting about $10^{-8}\\text{ s}$, independent sources cannot be coherent. Coherent sources are practically obtained by dividing a single wavefront (e.g., Young's double slits) or amplitude (e.g., thin films, beam splitters) from a single parent light source.

---

### Question 9.2: How is the distance between interference fringes affected by the separation between the slits of Young's experiment? Can fringes disappear?
**Answer:**
The fringe spacing in Young's experiment is given by:
$$\\Delta y = \\frac{\\lambda L}{d}$$

1. **Effect of Slit Separation ($d$):** Fringe spacing $\\Delta y$ is inversely proportional to the slit separation $d$ ($\\Delta y \\propto \\frac{1}{d}$). If the slit separation $d$ is increased, the fringe spacing decreases, causing the fringes to draw closer together.
2. **Can Fringes Disappear?** Yes. If the slit separation $d$ is made sufficiently large:
   - The fringe width $\\Delta y$ becomes so small that adjacent bright and dark bands blur together beyond the resolving limit of the human eye.
   - The pattern washes out into uniform illumination, and the distinct fringes disappear.

---

### Question 9.3: Can visible light produce interference fringes? Explain.
**Answer:**
**Yes**, visible light can readily produce interference fringes, provided the essential conditions of interference are satisfied:
1. If **monochromatic visible light** (e.g., a sodium lamp or red diode laser) illuminates two coherent slits, a stable, high-contrast pattern of alternating bright and dark fringes is formed.
2. If **polychromatic (white) visible light** is used, each spectral component produces its own fringe system of distinct spacing ($\\Delta y = \\frac{\\lambda L}{d}$). Because red light has a larger wavelength than violet light, the fringes of different colors overlap, producing a white central fringe flanked by colored fringe bands on either side.

---

### Question 9.4: In Young's experiment, one of the slits is covered with a blue filter and the other with a red filter. What would be the pattern of light intensity on the screen?
**Answer:**
**No interference fringes will be observed on the screen.**

**Reason:**
- Blue light and red light have substantially different wavelengths ($\\lambda_{\\text{red}} \\approx 700\\text{ nm}$, $\\lambda_{\\text{blue}} \\approx 450\\text{ nm}$) and different frequencies.
- A fundamental requirement for sustained interference is that the interfering beams must be coherent and monochromatic (having the same wavelength).
- Because the waves emerging from the two slits have different frequencies, their phase difference changes continuously and extremely rapidly. No stationary constructive or destructive interference can occur; instead, the screen will exhibit general uniform illumination resulting from the simple addition of blue and red light intensities (giving a magenta-colored background).

---

### Question 9.5: Explain whether Young's experiment is an experiment for studying interference or diffraction effects of light.
**Answer:**
Young's experiment is primarily designed to study the **interference** of light, but it inherently involves **both diffraction and interference**:
1. **Diffraction Occurs First:** When light passes through each narrow slit ($S_1$ and $S_2$), the slits are sufficiently narrow to cause light to bend and spread out into the space behind the slit screen. This spreading is diffraction.
2. **Interference Produces the Fringes:** The diffracted wavefronts emerging from $S_1$ and $S_2$ overlap in the region between the slits and the screen, superposing constructively and destructively to form the fringe pattern.

Thus, diffraction enables the waves from the two separate slits to spread and overlap, while interference determines the observed pattern of fringes.

---

### Question 9.6: An oil film spreading over a wet footpath shows colours. Explain how does it happen?
**Answer:**
The appearance of brilliant colors on a thin oil film floating on a wet footpath is caused by the **interference of white light reflected from the thin film**:
1. When ambient white sunlight strikes the thin oil film, part of the light reflects from the upper oil surface (air-oil interface) and part reflects from the lower oil surface (oil-water interface).
2. The two reflected beams are coherent and have a path difference that depends upon the local thickness of the oil layer, the refractive index of the oil, and the angle of incidence.
3. Because the film spreads unevenly, its thickness varies from point to point. At a particular location and viewing angle, the path difference satisfies the condition for destructive interference for a particular wavelength (color), removing it from the reflected beam.
4. The remaining reflected wavelengths combine, causing that portion of the film to appear in vivid complementary colors.

---

### Question 9.7: Could you obtain Newton's rings with transmitted light? If yes, would the pattern be different from that obtained with reflected light?
**Answer:**
**Yes**, Newton's rings can be obtained with transmitted light, but the pattern is complementary to that obtained with reflected light:
1. **Central Spot:** In reflected light, the central spot is **dark** because reflection at the glass plate introduces a $\\pi$ phase shift (path difference of $\\frac{\\lambda}{2}$). In transmitted light, the rays undergo two internal reflections or direct transmission with no net phase change of $\\pi$. Therefore, the central spot in transmitted light is **bright**.
2. **Complementary Fringe Pattern:** Where a bright ring appears in the reflected pattern, a dark ring appears in the transmitted pattern, and vice versa.
3. **Contrast:** The contrast of the transmitted rings is much poorer than that of the reflected rings because the directly transmitted ray has much greater intensity than the twice-reflected ray.

---

### Question 9.8: In the white light spectrum obtained with a diffraction grating, the third order image of a wavelength coincides with the fourth order image of a second wavelength. Calculate the ratio of the two wavelengths.
**Answer:**
From the diffraction grating equation:
$$d \\sin\\theta = n\\lambda$$

Since both images coincide at the same diffraction angle $\\theta$:
$$d \\sin\\theta = 3\\lambda_1 \\quad \\text{and} \\quad d \\sin\\theta = 4\\lambda_2$$

Equating the two expressions:
$$3\\lambda_1 = 4\\lambda_2$$

Therefore, the ratio of the two wavelengths is:
$$\\mathbf{\\frac{\\lambda_1}{\\lambda_2} = \\frac{4}{3} \\quad \\text{or} \\quad \\frac{\\lambda_2}{\\lambda_1} = \\frac{3}{4}}$$

---

### Question 9.9: How would you manage to get more orders of spectra using a diffraction grating?
**Answer:**
From the diffraction grating equation, the maximum order $n$ is:
$$n = \\frac{d \\sin\\theta}{\\lambda}$$
Because the maximum value of $\\sin\\theta$ is $1$ (at $\\theta = 90^\\circ$):
$$n_{\\text{max}} = \\frac{d}{\\lambda}$$

To increase the number of observable spectral orders ($n_{\\text{max}}$), we can:
1. **Increase the grating element $d$:** Use a grating with fewer lines per unit length (larger spacing $d$).
2. **Use light of shorter wavelength $\\lambda$:** Illuminate the grating with light of smaller wavelength (such as violet or ultraviolet light rather than red light).

---

### Question 9.10: Why are Polaroid sunglasses better than ordinary sunglasses?
**Answer:**
1. **Ordinary Sunglasses:** Colored or tinted glass simply absorbs light uniformly across all polarization directions, reducing overall brightness but not preferentially eliminating blinding reflected glare.
2. **Polaroid Sunglasses:** Glare produced by specular reflection from horizontal surfaces (such as water, wet highways, and snow) is predominantly horizontally plane-polarized. Polaroid sunglasses are fabricated with their transmission axes aligned vertically. They selectively absorb the horizontally polarized reflected glare while comfortably transmitting diffuse vertical light. Consequently, they improve visual contrast and prevent eye strain far more effectively than ordinary sunglasses.

---

### Question 9.11: How would you distinguish between un-polarized and plane-polarized lights?
**Answer:**
To distinguish between unpolarized and plane-polarized light:
1. Allow the given beam of light to pass through a **Polaroid sheet (analyzer)** while observing the transmitted intensity.
2. Slowly rotate the Polaroid sheet through $360^\\circ$ about the beam as the axis of rotation:
   - **If the light is plane-polarized:** The transmitted intensity varies continuously from a maximum to complete darkness (zero intensity) twice in one full rotation.
   - **If the light is unpolarized:** The transmitted intensity remains completely constant and unchanged at all rotation angles.
   - *(Note: If the intensity fluctuates between a maximum and a non-zero minimum, the light is partially polarized).*

---

## Fill in the Blanks

1. According to **Huygens'** principle, each point on a wavefront acts as a source of secondary **wavelets**.
2. In Young's experiment, the distance between two adjacent bright fringes for violet light is **smaller (less)** than that for green light.  
   *(Reason: $\\Delta y = \\frac{\\lambda L}{d}$ and $\\lambda_{\\text{violet}} < \\lambda_{\\text{green}}$)*
3. The distance between bright fringes in the interference pattern **increases** as the wavelength of light used increases.  
   *(Reason: $\\Delta y \\propto \\lambda$)*
4. A diffraction grating is used to make a diffraction pattern for yellow light and then for red light. The distances between the red spots will be **greater** than that for yellow light.  
   *(Reason: $\\sin\\theta = \\frac{n\\lambda}{d}$ and $\\lambda_{\\text{red}} > \\lambda_{\\text{yellow}}$)*
5. The phenomenon of polarization of light reveals that light waves are **transverse** waves.
6. A polaroid is a commercial **polarizing material (polarizing sheet)**.
7. A polaroid glass **reduces (eliminates)** glare of light produced at a road surface.

---

## Step-by-Step Solved Numerical Problems

### Problem 9.1
**Statement:** Light of wavelength $546\\text{ nm}$ is allowed to illuminate the slits of Young's experiment. The separation between the slits is $0.10\\text{ mm}$ and the distance of the screen from the slits where interference effects are observed is $20\\text{ cm}$. At what angle the first minimum will fall? What will be the linear distance on the screen between adjacent maxima?

**Given Data:**
- Wavelength $\\lambda = 546\\text{ nm} = 546 \\times 10^{-9}\\text{ m}$
- Slit separation $d = 0.10\\text{ mm} = 0.10 \\times 10^{-3}\\text{ m} = 1.0 \\times 10^{-4}\\text{ m}$
- Distance to screen $L = 20\\text{ cm} = 0.20\\text{ m}$

**Formulae:**
1. Condition for dark fringes (minima):
   $$d \\sin\\theta = \\left(m + \\frac{1}{2}\\right)\\lambda$$
   For the first minimum, $m = 0$:
   $$d \\sin\\theta_1 = \\frac{1}{2}\\lambda \\implies \\sin\\theta_1 = \\frac{\\lambda}{2d}$$
2. Distance between adjacent maxima (fringe spacing $\\Delta y$):
   $$\\Delta y = \\frac{\\lambda L}{d}$$

**Calculations:**
1. **Angular position $\\theta_1$:**
   $$\\sin\\theta_1 = \\frac{546 \\times 10^{-9}\\text{ m}}{2 \\times (1.0 \\times 10^{-4}\\text{ m})} = \\frac{546 \\times 10^{-9}}{2.0 \\times 10^{-4}} = 2.73 \\times 10^{-3} = 0.00273$$
   $$\\theta_1 = \\sin^{-1}(0.00273) = 0.1564^\\circ \\approx 0.16^\\circ$$

2. **Fringe spacing $\\Delta y$:**
   $$\\Delta y = \\frac{(546 \\times 10^{-9}\\text{ m}) \\times 0.20\\text{ m}}{1.0 \\times 10^{-4}\\text{ m}} = \\frac{109.2 \\times 10^{-9}}{1.0 \\times 10^{-4}} = 1.092 \\times 10^{-3}\\text{ m} \\approx 1.1\\text{ mm}$$

**Answer:**
$$\\theta_1 = 0.16^\\circ, \\quad \\Delta y = 1.1\\text{ mm}$$

---

### Problem 9.2
**Statement:** Calculate the wavelength of light, which illuminates two slits $0.5\\text{ mm}$ apart and produces an interference pattern on a screen placed $200\\text{ cm}$ away from the slits. The first bright fringe is observed at a distance of $2.40\\text{ mm}$ from the central bright image.

**Given Data:**
- Slit separation $d = 0.5\\text{ mm} = 0.5 \\times 10^{-3}\\text{ m} = 5.0 \\times 10^{-4}\\text{ m}$
- Screen distance $L = 200\\text{ cm} = 2.0\\text{ m}$
- Order of bright fringe $m = 1$
- Distance of first bright fringe from central maximum $y_1 = 2.40\\text{ mm} = 2.40 \\times 10^{-3}\\text{ m}$

**Formula:**
$$y_m = m \\frac{\\lambda L}{d} \\implies \\lambda = \\frac{y_1 \\cdot d}{m \\cdot L}$$

**Calculations:**
$$\\lambda = \\frac{(2.40 \\times 10^{-3}\\text{ m}) \\times (5.0 \\times 10^{-4}\\text{ m})}{1 \\times 2.0\\text{ m}}$$
$$\\lambda = \\frac{12.0 \\times 10^{-7}}{2.0} = 6.0 \\times 10^{-7}\\text{ m} = 600 \\times 10^{-9}\\text{ m} = 600\\text{ nm}$$

**Answer:**
$$\\lambda = 600\\text{ nm}$$

---

### Problem 9.3
**Statement:** In a double slit experiment the second order maximum occurs at $\\theta = 0.25^\\circ$. The wavelength is $650\\text{ nm}$. Determine the slit separation.

**Given Data:**
- Order of maximum $m = 2$
- Diffraction angle $\\theta = 0.25^\\circ$
- Wavelength $\\lambda = 650\\text{ nm} = 650 \\times 10^{-9}\\text{ m}$

**Formula:**
$$d \\sin\\theta = m\\lambda \\implies d = \\frac{m\\lambda}{\\sin\\theta}$$

**Calculations:**
$$\\sin(0.25^\\circ) = 0.0043633$$
$$d = \\frac{2 \\times (650 \\times 10^{-9}\\text{ m})}{0.0043633} = \\frac{1300 \\times 10^{-9}}{0.0043633} = 2.979 \\times 10^{-4}\\text{ m} \\approx 0.30 \\times 10^{-3}\\text{ m} = 0.30\\text{ mm}$$

**Answer:**
$$d = 0.30\\text{ mm}$$

---

### Problem 9.4
**Statement:** A monochromatic light of $\\lambda = 588\\text{ nm}$ is allowed to fall on the half silvered glass plate $G_1$ in the Michelson Interferometer. If mirror $M_1$ is moved through $0.233\\text{ mm}$, how many fringes will be observed to shift?

**Given Data:**
- Wavelength $\\lambda = 588\\text{ nm} = 588 \\times 10^{-9}\\text{ m}$
- Displacement of mirror $M_1$, $L = 0.233\\text{ mm} = 0.233 \\times 10^{-3}\\text{ m}$

**Formula:**
$$L = m \\frac{\\lambda}{2} \\implies m = \\frac{2L}{\\lambda}$$

**Calculations:**
$$m = \\frac{2 \\times (0.233 \\times 10^{-3}\\text{ m})}{588 \\times 10^{-9}\\text{ m}} = \\frac{0.466 \\times 10^{-3}}{588 \\times 10^{-9}} = \\frac{466000}{588} = 792.5 \\approx 792$$

**Answer:**
$$m = 792\\text{ fringes}$$

---

### Problem 9.5
**Statement:** A second order spectrum is formed at an angle of $38.0^\\circ$ when light falls normally on a diffraction grating having $5400\\text{ lines per centimetre}$. Determine wavelength of the light used.

**Given Data:**
- Order of spectrum $n = 2$
- Diffraction angle $\\theta = 38.0^\\circ$
- Number of lines per cm = $5400 \\implies N = 5400 \\times 10^2 = 540,000\\text{ lines/m}$
- Grating element $d = \\frac{1}{N} = \\frac{1}{540,000}\\text{ m} = 1.8519 \\times 10^{-6}\\text{ m}$

**Formula:**
$$d \\sin\\theta = n\\lambda \\implies \\lambda = \\frac{d \\sin\\theta}{n}$$

**Calculations:**
$$\\sin(38.0^\\circ) = 0.61566$$
$$\\lambda = \\frac{(1.8519 \\times 10^{-6}\\text{ m}) \\times 0.61566}{2} = \\frac{1.14015 \\times 10^{-6}}{2} = 5.7008 \\times 10^{-7}\\text{ m} = 570\\text{ nm}$$

**Answer:**
$$\\lambda = 570\\text{ nm}$$

---

### Problem 9.6
**Statement:** A light is incident normally on a grating which has $2500\\text{ lines per centimetre}$. Compute the wavelength of a spectral line for which the deviation in second order is $15.0^\\circ$.

**Given Data:**
- Number of lines per cm = $2500 \\implies N = 250,000\\text{ lines/m}$
- Grating element $d = \\frac{1}{250,000}\\text{ m} = 4.0 \\times 10^{-6}\\text{ m}$
- Order $n = 2$
- Deviation angle $\\theta = 15.0^\\circ$

**Formula:**
$$d \\sin\\theta = n\\lambda \\implies \\lambda = \\frac{d \\sin\\theta}{n}$$

**Calculations:**
$$\\sin(15.0^\\circ) = 0.25882$$
$$\\lambda = \\frac{(4.0 \\times 10^{-6}\\text{ m}) \\times 0.25882}{2} = 2.0 \\times 10^{-6} \\times 0.25882 = 5.1764 \\times 10^{-7}\\text{ m} \\approx 518\\text{ nm}$$

**Answer:**
$$\\lambda = 518\\text{ nm}$$

---

### Problem 9.7
**Statement:** Sodium light ($\\lambda = 589\\text{ nm}$) is incident normally on a grating having $3000\\text{ lines per centimetre}$. What is the highest order of the spectrum obtained with this grating?

**Given Data:**
- Wavelength $\\lambda = 589\\text{ nm} = 589 \\times 10^{-9}\\text{ m}$
- Number of lines per cm = $3000 \\implies N = 300,000\\text{ lines/m}$
- Grating element $d = \\frac{1}{300,000}\\text{ m} = 3.333 \\times 10^{-6}\\text{ m}$

**Formula:**
$$d \\sin\\theta = n\\lambda \\implies n = \\frac{d \\sin\\theta}{\\lambda}$$
For highest order, the maximum possible angle of deviation is $\\theta = 90^\\circ$ (so $\\sin 90^\\circ = 1$):
$$n_{\\text{max}} = \\frac{d}{\\lambda}$$

**Calculations:**
$$n_{\\text{max}} = \\frac{3.3333 \\times 10^{-6}\\text{ m}}{589 \\times 10^{-9}\\text{ m}} = 5.659$$

Because the order of spectrum must be an integer:
$$n = 5$$

**Answer:**
$$5\\text{th order}$$

---

### Problem 9.8
**Statement:** Blue light of wavelength $480\\text{ nm}$ illuminates a diffraction grating. The second order image is formed at an angle of $30^\\circ$ from the central image. How many lines in a centimetre of the grating have been ruled?

**Given Data:**
- Wavelength $\\lambda = 480\\text{ nm} = 480 \\times 10^{-9}\\text{ m}$
- Order $n = 2$
- Diffraction angle $\\theta = 30^\\circ$

**Formula:**
$$d \\sin\\theta = n\\lambda \\implies d = \\frac{n\\lambda}{\\sin\\theta}$$
Number of lines per metre $N = \\frac{1}{d}$
Number of lines per centimetre $N_{\\text{cm}} = \\frac{N}{100} = \\frac{1}{100 \\cdot d}$

**Calculations:**
$$\\sin(30^\\circ) = 0.5$$
$$d = \\frac{2 \\times (480 \\times 10^{-9}\\text{ m})}{0.5} = 4 \\times 480 \\times 10^{-9} = 1.92 \\times 10^{-6}\\text{ m}$$
$$N = \\frac{1}{1.92 \\times 10^{-6}\\text{ m}} = 520,833\\text{ lines/m}$$
$$N_{\\text{cm}} = \\frac{520,833}{100} = 5,208.33\\text{ lines/cm} = 5.2 \\times 10^3\\text{ lines/cm}$$

**Answer:**
$$5.2 \\times 10^3\\text{ lines per cm}$$

---

### Problem 9.9
**Statement:** X-rays of wavelength $0.150\\text{ nm}$ are observed to undergo a first order reflection at a Bragg angle of $13.3^\\circ$ from a quartz ($SiO_2$) crystal. What is the interplanar spacing of the reflecting planes in the crystal?

**Given Data:**
- Wavelength $\\lambda = 0.150\\text{ nm} = 0.150 \\times 10^{-9}\\text{ m}$
- Order of reflection $n = 1$
- Bragg angle $\\theta = 13.3^\\circ$

**Formula:**
$$2d \\sin\\theta = n\\lambda \\implies d = \\frac{n\\lambda}{2 \\sin\\theta}$$

**Calculations:**
$$\\sin(13.3^\\circ) = 0.23005$$
$$d = \\frac{1 \\times (0.150 \\times 10^{-9}\\text{ m})}{2 \\times 0.23005} = \\frac{0.150 \\times 10^{-9}}{0.4601} = 3.260 \\times 10^{-10}\\text{ m} = 0.326\\text{ nm}$$

**Answer:**
$$d = 0.326\\text{ nm}$$

---

### Problem 9.10
**Statement:** An X-ray beam of wavelength $\\lambda$ undergoes a first order reflection from a crystal when its angle of incidence to a crystal face is $26.5^\\circ$, and an X-ray beam of wavelength $0.097\\text{ nm}$ undergoes a third order reflection when its angle of incidence to that face is $60.0^\\circ$. Assuming that the two beams reflect from the same family of planes, calculate:
(a) the interplanar spacing of the planes
(b) the wavelength $\\lambda$

**Given Data:**
- For beam 1:
  - Wavelength $= \\lambda$
  - Order $n_1 = 1$
  - Glancing angle $\\theta_1 = 26.5^\\circ$
- For beam 2:
  - Wavelength $\\lambda_2 = 0.097\\text{ nm} = 0.097 \\times 10^{-9}\\text{ m}$
  - Order $n_2 = 3$
  - Glancing angle $\\theta_2 = 60.0^\\circ$
- Both beams reflect from the same family of planes (same $d$).

**Formula:**
$$2d \\sin\\theta = n\\lambda$$

**Calculations:**

**(a) Calculation of interplanar spacing $d$:**
Using the data for beam 2:
$$2d \\sin\\theta_2 = n_2 \\lambda_2 \\implies d = \\frac{n_2 \\lambda_2}{2 \\sin\\theta_2}$$
$$\\sin(60.0^\\circ) = \\frac{\\sqrt{3}}{2} \\approx 0.8660$$
$$d = \\frac{3 \\times (0.097 \\times 10^{-9}\\text{ m})}{2 \\times 0.8660} = \\frac{0.291 \\times 10^{-9}}{1.732} = 1.680 \\times 10^{-10}\\text{ m} = 0.168\\text{ nm}$$

**(b) Calculation of wavelength $\\lambda$:**
Using the Bragg condition for beam 1:
$$2d \\sin\\theta_1 = n_1 \\lambda \\implies \\lambda = \\frac{2d \\sin\\theta_1}{n_1}$$
$$\\sin(26.5^\\circ) = 0.4462$$
$$\\lambda = \\frac{2 \\times (1.680 \\times 10^{-10}\\text{ m}) \\times 0.4462}{1} = 1.499 \\times 10^{-10}\\text{ m} \\approx 0.150\\text{ nm}$$

**Answer:**
$$\\text{(a) } d = 0.168\\text{ nm}, \\quad \\text{(b) } \\lambda = 0.150\\text{ nm}$$
"""

with open("Chapter_09_Physical_Optics.md", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated Chapter_09_Physical_Optics.md ({len(content)} bytes)")
