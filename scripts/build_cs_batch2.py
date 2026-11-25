# -*- coding: utf-8 -*-
"""Builder for Computer Science Units 5, 6, 7, 8 and README.md"""
import os

out_dir = "Class10/Computer_Science"
os.makedirs(out_dir, exist_ok=True)

# ==========================================
# UNIT 5: INTRODUCTION TO DATA SCIENCE
# ==========================================
unit5_content = """# UNIT 5: INTRODUCTION TO DATA SCIENCE

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
- **Unstructured Data:** Has no predefined tabular model (e.g., text documents, audio files, images, social media posts, videos). Represents $>80\\%$ of modern real-world data.

---

## 5.2 Spreadsheets vs. Relational Databases (SQL)

| Feature | Spreadsheets (Excel / Google Sheets) | Relational Databases (SQL) |
| :--- | :--- | :--- |
| **Data Capacity** | Best for small-to-medium datasets ($<1\\text{ million rows}$). | Built for massive datasets (hundreds of millions of records). |
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
- **Pie Charts:** Show proportions of a whole ($100\\%$).

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
"""

# ==========================================
# UNIT 6: INTRODUCTION TO AI AND MACHINE LEARNING
# ==========================================
unit6_content = """# UNIT 6: INTRODUCTION TO ARTIFICIAL INTELLIGENCE (AI) AND MACHINE LEARNING (ML)

---

## Student Learning Outcomes (SLOs)
By the end of this chapter, students will be able to:
1. Define Artificial Intelligence (AI) and differentiate between AI, Machine Learning (ML), and Deep Learning (DL).
2. Understand the Turing Test and the concept of intelligent agents.
3. Classify Machine Learning into Supervised, Unsupervised, and Reinforcement Learning.
4. Describe the standard machine learning workflow (data collection, preprocessing, feature extraction, model training, evaluation).
5. Differentiate between classification and regression problems.
6. Evaluate classification models using a Confusion Matrix (TP, FP, TN, FN) and calculate Accuracy.
7. Understand the concepts of overfitting and underfitting.

---

## 6.1 Understanding AI, ML, and Deep Learning

```
  +---------------------------------------------------------+
  | ARTIFICIAL INTELLIGENCE (AI)                            |
  | Any technique enabling computers to mimic human         |
  | intelligence and decision-making.                       |
  |   +-------------------------------------------------+   |
  |   | MACHINE LEARNING (ML)                           |   |
  |   | Algorithms that learn patterns directly from    |   |
  |   | data without being explicitly programmed.       |   |
  |   |   +-----------------------------------------+   |   |
  |   |   | DEEP LEARNING (DL)                      |   |   |
  |   |   | Multi-layered artificial neural networks|   |   |
  |   |   | inspired by the human brain.            |   |   |
  |   |   +-----------------------------------------+   |   |
  |   +-------------------------------------------------+   |
  +---------------------------------------------------------+
```

- **Artificial Intelligence (AI):** The overarching broad discipline of engineering systems capable of performing tasks that traditionally require human intelligence (visual perception, reasoning, speech recognition, decision-making).
- **Machine Learning (ML):** A subset of AI where systems improve their task performance automatically through experience and exposure to training data, rather than following rigid hand-coded rules.
- **Deep Learning (DL):** A subset of ML utilizing deep multi-layered artificial neural networks capable of learning features directly from raw data (e.g. pixels, audio waveforms).

---

## 6.2 Types of Machine Learning

1. **Supervised Learning:**
   - The algorithm is trained on **labeled datasets** (inputs paired with correct ground-truth outputs).
   - *Classification:* Predicts discrete class labels (e.g., spam vs. not spam, benign vs. malignant tumor).
   - *Regression:* Predicts continuous numerical values (e.g., predicting house prices, forecasting tomorrow's temperature).
2. **Unsupervised Learning:**
   - The algorithm receives **unlabeled data** and discovers hidden patterns or intrinsic groupings independently.
   - *Clustering:* Grouping customer purchasing behaviors into marketing segments (e.g., $K$-means).
3. **Reinforcement Learning (RL):**
   - An autonomous agent learns by interacting with a dynamic environment through trial and error, receiving **rewards** for favorable actions and **penalties** for errors (e.g., game-playing AI like AlphaGo, autonomous driving navigation).

---

## 6.3 Model Evaluation: The Confusion Matrix

In binary classification (e.g., predicting whether a student passes or fails an exam):

```
                       Actual: Positive (Pass)    Actual: Negative (Fail)
  Predicted: Positive       True Positive (TP)        False Positive (FP) [Type I Error]
  Predicted: Negative      False Negative (FN)         True Negative (TN) [Type II Error]
```

- **True Positive (TP):** Model correctly predicted positive (e.g., student passed, model said pass).
- **True Negative (TN):** Model correctly predicted negative (e.g., student failed, model said fail).
- **False Positive (FP):** Model wrongly predicted positive (e.g., student failed, but model said pass).
- **False Negative (FN):** Model wrongly predicted negative (e.g., student passed, but model said fail).

### Accuracy Formula:
$$\\mathbf{\\text{Accuracy} = \\frac{\\text{TP} + \\text{TN}}{\\text{TP} + \\text{TN} + \\text{FP} + \\text{FN}}}$$

#### Numerical Example:
A test model evaluated $100$ students:
- $\\text{TP} = 65$, $\\text{TN} = 25$, $\\text{FP} = 6$, $\\text{FN} = 4$.
- Total Predictions $= 65 + 25 + 6 + 4 = 100$.
- Correct Predictions $= 65 + 25 = 90$.
$$\\text{Accuracy} = \\frac{90}{100} = 0.90 = \\mathbf{90\\%}$$

---

## 6.4 Overfitting vs. Underfitting

- **Underfitting:** The model is too simplistic to capture the underlying pattern in the data (high bias; poor accuracy on both training and test data).
- **Overfitting:** The model is excessively complex and memorizes the training data (including random noise). It performs exceptionally on training data but fails to generalize to new, unseen data (high variance).

---

## Exercise Solutions
- **MCQ 1:** Predicting the price of a house based on size is an example of: **(b)** Regression.
- **MCQ 2:** When a model memorizes noise and fails to generalize, it is called: **(c)** Overfitting.
- **Short Question:** What is the difference between supervised and unsupervised learning?  
  *Answer:* Supervised learning trains algorithms on labeled data with known correct targets. Unsupervised learning analyzes unlabeled data to uncover hidden clusters and structures without human guidance.
"""

