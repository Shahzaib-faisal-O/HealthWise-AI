# 🩺 HealthWise - AI Powered Health Risk & Severity Predictor

**HealthWise** is a web-based AI system that predicts potential health risk levels and severity based on user inputs like age, weight, blood pressure, medical history, and symptoms. It helps users get a quick preliminary health report — in PDF format — which can be shown to a healthcare professional.

> 🏆 This project was developed for ZAB-E-FEST Tech Exhibition 2025.

---

## 🚀 Project Features

- Predicts health **risk level** and **severity** using Machine Learning models (Decision Tree & K-Nearest Neighbors).
- Accepts user inputs such as age, weight, height, blood pressure, medical history, and symptoms.
- Generates a professional **PDF Health Report** including:
  - Project title and logo
  - Personal input details
  - AI predictions and recommendations
  - Footer branding
- Mobile responsive: users can interact from **phones** and download the report.
- **User-friendly** design with fast feedback.

---

## 🛠️ Technologies Used

| Frontend          | Backend             | AI/ML Models              |
|-------------------|----------------------|----------------------------|
| React.js (Vite)    | Flask (Python)        | Decision Tree Classifier   |
| Axios              | Flask-CORS            | K-Nearest Neighbors (KNN)  |
| Plain CSS          | ReportLab (for PDF)   | Scikit-learn               |

---

## 📦 Installation Guide

| python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate |    # Windows

pip install -r requirements.txt

flask run --host=0.0.0.0 --port=5000
---

## 🌐 Frontend Setup (React)
cd client

npm install

npm run dev

http://<your-PC-LAN-IP>:5173

---
## 📄 Usage Instructions
1. Fill in your details: Age, Weight, Height, Blood Pressure, Symptoms, and Medical History.

2. Click Generate Report.

3. Download and view your HealthWise AI Report in PDF format.

4. Show this report to your doctor if necessary.
---
## 📸 Screenshots

---
## 🧠 AI Models Details
1. Decision Tree Classifier: Predicts overall health risk (Low, Medium, High).

2. K-Nearest Neighbors (KNN): Predicts symptom severity (Mild, Moderate, Severe).

3. Models are trained on synthetic data simulating real-world medical cases.
### Clone the Repository
```bash
git clone https://github.com/Shahzaib-faisal-O/HealthWise-AI.git
cd HealthWise-AI
