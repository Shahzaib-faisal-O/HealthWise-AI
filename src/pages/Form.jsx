import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../styles/Form.css'

function Form() {
  const userId = localStorage.getItem('userId');

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    bp: '',
    history: [],
    symptoms: []
  });
  const API_URL = 'http://192.168.2.104:5000/predict';
  const [prediction, setPrediction] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter(v => v !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post(API_URL, formData, { responseType: 'blob' });
  
      // Trigger PDF download
      const file = new Blob([res.data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(file);
      link.download = 'HealthWise_Report.pdf';
      link.click();
  
    } catch (err) {
      alert('Error generating report.');
      console.error(err);
    }
  };
  

  return (
    <div className='container'>
      <h1>HealthWise AI</h1>
      <p>User Id: {userId}</p>

      <form onSubmit={handleSubmit}>
<label>Name:<input name="name" type="text" onChange={handleChange} /></label><br /><br />
<label>Age:<input name="age" type="number" onChange={handleChange} /></label><br /><br />
<label>Gender:
  <select name="gender" onChange={handleChange}>
    <option value="">Select</option>
    <option>Male</option>
    <option>Female</option>
    <option>Other</option>
  </select>
</label><br /><br />
<label>Height (cm):<input name="height" type="number" onChange={handleChange} /></label><br /><br />
<label>Weight (kg):<input name="weight" type="number" onChange={handleChange} /></label><br /><br />
<label>BP (e.g. 120/80):<input name="bp" type="text" onChange={handleChange} /></label><br /><br />

<fieldset>
  <legend>Past Medical History:</legend>
  <label><input type="checkbox" name="history" value="Diabetes" onChange={handleChange} /> Diabetes</label><br />
  <label><input type="checkbox" name="history" value="Heart Disease" onChange={handleChange} /> Heart Disease</label><br />
  <label><input type="checkbox" name="history" value="High Cholesterol" onChange={handleChange} /> High Cholesterol</label><br />
  <label><input type="checkbox" name="history" value="Hypertension" onChange={handleChange} /> Hypertension</label><br />
  <label><input type="checkbox" name="history" value="None" onChange={handleChange} /> None</label>
</fieldset><br />

<fieldset>
  <legend>Current Symptoms:</legend>
  <label><input type="checkbox" name="symptoms" value="Chest Pain" onChange={handleChange} /> Chest Pain</label><br />
  <label><input type="checkbox" name="symptoms" value="Shortness of Breath" onChange={handleChange} /> Shortness of Breath</label><br />
  <label><input type="checkbox" name="symptoms" value="Fatigue" onChange={handleChange} /> Fatigue</label><br />
  <label><input type="checkbox" name="symptoms" value="Headache" onChange={handleChange} /> Headache</label><br />
  <label><input type="checkbox" name="symptoms" value="Dizziness" onChange={handleChange} /> Dizziness</label><br />
  <label><input type="checkbox" name="symptoms" value="None" onChange={handleChange} /> None</label>
</fieldset><br />

<button type="submit">Analyze My Health</button>
</form>

{prediction && (
  <div style={{ marginTop: '20px', fontSize: '18px' }}>
    <strong>Prediction:</strong> {prediction}
  </div>
)}

{recommendation && (
  <div style={{ marginTop: '10px', fontSize: '16px', color: '#333' }}>
    <strong>AI Advice:</strong> {recommendation}
  </div>
)}
    </div>
  );
}

export default Form;