# ==========================================
# UNIT 7: APPLICATIONS OF AI
# ==========================================
unit7_content = """# UNIT 7: APPLICATIONS OF AI

---

## Student Learning Outcomes (SLOs)
By the end of this chapter, students will be able to:
1. Identify major applications of AI across industries (healthcare, education, agriculture, finance, transportation).
2. Explain Natural Language Processing (NLP) and its applications (machine translation, sentiment analysis, chatbots).
3. Describe Computer Vision technologies (facial recognition, object tracking, autonomous vehicles).
4. Understand Recommendation Systems (collaborative filtering in e-commerce, entertainment streaming).
5. Understand Generative AI concepts (large language models, text-to-image synthesis).
6. Discuss critical ethical challenges: bias, data privacy, deepfakes, copyright, and workforce displacement.

---

## 7.1 Major Domains of Artificial Intelligence

### 1. Natural Language Processing (NLP)
Enables computers to understand, interpret, and generate human spoken and written languages:
- **Machine Translation:** Translating across languages in real-time (Google Translate).
- **Sentiment Analysis:** Classifying customer reviews as positive, negative, or neutral.
- **Conversational Agents:** AI assistants and customer support chatbots.

### 2. Computer Vision
Enables machines to extract meaningful information from digital images and video streams:
- **Medical Imaging:** Automated detection of tumors and fractures in X-rays, MRIs, and CT scans with accuracy rivaling expert radiologists.
- **Autonomous Driving:** Real-time object detection and lane-tracking for self-driving vehicles (Tesla, Waymo).
- **Facial Recognition:** Biometric authentication and surveillance.

### 3. Recommendation Systems
Algorithms that predict user preferences based on past behavior and peer group patterns (used by YouTube, Netflix, Spotify, Amazon).

### 4. Generative AI
Advanced deep-learning models capable of creating new, original content (realistic text, photorealistic artwork, computer code, music) based on prompts (e.g. ChatGPT, Midjourney).

---

## 7.2 AI in Key Sectors

1. **Healthcare:** Early disease diagnosis, personalized drug discovery, robotic-assisted surgery.
2. **Agriculture:** Precision farming using drone imagery to detect crop diseases and soil moisture deficits.
3. **Finance:** Algorithmic high-frequency trading and automated credit-card fraud detection.
4. **Smart Transportation:** Adaptive traffic light management to minimize urban congestion.

---

## 7.3 Ethical Challenges and the Future of AI

1. **Algorithmic Bias:** If training datasets reflect historical human biases (racial, gender, economic), the AI model will institutionalize and amplify those unfair biases in hiring or loan approvals.
2. **Data Privacy & Surveillance:** Continuous tracking of personal digital footprints without explicit transparency.
3. **Deepfakes & Misinformation:** Hyper-realistic synthetic video and audio impersonations creating fraud and political destabilization.
4. **Impact on Employment:** Automation of routine cognitive and manual labor creating structural shifts in the global workforce.

---

## Exercise Solutions
- **MCQ 1:** The technology that enables computers to interpret human language is called: **(b)** Natural Language Processing (NLP).
- **MCQ 2:** Detecting disease from an X-ray using AI relies on: **(a)** Computer Vision.
- **Short Question:** Why is algorithmic fairness important in AI?  
  *Answer:* Because AI systems increasingly make life-altering decisions (credit scoring, court bail assessments, employment hiring). Ensuring fairness prevents discriminatory outcomes against marginalized demographic groups.
"""

