# server/model/train_model.py
import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
import pickle

np.random.seed(42)
samples = 1000

# Create synthetic health data
data = {
    'age': np.random.randint(18, 80, samples),
    'weight': np.random.randint(45, 120, samples),
    'height': np.random.randint(140, 200, samples),
    'systolic': np.random.randint(90, 180, samples),
    'diastolic': np.random.randint(60, 110, samples),
    'history_score': np.random.randint(0, 5, samples),
    'symptom_score': np.random.randint(0, 6, samples)
}
df = pd.DataFrame(data)

# Assign risk level (Decision Tree)
def risk_level(row):
    score = 0
    if row['systolic'] > 140 or row['diastolic'] > 90: score += 2
    if row['history_score'] >= 2: score += 2
    if row['symptom_score'] >= 3: score += 2
    if row['age'] > 50: score += 1
    return 'High' if score >= 5 else 'Medium' if score >= 3 else 'Low'

# Assign severity (k-NN)
def severity(row):
    total = row['symptom_score'] + row['history_score']
    return 'Severe' if total >= 7 else 'Moderate' if total >= 4 else 'Mild'

df['risk_level'] = df.apply(risk_level, axis=1)
df['severity'] = df.apply(severity, axis=1)

# Features
X = df[['age', 'weight', 'height', 'systolic', 'diastolic', 'history_score', 'symptom_score']]

# Train Decision Tree (for risk level)
tree_model = DecisionTreeClassifier()
tree_model.fit(X, df['risk_level'])

# Train k-NN (for severity)
knn_model = KNeighborsClassifier(n_neighbors=5)
knn_model.fit(X, df['severity'])

# Save both models
with open("decision_tree.pkl", "wb") as f:
    pickle.dump(tree_model, f)

with open("knn_model.pkl", "wb") as f:
    pickle.dump(knn_model, f)

print("✅ Both Decision Tree & k-NN models trained & saved.")
