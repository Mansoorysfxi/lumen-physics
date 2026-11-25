# UNIT 6: INTRODUCTION TO ARTIFICIAL INTELLIGENCE (AI) AND MACHINE LEARNING (ML)

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
$$\mathbf{\text{Accuracy} = \frac{\text{TP} + \text{TN}}{\text{TP} + \text{TN} + \text{FP} + \text{FN}}}$$

#### Numerical Example:
A test model evaluated $100$ students:
- $\text{TP} = 65$, $\text{TN} = 25$, $\text{FP} = 6$, $\text{FN} = 4$.
- Total Predictions $= 65 + 25 + 6 + 4 = 100$.
- Correct Predictions $= 65 + 25 = 90$.
$$\text{Accuracy} = \frac{90}{100} = 0.90 = \mathbf{90\%}$$

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
