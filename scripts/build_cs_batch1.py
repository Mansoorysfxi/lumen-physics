# -*- coding: utf-8 -*-
"""Builder for Computer Science Units 1, 2, 3, 4"""
import os

out_dir = "Class10/Computer_Science"
os.makedirs(out_dir, exist_ok=True)

# ==========================================
# UNIT 1: OPERATING SYSTEMS: STRUCTURE AND SERVICES
# ==========================================
unit1_content = """# UNIT 1: OPERATING SYSTEMS: STRUCTURE AND SERVICES

---

## Student Learning Outcomes (SLOs)
By the end of this chapter, students will be able to:
1. Define an operating system and explain its role as an interface between the user and hardware.
2. Differentiate between the kernel and shell, including their specific functions.
3. Explain operating system layers and modular design.
4. Identify the role of system libraries and device drivers in OS functionality.
5. Explain the stages in the process life cycle (creation, execution, termination) with practical examples.
6. Apply First-Come, First-Served (FCFS) process scheduling with numerical timeline calculations.
7. Describe multitasking and concurrency with real-world analogies.
8. Distinguish between primary memory (RAM) and virtual memory.
9. Define a process and a thread, and explain how threads share resources within a process.
10. Define system calls, their purpose, and identify common types.
11. Define file systems, files, folders, and metadata.

---

## 1.1 Introduction to Operating Systems (OS)

An **Operating System (OS)** is a type of system software that acts as an intermediary (interface) between the computer hardware and application software/users. Without an OS, computer hardware cannot understand human commands, nor can applications interact with processors, storage, or peripherals.

### Core Roles of the Operating System:
1. **Central System Controller:** The OS functions like a traffic controller, allocating CPU time, managing primary memory, coordinating storage access, and directing peripheral devices (keyboard, printer, display).
2. **Translator (User-Hardware Interaction):** Translates high-level user actions (clicking a button, entering text) into binary machine instructions ($0\\text{s}$ and $1\\text{s}$) executed by hardware.
3. **Multi-User Environment Management:** In networked, cloud, or lab environments, the OS creates and manages separate user accounts, secures private data, enforces access permissions, and allocates shared resources equitably.

> **Do You Know?**
> Humans communicate in natural languages (Urdu, English), whereas computers understand only binary voltage states ($0$ and $1$). When you type the letter 'A' on a keyboard, the OS converts it into binary ASCII code (`01000001`), which the CPU processes and sends to the graphics controller to render on the screen instantly.

---

## 1.2 Architecture of an Operating System

An operating system's internal architecture is structured into specialized functional layers.

```
       +--------------------------------------------+
       |               USER APPLICATIONS            |
       +--------------------------------------------+
                             |
       +--------------------------------------------+
       |             SHELL (User Interface)         |
       |  - Graphical User Interface (GUI)          |
       |  - Command Line Interface (CLI)            |
       +--------------------------------------------+
                             |  System Calls
       +--------------------------------------------+
       |             KERNEL (Core OS Engine)        |
       |  - Process Scheduler                       |
       |  - Memory Manager                          |
       |  - File System Controller                  |
       +--------------------------------------------+
                             |  Device Drivers
       +--------------------------------------------+
       |                  HARDWARE                  |
       |  CPU, RAM, Hard Drives, Network, Display   |
       +--------------------------------------------+
```

### 1. Kernel vs. Shell
- **Kernel:** The core, central module of the OS that resides permanently in memory. It directly controls hardware, allocates CPU time, manages memory blocks, and handles hardware interrupts.  
  *Analogy:* The kernel is like the engine of a car.
- **Shell:** The outermost software layer that interacts directly with the user. It receives commands and passes them to the kernel for execution.
  - **Graphical Shell (GUI):** Visual desktop with windows, icons, menus, and pointer (e.g., Windows Desktop, macOS Finder).
  - **Command-Line Shell (CLI):** Text terminal where users type commands (e.g., Command Prompt, PowerShell, Linux Bash).  
  *Analogy:* The shell is like the steering wheel, accelerator, and dashboard controls of a car.

### 2. Device Drivers and System Libraries
- **Device Drivers:** Specialized software programs that allow the OS kernel to communicate with specific hardware devices (printers, graphics cards, network adapters).
- **System Libraries:** Pre-written collections of code functions (e.g., standard C libraries, Windows DLLs) that applications call to perform standard tasks without rewriting hardware routines.

---

## 1.3 Process Management and CPU Scheduling

A **process** is a program currently in execution loaded into computer memory.

### 1. Process Life Cycle
A process traverses three primary states:
1. **Creation (New / Ready):** When a user launches an application (e.g., opening a browser), the OS allocates memory space, loads executable code, and assigns a unique Process ID (PID).
2. **Execution (Running):** The CPU actively executes the instructions of the process.
3. **Termination:** When the task completes or the user closes the application, the OS reclaims memory and releases hardware resources.

### 2. Multitasking vs. Concurrency
- **Multitasking:** The OS allows multiple distinct applications (music player, web browser, word processor) to be active simultaneously.
- **Concurrency:** More than one process makes progress over a shared time interval. On a single CPU core, concurrency is achieved by rapid **time-slicing** (switching tasks every few milliseconds so quickly that the user perceives continuous, simultaneous execution).  
  *Analogy:* A chef preparing three separate dishes by rapidly alternating attention between pots.

---

### 3. First-Come, First-Served (FCFS) Scheduling

In **FCFS scheduling**, the CPU executes processes strictly in the chronological order of their arrival. Once a process gets the CPU, it runs to completion (non-preemptive).

#### Numerical Example:
Consider three processes with the following arrival and burst times:

| Process ID | Arrival Time ($t_a$) | Burst Time / Execution Time ($t_b$) |
| :---: | :---: | :---: |
| **$P_1$** | $0\\text{ s}$ | $5\\text{ s}$ |
| **$P_2$** | $1\\text{ s}$ | $3\\text{ s}$ |
| **$P_3$** | $2\\text{ s}$ | $2\\text{ s}$ |

#### Execution Timeline (Gantt Chart):
```
  [ P1: 0 - 5 s ] [ P2: 5 - 8 s ] [ P3: 8 - 10 s ]
  0               5               8               10
```

1. **At $t = 0\\text{ s}$:** $P_1$ arrives and executes immediately until $t = 5\\text{ s}$.
2. **At $t = 1\\text{ s}$:** $P_2$ arrives; must wait in the queue because $P_1$ is executing.
3. **At $t = 2\\text{ s}$:** $P_3$ arrives; waits behind $P_2$.
4. **At $t = 5\\text{ s}$:** $P_1$ completes. $P_2$ starts and runs until $t = 8\\text{ s}$.
5. **At $t = 8\\text{ s}$:** $P_2$ completes. $P_3$ starts and runs until $t = 10\\text{ s}$.

#### Calculation of Waiting Times:
- Waiting Time for $P_1 = 0 - 0 = \\mathbf{0\\text{ s}}$
- Waiting Time for $P_2 = 5 - 1 = \\mathbf{4\\text{ s}}$
- Waiting Time for $P_3 = 8 - 2 = \\mathbf{6\\text{ s}}$
- **Average Waiting Time:**
  $$\\text{Average Waiting Time} = \\frac{0 + 4 + 6}{3} = \\frac{10}{3} = \\mathbf{3.33\\text{ s}}$$

> **Observation (Convoy Effect):**
> Even though $P_3$ required only $2\\text{ s}$ of execution time, it was delayed until $t = 8\\text{ s}$ because longer processes arrived earlier.

---

## 1.4 Memory Management: RAM vs. Virtual Memory

1. **Primary Memory (RAM):** Fast, volatile semiconductor memory where currently executing code and active data reside.
2. **Virtual Memory:** A memory management technique that uses secondary storage (hard drive or SSD) to extend physical RAM. When RAM becomes full, the OS moves inactive memory pages to a designated disk area called the **swap file / pagefile**. When needed, the pages are swapped back into RAM.

---

## 1.5 Processes vs. Threads

- **Process:** An independent running program with its own private memory address space and dedicated system resources.
- **Thread:** The smallest unit of CPU execution within a process (often called a *lightweight process*). Multiple threads belonging to the same process share the same memory space, global variables, and open files.
- **Benefits of Multithreading:** In a modern web browser, one thread renders web page text, another downloads images in the background, and a third responds to user clicks, ensuring responsiveness.

---

## 1.6 System Calls and File Systems

### System Calls
A **system call** is a programmatic mechanism by which an application requests privileged services directly from the OS kernel.
- **Types of System Calls:**
  1. *Process Control:* `fork()`, `exec()`, `exit()`.
  2. *File Management:* `open()`, `read()`, `write()`, `close()`.
  3. *Device Management:* `ioctl()`, `read()`.
  4. *Information Maintenance:* `getpid()`, `time()`.
  5. *Communication:* `pipe()`, `socket()`.

### File Systems and Metadata
A **file system** organizes storage drives into a logical hierarchical directory structure of files and folders.
- **File:** A named contiguous collection of related data stored on secondary media.
- **Metadata:** Information describing the file itself: file name, file size, file format/extension, date created/modified, and security access permissions (Read, Write, Execute).

---

## Exercise Solutions

### Section A: Multiple Choice Questions (MCQs)
1. **The core component of an operating system that directly controls hardware is the:**  
   *(a) Shell (b) Device Driver (c) Kernel (d) System Call*  
   **Answer:** **(c)** Kernel.
2. **In FCFS scheduling, the CPU processes tasks based on:**  
   *(a) Priority (b) Order of arrival (c) Shortest task first (d) Random selection*  
   **Answer:** **(b)** Order of arrival.
3. **Multiple threads of the same process share:**  
   *(a) Separate memory spaces (b) The same memory and resources (c) Separate CPUs only (d) None of these*  
   **Answer:** **(b)** The same memory and resources.
4. **Virtual memory is physically located on the:**  
   *(a) CPU registers (b) RAM (c) Hard Drive / SSD (d) Cache*  
   **Answer:** **(c)** Hard Drive / SSD.

---

### Section B: Short & Conceptual Questions
- **1.1 Differentiate between a process and a thread.**  
  *Answer:* A process is an independent program running in its own isolated memory space. A thread is a lightweight execution sub-unit within a process; multiple threads in a process share the same memory and file resources.
- **1.2 What is the purpose of virtual memory?**  
  *Answer:* Virtual memory enables a computer to execute large programs or run multiple applications simultaneously even when the required data exceeds physical RAM, using secondary storage as temporary overflow memory.
"""

