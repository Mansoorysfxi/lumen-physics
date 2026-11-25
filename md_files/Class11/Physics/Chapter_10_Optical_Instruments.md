# CHAPTER 10: OPTICAL INSTRUMENTS

---

## Learning Objectives
At the end of this chapter the students will be able to:
1. Recognize the term least distance of distinct vision.
2. Understand the terms magnifying power and resolving power.
3. Derive expressions for magnifying power of simple microscope, compound microscope, and astronomical telescope.
4. Understand the working of a spectrometer.
5. Describe Michelson's rotating mirror method to find the speed of light.
6. Understand the principles of optical fibres.
7. Identify the types of optical fibres.
8. Appreciate the applications of optical fibres in medicine and telecommunications.

---

## Introduction

Optical instruments are devices that utilize the fundamental laws of reflection and refraction of light to extend and enhance human vision. Common examples include the simple magnifying glass, the compound microscope, and astronomical telescopes. 

Beyond magnifying small or distant objects, an optical instrument must also possess sufficient **resolving power** to reveal fine structural details. In this chapter, we explore the principles, constructions, and working mechanisms of microscopes, telescopes, spectrometers, Michelson's experimental measurement of the speed of light, and modern fibre-optic communication systems.

---

## 10.1 Least Distance of Distinct Vision

The human eye contains a flexible crystalline lens whose focal length is automatically adjusted by the ciliary muscles (a process known as **accommodation**). 
- When viewing very distant objects, the ciliary muscles are fully relaxed, and the eye focuses the image on the retina with minimum effort (the **far point** of a normal eye is at infinity).
- As an object is brought closer to the eye, the ciliary muscles contract to increase the curvature of the lens, keeping the image sharp on the retina.
- However, if the object is brought closer than a certain minimum distance, the ciliary muscles cannot increase the lens curvature any further. The retinal image becomes blurred and out of focus.

> **Definition:**
> The minimum distance from the eye at which an object appears sharp and distinctly visible without strain is called the **least distance of distinct vision** (or **near point**), denoted by $d$.

For a normal, healthy human eye, the near point distance $d$ is approximately **$25\text{ cm}$** ($0.25\text{ m}$). The near point varies with age: it is about $7\text{ to }10\text{ cm}$ in young children and recedes to $50\text{ cm}$ or more in older adults due to stiffening of the crystalline lens (presbyopia).

---

## 10.2 Magnifying Power and Resolving Power of Optical Instruments

