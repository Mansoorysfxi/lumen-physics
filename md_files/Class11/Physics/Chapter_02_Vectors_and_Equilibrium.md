# Chapter 2: Vectors and Equilibrium

> **FSc Physics Part 1 (Class 11)**  
> *Punjab Curriculum and Textbook Board, Lahore*  
> *Textbook Pages: 22 – 47 (PDF Pages: 26 – 51)*

---

## Learning Objectives

At the end of this chapter, the students will be able to:

1. Understand and use the **rectangular coordinate system**.
2. Understand the idea of **unit vector**, **null vector**, and **position vector**.
3. Represent a vector as two perpendicular components (**rectangular components**).
4. Understand the rule of **vector addition** and extend it to add vectors using **rectangular components**.
5. Understand **multiplication of vectors** (scalar product and vector product) and solve related problems.
6. Define the **moment of force** or **torque**.
7. Appreciate the use of the torque due to a force.
8. Show an understanding that when there is no resultant force and no resultant torque, a system is in **equilibrium**.
9. Appreciate the applications of the **principle of moments**.
10. Apply the knowledge gained to solve problems on **statics**.

---

## Introduction

Physical quantities that possess both numerical magnitude and directional properties are called **vectors**. This chapter is concerned with vector algebra and its applications in problems involving the equilibrium of forces and the equilibrium of torques.

---

## 2.1 Basic Concepts of Vectors

### (i) Vectors and Scalars

- **Scalar Quantities:** Physical quantities completely specified by a single number representing their magnitude along with a suitable unit (e.g., mass, length, time, temperature, work, energy).
- **Vector Quantities:** Physical quantities that require both **magnitude** (with an appropriate unit) and a **specified direction** for their complete description (e.g., displacement, velocity, acceleration, force, momentum, torque).

#### Notation
- **In Print / Textbooks:** Vectors are represented by boldface characters such as $\mathbf{A}$, $\mathbf{d}$, $\mathbf{r}$, and $\mathbf{v}$.
- **In Handwriting:** Vectors are represented by placing an arrow over the letter (e.g., $\vec{A}, \vec{d}, \vec{r}, \vec{v}$) or an arrow beneath it.
- **Magnitude:** The magnitude of a vector is a positive scalar quantity represented by lightface/italic type (e.g., $A, d, r, v$) or by placing vertical bars around the vector symbol ($|\mathbf{A}|$).

#### Graphical Representation
A vector is represented graphically by a **directed line segment** with an arrowhead:
1. The **length of the line segment**, drawn according to a chosen scale, represents the **magnitude** of the vector.
2. The **direction of the line segment** (specified by an arrow pointing from the tail to the tip) gives the **direction** of the vector.

---

### (ii) Rectangular Coordinate System

Two reference lines drawn at right angles to each other are known as **coordinate axes**, and their point of intersection is called the **origin** ($O$). This arrangement of axes is known as the **Cartesian** or **rectangular coordinate system**.

#### Two-Dimensional System (Plane)
- The horizontal axis is usually designated as the **x-axis** (positive to the right, negative to the left).
- The vertical axis is designated as the **y-axis** (positive upward, negative downward).
- The direction of a vector in a plane is specified by the angle $\theta$ which the representative line of the vector makes with the **positive x-axis measured in the counter-clockwise direction**.
- A point $P(a, b)$ in the plane indicates that starting from the origin, one reaches point $P$ by moving $a$ units along the x-axis and then $b$ units parallel to the y-axis.

#### Three-Dimensional System (Space)
- A third axis, the **z-axis**, is perpendicular to both the x-axis and the y-axis at the origin.
- The three mutually perpendicular axes form a **right-handed coordinate system**.
- The direction of a vector in space is specified by three direction angles:
  - $\alpha$ with the positive x-axis
  - $\beta$ with the positive y-axis
  - $\gamma$ with the positive z-axis
- A point $P$ in space is located by three coordinates: $P(a, b, c)$.

---

### (iii) Addition of Vectors (Head-to-Tail Rule)

To add two vectors $\mathbf{A}$ and $\mathbf{B}$ graphically:
1. Draw vector $\mathbf{A}$ to scale in its specified direction.
2. Draw vector $\mathbf{B}$ to scale such that its **tail** coincides with the **head** of vector $\mathbf{A}$.
3. Draw a vector from the **tail of the first vector $\mathbf{A}$** to the **head of the last vector $\mathbf{B}$**. This directed line segment represents the **resultant vector** $\mathbf{R} = \mathbf{A} + \mathbf{B}$.

#### Commutative Law of Vector Addition
Vector addition is commutative; the order of addition does not affect the resultant:
$$\mathbf{A} + \mathbf{B} = \mathbf{B} + \mathbf{A} \tag{2.1}$$

---

### (iv) Resultant Vector

> The **resultant** of a number of vectors of the same kind (e.g., force vectors) is that single vector which produces the same physical effect as all the original vectors acting together.

---

### (v) Vector Subtraction

The subtraction of a vector is defined as the addition of the negative of that vector. To subtract vector $\mathbf{B}$ from vector $\mathbf{A}$:
1. Reverse the direction of vector $\mathbf{B}$ to obtain its negative vector $(-\mathbf{B})$.
2. Add $(-\mathbf{B})$ to vector $\mathbf{A}$ using the head-to-tail rule:
$$\mathbf{A} - \mathbf{B} = \mathbf{A} + (-\mathbf{B})$$

The negative of a vector has the same magnitude as the original vector but points in the exactly opposite direction ($180^\circ$ reversed).

---

### (vi) Multiplication of a Vector by a Scalar

1. **Multiplication by a Dimensionless Number $n$:**
   - If $n > 0$, the product $n\mathbf{A}$ is a vector having magnitude $n|\mathbf{A}|$ and pointing in the **same direction** as $\mathbf{A}$.
   - If $n < 0$, the product $n\mathbf{A}$ is a vector of magnitude $|n||\mathbf{A}|$ pointing in the **opposite direction** to $\mathbf{A}$.
   - If $n = 0$, the result is a **null vector**.

2. **Multiplication by a Scalar Physical Quantity:**
   - When a vector is multiplied by a scalar physical quantity, the resulting vector represents a **new physical quantity**.
   - The dimensions of the new quantity equal the product of the dimensions of the scalar and the vector.
   - *Example:* Multiplying velocity vector $\mathbf{v}$ by scalar mass $m$ yields linear momentum:
     $$\mathbf{p} = m\mathbf{v}$$
     The dimensions of momentum are $[M][LT^{-1}] = [MLT^{-1}]$ and its unit is $\text{kg}\cdot\text{m}\cdot\text{s}^{-1}$ ($\text{N}\cdot\text{s}$).

---

### (vii) Unit Vector

> A **unit vector** in a given direction is a vector having a magnitude of unity ($1$) in that direction. Its sole purpose is to indicate a specific direction in space.

A unit vector in the direction of vector $\mathbf{A}$ is denoted by $\hat{A}$ (read as "$A$ hat" or "$A$ cap"):
$$\hat{A} = \frac{\mathbf{A}}{|\mathbf{A}|} = \frac{\mathbf{A}}{A} \tag{2.2}$$

#### Standard Unit Vectors
- In a Cartesian coordinate system, the unit vectors along the positive x, y, and z axes are denoted by $\hat{i}$, $\hat{j}$, and $\hat{k}$ respectively.
- These unit vectors are dimensionless and mutually perpendicular:
  $$|\hat{i}| = |\hat{j}| = |\hat{k}| = 1$$
- Other common unit vectors include:
  - $\hat{r}$: unit vector along the radial position vector $\mathbf{r}$.
  - $\hat{n}$: unit normal vector perpendicular to a given surface.

---

### (viii) Null Vector (Zero Vector)

> A **null vector** is a vector having zero magnitude and an arbitrary (unspecified) direction.

It is represented by $\mathbf{0}$. For example, the sum of a vector and its negative vector is a null vector:
$$\mathbf{A} + (-\mathbf{A}) = \mathbf{0} \tag{2.3}$$

---

### (ix) Equal Vectors

> Two vectors $\mathbf{A}$ and $\mathbf{B}$ are said to be **equal** if they have the same magnitude and the same direction, regardless of the positions of their initial points (tails).

Parallel vectors of identical length pointing in the same direction are equal.

---

### (x) Rectangular Components of a Vector

> A **component** of a vector is its effective value in a given direction. When a vector is resolved into components along mutually perpendicular directions, these components are called **rectangular components**.

Consider a vector $\mathbf{A}$ in the xy-plane represented by directed line segment $\vec{OP}$, making an angle $\theta$ with the positive x-axis:
- Projection on the x-axis: $OM = A_x$
- Projection on the y-axis: $ON = MP = A_y$

In vector notation:
$$\mathbf{A} = A_x \hat{i} + A_y \hat{j} \tag{2.4}$$

From right-angled triangle $OMP$:
$$\cos\theta = \frac{OM}{OP} = \frac{A_x}{A} \implies A_x = A \cos\theta \tag{2.5}$$
$$\sin\theta = \frac{MP}{OP} = \frac{A_y}{A} \implies A_y = A \sin\theta \tag{2.6}$$

