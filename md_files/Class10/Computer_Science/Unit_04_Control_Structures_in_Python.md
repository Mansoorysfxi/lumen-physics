# UNIT 4: CONTROL STRUCTURES IN PYTHON

---

## Student Learning Outcomes (SLOs)
By the end of this chapter, students will be able to:
1. Understand the concept of control flow and sequential, selection, and iterative execution.
2. Implement decision-making structures: `if`, `if-else`, and `if-elif-else`.
3. Implement iterative structures: `for` loops (with `range()`) and `while` loops.
4. Use loop control statements: `break` and `continue`.
5. Create and manipulate Python lists (indexing, slicing, `append()`, `remove()`, `sort()`).
6. Write reusable functions using `def` and `return`.
7. Write basic unit tests using Python's `unittest` framework.

---

## 4.1 Conditional Statements

Control structures govern the execution flow of programs based on boolean conditions.

```python
score = int(input("Enter marks (0-100): "))

if score >= 90:
    grade = "A+"
elif score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "F"

print(f"Your Grade is: {grade}")
```

---

## 4.2 Loops in Python

### 1. The `for` Loop and `range()` Function
The `range(start, stop, step)` function generates a sequence of integers:
```python
# Prints numbers 1 through 5
for i in range(1, 6):
    print(i)
```

### 2. The `while` Loop
Repeats as long as a condition remains `True`:
```python
count = 1
while count <= 5:
    print(f"Count: {count}")
    count += 1
```

### 3. Loop Control: `break` and `continue`
- `break`: Terminates the loop immediately.
- `continue`: Skips the remainder of the current iteration and jumps to the next iteration.

---

## 4.3 Python Lists

A **list** is an ordered, mutable (changeable) collection of items enclosed in square brackets:

```python
fruits = ["apple", "banana", "cherry"]

# Accessing elements (0-indexed)
print(fruits[0])      # Output: apple

# List Methods
fruits.append("orange") # Adds item to end
fruits.insert(1, "mango") # Inserts at index 1
fruits.remove("banana") # Removes item
fruits.sort()           # Sorts alphabetically
```

---

## 4.4 Functions and Unit Testing

### Functions:
```python
def calculate_area(length, width):
    """Calculates area of a rectangle"""
    return length * width

result = calculate_area(10, 5)
print(f"Area: {result}")
```

### Unit Testing (`unittest`):
Unit testing automatically verifies that individual functions produce expected outputs for given inputs:

```python
import unittest

def add(a, b):
    return a + b

class TestMathFunctions(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)

if __name__ == '__main__':
    unittest.main()
```

---

## Exercise Solutions
- **MCQ 1:** What does `range(1, 5)` generate?  
  *(a) $1, 2, 3, 4, 5$ (b) $1, 2, 3, 4$ (c) $0, 1, 2, 3, 4$ (d) $2, 3, 4$*  
  **Answer:** **(b)** $1, 2, 3, 4$ *(The stop parameter is exclusive)*.
- **MCQ 2:** Which list method adds an element to the end of a list?  
  *(a) `insert()` (b) `add()` (c) `append()` (d) `extend()`*  
  **Answer:** **(c)** `append()`.