# ==========================================
# UNIT 8: DIGITAL ENTREPRENEURSHIP
# ==========================================
unit8_content = """# UNIT 8: DIGITAL ENTREPRENEURSHIP

---

## Student Learning Outcomes (SLOs)
By the end of this chapter, students will be able to:
1. Define digital entrepreneurship and recognize the characteristics of successful entrepreneurs.
2. Identify core digital business models (e-commerce, freelancing, SaaS, content creation, digital marketing).
3. Conduct market research and identify customer pain points.
4. Apply digital marketing strategies: Search Engine Optimization (SEO), social media marketing, email campaigns, and marketing automation.
5. Understand Customer Relationship Management (CRM) tools.
6. Understand financial planning, budgeting, cash flow management, and startup funding.
7. Explain business resilience, risk management, and recovering from setbacks.
8. Understand Intellectual Property Rights (patents, copyrights, trademarks).

---

## 8.1 Digital Entrepreneurship and Business Models

An **entrepreneur** is an individual who identifies an unmet market need, takes financial risks, and establishes a business venture to create value. **Digital entrepreneurship** leverages the internet, software, and digital platforms to reach global markets with low capital overhead.

### Major Digital Business Models:
1. **E-Commerce:** Selling physical or digital products via online storefronts (Shopify, Daraz, Amazon).
2. **Freelancing:** Providing skilled services (software development, graphic design, content writing) on freelance platforms (Upwork, Fiverr).
3. **Software as a Service (SaaS):** Delivering cloud-hosted software applications on subscription models (Google Workspace, Canva, Netflix).
4. **Content Creation & Monetization:** Creating videos, blogs, podcasts, or tutorials monetized through ad revenue, brand sponsorships, and merchandise.

---

## 8.2 Digital Marketing Strategies

1. **Search Engine Optimization (SEO):** Optimizing website content and technical structure so it ranks higher organically on search engine results pages (Google).
2. **Social Media Marketing (SMM):** Utilizing platforms (Instagram, TikTok, LinkedIn) to build audience communities and run targeted advertisements.
3. **Marketing Automation & Email Campaigns:** Automated workflows that send personalized newsletters, cart abandonment reminders, and product recommendations.
4. **Customer Relationship Management (CRM):** Specialized software (e.g. HubSpot) that tracks customer interactions, purchasing history, and support inquiries across the sales pipeline.

---

## 8.3 Intellectual Property Rights (IPR)

Intellectual property protects the creations of human intellect:
1. **Copyright:** Protects original creative works (written literature, software code, music, paintings, videos) against unauthorized copying.
2. **Trademark:** Protects distinctive brand names, logos, slogans, and symbols (e.g., Apple logo, Nike swoosh).
3. **Patent:** Grants exclusive commercial rights for an original, non-obvious technological **invention** or process for a fixed period (typically 20 years).

---

## 8.4 Business Resilience and Managing Setbacks

Startups frequently encounter unexpected challenges (cash flow shortages, product bugs, changing consumer trends):
- **Resilience:** The capacity of an enterprise to absorb shock, adapt business operations, and recover.
- **Customer Feedback Loop:** Continually interviewing users and analyzing analytics data to iterate and improve the product (**pivoting**).

---

## Exercise Solutions
- **MCQ 1:** Software distributed as a cloud subscription service is known as: **(c)** SaaS.
- **MCQ 2:** Exclusive rights to an original mechanical or technical invention are protected by a: **(a)** Patent.
- **Short Question:** What is the role of SEO in digital business?  
  *Answer:* SEO improves a website's visibility on search engine results, attracting organic (unpaid) high-intent visitors and driving customer conversions without continuous advertising expenditures.
"""