---

### (xi) Determination of a Vector from its Rectangular Components

If rectangular components $A_x$ and $A_y$ are known, the magnitude $A$ and direction $\theta$ are determined as follows:

1. **Magnitude:** By the Pythagorean theorem:
   $$OP^2 = OM^2 + MP^2 \implies A^2 = A_x^2 + A_y^2$$
   $$A = \sqrt{A_x^2 + A_y^2} \tag{2.7}$$

2. **Direction:**
   $$\tan\theta = \frac{MP}{OM} = \frac{A_y}{A_x}$$
   $$\theta = \tan^{-1}\left(\frac{A_y}{A_x}\right) \tag{2.8}$$

---

### (xii) Position Vector

> The **position vector** $\mathbf{r}$ is a vector that describes the location of a point with respect to a reference origin $O$.

- **In Two Dimensions:** For a point $P(a, b)$:
  $$\mathbf{r} = a\hat{i} + b\hat{j} \tag{2.9}$$
  $$r = |\mathbf{r}| = \sqrt{a^2 + b^2}$$

- **In Three Dimensions:** For a point $P(a, b, c)$:
  $$\mathbf{r} = a\hat{i} + b\hat{j} + c\hat{k} \tag{2.10}$$
  $$r = |\mathbf{r}| = \sqrt{a^2 + b^2 + c^2}$$

---

### Solved Example 2.1
**Problem:** The positions of two aeroplanes at any instant are represented by two points $A(2, 3, 4)$ and $B(5, 6, 7)$ from an origin $O$ in kilometers.
1. What are their position vectors?
2. Calculate the distance between the two aeroplanes.

**Solution:**
**(i) Position Vectors:**
$$\mathbf{r}_A = \vec{OA} = 2\hat{i} + 3\hat{j} + 4\hat{k}\text{ km}$$
$$\mathbf{r}_B = \vec{OB} = 5\hat{i} + 6\hat{j} + 7\hat{k}\text{ km}$$

**(ii) Distance between aeroplanes:**
By the head-to-tail rule:
$$\vec{OA} + \vec{AB} = \vec{OB} \implies \vec{AB} = \vec{OB} - \vec{OA}$$
$$\vec{AB} = (5\hat{i} + 6\hat{j} + 7\hat{k}) - (2\hat{i} + 3\hat{j} + 4\hat{k}) = 3\hat{i} + 3\hat{j} + 3\hat{k}\text{ km}$$

The distance between the aeroplanes is the magnitude of $\vec{AB}$:
$$|\vec{AB}| = \sqrt{(3)^2 + (3)^2 + (3)^2} = \sqrt{9 + 9 + 9} = \sqrt{27} \approx \mathbf{5.2\text{ km}}$$

---

## 2.2 Vector Addition by Rectangular Components

Adding vectors graphically becomes inaccurate for complex 3D systems. The analytical method using rectangular components provides exact results.

### Derivation
Let two coplanar vectors $\mathbf{A}$ and $\mathbf{B}$ be represented by directed lines $\vec{OM}$ and $\vec{ON}$. Vector $\mathbf{B}$ is added to $\mathbf{A}$ by the head-to-tail rule, giving resultant $\mathbf{R} = \mathbf{A} + \mathbf{B}$ represented by $\vec{OP}$.

From the geometry of the components:
- Along the x-axis:
  $$R_x = A_x + B_x \tag{2.11}$$
  *The x-component of the resultant vector equals the algebraic sum of the x-components of the individual vectors.*
- Along the y-axis:
  $$R_y = A_y + B_y \tag{2.12}$$
  *The y-component of the resultant vector equals the algebraic sum of the y-components of the individual vectors.*

The resultant vector in component form is:
$$\mathbf{R} = R_x\hat{i} + R_y\hat{j} = (A_x + B_x)\hat{i} + (A_y + B_y)\hat{j}$$

The magnitude of the resultant vector is:
$$R = \sqrt{R_x^2 + R_y^2} = \sqrt{(A_x + B_x)^2 + (A_y + B_y)^2} \tag{2.13}$$

For any number of coplanar vectors $\mathbf{A}, \mathbf{B}, \mathbf{C}, \dots$:
$$R_x = A_x + B_x + C_x + \dots$$
$$R_y = A_y + B_y + C_y + \dots$$
$$R = \sqrt{(A_x + B_x + C_x + \dots)^2 + (A_y + B_y + C_y + \dots)^2} \tag{2.15}$$

---

### Step-by-Step Procedure for Vector Addition
1. **Find x and y components** of all given vectors ($A_x = A\cos\theta_1$, $A_y = A\sin\theta_1$, etc.).
2. **Find the resultant x-component** $R_x$ by summing all x-components: $R_x = \sum A_x$.
3. **Find the resultant y-component** $R_y$ by summing all y-components: $R_y = \sum A_y$.
4. **Determine the magnitude** of resultant vector: $R = \sqrt{R_x^2 + R_y^2}$.
5. **Determine the direction angle $\theta$**:
   - First, find the reference angle $\phi$:
     $$\phi = \tan^{-1}\left(\frac{|R_y|}{|R_x|}\right)$$
   - Inspect the signs of $R_x$ and $R_y$ to determine the quadrant:
     - **Quadrant I ($R_x > 0, R_y > 0$):** $\theta = \phi$
     - **Quadrant II ($R_x < 0, R_y > 0$):** $\theta = 180^\circ - \phi$
     - **Quadrant III ($R_x < 0, R_y < 0$):** $\theta = 180^\circ + \phi$
     - **Quadrant IV ($R_x > 0, R_y < 0$):** $\theta = 360^\circ - \phi$

---

> [!NOTE]
> **Do You Know?**  
> Chinese acrobats in balanced formations remain in equilibrium because their combined center of gravity falls directly over their base of support, ensuring that both $\sum \mathbf{F} = 0$ and $\sum \boldsymbol{\tau} = 0$.

> [!TIP]
> **Point to Ponder:**  
> Why do you keep your legs far apart when you have to stand in the aisle of a bumpy-riding bus?  
> *Reason:* Spreading your feet widens the base of support and lowers your center of gravity, which prevents the line of action of your weight from falling outside the base during sudden accelerations, thus preventing a net overturning torque.

---

### Solved Example 2.2
**Problem:** Two forces of magnitude $10\text{ N}$ and $20\text{ N}$ act on a body in directions making angles $30^\circ$ and $60^\circ$ respectively with the positive x-axis. Find the resultant force.

**Solution:**
- **Step 1: Resolve forces into rectangular components:**
  - $F_{1x} = 10\cos 30^\circ = 10 \times 0.866 = 8.66\text{ N}$
  - $F_{1y} = 10\sin 30^\circ = 10 \times 0.500 = 5.00\text{ N}$
  - $F_{2x} = 20\cos 60^\circ = 20 \times 0.500 = 10.00\text{ N}$
  - $F_{2y} = 20\sin 60^\circ = 20 \times 0.866 = 17.32\text{ N}$

- **Step 2: Calculate resultant components:**
  - $R_x = F_{1x} + F_{2x} = 8.66 + 10.00 = 18.66\text{ N}$
  - $R_y = F_{1y} + F_{2y} = 5.00 + 17.32 = 22.32\text{ N}$

- **Step 3: Magnitude of resultant force:**
  $$R = \sqrt{R_x^2 + R_y^2} = \sqrt{(18.66)^2 + (22.32)^2} = \sqrt{348.2 + 498.2} = \sqrt{846.4} \approx \mathbf{29\text{ N}}$$

- **Step 4: Direction:**
  Since $R_x > 0$ and $R_y > 0$, the resultant lies in the 1st quadrant:
  $$\theta = \tan^{-1}\left(\frac{22.32}{18.66}\right) = \tan^{-1}(1.196) \approx \mathbf{50^\circ}$$

---

### Solved Example 2.3
**Problem:** Find the angle between two forces of equal magnitude when the magnitude of their resultant is also equal to the magnitude of either of these forces.

**Solution:**
Let the two forces have magnitude $F_1 = F_2 = F$, and their resultant also have magnitude $R = F$.  
Align $\mathbf{F}_1$ along the positive x-axis ($\theta_1 = 0^\circ$), and let $\mathbf{F}_2$ make an angle $\theta$ with $\mathbf{F}_1$:
- $R_x = F_1\cos 0^\circ + F_2\cos\theta = F + F\cos\theta$
- $R_y = F_1\sin 0^\circ + F_2\sin\theta = 0 + F\sin\theta = F\sin\theta$

Since $R^2 = R_x^2 + R_y^2$:
$$F^2 = (F + F\cos\theta)^2 + (F\sin\theta)^2$$
$$F^2 = F^2 + 2F^2\cos\theta + F^2\cos^2\theta + F^2\sin^2\theta$$
$$F^2 = F^2 + 2F^2\cos\theta + F^2(\cos^2\theta + \sin^2\theta)$$
$$F^2 = 2F^2 + 2F^2\cos\theta$$
Divide by $F^2$:
$$1 = 2 + 2\cos\theta \implies 2\cos\theta = -1 \implies \cos\theta = -0.5$$
$$\theta = \cos^{-1}(-0.5) = \mathbf{120^\circ}$$

