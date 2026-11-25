# UNIT 5: INTRODUCTION TO DATA SCIENCE

---

## Student Learning Outcomes (SLOs)
By the end of this chapter, students will be able to:
1. Define data science as an interdisciplinary field that extracts knowledge and insights from structured and unstructured data.
2. Differentiate between data, information, and knowledge.
3. Understand the data science lifecycle (data collection, data cleaning, data exploration, modeling, deployment).
4. Distinguish between spreadsheets (Excel, Google Sheets) and relational databases (SQL).
5. Understand relational database concepts: tables, rows (records), columns (fields), and primary keys.
6. Write basic SQL commands (`SELECT`, `FROM`, `WHERE`, `INSERT`, `UPDATE`, `DELETE`).
7. Understand basic data visualization techniques (bar charts, line graphs, histograms, scatter plots).
8. Appreciate data privacy, security, and ethical considerations in data handling.

---

## 5.1 What is Data Science?

**Data Science** combines computer science, mathematics, statistics, and domain expertise to extract meaningful insights, trends, and actionable knowledge from raw data.

### Data vs. Information vs. Knowledge:
- **Data:** Raw, unprocessed facts, numbers, or symbols without context (e.g., `38.5, 39.1, 37.8`).
- **Information:** Data processed, organized, and given meaningful context (e.g., "Patient's body temperature readings over three hours indicate a fever").
- **Knowledge:** Understanding and applying information to make decisions (e.g., "Administer paracetamol and monitor temperature every 30 minutes").

### Structured vs. Unstructured Data:
- **Structured Data:** Highly organized in tabular rows and columns with fixed schemas (e.g., Excel spreadsheets, SQL relational databases).
- **Unstructured Data:** Has no predefined tabular model (e.g., text documents, audio files, images, social media posts, videos). Represents $>80\%$ of modern real-world data.

---

## 5.2 Spreadsheets vs. Relational Databases (SQL)

| Feature | Spreadsheets (Excel / Google Sheets) | Relational Databases (SQL) |
| :--- | :--- | :--- |
| **Data Capacity** | Best for small-to-medium datasets ($<1\text{ million rows}$). | Built for massive datasets (hundreds of millions of records). |
| **Concurrency** | Limited concurrent users; risk of file corruption. | High concurrency; thousands of users can read/write simultaneously. |
| **Data Integrity** | Prone to human data-entry typos and duplicate records. | Strict constraints (Primary Key, Foreign Key, data types). |
| **Querying** | Manual filtering, sorting, and cell formulas. | Fast, programmatic querying using standard SQL commands. |

---

## 5.3 Relational Databases and SQL Basics

A **Relational Database** organizes data into related tables (entities):
- **Table (Relation):** A collection of related data.
- **Record (Row / Tuple):** A single data entry representing one entity.
- **Field (Column / Attribute):** A specific characteristic (e.g., `student_name`, `roll_number`).
- **Primary Key:** A unique identifier for every record in a table that cannot be null or duplicated (e.g., `roll_number`).

### Basic SQL Commands:
1. **`SELECT` / `FROM`:** Retrieves data from a table:
   ```sql
   SELECT student_name, grade FROM students;
   ```
2. **`WHERE`:** Filters records meeting specific criteria:
   ```sql
   SELECT * FROM students WHERE grade = 'A' AND marks >= 80;
   ```
3. **`INSERT INTO`:** Adds new records:
   ```sql
   INSERT INTO students (roll_number, student_name, grade) 
   VALUES (15, 'Usman', 'A');
   ```
4. **`UPDATE`:** Modifies existing data:
   ```sql
   UPDATE students SET grade = 'A+' WHERE roll_number = 15;
   ```
5. **`DELETE`:** Removes records:
   ```sql
   DELETE FROM students WHERE roll_number = 15;
   ```

---

## 5.4 Data Visualization and Ethics

Visualizations communicate patterns clearly to human stakeholders:
- **Bar Charts:** Compare categorical data (e.g., sales per month).
- **Line Graphs:** Track continuous trends over time (e.g., temperature changes).
- **Histograms:** Display frequency distribution of numerical data.
- **Pie Charts:** Show proportions of a whole ($100\%$).

### Ethics in Data Science:
- **Data Privacy & Consent:** Ensuring individuals' personal data is collected only with informed consent.
- **Anonymization:** Stripping identifying markers (names, CNIC numbers) to protect identities.
- **Bias Prevention:** Ensuring training datasets represent diverse populations fairly without prejudice.

---

## Exercise Solutions
- **MCQ 1:** A unique identifier for a record in a database table is called a: **(b)** Primary Key.
- **MCQ 2:** Which SQL clause is used to filter records? **(c)** `WHERE`.
- **Short Question:** Write an SQL query to find all students with marks greater than 75 from the `students` table.  
  *Answer:* `SELECT * FROM students WHERE marks > 75;`
