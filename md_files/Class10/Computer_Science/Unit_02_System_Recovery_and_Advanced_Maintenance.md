# UNIT 2: SYSTEM RECOVERY AND ADVANCED MAINTENANCE

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