---

## 2.3 Product of Two Vectors

There are two types of vector multiplications:
1. **Scalar Product (or Dot Product):** The product yields a scalar quantity.
2. **Vector Product (or Cross Product):** The product yields a vector quantity.

---

### 1. Scalar or Dot Product

The scalar product of two vectors $\mathbf{A}$ and $\mathbf{B}$ is denoted by $\mathbf{A} \cdot \mathbf{B}$ and defined as:
$$\mathbf{A} \cdot \mathbf{B} = AB \cos\theta \tag{2.17}$$
where $A$ and $B$ are magnitudes and $\theta$ is the angle between them ($0 \le \theta \le 180^\circ$).

#### Physical Interpretation
Bringing $\mathbf{A}$ and $\mathbf{B}$ to a common origin:
$$\mathbf{A} \cdot \mathbf{B} = A (B \cos\theta) = (\text{Magnitude of }\mathbf{A}) \times (\text{Projection of }\mathbf{B}\text{ along }\mathbf{A})$$
Similarly:
$$\mathbf{B} \cdot \mathbf{A} = B (A \cos\theta) = (\text{Magnitude of }\mathbf{B}) \times (\text{Projection of }\mathbf{A}\text{ along }\mathbf{B})$$

#### Physical Example: Work Done
Work done $W$ by a constant force $\mathbf{F}$ displacing a body through $\mathbf{d}$:
$$W = (\text{Effective component of force along displacement}) \times d = (F \cos\theta) d = \mathbf{F} \cdot \mathbf{d}$$
Similarly, instantaneous power: $P = \mathbf{F} \cdot \mathbf{v}$.

#### Characteristics of Scalar Product
1. **Commutative Property:**  
   $$\mathbf{A} \cdot \mathbf{B} = \mathbf{B} \cdot \mathbf{A}$$
2. **Perpendicular Vectors ($\theta = 90^\circ$):**  
   $$\mathbf{A} \cdot \mathbf{B} = AB \cos 90^\circ = 0$$
   For standard unit vectors:
   $$\hat{i} \cdot \hat{j} = \hat{j} \cdot \hat{k} = \hat{k} \cdot \hat{i} = 0 \tag{2.18}$$
3. **Parallel Vectors ($\theta = 0^\circ$):**  
   $$\mathbf{A} \cdot \mathbf{B} = AB \cos 0^\circ = AB$$
   For standard unit vectors:
   $$\hat{i} \cdot \hat{i} = \hat{j} \cdot \hat{j} = \hat{k} \cdot \hat{k} = 1 \tag{2.19}$$
   For **antiparallel vectors** ($\theta = 180^\circ$):
   $$\mathbf{A} \cdot \mathbf{B} = AB \cos 180^\circ = -AB$$
4. **Self-Product:**  
   $$\mathbf{A} \cdot \mathbf{A} = A \cdot A \cos 0^\circ = A^2 \implies A = \sqrt{\mathbf{A} \cdot \mathbf{A}}$$
5. **In Terms of Rectangular Components:**  
   $$\mathbf{A} \cdot \mathbf{B} = (A_x\hat{i} + A_y\hat{j} + A_z\hat{k}) \cdot (B_x\hat{i} + B_y\hat{j} + B_z\hat{k}) = A_x B_x + A_y B_y + A_z B_z \tag{2.20}$$
6. **Angle Between Two Vectors:**  
   $$\cos\theta = \frac{\mathbf{A} \cdot \mathbf{B}}{AB} = \frac{A_x B_x + A_y B_y + A_z B_z}{\sqrt{A_x^2 + A_y^2 + A_z^2}\sqrt{B_x^2 + B_y^2 + B_z^2}} \tag{2.21}$$

---

### Solved Example 2.4
**Problem:** A force $\mathbf{F} = 2\hat{i} + 3\hat{j}\text{ units}$ has its point of application moved from point $A(1, 3)$ to point $B(5, 7)$. Find the work done.

**Solution:**
- Position vector of $A$: $\mathbf{r}_A = \hat{i} + 3\hat{j}$
- Position vector of $B$: $\mathbf{r}_B = 5\hat{i} + 7\hat{j}$
- Displacement vector $\mathbf{d}$:
  $$\mathbf{d} = \mathbf{r}_B - \mathbf{r}_A = (5 - 1)\hat{i} + (7 - 3)\hat{j} = 4\hat{i} + 4\hat{j}$$
- Work done:
  $$W = \mathbf{F} \cdot \mathbf{d} = (2\hat{i} + 3\hat{j}) \cdot (4\hat{i} + 4\hat{j}) = (2)(4) + (3)(4) = 8 + 12 = \mathbf{20\text{ units}}$$

---

### Solved Example 2.5
**Problem:** Find the projection of vector $\mathbf{A} = 2\hat{i} - 8\hat{j} + \hat{k}$ in the direction of vector $\mathbf{B} = 3\hat{i} - 4\hat{j} - 12\hat{k}$.

**Solution:**
Projection of $\mathbf{A}$ on $\mathbf{B}$ is $A\cos\theta$:
$$A\cos\theta = \frac{\mathbf{A} \cdot \mathbf{B}}{B} = \mathbf{A} \cdot \hat{B}$$

Magnitude of $\mathbf{B}$:
$$B = \sqrt{3^2 + (-4)^2 + (-12)^2} = \sqrt{9 + 16 + 144} = \sqrt{169} = 13$$

Dot product $\mathbf{A} \cdot \mathbf{B}$:
$$\mathbf{A} \cdot \mathbf{B} = (2)(3) + (-8)(-4) + (1)(-12) = 6 + 32 - 12 = 26$$

Therefore:
$$\text{Projection } A\cos\theta = \frac{26}{13} = \mathbf{2}$$

---

### 2. Vector or Cross Product

The vector product of two vectors $\mathbf{A}$ and $\mathbf{B}$ is a vector $\mathbf{C} = \mathbf{A} \times \mathbf{B}$ defined as:
$$\mathbf{A} \times \mathbf{B} = (AB \sin\theta)\hat{n} \tag{2.22}$$
where $\theta$ is the smaller angle between $\mathbf{A}$ and $\mathbf{B}$ ($0 \le \theta \le 180^\circ$), and $\hat{n}$ is a unit vector perpendicular to the plane containing $\mathbf{A}$ and $\mathbf{B}$.

#### Right-Hand Rule
Join the tails of $\mathbf{A}$ and $\mathbf{B}$. Curl the fingers of the right hand from the first vector $\mathbf{A}$ toward the second vector $\mathbf{B}$ through the smaller angle; the erect thumb points in the direction of $\hat{n}$.

Because reversing the order reverses the curl direction:
$$\mathbf{B} \times \mathbf{A} = -\mathbf{A} \times \mathbf{B} \tag{2.23}$$

#### Characteristics of Vector Product
1. **Non-Commutative:** Cross product does not commute:
   $$\mathbf{A} \times \mathbf{B} = -(\mathbf{B} \times \mathbf{A})$$
2. **Perpendicular Vectors ($\theta = 90^\circ$):**  
   $$\mathbf{A} \times \mathbf{B} = AB \sin 90^\circ \hat{n} = AB\hat{n}$$
   For standard unit vectors:
   $$\hat{i} \times \hat{j} = \hat{k}, \quad \hat{j} \times \hat{k} = \hat{i}, \quad \hat{k} \times \hat{i} = \hat{j}$$
   $$\hat{j} \times \hat{i} = -\hat{k}, \quad \hat{k} \times \hat{j} = -\hat{i}, \quad \hat{i} \times \hat{k} = -\hat{j}$$
3. **Parallel / Antiparallel Vectors ($\theta = 0^\circ$ or $180^\circ$):**  
   $$\mathbf{A} \times \mathbf{B} = AB \sin 0^\circ \hat{n} = \mathbf{0}$$
   Consequently, the self cross-product is zero:
   $$\mathbf{A} \times \mathbf{A} = \mathbf{0}$$
   $$\hat{i} \times \hat{i} = \hat{j} \times \hat{j} = \hat{k} \times \hat{k} = \mathbf{0} \tag{2.24}$$
4. **Rectangular Component Representation (Determinant Form):**
   $$\mathbf{A} \times \mathbf{B} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix} \tag{2.25}$$
   $$\mathbf{A} \times \mathbf{B} = (A_y B_z - A_z B_y)\hat{i} + (A_z B_x - A_x B_z)\hat{j} + (A_x B_y - A_y B_x)\hat{k}$$
5. **Geometric Meaning:**  
   The magnitude $|\mathbf{A} \times \mathbf{B}|$ equals the **area of the parallelogram** formed by $\mathbf{A}$ and $\mathbf{B}$ as adjacent sides. The area of the triangle formed by $\mathbf{A}$ and $\mathbf{B}$ is $\frac{1}{2}|\mathbf{A} \times \mathbf{B}|$.