# ==========================================
# COMPUTER SCIENCE README.md (INDEX)
# ==========================================
cs_readme = """# 10th Class Computer Science Textbook (PECTAA New 2026 Curriculum)

This folder contains the complete, page-by-page digital text conversion of the 10th-class Computer Science textbook (English Medium, Punjab Education, Curriculum, Training & Assessment Authority) into individual Markdown units.

## Table of Contents

| Unit | Title | Topics Covered | File Link |
| :---: | :--- | :--- | :--- |
| **01** | **Operating Systems: Structure and Services** | Kernel vs. shell, modular OS layers, process lifecycle, FCFS CPU scheduling, virtual memory, threads, system calls, file systems | [Unit 1](file:///c:/Users/User/Downloads/Physics/Class10/Computer_Science/Unit_01_Operating_Systems_Structure_and_Services.md) |
| **02** | **System Recovery and Advanced Maintenance** | Restore points, backup strategies (full, incremental, differential), disk defragmentation, malware protection, Safe Mode, Task Manager | [Unit 2](file:///c:/Users/User/Downloads/Physics/Class10/Computer_Science/Unit_02_System_Recovery_and_Advanced_Maintenance.md) |
| **03** | **Introduction to Python Programming** | Python features, environment setup, variables, data types, operators (arithmetic, comparison, logical), type casting, I/O, f-strings | [Unit 3](file:///c:/Users/User/Downloads/Physics/Class10/Computer_Science/Unit_03_Introduction_to_Python_Programming.md) |
| **04** | **Control Structures in Python** | Conditionals (`if-elif-else`), loops (`for` with `range`, `while`), `break`/`continue`, lists and methods, functions, unit testing | [Unit 4](file:///c:/Users/User/Downloads/Physics/Class10/Computer_Science/Unit_04_Control_Structures_in_Python.md) |
| **05** | **Introduction to Data Science** | Data vs. information, lifecycle, structured vs. unstructured, spreadsheets vs. SQL databases, basic SQL queries, visualization, ethics | [Unit 5](file:///c:/Users/User/Downloads/Physics/Class10/Computer_Science/Unit_05_Introduction_to_Data_Science.md) |
| **06** | **Introduction to AI and Machine Learning** | AI vs. ML vs. DL, supervised/unsupervised/reinforcement learning, classification vs. regression, confusion matrix, accuracy, overfitting | [Unit 6](file:///c:/Users/User/Downloads/Physics/Class10/Computer_Science/Unit_06_Introduction_to_AI_and_Machine_Learning.md) |
| **07** | **Applications of AI** | Natural Language Processing (NLP), Computer Vision, recommendation systems, Generative AI, healthcare, algorithmic bias, ethics | [Unit 7](file:///c:/Users/User/Downloads/Physics/Class10/Computer_Science/Unit_07_Applications_of_AI.md) |
| **08** | **Digital Entrepreneurship** | E-commerce, SaaS, freelancing, market research, SEO, social media marketing, CRM, cash flow, intellectual property (patents, copyrights) | [Unit 8](file:///c:/Users/User/Downloads/Physics/Class10/Computer_Science/Unit_08_Digital_Entrepreneurship.md) |

## Formatting Details
- **Code Blocks:** Syntax-highlighted code samples for Python and SQL.
- **Mathematical Calculations:** KaTeX math for scheduling timelines (FCFS) and machine learning evaluation metrics (Confusion Matrix and Accuracy).
- **Exercises:** End-of-unit Multiple Choice Questions (MCQs), conceptual short questions, and practical coding exercises.
"""

files_to_write = [
    ("Unit_05_Introduction_to_Data_Science.md", unit5_content),
    ("Unit_06_Introduction_to_AI_and_Machine_Learning.md", unit6_content),
    ("Unit_07_Applications_of_AI.md", unit7_content),
    ("Unit_08_Digital_Entrepreneurship.md", unit8_content),
    ("README.md", cs_readme)
]

for fname, text in files_to_write:
    fpath = os.path.join(out_dir, fname)
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(text.strip() + "\n")
    print(f"Generated {fname}: {len(text):,} bytes")