### Visual Angle and Magnification
The apparent size of any object seen by the eye depends entirely upon the **visual angle** (the angle $\theta$ subtended by the object at the eye's crystalline lens).
- When an object is moved closer to the eye, the angle $\theta$ subtended at the eye increases, producing a larger image on the retina and allowing finer details to be perceived.
- The maximum angle an object can subtend at the unaided eye while remaining in sharp focus occurs when the object is placed at the least distance of distinct vision ($d = 25\text{ cm}$).

### Linear Magnification vs. Angular Magnification
1. **Linear (Lateral) Magnification ($M_{\text{linear}}$):**
   The ratio of the height of the image ($I$ or $h'$) to the height of the object ($O$ or $h$):
   $$M_{\text{linear}} = \frac{\text{Size of Image}}{\text{Size of Object}} = \frac{I}{O} = \frac{q}{p}$$
   Where $p$ is the object distance and $q$ is the image distance from the lens.

2. **Angular Magnification or Magnifying Power ($M$):**
   The ratio of the visual angle $\beta$ subtended at the eye by the image seen through the optical instrument to the visual angle $\alpha$ subtended by the object at the unaided eye placed at the near point:
   $$M = \frac{\beta}{\alpha}$$

### Resolving Power
Increasing magnification alone does not guarantee that finer details can be seen. If two point sources of light are situated very close to each other, their images produced by an optical instrument appear as overlapping diffraction spots (Airy discs surrounded by diffraction rings) due to the wave nature of light.

> **Definition:**
> The **resolving power** of an optical instrument is its ability to reveal the fine, minor details of an object and produce distinctly separated images of two adjacent points.

### Rayleigh's Criterion for Resolution
According to Lord Rayleigh, two point objects are just resolved when the central maximum of the diffraction pattern of one source falls upon the first diffraction minimum of the other.

For a circular aperture or lens of diameter $D$ using light of wavelength $\lambda$, the minimum angular separation $\alpha_{\min}$ between two point sources for them to be just resolved is:
$$\alpha_{\min} = 1.22 \frac{\lambda}{D}$$

The resolving power $R$ is defined as the reciprocal of this minimum angle:
$$R = \frac{1}{\alpha_{\min}} = \frac{D}{1.22 \lambda}$$

> **Key Observations:**
> 1. A lens with a larger diameter ($D$) has greater resolving power and can resolve smaller angular separations.
> 2. Using light of shorter wavelength $\lambda$ (such as blue light instead of red light) reduces diffraction and increases resolving power.

### Resolving Power of a Diffraction Grating
In a grating spectrometer, the resolving power $R$ is defined as the ability to separate two spectral lines of wavelengths $\lambda$ and $\lambda + \Delta \lambda$:
$$R = \frac{\lambda}{\Delta \lambda} = N \times m$$
Where:
- $N$ is the total number of rulings (slits) on the grating.
- $m$ is the order of the diffraction spectrum.

> **Tidbits:**
> If you find it difficult to read very small print, make a tiny pinhole in a piece of paper and hold it right in front of your eye close to the page. You will see the small print magnified and sharply defined because the pinhole restricts the light cone, increasing the depth of field and reducing aberrations.

---

## 10.3 Simple Microscope (Magnifying Glass)

A **simple microscope** is simply a single convex (converging) lens of short focal length $f$. It is commonly used by watchmakers, jewelers, and scientists to examine minute objects.

```
                  Convex Lens
         Object        | 
     <--.   O          |
        |   |          |
        |   |----.     |
        |   |     '----|----------.
        |   |          |           '----. Eye
  <-----+---+----------+------------------+----->
        |   |<---p---->|                  |
        |              |                  |
        |              |<------- d ------>|
        V (Virtual Image I at d)
```

### Working Principle
When an object is placed in front of a convex lens inside its principal focus ($p < f$), the lens forms an erect, virtual, and magnified image on the same side as the object. For comfortable viewing with maximum detail, the position of the object is adjusted so that this virtual image is formed at the least distance of distinct vision ($q = -d = -25\text{ cm}$).

### Derivation of Magnifying Power
Let:
- $\alpha$ = angle subtended by the object of height $O$ at the unaided eye when placed at the near point $d$:
  $$\tan\alpha \approx \alpha = \frac{O}{d}$$
- $\beta$ = angle subtended by the virtual image of height $I$ formed at distance $d$:
  $$\tan\beta \approx \beta = \frac{I}{d} = \frac{O}{p}$$
  *(since from similar triangles, $\frac{I}{d} = \frac{O}{p}$)*

The angular magnification $M$ is:
$$M = \frac{\beta}{\alpha} = \frac{O/p}{O/d} = \frac{d}{p}$$

Using the thin lens formula for a virtual image ($q = -d$):
$$\frac{1}{f} = \frac{1}{p} + \frac{1}{q} = \frac{1}{p} - \frac{1}{d}$$
$$\frac{1}{p} = \frac{1}{f} + \frac{1}{d}$$

Multiplying both sides by $d$:
$$\frac{d}{p} = \frac{d}{f} + 1$$

Therefore:
$$\mathbf{M = 1 + \frac{d}{f}}$$

- If the image is formed at infinity ($p = f$, the relaxed-eye condition), the magnifying power is:
  $$\mathbf{M_{\infty} = \frac{d}{f}}$$

> **Conclusion:**
> To obtain high magnification from a simple magnifying glass, a lens of very short focal length $f$ must be used. For example, if $f = 5\text{ cm}$ and $d = 25\text{ cm}$, then $M = 1 + \frac{25}{5} = 6$. The object appears 6 times larger.

---

## 10.4 Compound Microscope

When high magnification is required beyond the practical limits of a single lens, a **compound microscope** is used.

```
       Objective Lens              Eyepiece Lens
         (Small fo)                  (Larger fe)
            |                             |
  Object h  |                             |
    |       |      Real Image h1          |
  --*-------+-----------|-----------------+--------------> Eye
    |<--p-->|           |                 |
    |<-------- q ------>|                 |
                        |<------ pe ----->|
                        |<-------------- d -------------->|
                                          |
                                    Final Virtual Image h2
```

### Optical Construction
A compound microscope consists of two converging lenses placed coaxially in a tube:
1. **Objective Lens ($f_o$):** A convex lens of very short focal length and small aperture placed close to the object.
2. **Eyepiece Lens ($f_e$):** A convex lens of comparatively moderate focal length and larger aperture placed near the eye.

### Working Principle
1. The object of height $h$ is placed just beyond the principal focus of the objective ($p_o > f_o$).
2. The objective forms a real, inverted, and magnified intermediate image $h_1$ inside the principal focus of the eyepiece ($p_e < f_e$).
3. The eyepiece acts as a simple magnifier, producing a highly enlarged, virtual final image $h_2$ at the least distance of distinct vision ($d = 25\text{ cm}$).

### Derivation of Magnifying Power
The total angular magnification $M$ is the product of the linear magnification of the objective ($M_1$) and the angular magnification of the eyepiece ($M_2$):
$$M = M_1 \times M_2$$

From Section 10.2:
- Linear magnification of the objective:
  $$M_1 = \frac{h_1}{h} = \frac{q}{p}$$
- Magnification of the eyepiece (acting as a simple magnifier):
  $$M_2 = 1 + \frac{d}{f_e}$$

Thus, the total magnification of the compound microscope is:
$$\mathbf{M = \frac{q}{p} \left(1 + \frac{d}{f_e}\right)}$$

When the object is placed very close to the focus of the objective ($p \approx f_o$) and the intermediate image is formed close to the eyepiece such that $q \approx L$ (the length of the microscope tube):
$$\mathbf{M \approx \frac{L}{f_o} \left(1 + \frac{d}{f_e}\right)}$$

> **Practical Note:**
> Microscopes are labeled with magnifications such as $\times 10$, $\times 40$, $\times 100$. Using shorter focal lengths for both objective and eyepiece increases overall magnification. Blue light (shorter $\lambda$) is preferred in microscopy to reduce diffraction and increase resolving power.

---

### Solved Example

#### Example 10.1
**Problem:** A microscope has an objective lens of $10\text{ mm}$ focal length and an eyepiece of $25.0\text{ mm}$ focal length. What is the distance between the lenses and its magnification, if the object is in sharp focus when it is $10.5\text{ mm}$ from the objective?

**Solution:**
- Focal length of objective $f_o = 10\text{ mm}$
- Object distance for objective $p = 10.5\text{ mm}$
- Focal length of eyepiece $f_e = 25.0\text{ mm}$
- Final image is formed at near point $q_e = -d = -250\text{ mm}$

**1. Considering the objective lens:**
$$\frac{1}{f_o} = \frac{1}{p} + \frac{1}{q} \implies \frac{1}{q} = \frac{1}{10} - \frac{1}{10.5} = \frac{10.5 - 10}{105} = \frac{0.5}{105}$$
$$q = \frac{105}{0.5} = 210\text{ mm}$$

**2. Considering the eyepiece lens:**
$$\frac{1}{f_e} = \frac{1}{p_e} + \frac{1}{q_e} \implies \frac{1}{p_e} = \frac{1}{f_e} - \frac{1}{q_e} = \frac{1}{25} - \frac{1}{-250} = \frac{1}{25} + \frac{1}{250} = \frac{10 + 1}{250} = \frac{11}{250}$$
$$p_e = \frac{250}{11} = 22.7\text{ mm}$$

**3. Separation between the lenses (Length of microscope $L$):**
$$L = q + p_e = 210\text{ mm} + 22.7\text{ mm} = 232.7\text{ mm} \approx 233\text{ mm}$$

**4. Total Magnification:**
- Magnification of objective:
  $$M_1 = \frac{q}{p} = \frac{210\text{ mm}}{10.5\text{ mm}} = 20.0$$
- Magnification of eyepiece:
  $$M_2 = 1 + \frac{d}{f_e} = 1 + \frac{250\text{ mm}}{25\text{ mm}} = 1 + 10 = 11.0$$
- Total magnification:
  $$M = M_1 \times M_2 = 20.0 \times (-11.0) = -220$$
  *(The negative sign indicates that the final image is inverted with respect to the original object).*

**Answer:**
$$\text{Separation between lenses } = 233\text{ mm}, \quad \text{Magnification } = 220$$

---

## 10.5 Astronomical Telescope

An **astronomical telescope** is an optical instrument used to view distant celestial objects such as stars, planets, and the Moon.

```
       Objective Lens                           Eyepiece Lens
      (Large fo, Large D)                       (Short fe)
               |                                     |
  Parallel     |                                     |
  Rays from    |      Real Inverted Image A'B'       |
  Distant Star |                 |                   |
  ============>+-----------------|-------------------+-------------> Parallel Rays
               |                 |                   |               (Image at infinity)
               |<------- fo ---->|<------- fe ------>|
               |<------------------ L = fo + fe ---->|
```

### Optical Construction
A simple refracting astronomical telescope consists of two convex lenses mounted coaxially in a tube:
1. **Objective Lens ($f_o$):** A convex lens of long focal length and large aperture.
2. **Eyepiece Lens ($f_e$):** A convex lens of short focal length and small aperture.

### Normal Adjustment
In **normal adjustment**, the telescope is adjusted so that the final image is formed at infinity, allowing the observer to view the celestial object with a completely relaxed eye.
1. Parallel rays from a distant object enter the objective and converge to form a real, inverted, diminished image $A'B'$ at the principal focus $F_o$ of the objective.
2. The eyepiece is positioned so that this real image $A'B'$ lies exactly at the principal focus $F_e$ of the eyepiece.
3. Light rays emerging from the eyepiece are parallel, forming the final virtual, enlarged, inverted image at infinity.

### Derivation of Magnifying Power
Let:
- $\alpha$ = angle subtended by the distant object at the unaided eye (which is practically equal to the angle subtended at the objective lens center $O$):
  $$\tan\alpha \approx \alpha = \frac{A'B'}{OB'} = \frac{A'B'}{f_o}$$
- $\beta$ = angle subtended at the eye by the image seen through the eyepiece (at center $O'$):
  $$\tan\beta \approx \beta = \frac{A'B'}{O'B'} = \frac{A'B'}{f_e}$$

The angular magnification $M$ of the telescope is:
$$M = \frac{\beta}{\alpha} = \frac{A'B'/f_e}{A'B'/f_o}$$
$$\mathbf{M = \frac{f_o}{f_e}}$$

### Length of the Telescope ($L$)
In normal adjustment, the distance between the objective lens and the eyepiece lens equals the sum of their focal lengths:
$$\mathbf{L = f_o + f_e}$$

### Requirements of a Good Astronomical Telescope
1. **High Magnification:** Requires a large objective focal length $f_o$ and a short eyepiece focal length $f_e$.
2. **High Light Gathering Power:** Requires an objective of **large aperture** (diameter $D$) to collect maximum light from faint distant stars. Light-gathering power is proportional to $D^2$.
3. **High Resolving Power:** Requires a large aperture diameter $D$ ($R \propto \frac{D}{\lambda}$) to resolve closely spaced binary stars.

> **Reflecting Telescopes:**
> Because very large glass lenses are heavy, sag under their own weight, and suffer from chromatic aberration, modern research telescopes use large concave parabolic mirrors as objectives (reflecting telescopes).

---

## 10.6 Spectrometer

A **spectrometer** is an optical instrument used to examine spectra produced by different light sources, measure the refractive index of transparent prisms, and determine the wavelengths of light using a diffraction grating.

```
       Collimator              Turn Table              Telescope
     [Slit - Lens]             [ Prism / Grating ]     [Lens - Eyepiece]
  S ----|===)                     /\                       (===|-----> Eye
                                 /  \
                                /____\
```

### Essential Components
A spectrometer consists of three primary parts:
1. **Collimator:** A fixed metallic tube with an adjustable slit at one end and an achromatic convex lens at the other. When the slit is adjusted to lie exactly at the principal focus of the lens, parallel rays of light emerge from the collimator.
2. **Turn Table:** A circular horizontal platform on which a prism or diffraction grating is placed. It rotates about a vertical axis and features a circular scale graduated in half-degrees ($0.5^\circ$).
3. **Telescope:** An astronomical telescope mounted coaxially with the turntable, equipped with vernier scales that rotate with it to measure angular deviations with high precision.

### Preliminary Adjustments
Before taking measurements, three adjustments must be performed:
1. **Focusing the Telescope:** Focus the telescope on a distant object so that parallel rays form a sharp image on the eyepiece crosshairs.
2. **Adjusting the Collimator:** Illuminate the slit with light and slide the slit tube until parallel rays emerge from the collimating lens (verified by viewing through the pre-focused telescope).
3. **Leveling the Turn Table:** Use leveling screws to make the turntable surface perpendicular to the axis of rotation, ensuring the prism refracting edge is vertical.

---

## 10.7 Michelson's Measurement of the Speed of Light

Light travels with extraordinary speed ($c \approx 3 \times 10^8\text{ m/s}$). Galileo made the first recorded attempt to measure it using lantern signals between distant hills, but light traveled too fast for human reaction times.

Between 1878 and 1931, the American physicist Albert A. Michelson performed a series of definitive experiments using a high-speed rotating octagonal mirror.

```
                         Stationary Concave Mirror m
                                    (at distance d)
                                         |
                                         ^
                                        / \
                                       /   \
                                      /     \
       Face 1                        /       \                       Face 3
  S ----------> [  Rotating Octagonal Mirror M  ] ----------> Telescope / Eye
                   (Fitted on variable motor)
```

### Experimental Setup and Operation
- An eight-sided polished mirror $M$ is mounted on the shaft of a high-speed variable-speed motor.
- A stationary plane/concave mirror $m$ is positioned on a distant mountain peak at an accurately measured distance $d$ (approx. $35\text{ km}$ away).
- Light from source $S$ reflects from face 1 of mirror $M$, travels distance $d$ to mirror $m$, reflects back across distance $d$, strikes face 3 of mirror $M$, and enters the viewing telescope.
- When mirror $M$ begins rotating, face 3 moves away while the light is in transit, and the beam misses the telescope (the image disappears).
- When the rotation speed of mirror $M$ is increased to a critical frequency $f$, face 2 moves precisely into the position previously occupied by face 3 during the time light makes the round trip. The source $S$ reappears sharply in the telescope.

### Mathematical Derivation
1. The angle subtended by each face of an eight-sided regular octagonal mirror at its center is:
   $$\theta = \frac{2\pi}{8} = \frac{\pi}{4}\text{ rad} = 45^\circ$$
2. If $f$ is the rotational frequency of the mirror (revolutions per second), the time period for one complete revolution ($2\pi\text{ rad}$) is $T = \frac{1}{f}$.
3. The time $t$ required for the mirror to rotate through $\frac{1}{8}$ of a revolution ($45^\circ$) is:
   $$t = \frac{1}{8f}$$
4. The total distance traversed by the light in making the round trip is $2d$. If $c$ is the speed of light, the transit time is:
   $$t = \frac{2d}{c}$$
5. Equating the two transit times:
   $$\frac{2d}{c} = \frac{1}{8f}$$
   $$\mathbf{c = 16 f d}$$

### Currently Accepted Value
Michelson's method yielded highly accurate values for the speed of light. Today, the internationally accepted value for the speed of light in vacuum is:
$$c = 2.99792458 \times 10^8\text{ ms}^{-1} \approx 3.00 \times 10^8\text{ ms}^{-1}$$

In any material medium of refractive index $n$, the speed of light is reduced to:
$$v = \frac{c}{n}$$

---

## 10.8 Introduction to Fibre Optics

Light communication has ancient roots (sunlight reflectors, smoke signals, naval signal lanterns). In 1880, Alexander Graham Bell invented the **photophone**, a device that transmitted voice messages over a modulated beam of sunlight focused on a selenium detector several hundred meters away.

In recent decades, the advent of ultra-pure glass optical fibres has revolutionized modern telecommunications, computing, and medical technology.

### Advantages of Fibre Optics over Metallic (Copper) Cables
1. **Enormous Bandwidth:** Light frequencies ($\\sim 10^{14}\\text{ Hz}$) are hundreds of thousands of times higher than radio frequencies, allowing thousands of telephone calls and television channels to be transmitted simultaneously through a single hair-thin glass thread.
2. **Immunity to Electromagnetic Interference:** Because optical signals are light waves traveling in dielectric glass, they are entirely immune to radio interference, lightning, and electromagnetic pulses.
3. **Low Weight and Compact Size:** An optical cable of diameter $6.0\text{ mm}$ can replace a copper cable bundle of $7.62\text{ cm}$ diameter, carrying the same volume of information.
4. **Medical Endoscopy:** Thin, flexible optical fibre bundles transmit light into inaccessible internal cavities of the human body, allowing doctors to view internal organs and perform minimally invasive surgeries.

> **Point to Ponder:**
> Each thin optical fibre is small enough to fit through the eye of a needle. The tiny diameter ensures high flexibility, prevents breaking during bending, and restricts light to single-mode propagation with minimal dispersion.

---

## 10.9 Fibre Optic Principles

Propagation of light down a glass fibre requires that light be completely trapped and guided inside the core without leaking out through the sidewalls. This is accomplished through:
1. **Total Internal Reflection**
2. **Continuous Refraction**

### Snell's Law and Critical Angle
When light travels from an optically denser medium of refractive index $n_1$ toward an optically rarer medium of refractive index $n_2$ ($n_1 > n_2$):
$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$

As the angle of incidence $\theta_1$ increases, the angle of refraction $\theta_2$ increases until $\theta_2 = 90^\circ$. The angle of incidence in the denser medium for which the angle of refraction is $90^\circ$ is called the **critical angle** ($\theta_c$):
$$n_1 \sin\theta_c = n_2 \sin 90^\circ = n_2$$
$$\mathbf{\sin\theta_c = \frac{n_2}{n_1}}$$

For a glass-air boundary ($n_1 = 1.50$, $n_2 = 1.00$):
$$\sin\theta_c = \frac{1.0}{1.5} = 0.6667 \implies \theta_c = 41.8^\circ$$

### Total Internal Reflection
When the angle of incidence exceeds the critical angle ($\\theta_1 > \\theta_c$), no light refracts across the boundary. Instead, **100% of the light energy is reflected back into the denser medium**. The boundary acts as an ideal mirror.

```
       Rarer Medium (n2)
  --------------------------------- Boundary
       Denser Medium (n1)
          /\
         /  \
        /    \   Angle > Critical Angle -> Total Internal Reflection
```

---

## 10.10 Types of Optical Fibres

An optical fibre consists of an inner central **core** surrounded by an outer glass or plastic layer called **cladding** of lower refractive index ($n_{\text{core}} > n_{\text{cladding}}$), wrapped in a protective plastic buffer jacket.

Optical fibres are categorized into three main types based on their propagation modes and refractive index profiles:

```
1. Single-Mode Step-Index Fibre:
   [ Cladding (n2) ]
   -----------------
   [ Core (n1, 5 um) ]  ====== Laser Beam ======>  (Zero modal dispersion)
   -----------------
   [ Cladding (n2) ]

2. Multi-Mode Step-Index Fibre:
   [ Cladding (n2 = 1.48) ]
   ------------------------
   [ Core (n1 = 1.52, 50 um)]  /\  /\  /\  /\  /\  (Multiple zig-zag paths)
   ------------------------      \/  \/  \/  \/
   [ Cladding (n2 = 1.48) ]

3. Multi-Mode Graded-Index Fibre:
   [ Outer Periphery (Lower n) ]
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   [ Center of Core (Highest n)]  ~~~~( Smooth Sinusoidal Paths )~~~~
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   [ Outer Periphery (Lower n) ]
```

### 1. Single-Mode (Monomode) Step-Index Fibre
- **Core Diameter:** Extremely thin, approximately **$5\ \mu\text{m}$**.
- **Cladding:** Relatively thick glass or plastic layer.
- **Light Source:** Must use a monochromatic **Laser source** because the core is extremely narrow.
- **Propagation:** Light propagates along a single axial path without multiple reflections, eliminating modal dispersion.
- **Performance:** Carries up to 14,000 simultaneous telephone calls or 14 digital TV channels over long distances with exceptional clarity.

### 2. Multi-Mode Step-Index Fibre
- **Core Diameter:** Relatively large, approximately **$50\ \mu\text{m}$**.
- **Refractive Index Profile:** Core has a uniform refractive index ($n_1 = 1.52$) that drops abruptly (steps down) at the cladding boundary to a lower uniform value ($n_2 = 1.48$).
- **Propagation:** Light rays enter at various angles and propagate via multiple zig-zag paths through total internal reflection.
- **Limitation:** Rays taking longer zig-zag paths travel greater distances than axial rays, causing severe pulse broadening (modal dispersion). Hence, it is suitable only for short-distance data links.

### 3. Multi-Mode Graded-Index Fibre
- **Core Diameter:** Ranges from **$50\ \mu\text{m}$ to $1000\ \mu\text{m}$** ($1\text{ mm}$).
- **Refractive Index Profile:** The refractive index is highest along the central axis and decreases continuously and smoothly toward the outer periphery. There is no sharp boundary between core and cladding.
- **Propagation (Continuous Refraction):** As light travels outward toward regions of lower refractive index, it is continuously refracted and curved smoothly back toward the central axis.
- **Dispersion Equalization:** Rays traveling farther from the axis take longer curved paths, but because the refractive index is lower in outer regions, the speed of light ($v = c/n$) is significantly higher there. Consequently, all rays arrive at the receiving end at virtually the same instant.
- **Performance:** Minimizes modal dispersion ($1\text{ ns/km}$ compared to $33\text{ ns/km}$ in step-index), making it ideal for long-distance telecommunications using white light or LED sources.

---

### Solved Example

#### Example 10.2
**Problem:** Calculate the critical angle and angle of entry for an optical fibre having a core of refractive index $1.50$ and cladding of refractive index $1.48$.

**Solution:**
- Core refractive index $n_1 = 1.50$
- Cladding refractive index $n_2 = 1.48$
- Air refractive index $n_0 = 1.00$

**1. Critical Angle $\theta_c$:**
$$\sin\theta_c = \frac{n_2}{n_1} = \frac{1.48}{1.50} = 0.9867$$
$$\theta_c = \sin^{-1}(0.9867) = 80.6^\circ$$

**2. Maximum Angle of Entry (Acceptance Angle $\theta_0$):**
Inside the fibre, the ray strikes the core-cladding boundary at the critical angle $\theta_c = 80.6^\circ$.
From the right-angled geometry at the front face of the fibre:
$$\theta' = 90^\circ - \theta_c = 90^\circ - 80.6^\circ = 9.4^\circ$$

Applying Snell's law at the air-core entrance interface:
$$n_0 \sin\theta_0 = n_1 \sin\theta'$$
$$1.00 \sin\theta_0 = 1.50 \sin(9.4^\circ)$$
$$\sin\theta_0 = 1.50 \times 0.1633 = 0.2450$$
$$\theta_0 = \sin^{-1}(0.2450) = 14.2^\circ$$

**Conclusion:**
If light strikes the entrance face of the optical fibre at an angle greater than $14.2^\circ$, its angle of incidence at the core-cladding interface will be less than the critical angle ($80.6^\circ$), and total internal reflection will fail.

---

## 10.11 Transmission, Modulation, and Detection of Signals

A complete fibre-optic communication system consists of three essential subsystems:
1. **Transmitter:** Converts incoming electrical information (voice, video, computer data) into optical pulses using a semiconductor laser or light-emitting diode (LED). Infrared light with a wavelength of approximately **$1.3\ \mu\text{m}$** is commonly chosen because silica glass exhibits minimal absorption and attenuation at this wavelength.
2. **Transmission Medium (Optical Fibre):** Flexible glass fibres that guide light pulses over tens of kilometers.
3. **Receiver:** Uses a high-speed **photodiode** to capture incoming light pulses and reconvert them into electrical signals, which are amplified and processed.

```
  Microphone / Data ----> [ Transmitter: Laser / LED ] ----> [ Optical Fibre Cable ]
                                                                     |
  Speaker / Display <---- [ Receiver: Photodiode ] <------ [ Optical Repeaters ]
```

### Digital Modulation
In digital modulation, information is encoded into binary digits (bits):
- A pulse of light represents binary **$1$**.
- The absence of light represents binary **$0$**.

Signals are transmitted at rates of hundreds of megabits ($10^6\text{ bits/s}$) to gigabits ($10^9\text{ bits/s}$) per second.

### Repeaters
Although optical fibres are manufactured from ultra-pure glass ($99.99\%$ pure), optical signals gradually attenuate over long distances. Electronic/optical **repeaters** are installed every **$30\text{ to }100\text{ km}$** along the cable route to amplify and reshape the pulses, restoring signal fidelity.

---

## 10.12 Losses of Power in Optical Fibres

Power losses in optical fibres stem from three primary mechanisms:

1. **Absorption Loss:** Caused by microscopic chemical impurities (such as hydroxyl ions $\text{OH}^-$ and transition metal ions) dissolved in the silica glass that absorb photons and convert light into thermal energy.
2. **Scattering Loss (Rayleigh Scattering):** Caused by minute, sub-microscopic density and composition fluctuations frozen into the glass matrix during manufacturing. Photons scatter in random directions and escape across the cladding boundary.
3. **Dispersion (Pulse Spreading):** 
   - **Modal Dispersion:** Arises because rays entering at different angles travel different path lengths, causing a sharp input pulse to broaden as it travels along the fibre. If adjacent pulses spread into each other, digital errors occur. In a multi-mode step-index fibre, time dispersion is approximately **$33\text{ ns/km}$**, whereas in a graded-index fibre it is reduced to **$1\text{ ns/km}$**.
   - **Material (Chromatic) Dispersion:** If the light source is not strictly monochromatic, different spectral wavelengths travel at slightly different speeds ($v = c/n$), causing pulse broadening.

---

## Chapter Summary

- **Least Distance of Distinct Vision ($d$):** The closest distance at which an object can be seen clearly without eye strain ($d \approx 25\text{ cm}$).
- **Linear Magnification:** $M_{\text{linear}} = \frac{\text{Image Size}}{\text{Object Size}} = \frac{q}{p}$.
- **Angular Magnification ($M$):** $M = \frac{\beta}{\alpha}$, the ratio of the visual angle subtended by the image to that subtended by the object at the near point.
- **Resolving Power:** The ability to distinguish fine details. Rayleigh's criterion: $\alpha_{\min} = 1.22\frac{\lambda}{D}$, $R = \frac{D}{1.22\lambda}$.
- **Simple Microscope:** A single convex lens. Magnifying power $M = 1 + \frac{d}{f}$ (image at $d$) or $M = \frac{d}{f}$ (image at infinity).
- **Compound Microscope:** Uses a short-focus objective and moderate-focus eyepiece. Magnifying power $M = \frac{q}{p}\left(1 + \frac{d}{f_e}\right) \approx \frac{L}{f_o}\left(1 + \frac{d}{f_e}\right)$.
- **Astronomical Telescope:** Objective has long focal length $f_o$ and large aperture; eyepiece has short focal length $f_e$. Magnifying power $M = \frac{f_o}{f_e}$; length $L = f_o + f_e$.
- **Spectrometer:** Consists of collimator, turntable with circular scale, and telescope. Used to analyze spectra, measure refractive indices, and determine wavelengths.
- **Speed of Light:** Michelson measured $c$ using an eight-sided rotating mirror: $c = 16 f d$. Accepted value: $c = 3.00 \times 10^8\text{ ms}^{-1}$.
- **Optical Fibre Principles:** Light propagates by total internal reflection and continuous refraction. Critical angle condition: $\sin\theta_c = \frac{n_2}{n_1}$.
- **Fibre Types:** Single-mode step-index ($5\ \mu\text{m}$ core, laser, zero modal dispersion), multi-mode step-index ($50\ \mu\text{m}$ core, high dispersion), multi-mode graded-index ($50\text{--}1000\ \mu\text{m}$ core, smooth refraction, low dispersion).
- **Telecommunication:** Digital modulation ($1\text{s}$ and $0\text{s}$), repeaters every $30\text{--}100\text{ km}$, photodiode detector.

---

## Conceptual Questions and Answers

### Question 10.1: What do you understand by linear magnification and angular magnification?
**Answer:**
1. **Linear Magnification ($M_{\text{linear}}$):**
   The ratio of the physical size (height) of the image to the physical size (height) of the object:
   $$M_{\text{linear}} = \frac{\text{Height of image } (I)}{\text{Height of object } (O)} = \frac{q}{p}$$
   It describes how many times physically larger the image is compared to the object.

2. **Angular Magnification ($M$ or Magnifying Power):**
   The ratio of the angle $\beta$ subtended at the eye by the image seen through the optical instrument to the angle $\alpha$ subtended by the object at the unaided eye when placed at the least distance of distinct vision ($d = 25\text{ cm}$):
   $$M = \frac{\beta}{\alpha}$$
   It describes how much larger an object appears visually to the observer.

---

### Question 10.2: Explain how a convex lens is used as a magnifier?
**Answer:**
A convex lens is used as a magnifier (simple microscope) by placing the object in front of the lens **inside its principal focus** ($p < f$):
1. Light rays diverging from the object pass through the lens and refract, emerging as a diverging beam.
2. When these diverging rays enter the eye, the brain traces them backward to form an erect, virtual, and enlarged image on the same side of the lens.
3. By adjusting the object's distance from the lens, the magnified virtual image is placed at the observer's near point ($d = 25\text{ cm}$), subtending a much larger visual angle $\beta$ at the eye than the object could unaided, thus enabling the eye to see fine details clearly.

---

### Question 10.3: Explain the difference between angular magnification and resolving power of an optical instrument. What limits the magnification of an optical instrument?
**Answer:**
1. **Difference:**
   - **Angular Magnification:** Measures how much larger an object appears by increasing the visual angle subtended at the eye.
   - **Resolving Power:** Measures the ability of an instrument to separate and show distinctly two closely spaced point objects or structural details.
2. **What Limits Magnification?**
   Magnification cannot be increased indefinitely due to two fundamental physical factors:
   - **Diffraction of Light:** Due to the wave nature of light, light passing through an optical aperture produces diffraction discs (Airy discs). If magnification is increased beyond the resolving limit, the image simply becomes a blurred, indistinct diffraction pattern (**empty magnification**).
   - **Optical Aberrations:** Spherical and chromatic aberrations in practical glass lenses blur the image at high curvatures.

---

### Question 10.4: Why would it be advantageous to use blue light with a compound microscope?
**Answer:**
The resolving power of an optical microscope is inversely proportional to the wavelength $\lambda$ of light used:
$$R = \frac{1}{\alpha_{\min}} = \frac{D}{1.22 \lambda}$$
- Blue light has a significantly shorter wavelength ($\lambda_{\text{blue}} \approx 400\text{--}450\text{ nm}$) compared to other visible light colors (e.g., red light $\lambda_{\text{red}} \approx 650\text{--}700\text{ nm}$).
- Shorter wavelength produces less diffraction broadening, reducing the size of the diffraction spots.
- Consequently, using blue light yields **higher resolving power**, enabling the microscope to reveal much finer microscopic details.

---

### Question 10.5 (Titled "Cheap microscope" in text): One can buy a cheap microscope for use by children. The images seen in such a microscope have coloured edges. Why is this so?
**Answer:**
The colored edges seen in cheap microscopes are caused by **chromatic aberration**:
1. A cheap microscope uses single, simple glass lenses rather than multi-element corrected lenses.
2. Glass has different refractive indices for different wavelengths of white light (dispersion). Violet and blue light refract more strongly and focus closer to the lens than red light.
3. Consequently, white light from an object is dispersed into a spectrum of colors, forming overlapping images of different colors at different focal positions. This produces objectionable colored fringes around the edges of the image.
*(High-quality microscopes eliminate this defect by using achromatic doublet lenses).*

---

### Question 10.6: If a person was looking through a telescope at the full moon, how would the appearance of the moon be changed by covering half of the objective lens?
**Answer:**
1. **The full image of the Moon will still be seen:** Every exposed portion of the objective lens collects light from all parts of the Moon and converges it to form the complete image.
2. **The brightness of the image will be reduced by half:** Because half of the objective's surface area is covered, the lens collects only $50\%$ of the light energy. The image remains completely formed and undistorted, but its intensity (brightness) is cut in half.

---

### Question 10.7: A magnifying glass gives a five times enlarged image at a distance of $25\text{ cm}$ from the lens. Find, by ray diagram, the focal length of the lens.
**Answer:**
- Magnification $M = 5$
- Image distance $q = -25\text{ cm}$ (virtual image)

Using linear magnification:
$$M = \frac{|q|}{p} \implies 5 = \frac{25}{p} \implies p = \frac{25}{5} = 5.0\text{ cm}$$

Using the lens formula:
$$\frac{1}{f} = \frac{1}{p} + \frac{1}{q} = \frac{1}{5} + \frac{1}{-25} = \frac{5 - 1}{25} = \frac{4}{25}$$
$$f = \frac{25}{4} = 6.25\text{ cm}$$

*(Ray Diagram Description: Draw principal axis. Place convex lens at origin. Draw an object of height $1\text{ cm}$ at $p = 5\text{ cm}$ inside focus $F = 6.25\text{ cm}$. Draw ray parallel to axis refracting through $F_2$, and ray through optical center continuing undeviated. Extend both rays backward to intersect at $q = -25\text{ cm}$, producing an erect virtual image of height $5\text{ cm}$).*

---

### Question 10.8: Multiple Choice Identification
**(i) The resolving power of a compound microscope depends on:**
- a. Length of the microscope.
- **b. The diameter of the objective lens.** *(Correct)*
- c. The diameter of the eyepiece.
- d. The position of an observer's eye with regard to the eye lens.
*(Reason: Resolving power $R = \frac{D}{1.22\lambda}$; it is directly proportional to the aperture/diameter of the objective).*

**(ii) The resolving power of an astronomical telescope depends on:**
- a. The focal length of the objective lens.
- b. The least distance of distinct vision of the observer.
- c. The focal length of the eye lens.
- **d. The diameter of the objective lens.** *(Correct)*
*(Reason: $R = \frac{D}{1.22\lambda}$; depends directly on the objective diameter $D$).*

---

### Question 10.9: Draw sketches showing different light paths through a single-mode and a multi-mode fibre. Why is the single-mode fibre preferred in telecommunications?
**Answer:**
1. **Light Paths:**
   - **Single-Mode Step-Index Fibre:** Has a narrow core ($5\ \mu\text{m}$). Light travels essentially along a single straight axial path with no multiple reflection angles.
   - **Multi-Mode Step-Index Fibre:** Has a wider core ($50\ \mu\text{m}$). Light travels via multiple zig-zag paths reflecting at different angles.
2. **Why Single-Mode is Preferred in Telecommunications:**
   - In multi-mode fibres, rays traveling along zig-zag paths take longer to reach the destination than axial rays, causing severe **modal dispersion (pulse spreading)** that distorts high-speed digital signals.
   - In single-mode fibres, only one propagation mode exists, **completely eliminating modal dispersion**. Light pulses retain their sharp, compact profiles over long distances, allowing transmission rates of tens of gigabits per second over hundreds of kilometers without degradation.

---

### Question 10.10: How is the light signal transmitted through the optical fibre?
**Answer:**
Light signals are transmitted through optical fibres by:
1. **Total Internal Reflection:** In step-index fibres, light entering within the acceptance cone strikes the core-cladding boundary at an angle of incidence greater than the critical angle ($\theta_1 > \theta_c$). It undergoes $100\%$ specular internal reflection without loss across the sidewall, zig-zagging continuously down the core.
2. **Continuous Refraction:** In graded-index fibres, the refractive index decreases smoothly outward from the central axis. Rays entering at an angle are continuously bent (refracted) in smooth curves back toward the core axis, propagating without striking the outer cladding boundary.
3. Information is modulated into rapid binary light pulses ($1$ for pulse on, $0$ for pulse off) using semiconductor lasers or LEDs, regenerated by repeaters, and detected by photodiodes at the receiver.

---

### Question 10.11: How is power lost in optical fibres through dispersion? Explain.
**Answer:**
In optical fibres, dispersion refers to the **temporal spreading or broadening of light pulses** as they propagate along the fibre:
1. **Mechanism:** In multi-mode step-index fibres, rays traveling at different angles follow paths of different lengths. Rays taking extreme zig-zag paths arrive significantly later than axial rays.
2. **Signal Degradation:** A sharp, narrow digital pulse spreads out in time as it travels. Over long distances, the spreading causes adjacent pulses to overlap and merge into one another (inter-symbol interference).
3. **Loss of Usable Power:** While the total photon energy may remain largely in the fibre, the peak power of individual pulses drops dramatically, causing them to fall below the detection threshold of the receiver, resulting in data transmission errors and unusable signal quality.

---

## Step-by-Step Solved Numerical Problems

### Problem 10.1
**Statement:** A converging lens of focal length $5.0\text{ cm}$ is used as a magnifying glass. If the near point of the observer is $25\text{ cm}$ and the lens is held close to the eye, calculate:
(i) the distance of the object from the lens
(ii) the angular magnification
What is the angular magnification when the final image is formed at infinity?

**Given Data:**
- Focal length of converging lens $f = +5.0\text{ cm}$
- Near point distance $d = 25\text{ cm}$
- Image distance for near-point viewing $q = -25\text{ cm}$ (virtual image)

**Formulae:**
1. Lens formula: $\frac{1}{f} = \frac{1}{p} + \frac{1}{q}$
2. Angular magnification at near point: $M = 1 + \frac{d}{f}$
3. Angular magnification at infinity: $M_\infty = \frac{d}{f}$

**Calculations:**
1. **Object distance $p$:**
   $$\frac{1}{p} = \frac{1}{f} - \frac{1}{q} = \frac{1}{5.0} - \frac{1}{-25} = \frac{1}{5.0} + \frac{1}{25} = \frac{5 + 1}{25} = \frac{6}{25}$$
   $$p = \frac{25}{6} = 4.167\text{ cm} \approx 4.2\text{ cm}$$

2. **Angular magnification $M$ at near point:**
   $$M = 1 + \frac{d}{f} = 1 + \frac{25\text{ cm}}{5.0\text{ cm}} = 1 + 5 = 6.0$$

3. **Angular magnification $M_\infty$ at infinity:**
   $$M_\infty = \frac{d}{f} = \frac{25\text{ cm}}{5.0\text{ cm}} = 5.0$$

**Answer:**
$$\text{(i) } p = 4.2\text{ cm}, \quad \text{(ii) } M = 6.0; \quad M_\infty = 5.0$$

---

### Problem 10.2
**Statement:** A telescope objective has focal length $96\text{ cm}$ and diameter $12\text{ cm}$. Calculate the focal length and minimum diameter of a simple eyepiece lens for use with the telescope, if the linear magnification required is $24$ times and all the light transmitted by the objective from a distant point on the telescope axis is to fall on the eyepiece.

**Given Data:**
- Focal length of objective $f_o = 96\text{ cm}$
- Diameter of objective $D_o = 12\text{ cm}$
- Magnification $M = 24$

**Formulae:**
1. Magnification of telescope: $M = \frac{f_o}{f_e} \implies f_e = \frac{f_o}{M}$
2. Beam geometry: Light entering the objective converges over distance $f_o$ to the focal point and diverges over distance $f_e$ to the eyepiece. For all light to be captured:
   $$\frac{D_o}{f_o} = \frac{D_e}{f_e} \implies D_e = D_o \frac{f_e}{f_o} = \frac{D_o}{M}$$

**Calculations:**
1. **Focal length of eyepiece $f_e$:**
   $$f_e = \frac{96\text{ cm}}{24} = 4.0\text{ cm}$$

2. **Diameter of eyepiece $D_e$:**
   $$D_e = \frac{D_o}{M} = \frac{12\text{ cm}}{24} = 0.50\text{ cm}$$

**Answer:**
$$f_e = 4.0\text{ cm}, \quad \text{diameter } = 0.50\text{ cm}$$

---

### Problem 10.3
**Statement:** A telescope is made of an objective of focal length $20\text{ cm}$ and an eyepiece of $5.0\text{ cm}$, both convex lenses. Find the angular magnification.

**Given Data:**
- Focal length of objective $f_o = 20\text{ cm}$
- Focal length of eyepiece $f_e = 5.0\text{ cm}$

**Formula:**
$$M = \frac{f_o}{f_e}$$

**Calculations:**
$$M = \frac{20\text{ cm}}{5.0\text{ cm}} = 4.0$$

**Answer:**
$$M = 4$$

---

### Problem 10.4
**Statement:** A simple astronomical telescope in normal adjustment has an objective of focal length $100\text{ cm}$ and an eyepiece of focal length $5.0\text{ cm}$. 
(i) Where is the final image formed? 
(ii) Calculate the angular magnification.

**Given Data:**
- Focal length of objective $f_o = 100\text{ cm}$
- Focal length of eyepiece $f_e = 5.0\text{ cm}$
- The telescope is in normal adjustment.

**Formulae:**
1. In normal adjustment, the intermediate image lies at the focal point of the eyepiece ($p_e = f_e$), so the emerging rays are parallel, forming the final image at **infinity**.
2. Angular magnification: $M = \frac{f_o}{f_e}$

**Calculations:**
1. Final image position: $\mathbf{\infty\text{ (infinity)}}$
2. Magnification:
   $$M = \frac{100\text{ cm}}{5.0\text{ cm}} = 20$$

**Answer:**
$$\text{(i) at infinity}, \quad \text{(ii) } M = 20$$

---

### Problem 10.5
**Statement:** A point object is placed on the axis of and $3.6\text{ cm}$ from a thin convex lens of focal length $3.0\text{ cm}$. A second thin convex lens of focal length $16.0\text{ cm}$ is placed coaxial with the first and $26.0\text{ cm}$ from it on the side away from the object. Find the position of the final image produced by the two lenses.

**Given Data:**
- For first lens:
  - Focal length $f_1 = +3.0\text{ cm}$
  - Object distance $p_1 = 3.6\text{ cm}$
- Distance between lenses $d_{\text{lens}} = 26.0\text{ cm}$
- For second lens:
  - Focal length $f_2 = +16.0\text{ cm}$

**Formula:**
Thin lens equation: $\frac{1}{f} = \frac{1}{p} + \frac{1}{q}$

**Calculations:**
1. **Image formed by first lens ($q_1$):**
   $$\frac{1}{q_1} = \frac{1}{f_1} - \frac{1}{p_1} = \frac{1}{3.0} - \frac{1}{3.6} = \frac{3.6 - 3.0}{3.0 \times 3.6} = \frac{0.6}{10.8} = \frac{1}{18}$$
   $$q_1 = 18.0\text{ cm}$$
   *(A real image is formed $18.0\text{ cm}$ to the right of the first lens).*

2. **Object distance for second lens ($p_2$):**
   The distance between the lenses is $26.0\text{ cm}$. Therefore, the distance from the intermediate image to the second lens is:
   $$p_2 = d_{\text{lens}} - q_1 = 26.0\text{ cm} - 18.0\text{ cm} = 8.0\text{ cm}$$

3. **Position of final image ($q_2$):**
   $$\frac{1}{q_2} = \frac{1}{f_2} - \frac{1}{p_2} = \frac{1}{16.0} - \frac{1}{8.0} = \frac{1 - 2}{16.0} = -\frac{1}{16.0}$$
   $$q_2 = -16.0\text{ cm}$$

The negative sign indicates that the final image is virtual and located $16\text{ cm}$ in front of the second lens (between the two lenses).

**Answer:**
$$16\text{ cm from the second lens (virtual image)}$$

---

### Problem 10.6
**Statement:** A compound microscope has lenses of focal length $1.0\text{ cm}$ and $3.0\text{ cm}$. An object is placed $1.2\text{ cm}$ from the object lens. If a virtual image is formed $25\text{ cm}$ from the eye, calculate the separation of the lenses and the magnification of the instrument.

**Given Data:**
- Focal length of objective $f_o = 1.0\text{ cm}$
- Focal length of eyepiece $f_e = 3.0\text{ cm}$
- Object distance from objective $p_o = 1.2\text{ cm}$
- Final image distance from eyepiece $q_e = -25\text{ cm}$

**Formulae:**
1. Objective image distance $q_o$: $\frac{1}{q_o} = \frac{1}{f_o} - \frac{1}{p_o}$
2. Eyepiece object distance $p_e$: $\frac{1}{p_e} = \frac{1}{f_e} - \frac{1}{q_e}$
3. Separation of lenses: $L = q_o + p_e$
4. Magnification: $M = M_o \times M_e = \left(\frac{q_o}{p_o}\right) \left(1 + \frac{d}{f_e}\right)$

**Calculations:**
1. **For the objective:**
   $$\frac{1}{q_o} = \frac{1}{1.0} - \frac{1}{1.2} = 1 - 0.8333 = 0.1667 = \frac{1}{6.0}$$
   $$q_o = 6.0\text{ cm}$$

2. **For the eyepiece:**
   $$\frac{1}{p_e} = \frac{1}{f_e} - \frac{1}{q_e} = \frac{1}{3.0} - \frac{1}{-25} = \frac{1}{3.0} + \frac{1}{25} = \frac{25 + 3}{75} = \frac{28}{75}$$
   $$p_e = \frac{75}{28} = 2.68\text{ cm}$$

3. **Separation of the lenses ($L$):**
   $$L = q_o + p_e = 6.0\text{ cm} + 2.68\text{ cm} = 8.68\text{ cm} \approx 8.7\text{ cm}$$

4. **Magnification ($M$):**
   $$M_o = \frac{q_o}{p_o} = \frac{6.0\text{ cm}}{1.2\text{ cm}} = 5.0$$
   $$M_e = 1 + \frac{d}{f_e} = 1 + \frac{25}{3.0} = 1 + 8.33 = 9.33$$
   $$M = M_o \times M_e = 5.0 \times 9.33 = 46.67 \approx 47$$

**Answer:**
$$\text{Separation } L = 8.7\text{ cm}, \quad \text{Magnification } M = 47$$

---

### Problem 10.7
**Statement:** Sodium light of wavelength $589\text{ nm}$ is used to view an object under a microscope. If the aperture of the objective is $0.90\text{ cm}$:
(i) find the limiting angle of resolution
(ii) using visible light of any wavelength, what is the maximum limit of resolution for this microscope?

**Given Data:**
- Wavelength for part (i): $\lambda_1 = 589\text{ nm} = 589 \times 10^{-9}\text{ m}$
- Aperture diameter of objective $D = 0.90\text{ cm} = 0.90 \times 10^{-2}\text{ m} = 9.0 \times 10^{-3}\text{ m}$
- For part (ii), shortest visible wavelength $\lambda_{\min} \approx 400\text{ nm} = 400 \times 10^{-9}\text{ m}$

**Formula:**
Rayleigh's criterion for limiting angle of resolution:
$$\alpha_{\min} = 1.22 \frac{\lambda}{D}$$

**Calculations:**
1. **Limiting angle of resolution for $\lambda = 589\text{ nm}$:**
   $$\alpha_{\min} = 1.22 \times \frac{589 \times 10^{-9}\text{ m}}{9.0 \times 10^{-3}\text{ m}} = 1.22 \times 6.5444 \times 10^{-5} = 7.984 \times 10^{-5}\text{ rad} \approx 8.0 \times 10^{-5}\text{ rad}$$

2. **Maximum limit of resolution using visible light (minimum $\alpha_{\min}$ with $\lambda = 400\text{ nm}$):**
   $$\alpha_{\min} = 1.22 \times \frac{400 \times 10^{-9}\text{ m}}{9.0 \times 10^{-3}\text{ m}} = 1.22 \times 4.4444 \times 10^{-5} = 5.42 \times 10^{-5}\text{ rad} \approx 5.4 \times 10^{-5}\text{ rad}$$

**Answer:**
$$\text{(i) } 8.0 \times 10^{-5}\text{ rad}, \quad \text{(ii) } 5.4 \times 10^{-5}\text{ rad}$$

---

### Problem 10.8
**Statement:** An astronomical telescope having a magnifying power of $5$ consists of two thin lenses $24\text{ cm}$ apart. Find the focal lengths of the lenses.

**Given Data:**
- Magnifying power $M = 5$
- Length of telescope in normal adjustment $L = 24\text{ cm}$

**Formulae:**
1. $M = \frac{f_o}{f_e} \implies f_o = 5 f_e$
2. $L = f_o + f_e$

**Calculations:**
$$L = 5 f_e + f_e = 6 f_e = 24\text{ cm}$$
$$f_e = \frac{24\text{ cm}}{6} = 4.0\text{ cm}$$
$$f_o = 5 \times f_e = 5 \times 4.0\text{ cm} = 20.0\text{ cm}$$

**Answer:**
$$f_o = 20\text{ cm}, \quad f_e = 4.0\text{ cm}$$

---

### Problem 10.9
**Statement:** A glass light pipe in air will totally internally reflect a light ray if its angle of incidence is at least $39^\circ$. What is the minimum angle for total internal reflection if the pipe is in water? (Refractive index of water $= 1.33$)

**Given Data:**
- Critical angle in air $\theta_{c1} = 39^\circ$
- Refractive index of air $n_0 = 1.00$
- Refractive index of water $n_w = 1.33$

**Formula:**
1. In air: $\sin\theta_{c1} = \frac{n_0}{n_g} = \frac{1}{n_g} \implies n_g = \frac{1}{\sin 39^\circ}$
2. In water: $\sin\theta_{c2} = \frac{n_w}{n_g}$

**Calculations:**
$$\sin(39^\circ) = 0.6293$$
$$n_g = \frac{1}{0.6293} = 1.589$$

Now, for glass-water interface:
$$\sin\theta_{c2} = \frac{n_w}{n_g} = \frac{1.33}{1.589} = 0.8370$$
$$\theta_{c2} = \sin^{-1}(0.8370) = 56.83^\circ \approx 57^\circ$$

**Answer:**
$$\theta_c = 57^\circ$$

---

### Problem 10.10
**Statement:** The refractive index of the core and cladding of an optical fibre are $1.6$ and $1.4$ respectively. Calculate:
(i) the critical angle for the interface
(ii) the maximum angle of incidence in the air of a ray which enters the fibre and is incident at the critical angle on the interface.

**Given Data:**
- Refractive index of core $n_1 = 1.6$
- Refractive index of cladding $n_2 = 1.4$
- Refractive index of air $n_0 = 1.0$

**Formulae:**
1. Critical angle at core-cladding interface:
   $$\sin\theta_c = \frac{n_2}{n_1}$$
2. Angle of refraction at entrance face: $\theta' = 90^\circ - \theta_c$
3. Snell's law at entrance:
   $$n_0 \sin\theta_0 = n_1 \sin\theta'$$

**Calculations:**
1. **Critical angle $\theta_c$:**
   $$\sin\theta_c = \frac{1.4}{1.6} = 0.875$$
   $$\theta_c = \sin^{-1}(0.875) = 61.04^\circ \approx 61^\circ$$

2. **Maximum angle of entry $\theta_0$:**
   $$\theta' = 90^\circ - 61.04^\circ = 28.96^\circ$$
   $$\sin\theta_0 = \frac{n_1}{n_0} \sin\theta' = 1.6 \times \sin(28.96^\circ)$$
   $$\sin(28.96^\circ) = 0.4842$$
   $$\sin\theta_0 = 1.6 \times 0.4842 = 0.7747$$
   $$\theta_0 = \sin^{-1}(0.7747) = 50.78^\circ \approx 51^\circ$$

**Answer:**
$$\text{(i) } \theta_c = 61^\circ, \quad \text{(ii) } \theta_0 = 51^\circ$$