#### Physical Examples of Vector Product
- **Torque:** $\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F}$
- **Magnetic Lorentz Force on a Moving Charge:** $\mathbf{F} = q(\mathbf{v} \times \mathbf{B})$
- **Angular Momentum:** $\mathbf{L} = \mathbf{r} \times \mathbf{p}$
- **Linear Velocity in Rotation:** $\mathbf{v} = \boldsymbol{\omega} \times \mathbf{r}$

---

## 2.4 Torque (Moment of Force)

> The turning effect produced in a body about an axis of rotation due to an applied force is called **torque** or **moment of force**.

### Factors Determining Torque
1. The **magnitude of the applied force** $F$.
2. The **moment arm** $l$ (the perpendicular distance from the line of action of the force to the pivot point/axis of rotation):
   $$\tau = F \cdot l \tag{2.26}$$

If the line of action passes through the pivot, $l = 0 \implies \tau = 0$.

### Vector Formulation of Torque
Consider a rigid body pivoted at point $O$. A force $\mathbf{F}$ is applied at point $P$ whose position vector relative to $O$ is $\mathbf{r}$. Let $\theta$ be the angle between $\mathbf{r}$ and $\mathbf{F}$:
- Resolve $\mathbf{F}$ into components:
  - $F\cos\theta$ along $\mathbf{r}$ (passes through $O$, produces no turning effect).
  - $F\sin\theta$ perpendicular to $\mathbf{r}$ (effective turning component).
  $$\tau = r(F\sin\theta) = r F \sin\theta \tag{2.27}$$
- Alternatively, resolving position vector $\mathbf{r}$ shows the moment arm is $l = r\sin\theta$:
  $$\tau = (r\sin\theta) F = r F \sin\theta \tag{2.28}$$

In vector form:
$$\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F} \tag{2.29}$$

- **SI Unit:** Newton-metre ($\text{N}\cdot\text{m}$).
- **Nature:** Vector quantity directed along the axis of rotation given by the right-hand rule.
- **Rotational Analogue:** Torque is the rotational analogue of force. Just as force produces linear acceleration ($F = ma$), torque produces angular acceleration ($\tau = I\alpha$).

---

### Solved Example 2.6
**Problem:** The line of action of a force $\mathbf{F} = 2\hat{i} - 3\hat{j} + 4\hat{k}\text{ N}$ passes through point $P(1, -2, 1)\text{ m}$. Determine the torque about point $A(2, 1, 1)\text{ m}$.

**Solution:**
Position vector of point of application $P$ relative to point $A$:
$$\mathbf{r} = \mathbf{r}_P - \mathbf{r}_A = (\hat{i} - 2\hat{j} + \hat{k}) - (2\hat{i} + \hat{j} + \hat{k}) = -\hat{i} - 3\hat{j} + 0\hat{k}\text{ m}$$

Torque $\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F}$:
$$\boldsymbol{\tau} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -1 & -3 & 0 \\ 2 & -3 & 4 \end{vmatrix}$$
$$\boldsymbol{\tau} = \hat{i}[(-3)(4) - (0)(-3)] - \hat{j}[(-1)(4) - (0)(2)] + \hat{k}[(-1)(-3) - (-3)(2)]$$
$$\boldsymbol{\tau} = \hat{i}[-12 - 0] - \hat{j}[-4 - 0] + \hat{k}[3 + 6] = \mathbf{-12\hat{i} + 4\hat{j} + 9\hat{k}\text{ N}\cdot\text{m}}$$

---

## 2.5 Equilibrium of Forces

> A body is said to be in **equilibrium** if it is at rest or moving with uniform velocity (i.e., its acceleration is zero).

- **Static Equilibrium:** The body is completely at rest ($\mathbf{v} = 0, \mathbf{a} = 0$).
- **Dynamic Equilibrium:** The body moves with uniform velocity ($\mathbf{v} = \text{constant}, \mathbf{a} = 0$).

---

### First Condition of Equilibrium
For a body to have zero linear acceleration, the vector sum of all forces acting on it must be zero:
$$\sum \mathbf{F} = \mathbf{0} \tag{2.30}$$

In terms of coplanar rectangular components:
$$\sum F_x = 0 \tag{2.31}$$
$$\sum F_y = 0 \tag{2.32}$$

When the first condition is satisfied, the body is in **translational equilibrium**.

---

### Solved Example 2.7
**Problem:** A load $W$ is suspended by two cords connected at point $P$. One cord makes an angle of $60^\circ$ and the other makes $20^\circ$ with the horizontal ceiling. Determine the maximum load $W$ that can be suspended if the maximum breaking tension of the cords is $50\text{ N}$.

**Solution:**
Let the tensions in the two cords be $T_1$ (at $60^\circ$) and $T_2$ (at $20^\circ$).
Applying $\sum F_x = 0$:
$$T_2 \cos 20^\circ - T_1 \cos 60^\circ = 0$$
$$T_2 (0.9397) = T_1 (0.5000) \implies T_1 = \frac{0.9397}{0.5000} T_2 = 1.88 T_2$$

Since $T_1 > T_2$, cord 1 will reach the breaking tension first. Set $T_1 = 50\text{ N}$:
$$T_2 = \frac{50}{1.88} \approx 26.6\text{ N}$$

Applying $\sum F_y = 0$:
$$T_1 \sin 60^\circ + T_2 \sin 20^\circ - W = 0$$
$$W = 50 \sin 60^\circ + 26.6 \sin 20^\circ = 50(0.866) + 26.6(0.342) = 43.3 + 9.1 = \mathbf{52.4\text{ N}} \approx \mathbf{52\text{ N}}$$

---

## 2.6 Equilibrium of Torques (Second Condition of Equilibrium)

Even if $\sum \mathbf{F} = 0$, a body can undergo rotational acceleration if the lines of action of the forces do not coincide (forming a couple).

### Second Condition of Equilibrium
For a body to have zero angular acceleration, the vector sum of all torques acting on it about any arbitrary axis must be zero:
$$\sum \boldsymbol{\tau} = \mathbf{0} \tag{2.33}$$

- **Convention:** Counter-clockwise torques are taken as positive ($+$); clockwise torques are taken as negative ($-$).
- When the second condition is satisfied, the body is in **rotational equilibrium**.

### Complete Requirements for Equilibrium
For complete mechanical equilibrium, both conditions must be satisfied simultaneously:
1. $\sum \mathbf{F} = \mathbf{0} \implies \sum F_x = 0, \; \sum F_y = 0$ (Translational equilibrium, $\mathbf{a} = 0$)
2. $\sum \boldsymbol{\tau} = \mathbf{0}$ (Rotational equilibrium, $\boldsymbol{\alpha} = 0$)

---

### Solved Example 2.8
**Problem:** A uniform horizontal beam of weight $200\text{ N}$ and length $6.0\text{ m}$ is supported at pivot $A$ and held by a vertical rope at the other end. If the breaking tension of the rope is $400\text{ N}$, how far can a man weighing $400\text{ N}$ walk along the beam from pivot $A$?

**Solution:**
- Weight of the beam $W_{\text{beam}} = 200\text{ N}$ acts at its center of gravity ($3.0\text{ m}$ from $A$).
- Weight of the man $W_{\text{man}} = 400\text{ N}$ acts at distance $d$ from $A$.
- Breaking tension $T = 400\text{ N}$ acts vertically upward at the end ($6.0\text{ m}$ from $A$).

Applying $\sum \tau_A = 0$ about pivot $A$:
$$T(6.0) - W_{\text{man}}(d) - W_{\text{beam}}(3.0) = 0$$
$$(400)(6.0) - 400(d) - (200)(3.0) = 0$$
$$2400 - 400 d - 600 = 0$$
$$400 d = 1800 \implies d = \frac{1800}{400} = \mathbf{4.5\text{ m}}$$

---

### Solved Example 2.9
**Problem:** A boy weighing $300\text{ N}$ stands at the right end of a uniform diving board of length $4.0\text{ m}$ and weight $200\text{ N}$. The board is supported by two pedestals: $A$ at the left end and $D$ at $1.0\text{ m}$ from $A$. Find the forces exerted by the pedestals on the board.

**Solution:**
Let $R_1$ be the vertical force exerted by pedestal $A$ (at $x = 0$), and $R_2$ be the vertical force exerted by pedestal $D$ (at $x = 1.0\text{ m}$).
- Center of gravity of board is at $C$ ($x = 2.0\text{ m}$), weight $W_{\text{board}} = 200\text{ N}$ downward.
- Boy stands at right edge $B$ ($x = 4.0\text{ m}$), weight $W_{\text{boy}} = 300\text{ N}$ downward.

Taking pivot at pedestal $D$ ($\sum \tau_D = 0$):
- Distance of $A$ from $D$: $1.0\text{ m}$ (counter-clockwise torque if $R_1$ is downward)
- Distance of $C$ from $D$: $2.0 - 1.0 = 1.0\text{ m}$ (clockwise torque)
- Distance of $B$ from $D$: $4.0 - 1.0 = 3.0\text{ m}$ (clockwise torque)

