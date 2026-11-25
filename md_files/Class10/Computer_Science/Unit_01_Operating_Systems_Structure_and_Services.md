# UNIT 1: OPERATING SYSTEMS: STRUCTURE AND SERVICES

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
2. **Translator (User-Hardware Interaction):** Translates high-level user actions (clicking a button, entering text) into binary machine instructions ($0\text{s}$ and $1\text{s}$) executed by hardware.
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
| **$P_1$** | $0\text{ s}$ | $5\text{ s}$ |
| **$P_2$** | $1\text{ s}$ | $3\text{ s}$ |
| **$P_3$** | $2\text{ s}$ | $2\text{ s}$ |

#### Execution Timeline (Gantt Chart):
```
  [ P1: 0 - 5 s ] [ P2: 5 - 8 s ] [ P3: 8 - 10 s ]
  0               5               8               10
```

1. **At $t = 0\text{ s}$:** $P_1$ arrives and executes immediately until $t = 5\text{ s}$.
2. **At $t = 1\text{ s}$:** $P_2$ arrives; must wait in the queue because $P_1$ is executing.
3. **At $t = 2\text{ s}$:** $P_3$ arrives; waits behind $P_2$.
4. **At $t = 5\text{ s}$:** $P_1$ completes. $P_2$ starts and runs until $t = 8\text{ s}$.
5. **At $t = 8\text{ s}$:** $P_2$ completes. $P_3$ starts and runs until $t = 10\text{ s}$.

#### Calculation of Waiting Times:
- Waiting Time for $P_1 = 0 - 0 = \mathbf{0\text{ s}}$
- Waiting Time for $P_2 = 5 - 1 = \mathbf{4\text{ s}}$
- Waiting Time for $P_3 = 8 - 2 = \mathbf{6\text{ s}}$
- **Average Waiting Time:**
  $$\text{Average Waiting Time} = \frac{0 + 4 + 6}{3} = \frac{10}{3} = \mathbf{3.33\text{ s}}$$

> **Observation (Convoy Effect):**
> Even though $P_3$ required only $2\text{ s}$ of execution time, it was delayed until $t = 8\text{ s}$ because longer processes arrived earlier.

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
