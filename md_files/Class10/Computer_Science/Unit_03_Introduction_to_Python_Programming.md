# UNIT 3: INTRODUCTION TO PYTHON PROGRAMMING

---

## Student Learning Outcomes (SLOs)
By the end of this chapter, students will be able to:
1. Understand the features of Python as a high-level, interpreted, general-purpose programming language.
2. Install and configure a Python development environment (IDLE, VS Code).
3. Understand Python syntax, indentation rules, comments, and variables.
4. Distinguish between core primitive data types: integer, float, string, and boolean.
5. Apply arithmetic, comparison, logical, and assignment operators.
6. Use `print()` and `input()` functions for basic user interaction.
7. Perform data type casting (`int()`, `float()`, `str()`).
8. Format outputs cleanly using Python f-strings.

---

## 3.1 Features of Python

**Python**, developed by Guido van Rossum in 1991, is one of the world's most widely used programming languages.
- **Key Features:**
  1. *Readable and Clean Syntax:* English-like syntax that emphasizes readability.
  2. *Interpreted:* Executes code line-by-line without requiring pre-compilation.
  3. *Cross-Platform:* Runs seamlessly on Windows, macOS, Linux, and Raspberry Pi.
  4. *Vast Standard Library:* Built-in libraries for data science, web development, AI, and automation.

---

## 3.2 Variables and Data Types

In Python, a variable is created the moment you assign a value to it using the assignment operator (`=`):

```python
age = 16          # int (Integer: whole numbers)
height = 5.8      # float (Floating point: decimal numbers)
name = "Ali"      # str (String: text in quotes)
is_student = True # bool (Boolean: True or False)
```

### Type Casting
Converting a variable from one data type to another:
```python
num_str = "25"
num_int = int(num_str)     # Converts string to integer 25
price = float("19.99")     # Converts string to float 19.99
```

---

## 3.3 Operators in Python

### 1. Arithmetic Operators:
- Addition: `+` (e.g. `5 + 3 = 8`)
- Subtraction: `-` (e.g. `10 - 4 = 6`)
- Multiplication: `*` (e.g. `4 * 3 = 12`)
- True Division: `/` (e.g. `10 / 4 = 2.5`)
- Floor Division: `//` (truncates decimal: `10 // 3 = 3`)
- Modulus (Remainder): `%` (e.g. `10 % 3 = 1`)
- Exponentiation: `**` (e.g. `2 ** 3 = 8`)

### 2. Comparison Operators:
`==` (equal to), `!=` (not equal to), `>`, `<`, `>=`, `<=` (return `True` or `False`).

### 3. Logical Operators:
- `and`: Returns `True` if both conditions are true.
- `or`: Returns `True` if at least one condition is true.
- `not`: Inverts the boolean truth value.

---

## 3.4 Input, Output, and String Formatting

### Getting User Input:
The `input()` function always captures user responses as **strings**:
```python
name = input("Enter your name: ")
marks = float(input("Enter your marks: "))
```

### Formatted Output with f-strings:
```python
name = "Ayesha"
score = 94.5
print(f"Student {name} achieved a score of {score}%!")
```

---

## Exercise Solutions

### Section A: Multiple Choice Questions (MCQs)
1. **What is the output of `10 // 3` in Python?**  
   *(a) $3.33$ (b) $3$ (c) $1$ (d) $3.0$*  
   **Answer:** **(b)** $3$ *(Floor division rounds down to the nearest integer)*.
2. **What does the `input()` function return by default?**  
   *(a) Integer (b) Float (c) String (d) Boolean*  
   **Answer:** **(c)** String.
3. **Which operator is used to calculate the remainder of division?**  
   *(a) `/` (b) `//` (c) `%` (d) `**`*  
   **Answer:** **(c)** `%`.

---

### Section B: Programming Exercises
- **Exercise 1:** Write a program to calculate the average of three numbers entered by the user.
```python
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
num3 = float(input("Enter third number: "))

average = (num1 + num2 + num3) / 3
print(f"The average is: {average:.2f}")
```