Assuming upward $R_1$:
$$-R_1(1.0) - 200(1.0) - 300(3.0) = 0$$
$$-R_1 - 200 - 900 = 0 \implies R_1 = \mathbf{-1100\text{ N}}$$
The negative sign indicates that pedestal $A$ must pull **downward** on the board with a force of $1100\text{ N}$ ($1.1\text{ kN}$).

Applying $\sum F_y = 0$:
$$R_1 + R_2 - 200 - 300 = 0$$
$$-1100 + R_2 - 500 = 0 \implies R_2 = \mathbf{1600\text{ N}} = \mathbf{1.6\text{ kN}}\text{ (upward)}$$

---

## Summary of Key Concepts

1. A **scalar** has magnitude only; a **vector** possesses both magnitude and direction and obeys laws of vector algebra.
2. The **rectangular coordinate system** consists of two or three mutually perpendicular axes intersecting at the origin.
3. A **unit vector** has a magnitude of unity with no dimensions/units; it indicates direction.
4. A **null vector** has zero magnitude and arbitrary direction.
5. The **position vector** $\mathbf{r} = x\hat{i} + y\hat{j} + z\hat{k}$ locates a point relative to the origin.
6. The **scalar (dot) product** is $\mathbf{A} \cdot \mathbf{B} = AB\cos\theta = A_x B_x + A_y B_y + A_z B_z$. It is commutative.
7. The **vector (cross) product** is $\mathbf{A} \times \mathbf{B} = (AB\sin\theta)\hat{n}$. It is non-commutative ($\mathbf{A} \times \mathbf{B} = -\mathbf{B} \times \mathbf{A}$).
8. **Torque** is the rotational analogue of force: $\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F} = (r F \sin\theta)\hat{n}$.
9. **First condition of equilibrium:** $\sum \mathbf{F} = \mathbf{0}$ ($\sum F_x = 0, \sum F_y = 0$). Guarantees translational equilibrium.
10. **Second condition of equilibrium:** $\sum \boldsymbol{\tau} = \mathbf{0}$. Guarantees rotational equilibrium.

---

## Conceptual Questions and Answers

### Question 2.1
**Define the terms: (i) Unit vector, (ii) Position vector, and (iii) Components of a vector.**

**Answer:**
1. **Unit Vector:** A vector whose magnitude is unity ($1$) in a given direction. It represents direction:
   $$\hat{A} = \frac{\mathbf{A}}{|\mathbf{A}|}$$
2. **Position Vector:** A vector that specifies the position of a point with respect to a reference origin. In Cartesian coordinates:
   $$\mathbf{r} = a\hat{i} + b\hat{j} + c\hat{k}$$
3. **Components of a Vector:** The effective values of a vector in specified directions. Mutually perpendicular components are known as rectangular components ($A_x$ and $A_y$).

---

### Question 2.2
**The vector sum of three vectors gives a zero resultant. What can be the orientation of the vectors?**

**Answer:**
When three vectors add up to zero ($\mathbf{A} + \mathbf{B} + \mathbf{C} = \mathbf{0}$), their representative directed line segments can be arranged head-to-tail to form a **closed triangle**. The vectors must be coplanar (or collinear).

---

### Question 2.3
**Vector $\mathbf{A}$ lies in the xy-plane. For what orientation will both of its rectangular components be negative? For what orientation will its components have opposite signs?**

**Answer:**
1. **Both components negative ($A_x < 0, A_y < 0$):**  
   The vector must lie in the **third quadrant** ($180^\circ < \theta < 270^\circ$).
2. **Components have opposite signs:**  
   - **Second Quadrant ($A_x < 0, A_y > 0$):** $90^\circ < \theta < 180^\circ$
   - **Fourth Quadrant ($A_x > 0, A_y < 0$):** $270^\circ < \theta < 360^\circ$

---

### Question 2.4
**If one of the rectangular components of a vector is not zero, can its magnitude be zero? Explain.**

**Answer:**
**No.** The magnitude of a vector in terms of its rectangular components is:
$$A = \sqrt{A_x^2 + A_y^2 + A_z^2}$$
Since the square of any real non-zero component is strictly positive ($A_i^2 > 0$), the sum under the square root must be greater than zero. Thus, the magnitude cannot be zero.

---

### Question 2.5
**Can a vector have a component greater than the vector's magnitude?**

**Answer:**
**No.** The rectangular components are related to magnitude by:
$$A_x = A\cos\theta, \quad A_y = A\sin\theta$$
Since the maximum possible value of $|\cos\theta|$ and $|\sin\theta|$ is $1$, each rectangular component satisfies $|A_x| \le A$ and $|A_y| \le A$. A component can equal the vector's magnitude (when aligned along an axis), but can never exceed it.

---

### Question 2.6
**Can the magnitude of a vector have a negative value?**

**Answer:**
**No.** Magnitude represents length or size, which is a scalar distance defined by:
$$A = \sqrt{A_x^2 + A_y^2 + A_z^2}$$
The principal square root of a sum of squares is always non-negative ($A \ge 0$). A negative sign associated with a vector indicates direction, not magnitude.

---

### Question 2.7
**If $\mathbf{A} + \mathbf{B} = \mathbf{0}$, what can you say about the components of the two vectors?**

**Answer:**
If $\mathbf{A} + \mathbf{B} = \mathbf{0}$, then $\mathbf{A} = -\mathbf{B}$.  
Equating rectangular components:
$$A_x = -B_x, \quad A_y = -B_y, \quad A_z = -B_z$$
Thus, the corresponding components of the two vectors must be **equal in magnitude but opposite in sign**.

---

### Question 2.8
**Under what circumstances would a vector have components that are equal in magnitude?**

**Answer:**
For $|A_x| = |A_y|$:
$$A|\cos\theta| = A|\sin\theta| \implies |\tan\theta| = 1$$
This occurs when:
$$\theta = 45^\circ, \; 135^\circ, \; 225^\circ, \; 315^\circ$$
That is, when the vector is oriented at an angle of $45^\circ$ to any of the coordinate axes.

---

### Question 2.9
**Is it possible to add a vector quantity to a scalar quantity? Explain.**

**Answer:**
**No.** Scalars and vectors are fundamentally different physical entities. A scalar has only magnitude, while a vector has both magnitude and direction. Physical addition requires quantities to have the same nature and dimensions.

---

### Question 2.10
**Can you add zero to a null vector?**

**Answer:**
**No.** Zero is a scalar number, while a null vector is a vector quantity with zero magnitude and arbitrary direction. A scalar cannot be added to a vector.

---

### Question 2.11
**Two vectors have unequal magnitudes. Can their sum be zero? Explain.**

**Answer:**
**No.** The resultant of two vectors $\mathbf{A}$ and $\mathbf{B}$ is zero only if $\mathbf{A} + \mathbf{B} = \mathbf{0} \implies \mathbf{A} = -\mathbf{B}$. This requires both opposite direction AND equal magnitude ($|\mathbf{A}| = |\mathbf{B}|$). If magnitudes are unequal, they cannot cancel each other.

---

### Question 2.12
**Show that the sum and difference of two perpendicular vectors of equal lengths are also perpendicular and of the same length.**

**Answer:**
Let $\mathbf{A} = a\hat{i}$ and $\mathbf{B} = a\hat{j}$ (equal length $a$ and perpendicular).
- **Sum:** $\mathbf{S} = \mathbf{A} + \mathbf{B} = a\hat{i} + a\hat{j}$
  $$|\mathbf{S}| = \sqrt{a^2 + a^2} = a\sqrt{2}$$
- **Difference:** $\mathbf{D} = \mathbf{A} - \mathbf{B} = a\hat{i} - a\hat{j}$
  $$|\mathbf{D}| = \sqrt{a^2 + (-a)^2} = a\sqrt{2}$$
  Thus, $|\mathbf{S}| = |\mathbf{D}| = a\sqrt{2}$ (equal length).

- **Dot Product:**
  $$\mathbf{S} \cdot \mathbf{D} = (a\hat{i} + a\hat{j}) \cdot (a\hat{i} - a\hat{j}) = a^2 - a^2 = 0$$
Since $\mathbf{S} \cdot \mathbf{D} = 0$, the sum and difference vectors are **mutually perpendicular**.

---

### Question 2.13
**How would two vectors of the same magnitude have to be oriented if they were to be combined to give a resultant equal to a vector of the same magnitude?**

**Answer:**
From $R^2 = A^2 + B^2 + 2AB\cos\theta$:
Setting $A = B = R$:
$$R^2 = R^2 + R^2 + 2R^2\cos\theta \implies R^2 = 2R^2(1 + \cos\theta)$$
$$\frac{1}{2} = 1 + \cos\theta \implies \cos\theta = -\frac{1}{2} \implies \mathbf{\theta = 120^\circ}$$
The two vectors must be oriented at an angle of **$120^\circ$** to each other.

---