# ==========================================
# UNIT 2: SYSTEM RECOVERY AND ADVANCED MAINTENANCE
# ==========================================
unit2_content = """# UNIT 2: SYSTEM RECOVERY AND ADVANCED MAINTENANCE

---

## Student Learning Outcomes (SLOs)
By the end of this chapter, students will be able to:
1. Explain system recovery concepts and understand the purpose of System Restore Points.
2. Differentiate between full, incremental, and differential data backups.
3. Describe routine maintenance tasks (disk cleanup, disk defragmentation, temporary file removal).
4. Explain methods of malware protection (antivirus, antispyware, firewalls, regular updates).
5. Describe troubleshooting startup issues using Safe Mode and the Windows Recovery Environment (WinRE).
6. Use Task Manager and Resource Monitor to monitor CPU, memory, and disk usage.
7. Formulate a routine computer maintenance schedule.

---

## 2.1 System Recovery and Restore Points

Operating systems can encounter instability due to corrupt drivers, malicious software, or faulty updates.

### System Restore Points
A **System Restore Point** is a saved snapshot of essential operating system configuration files, registry settings, and installed hardware drivers at a specific point in time.
- If a new driver or software causes system crashes, the user can revert the OS to a previous restore point.
- **Key Feature:** Reverting to a restore point does **not** delete or alter the user's personal documents, photos, or emails.

---

## 2.2 Backup Strategies

A **backup** is a duplicate copy of important files stored on a separate physical storage medium (external drive, NAS, or cloud storage) to safeguard against hardware failure, accidental deletion, or ransomware attacks.

### Comparison of Backup Types:
| Backup Type | Description | Advantages | Disadvantages |
| :--- | :--- | :--- | :--- |
| **Full Backup** | Complete copy of all selected files and folders. | Fast, single-step restoration. | Takes the most storage space and the longest time to create. |
| **Incremental Backup** | Backs up only files that have **changed since the last backup** (full or incremental). | Fastest backup time; uses minimal storage space. | Slowest recovery (requires original full backup plus all successive incremental sets). |
| **Differential Backup** | Backs up all files that have **changed since the last full backup**. | Faster recovery than incremental (requires only full backup + latest differential). | Backup file size grows steadily each day until next full backup. |

---

## 2.3 Routine Disk and File Maintenance

1. **Disk Cleanup:** A utility that scans storage drives and removes unnecessary clutter: temporary internet files, recycle bin contents, downloaded installation files, and obsolete OS update caches.
2. **Disk Defragmentation:** Over time, as files are created, modified, and deleted on mechanical hard disk drives (HDDs), file clusters become fragmented and scattered across non-contiguous sectors. Defragmentation rearranges scattered file clusters contiguously, allowing the read/write head to access data faster.  
   *(Note: Solid State Drives (SSDs) should **not** be defragmented, as flash memory access is instantaneous and defragmentation causes unnecessary wear).*
3. **Clearing Temporary Files:** Manually or automatically clearing the `%temp%` directory frees up storage and prevents application conflicts.

---

## 2.4 Malware Protection and Security

1. **Antivirus & Antispyware:** Software that continuously scans memory, downloads, and storage for signatures of malicious software (viruses, worms, trojans, spyware, ransomware).
2. **Firewalls:** A security barrier that monitors and filters incoming and outgoing network traffic based on predefined security rules, preventing unauthorized remote access.
3. **Regular Software and Security Updates:** Patches security vulnerabilities and zero-day exploits in the OS kernel and applications.

---

## 2.5 Troubleshooting and Performance Monitoring

1. **Safe Mode:** A diagnostic startup mode that loads Windows with only the bare minimum set of drivers and essential core services. It allows users to uninstall corrupt graphics drivers or remove stubborn malware that prevents normal booting.
2. **Task Manager:** A built-in performance monitor used to:
   - Identify applications that are "Not Responding" and terminate them (`End Task`).
   - Monitor real-time utilization graphs of CPU, RAM, Disk, and Network bandwidth.
   - Manage startup applications to reduce boot time.
3. **Resource Monitor & Event Viewer:** Provide detailed logging of system errors, warnings, hardware faults, and application crashes.

---

## Exercise Solutions
- **MCQ 1:** Reverting to a system restore point affects: **(b)** System files and drivers, but preserves personal documents.
- **MCQ 2:** Which backup type copies only files modified since the last backup of any type? **(a)** Incremental backup.
- **Short Question:** Why should Solid State Drives (SSDs) not be defragmented?  
  *Answer:* SSDs use electronic flash memory with zero mechanical seek time, so fragmentation does not slow them down. Defragmenting an SSD performs unnecessary write cycles that degrade the lifespan of the memory cells.
"""

# ==========================================
# UNIT 3: INTRODUCTION TO PYTHON PROGRAMMING
# ==========================================
unit3_content = """# UNIT 3: INTRODUCTION TO PYTHON PROGRAMMING

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
"""

# ==========================================
# UNIT 4: CONTROL STRUCTURES IN PYTHON
# ==========================================
unit4_content = """# UNIT 4: CONTROL STRUCTURES IN PYTHON

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
    \"\"\"Calculates area of a rectangle\"\"\"
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
"""

files_to_write = [
    ("Unit_01_Operating_Systems_Structure_and_Services.md", unit1_content),
    ("Unit_02_System_Recovery_and_Advanced_Maintenance.md", unit2_content),
    ("Unit_03_Introduction_to_Python_Programming.md", unit3_content),
    ("Unit_04_Control_Structures_in_Python.md", unit4_content)
]

for fname, text in files_to_write:
    fpath = os.path.join(out_dir, fname)
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(text.strip() + "\n")
    print(f"Generated {fname}: {len(text):,} bytes")
