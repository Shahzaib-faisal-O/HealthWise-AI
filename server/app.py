from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import pickle
import numpy as np
from io import BytesIO
from datetime import datetime
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.lib import colors

app = Flask(__name__)
CORS(app)

# Load models
with open("model/decision_tree.pkl", "rb") as f:
    decision_tree = pickle.load(f)
with open("model/knn_model.pkl", "rb") as f:
    knn_model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    try:
        age = int(data['age'])
        weight = int(data['weight'])
        user_height = int(data['height'])
        systolic, diastolic = map(int, data['bp'].split('/'))
        history_score = len(data['history'])
        symptom_score = len(data['symptoms'])

        # Features for prediction
        feats = np.array([[age, weight, user_height, systolic, diastolic, history_score, symptom_score]])
        risk = decision_tree.predict(feats)[0]
        severity = knn_model.predict(feats)[0]

        # Recommendations
        if risk == "High" and severity == "Severe":
            recommendation = "Critical condition detected. Seek immediate medical attention."
        elif risk == "High" and severity == "Moderate":
            recommendation = "High risk with moderate severity. Schedule a checkup and monitor symptoms."
        elif risk == "Medium" and severity == "Severe":
            recommendation = "Moderate risk with severe symptoms. Consult a doctor soon."
        elif risk == "Medium" and severity == "Moderate":
            recommendation = "Moderate indicators. Practice healthy lifestyle and monitor regularly."
        elif risk == "Low" and severity == "Moderate":
            recommendation = "Slight concern. Rest and hydrate. Visit doctor if symptoms continue."
        elif risk == "Medium" and severity == "Low":
            recommendation = "Medium risk with low severity. Start lifestyle changes."
        else:
            recommendation = "You're doing great! Maintain your healthy lifestyle."

        # Create PDF
        buffer = BytesIO()
        pdf = canvas.Canvas(buffer, pagesize=A4)
        page_width, page_height = A4

        pdf.setFont("Helvetica-Bold", 29)
        pdf.drawCentredString(page_width / 2, page_height - 50, "HealthWise AI Report")

        pdf.setFont("Helvetica", 12)
        y = page_height - 200
        lines = [
            f"Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
            f"Name: {data.get('name', 'N/A')}",
            f"Age: {age}",
            f"Gender: {data.get('gender', 'N/A')}",
            f"Weight: {weight} kg",
            f"Height: {user_height} cm",
            f"Blood Pressure: {systolic}/{diastolic}",
            f"Medical History Items: {', '.join(data.get('history', [])) or 'None'}",
            f"Current Symptoms: {', '.join(data.get('symptoms', [])) or 'None'}",
            "",
            "AI Prediction — Risk Level:",
        ]

        for line in lines:
            pdf.drawString(50, y, line)
            y -= 18
            if y < 100:
                pdf.showPage()
                pdf.setFont("Helvetica", 12)
                y = page_height - 50

        # Color-coded Risk Level
        if risk == "High":
            pdf.setFillColor(colors.red)
        elif risk == "Medium":
            pdf.setFillColor(colors.orange)
        else:
            pdf.setFillColor(colors.green)
        pdf.drawString(250, y + 18, risk)
        pdf.setFillColor(colors.black)
        y -= 18

        pdf.drawString(50, y, "AI Prediction — Severity:")
        if severity == "Severe":
            pdf.setFillColor(colors.red)
        elif severity == "Moderate":
            pdf.setFillColor(colors.orange)
        else:
            pdf.setFillColor(colors.green)
        pdf.drawString(250, y, severity)
        pdf.setFillColor(colors.black)
        y -= 30

        pdf.drawString(50, y, "Recommendation:")
        y -= 18
        for line in recommendation.split(". "):
            pdf.drawString(60, y, "- " + line.strip())
            y -= 18

        # Footer and logo
        pdf.setFont("Helvetica-Oblique", 10)
        pdf.drawCentredString(page_width / 2, 30, "© 2025 HealthWise AI — https://www.health-wise-ai")

        # Bottom-right logo
        try:
            logo = ImageReader("./logo.png")
            pdf.drawImage(logo, page_width - 100, 30, width=60, height=60, mask='auto')
        except Exception:
            pass

        # Bottom-left QR code
        try:
            qr = ImageReader("./qr_code.png")
            pdf.drawImage(qr, 30, 30, width=60, height=60, mask='auto')
        except Exception:
            pass

        # Bottom-center doctor signature
        try:
            sign = ImageReader("./signature.png")
            pdf.drawImage(sign, page_width/2 - 40, 35, width=80, height=40, mask='auto')
        except Exception:
            pass

        pdf.save()
        buffer.seek(0)

        return send_file(
            buffer,
            as_attachment=True,
            download_name="HealthWise_Report.pdf",
            mimetype="application/pdf"
        )

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