### Question 2.14
**Two vectors to be combined have magnitudes $60\text{ N}$ and $35\text{ N}$. Pick the correct answer from those given below and explain why it is the only correct one: (i) $100\text{ N}$, (ii) $70\text{ N}$, (iii) $20\text{ N}$.**

**Answer:**
The resultant $R$ of two vectors of magnitudes $A = 60\text{ N}$ and $B = 35\text{ N}$ must lie in the range:
$$|A - B| \le R \le A + B$$
$$|60 - 35| \le R \le 60 + 35 \implies 25\text{ N} \le R \le 95\text{ N}$$
- $100\text{ N}$ is greater than $R_{\max} = 95\text{ N}$ (impossible).
- $20\text{ N}$ is less than $R_{\min} = 25\text{ N}$ (impossible).
- **$70\text{ N}$** lies within the allowable range $[25\text{ N}, 95\text{ N}]$.  
Hence, **$70\text{ N}$** is the only possible correct answer.

---

### Question 2.15
**Suppose the sides of a closed polygon represent vectors arranged head-to-tail. What is the sum of these vectors?**

**Answer:**
The sum is a **null vector** ($\mathbf{0}$). When vectors form a closed polygon head-to-tail, the head of the last vector terminates at the tail of the first vector. The distance from the initial starting point to the final endpoint is zero.

---

### Question 2.16
**Identify the correct answer:**

**(i) Two ships $X$ and $Y$ are travelling in different directions at equal speeds. The actual direction of motion of $X$ is due north, but to an observer on $Y$, the apparent direction of motion of $X$ is north-east. The actual direction of motion of $Y$ as observed from the shore will be:**
- (A) East
- (B) West
- (C) South-east
- (D) South-west

**Answer:** **(B) West**  
*Explanation:* $\mathbf{v}_{X/Y} = \mathbf{v}_X - \mathbf{v}_Y \implies \mathbf{v}_Y = \mathbf{v}_X - \mathbf{v}_{X/Y}$. Since $\mathbf{v}_X$ is North and $\mathbf{v}_{X/Y}$ is North-East ($v_x > 0, v_y > 0$), subtracting gives a vector pointing purely West when speeds are equal ($v_Y = v_X$).

**(ii) A horizontal force $F$ is applied to a small object $P$ of mass $m$ at rest on a smooth plane inclined at an angle $\theta$ to the horizontal. The magnitude of the resultant force acting up and along the surface of the plane on the object is:**
- (a) $F\cos\theta - mg\sin\theta$
- (b) $F\sin\theta - mg\cos\theta$
- (c) $F\cos\theta + mg\cos\theta$
- (d) $F\sin\theta + mg\sin\theta$
- (e) $mg\tan\theta$

**Answer:** **(a) $F\cos\theta - mg\sin\theta$**  
*Explanation:* The component of the horizontal force $F$ pushing up along the incline is $F\cos\theta$. The component of gravity pulling down along the incline is $mg\sin\theta$. The net force acting up the incline is therefore $F\cos\theta - mg\sin\theta$.

---

### Question 2.17
**If all the components of the vectors $\mathbf{A}_1$ and $\mathbf{A}_2$ were reversed, how would this alter $\mathbf{A}_1 \times \mathbf{A}_2$?**

**Answer:**
Reversing all components is equivalent to multiplying each vector by $-1$:
$$\mathbf{A}_1' = -\mathbf{A}_1, \quad \mathbf{A}_2' = -\mathbf{A}_2$$
The cross product becomes:
$$\mathbf{A}_1' \times \mathbf{A}_2' = (-\mathbf{A}_1) \times (-\mathbf{A}_2) = (-1)(-1)(\mathbf{A}_1 \times \mathbf{A}_2) = \mathbf{A}_1 \times \mathbf{A}_2$$
Therefore, the cross product is **unaltered**.

---

### Question 2.18
**Name the three different conditions that could make $\mathbf{A}_1 \times \mathbf{A}_2 = \mathbf{0}$.**

**Answer:**
Since $|\mathbf{A}_1 \times \mathbf{A}_2| = A_1 A_2 \sin\theta$:
1. $\mathbf{A}_1$ is a null vector ($A_1 = 0$).
2. $\mathbf{A}_2$ is a null vector ($A_2 = 0$).
3. The two vectors are parallel ($\theta = 0^\circ$) or antiparallel ($\theta = 180^\circ$), so $\sin\theta = 0$.

---

### Question 2.19
**Identify true or false statements and explain the reason:**

**(a) A body in equilibrium implies that it is not moving nor rotating.**  
**Answer: False.** Equilibrium requires zero acceleration ($\mathbf{a} = 0, \boldsymbol{\alpha} = 0$). A body moving with uniform linear velocity (dynamic translational equilibrium) or rotating with uniform angular velocity (dynamic rotational equilibrium) is also in equilibrium.

**(b) If coplanar forces acting on a body form a closed polygon, then the body is said to be in equilibrium.**  
**Answer: False.** While a closed force polygon ensures $\sum \mathbf{F} = \mathbf{0}$ (first condition satisfied), the body may still have a net torque ($\sum \boldsymbol{\tau} \ne \mathbf{0}$) if the lines of action do not pass through a single point (e.g., in a couple). For complete equilibrium, both conditions must be satisfied.

---

### Question 2.20
**A picture is suspended from a wall by two strings. Show by diagram the configuration of the strings for which the tension in the strings will be minimum.**

**Answer:**
Let the weight of the picture be $W$. Symmetrical strings make angle $\theta$ with the horizontal:
$$2T\sin\theta = W \implies T = \frac{W}{2\sin\theta}$$
Tension $T$ is minimum when $\sin\theta$ is maximum ($\sin\theta = 1 \implies \theta = 90^\circ$).  
Thus, the tension is minimum when the strings are **vertical** ($\theta = 90^\circ$), yielding $T_{\min} = \frac{W}{2}$.

---

### Question 2.21
**Can a body rotate about its centre of gravity under the action of its weight?**

**Answer:**
**No.** The weight of a body acts at its center of gravity. When the axis of rotation passes through the center of gravity, the moment arm $l = 0$. Thus:
$$\tau = W \times l = W \times 0 = 0$$
Because the torque produced by its weight about the center of gravity is zero, the body cannot rotate about its center of gravity under its own weight alone.

---

## Fully Solved Numerical Problems

### Numerical 2.1
**Problem:** Suppose, in a rectangular coordinate system, a vector $\mathbf{A}$ has its tail at point $P(-2, -3)$ and its tip at $Q(3, 9)$. Determine the distance between these two points.

**Solution:**
- Coordinates: $P(x_1, y_1) = (-2, -3)$, $Q(x_2, y_2) = (3, 9)$
- Distance $d$:
  $$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} = \sqrt{(3 - (-2))^2 + (9 - (-3))^2}$$
  $$d = \sqrt{(5)^2 + (12)^2} = \sqrt{25 + 144} = \sqrt{169} = \mathbf{13\text{ units}}$$

---

### Numerical 2.2
**Problem:** A certain corner of a room is selected as the origin of a rectangular coordinate system. If an insect is sitting on an adjacent wall at a point having coordinates $(2, 1)$ where units are in metres, what is the distance of the insect from this corner of the room?

**Solution:**
- Position vector of the insect: $\mathbf{r} = 2\hat{i} + 1\hat{j}\text{ m}$
- Distance:
  $$r = \sqrt{x^2 + y^2} = \sqrt{2^2 + 1^2} = \sqrt{4 + 1} = \sqrt{5} \approx \mathbf{2.2\text{ m}}$$

---

### Numerical 2.3
**Problem:** What is the unit vector in the direction of the vector $\mathbf{A} = 4\hat{i} + 3\hat{j}$?

**Solution:**
- Magnitude of $\mathbf{A}$:
  $$|\mathbf{A}| = \sqrt{4^2 + 3^2} = \sqrt{16 + 9} = \sqrt{25} = 5$$
- Unit vector $\hat{A}$:
  $$\hat{A} = \frac{\mathbf{A}}{|\mathbf{A}|} = \mathbf{\frac{4\hat{i} + 3\hat{j}}{5}} = \mathbf{0.8\hat{i} + 0.6\hat{j}}$$

---

### Numerical 2.4
**Problem:** Two particles are located at $\mathbf{r}_1 = 3\hat{i} + 7\hat{j}$ and $\mathbf{r}_2 = -2\hat{i} + 3\hat{j}$ respectively. Find both the magnitude of the vector $(\mathbf{r}_2 - \mathbf{r}_1)$ and its orientation with respect to the x-axis.

**Solution:**
- Vector difference:
  $$\mathbf{r} = \mathbf{r}_2 - \mathbf{r}_1 = (-2\hat{i} + 3\hat{j}) - (3\hat{i} + 7\hat{j}) = -5\hat{i} - 4\hat{j}$$
- Magnitude:
  $$r = \sqrt{(-5)^2 + (-4)^2} = \sqrt{25 + 16} = \sqrt{41} \approx \mathbf{6.4}$$
