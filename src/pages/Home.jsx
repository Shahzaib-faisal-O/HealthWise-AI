import React, { useState } from 'react';
import '../styles/Home.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleButton = () => {
    if (id.trim() !== '' && agreed) {
      localStorage.setItem('userId', id); // Save ID to localStorage
      navigate('/form'); // Navigate to form page
    } else {
      toast.warning('Please enter your Registration ID and agree to the terms.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
    }
  };

  return (
    <>
      <div className="home-container">
        <div className="logo yin-yang"></div>
        <h1>Your AI Doctor —  <br /> Fast, Free & Trained to Care.</h1>
        <ul>
          <li>Built with Care</li>
          <li>Trained with Real Data</li>
          <li>Medically Trained</li>
          <li>100% Private & Secure</li>
          <li>Free</li>
        </ul>

        <div className="list">
          <span>Hi, I'm Healthwise AI, your smart and personal AI health assistant.</span>
          <span>I've been trained using real-world health-related data with two powerful AI methods: <br />
            🧠 <strong>Decision Tree Classifier</strong> and 🔍 <strong>K-Nearest Neighbors (k-NN)</strong><br />
            — two medical-grade machine learning techniques that help predict your health risk level and illness severity.
          </span>
          <span>✅ Decision Tree helps me assess your health risk based on patterns like blood pressure, age, height, and past symptoms.</span>
          <span>✅ k-NN lets me compare your symptoms with thousands of other real cases and estimate how serious your condition might be.</span>
          <span>I’ve learned from over <strong>5,000</strong> training samples, including data on symptoms, medical history, and vital signs.</span>
          <span>After you insert, you'll get: <br />
            - A smart prediction about your condition <br />
            - A professionally formatted <strong>AI Health Report in PDF</strong> <br />
            - Friendly advice or a doctor's recommendation
          </span>
          <span>Let’s get started — just tell me your Registration ID</span>
        </div>

        <div className="main-last-section">
          <input
            type="text"
            name="userId"
            id="userId"
            placeholder="id(2212340)"
            required
            className="main-input"
            value={id}
            onChange={(e) => setId(e.target.value)} // update ID
          />
          <div className="radio-wrapper-26">
            <label htmlFor="example-26">
              <div className="inputAndLeftText">
                <input
                  id="example-26"
                  type="radio"
                  name="radio-examples"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)} // update Agreed
                />
                <div>
                  <span className="title">Agreed</span>
                  <span className="desc">Terms & Conditions Apply</span>
                </div>
              </div>
              <span className="price">OK</span>
            </label>
          </div>
        </div>

        <button className="button-86" role="button" onClick={handleButton}>
          Get Started
        </button>
      </div>
    </>
  );
};

export default Home;