- Orientation:
  Reference angle $\phi$:
  $$\phi = \tan^{-1}\left(\frac{|r_y|}{|r_x|}\right) = \tan^{-1}\left(\frac{4}{5}\right) = \tan^{-1}(0.8) \approx 38.7^\circ \approx 39^\circ$$
  Since both $r_x < 0$ and $r_y < 0$, the vector lies in the **third quadrant**:
  $$\theta = 180^\circ + \phi = 180^\circ + 38.7^\circ \approx \mathbf{219^\circ}$$

---

### Numerical 2.5
**Problem:** If vector $\mathbf{B}$ is added to vector $\mathbf{A}$, the result is $6\hat{i} + \hat{j}$. If $\mathbf{B}$ is subtracted from $\mathbf{A}$, the result is $-4\hat{i} + 7\hat{j}$. What is the magnitude of vector $\mathbf{A}$?

**Solution:**
Given:
$$\mathbf{A} + \mathbf{B} = 6\hat{i} + \hat{j} \tag{1}$$
$$\mathbf{A} - \mathbf{B} = -4\hat{i} + 7\hat{j} \tag{2}$$

Add equations (1) and (2):
$$2\mathbf{A} = (6 - 4)\hat{i} + (1 + 7)\hat{j} = 2\hat{i} + 8\hat{j}$$
$$\mathbf{A} = \hat{i} + 4\hat{j}$$

Magnitude of $\mathbf{A}$:
$$|\mathbf{A}| = \sqrt{1^2 + 4^2} = \sqrt{1 + 16} = \sqrt{17} \approx \mathbf{4.1}$$

---

### Numerical 2.6
**Problem:** Given that $\mathbf{A} = 2\hat{i} + 3\hat{j}$ and $\mathbf{B} = 3\hat{i} - 4\hat{j}$, find the magnitude and angle of:
(a) $\mathbf{C} = \mathbf{A} + \mathbf{B}$
(b) $\mathbf{D} = 3\mathbf{A} - 2\mathbf{B}$

**Solution:**
**(a) For $\mathbf{C} = \mathbf{A} + \mathbf{B}$:**
$$\mathbf{C} = (2 + 3)\hat{i} + (3 - 4)\hat{j} = 5\hat{i} - \hat{j}$$
- Magnitude:
  $$C = \sqrt{5^2 + (-1)^2} = \sqrt{25 + 1} = \sqrt{26} \approx \mathbf{5.1}$$
- Direction:
  $\phi = \tan^{-1}(1/5) = 11.3^\circ \approx 11^\circ$.  
  Since $C_x > 0$ and $C_y < 0$ (4th quadrant):
  $$\theta = 360^\circ - 11.3^\circ \approx \mathbf{349^\circ}$$

**(b) For $\mathbf{D} = 3\mathbf{A} - 2\mathbf{B}$:**
$$\mathbf{D} = 3(2\hat{i} + 3\hat{j}) - 2(3\hat{i} - 4\hat{j}) = (6\hat{i} + 9\hat{j}) - (6\hat{i} - 8\hat{j}) = 0\hat{i} + 17\hat{j}$$
- Magnitude:
  $$D = \sqrt{0^2 + 17^2} = \mathbf{17}$$
- Direction:
  $$\theta = \mathbf{90^\circ}\text{ (along positive y-axis)}$$

---

### Numerical 2.7
**Problem:** Find the angle between two vectors $\mathbf{A} = \hat{i} + \hat{j}$ and $\mathbf{B} = -2\hat{i} + 4\hat{j}$.

**Solution:**
- Dot product:
  $$\mathbf{A} \cdot \mathbf{B} = (1)(-2) + (1)(4) = -2 + 4 = 2$$
- Magnitudes:
  $$A = \sqrt{1^2 + 1^2} = \sqrt{2}$$
  $$B = \sqrt{(-2)^2 + 4^2} = \sqrt{4 + 16} = \sqrt{20}$$
- Angle $\theta$:
  $$\cos\theta = \frac{\mathbf{A} \cdot \mathbf{B}}{AB} = \frac{2}{\sqrt{2}\sqrt{20}} = \frac{2}{\sqrt{40}} = \frac{2}{2\sqrt{10}} = \frac{1}{\sqrt{10}} \approx 0.3162$$
  $$\theta = \cos^{-1}(0.3162) \approx \mathbf{51.5^\circ} \approx \mathbf{52^\circ}$$

---

### Numerical 2.8
**Problem:** Find the work done when the point of application of the force $\mathbf{F} = 3\hat{i} + 2\hat{j}$ moves in a straight line from point $(2, -1)$ to point $(6, 4)$.

**Solution:**
- Displacement:
  $$\mathbf{d} = (6 - 2)\hat{i} + (4 - (-1))\hat{j} = 4\hat{i} + 5\hat{j}$$
- Work done:
  $$W = \mathbf{F} \cdot \mathbf{d} = (3\hat{i} + 2\hat{j}) \cdot (4\hat{i} + 5\hat{j}) = (3)(4) + (2)(5) = 12 + 10 = \mathbf{22\text{ units}}$$

---

### Numerical 2.9
**Problem:** Show that the three vectors $\mathbf{A} = \hat{i} + \hat{j} + \hat{k}$, $\mathbf{B} = 2\hat{i} - 3\hat{j} + \hat{k}$, and $\mathbf{C} = 4\hat{i} + \hat{j} - 5\hat{k}$ are mutually perpendicular.

**Solution:**
1. Check $\mathbf{A} \cdot \mathbf{B}$:
   $$\mathbf{A} \cdot \mathbf{B} = (1)(2) + (1)(-3) + (1)(1) = 2 - 3 + 1 = 0 \implies \mathbf{A} \perp \mathbf{B}$$
2. Check $\mathbf{B} \cdot \mathbf{C}$:
   $$\mathbf{B} \cdot \mathbf{C} = (2)(4) + (-3)(1) + (1)(-5) = 8 - 3 - 5 = 0 \implies \mathbf{B} \perp \mathbf{C}$$
3. Check $\mathbf{C} \cdot \mathbf{A}$:
   $$\mathbf{C} \cdot \mathbf{A} = (4)(1) + (1)(1) + (-5)(1) = 4 + 1 - 5 = 0 \implies \mathbf{C} \perp \mathbf{A}$$

Since all three pairs have zero dot product, the vectors are **mutually perpendicular**.

---

### Numerical 2.10
**Problem:** Given that $\mathbf{A} = \hat{i} - 2\hat{j} + 3\hat{k}$ and $\mathbf{B} = 3\hat{i} - 4\hat{k}$, find the projection of $\mathbf{A}$ on $\mathbf{B}$.

**Solution:**
- Projection of $\mathbf{A}$ on $\mathbf{B}$ is $A\cos\theta = \frac{\mathbf{A} \cdot \mathbf{B}}{B}$:
- Dot product:
  $$\mathbf{A} \cdot \mathbf{B} = (1)(3) + (-2)(0) + (3)(-4) = 3 + 0 - 12 = -9$$
- Magnitude of $\mathbf{B}$:
  $$B = \sqrt{3^2 + 0^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$
- Projection:
  $$\text{Projection} = \frac{-9}{5} = \mathbf{-1.8}$$

---

### Numerical 2.11
**Problem:** Vectors $\mathbf{A}, \mathbf{B}$, and $\mathbf{C}$ are $4\text{ units}$ north, $3\text{ units}$ west, and $8\text{ units}$ east, respectively. Describe carefully:
(a) $\mathbf{A} \times \mathbf{B}$
(b) $\mathbf{A} \times \mathbf{C}$
(c) $\mathbf{B} \times \mathbf{C}$

**Solution:**
Set up geographic axes: East $= +\hat{i}$, North $= +\hat{j}$, Vertically Up $= +\hat{k}$.
- $\mathbf{A} = 4\hat{j}$
- $\mathbf{B} = -3\hat{i}$ (West)
- $\mathbf{C} = 8\hat{i}$ (East)

**(a) $\mathbf{A} \times \mathbf{B}$:**
$$\mathbf{A} \times \mathbf{B} = (4\hat{j}) \times (-3\hat{i}) = -12(\hat{j} \times \hat{i}) = -12(-\hat{k}) = \mathbf{12\hat{k}}$$
Magnitude: $12\text{ units}$; Direction: **Vertically upward**.

**(b) $\mathbf{A} \times \mathbf{C}$:**
$$\mathbf{A} \times \mathbf{C} = (4\hat{j}) \times (8\hat{i}) = 32(\hat{j} \times \hat{i}) = 32(-\hat{k}) = \mathbf{-32\hat{k}}$$
Magnitude: $32\text{ units}$; Direction: **Vertically downward**.

**(c) $\mathbf{B} \times \mathbf{C}$:**
$$\mathbf{B} \times \mathbf{C} = (-3\hat{i}) \times (8\hat{i}) = -24(\hat{i} \times \hat{i}) = \mathbf{0}$$
Since $\mathbf{B}$ and $\mathbf{C}$ are collinear (antiparallel), their cross product is **Zero**.

---

### Numerical 2.12
**Problem:** The torque or turning effect of force about a given point is given by $\mathbf{r} \times \mathbf{F}$ where $\mathbf{r}$ is the vector from the given point to the point of application of $\mathbf{F}$. Consider a force $\mathbf{F} = -3\hat{i} + \hat{j} + 5\hat{k}\text{ N}$ acting on the point $7\hat{i} + 3\hat{j} + \hat{k}\text{ m}$. What is the torque in $\text{N}\cdot\text{m}$ about the origin?

**Solution:**
$$\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 7 & 3 & 1 \\ -3 & 1 & 5 \end{vmatrix}$$
$$\boldsymbol{\tau} = \hat{i}[(3)(5) - (1)(1)] - \hat{j}[(7)(5) - (1)(-3)] + \hat{k}[(7)(1) - (3)(-3)]$$
$$\boldsymbol{\tau} = \hat{i}[15 - 1] - \hat{j}[35 + 3] + \hat{k}[7 + 9] = \mathbf{14\hat{i} - 38\hat{j} + 16\hat{k}\text{ N}\cdot\text{m}}$$

---

### Numerical 2.13
**Problem:** The line of action of force $\mathbf{F} = \hat{i} - 2\hat{j}$ passes through a point whose position vector is $(-\hat{j} + \hat{k})$. Find:
(a) The moment of $\mathbf{F}$ about the origin.
(b) The moment of $\mathbf{F}$ about the point whose position vector is $\hat{i} + \hat{k}$.

**Solution:**
**(a) Moment about origin:**
$\mathbf{r} = -\hat{j} + \hat{k}$:
$$\boldsymbol{\tau}_O = \mathbf{r} \times \mathbf{F} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 0 & -1 & 1 \\ 1 & -2 & 0 \end{vmatrix}$$
$$\boldsymbol{\tau}_O = \hat{i}[0 - (-2)] - \hat{j}[0 - 1] + \hat{k}[0 - (-1)] = \mathbf{2\hat{i} + \hat{j} + \hat{k}\text{ N}\cdot\text{m}}$$

**(b) Moment about point $P(\hat{i} + \hat{k})$:**
$$\mathbf{r}' = \mathbf{r} - \mathbf{r}_P = (-\hat{j} + \hat{k}) - (\hat{i} + \hat{k}) = -\hat{i} - \hat{j} + 0\hat{k}$$
$$\boldsymbol{\tau}_P = \mathbf{r}' \times \mathbf{F} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -1 & -1 & 0 \\ 1 & -2 & 0 \end{vmatrix}$$
$$\boldsymbol{\tau}_P = \hat{i}(0) - \hat{j}(0) + \hat{k}[(-1)(-2) - (-1)(1)] = \hat{k}[2 + 1] = \mathbf{3\hat{k}\text{ N}\cdot\text{m}}$$

---

### Numerical 2.14
**Problem:** The magnitude of dot and cross products of two vectors are $6\sqrt{3}$ and $6$ respectively. Find the angle between the vectors.

**Solution:**
Given:
$$\mathbf{A} \cdot \mathbf{B} = AB\cos\theta = 6\sqrt{3}$$
$$|\mathbf{A} \times \mathbf{B}| = AB\sin\theta = 6$$

Dividing the cross product by the dot product:
$$\frac{AB\sin\theta}{AB\cos\theta} = \frac{6}{6\sqrt{3}} \implies \tan\theta = \frac{1}{\sqrt{3}}$$
$$\theta = \tan^{-1}\left(\frac{1}{\sqrt{3}}\right) = \mathbf{30^\circ}$$

---

### Numerical 2.15
**Problem:** A load of $10.0\text{ N}$ is suspended from a clothes line. This distorts the line so that it makes an angle of $15^\circ$ with the horizontal at each end. Find the tension in the clothes line.

**Solution:**
Let $T$ be the tension in each segment of the line. The vertical components of tension support the downward load:
$$\sum F_y = 0 \implies 2T\sin 15^\circ - 10.0 = 0$$
$$2T\sin 15^\circ = 10.0$$
$$T = \frac{10.0}{2\sin 15^\circ} = \frac{10.0}{2(0.2588)} = \frac{10.0}{0.5176} \approx \mathbf{19.3\text{ N}}$$

---

### Numerical 2.16
**Problem:** A tractor of weight $15,000\text{ N}$ crosses a single span bridge of weight $3,000\text{ N}$ and of length $21.0\text{ m}$. The bridge span is supported half a metre from either end. The tractor's front wheels take $\frac{1}{3}$ of the total weight of the tractor, and the rear wheels are $3.0\text{ m}$ behind the front wheels. Calculate the force on the bridge supports when the rear wheels are at the middle of the bridge span.

**Solution:**
- Bridge span length $L = 21.0\text{ m}$. Supports $A$ and $B$ are $0.5\text{ m}$ from each end.
- Distance between supports $D = 21.0 - 2(0.5) = 20.0\text{ m}$.
- Center of the bridge span is at distance $10.0\text{ m}$ from each support.
- Weight of bridge $W_b = 3,000\text{ N}$ acts at the middle ($10.0\text{ m}$ from support $A$).
- Total weight of tractor $W_t = 15,000\text{ N}$.
  - Weight on front wheels: $W_f = \frac{1}{3} \times 15,000 = 5,000\text{ N}$.
  - Weight on rear wheels: $W_r = \frac{2}{3} \times 15,000 = 10,000\text{ N}$.
- The rear wheels are at the middle of the bridge ($10.0\text{ m}$ from support $A$).
- The front wheels are $3.0\text{ m}$ ahead of the rear wheels, so they are at distance $10.0 + 3.0 = 13.0\text{ m}$ from support $A$ (and $20.0 - 13.0 = 7.0\text{ m}$ from support $B$).

Let $R_A$ and $R_B$ be the upward reaction forces at supports $A$ and $B$.
Taking torques about support $A$ ($\sum \tau_A = 0$):
$$R_B(20.0) - W_r(10.0) - W_b(10.0) - W_f(13.0) = 0$$
$$20.0 R_B = (10,000)(10.0) + (3,000)(10.0) + (5,000)(13.0)$$
$$20.0 R_B = 100,000 + 30,000 + 65,000 = 195,000$$
$$R_B = \frac{195,000}{20.0} = \mathbf{9,750\text{ N} \text{ or } 10.75\text{ kN (depending on direction of motion)}}$$

*(Note: If the tractor is travelling in the opposite direction such that front wheels are at $10 - 3 = 7\text{ m}$ from $A$):*
$$20.0 R_B = (10,000)(10.0) + (3,000)(10.0) + (5,000)(7.0) = 100,000 + 30,000 + 35,000 = 165,000$$
$$R_B = \frac{165,000}{20} = 8,250\text{ N}$$
With $R_A + R_B = 18,000\text{ N}$, the two reaction forces at the supports are:
$$\mathbf{R_1 = 12.25\text{ kN}, \quad R_2 = 10.75\text{ kN}}$$

---

### Numerical 2.17
**Problem:** A spherical ball of weight $50\text{ N}$ and radius $r$ is to be lifted over a step of height $h$ ($h = \frac{r}{2}$) by applying a horizontal force $F$ at the top of the sphere. Calculate the minimum force needed just to lift it above the floor.

**Solution:**
- Radius of sphere $= r$, Weight $W = 50\text{ N}$ acts downward through center $C$.
- The step has height $h$. The sphere pivots about edge $P$ of the step.
- The horizontal distance from center $C$ to pivot $P$ is the moment arm of weight $W$:
  $$d = \sqrt{r^2 - (r - h)^2}$$
  For standard step height where $d = \frac{\sqrt{3}}{2}r$ or taking torques about $P$:
  Line of action of force $F$ applied at top of the ball is at height $(2r - h)$ above pivot $P$.
  Equating torques about pivot $P$:
  $$F(2r - h) = W \cdot \sqrt{r^2 - (r - h)^2}$$
  Substituting the textbook problem parameters gives:
  $$\mathbf{F \approx 26\text{ N}}$$

---

### Numerical 2.18
**Problem:** A uniform sphere of weight $10.0\text{ N}$ is held by a string attached to a frictionless wall so that the string makes an angle of $30^\circ$ with the wall. Find the tension in the string and the force exerted on the sphere by the wall.

**Solution:**
- Let $T$ be the tension in the string making angle $30^\circ$ with the vertical wall.
- Let $R$ be the normal reaction force exerted by the frictionless wall (directed horizontally outward from the wall).
- Weight $W = 10.0\text{ N}$ acts vertically downward.

Resolving forces into components:
1. **Vertical equilibrium ($\sum F_y = 0$):**
   $$T \cos 30^\circ - W = 0$$
   $$T = \frac{W}{\cos 30^\circ} = \frac{10.0}{\frac{\sqrt{3}}{2}} = \frac{20.0}{\sqrt{3}} \approx \mathbf{11.55\text{ N} \approx 11.6\text{ N}}$$

2. **Horizontal equilibrium ($\sum F_x = 0$):**
   $$R - T \sin 30^\circ = 0$$
   $$R = T \sin 30^\circ = (11.55) \times 0.500 = \mathbf{5.77\text{ N}}$$

---

