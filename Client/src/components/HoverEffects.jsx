import React from "react";
import "../styles/HoverEffects.css"; // or HoverEffects.scss

const HoverEffects = () => {
  return (
    <div className="container">
    <div className="instruction">Hover the paragraphs to see the effect 👀</div>
  
    <h1>HIGHLIGHT 📝</h1>
    <div className="content v2">
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
  
    <h1>SPOILERS 💩</h1>
    <div className="content v3">
      <p>Qui beatae autem et saepe earum...</p>
    </div>
  
    <h1>UNDERLINE 🍧</h1>
    <div className="content v1">
      <p>Est doloribus doloremque...</p>
    </div>
  
    <h1>DASHES 😎</h1>
    <div className="content v4">
      <p>Id optio Quis sit repellat obcaecati...</p>
    </div>
  
    <h1>DELETED 🙈</h1>
    <div className="content v5">
      <p>Aut commodi ratione ut facilis dolore...</p>
    </div>
  
    <h1>DELETED 🙈2</h1>
    <div className="content v6">
      <p>Ut aspernatur minus a provident dolorem...</p>
    </div>
  
    <h1>CRAZY LINES 🤡</h1>
    <div className="content v7">
      <p>Et quidem soluta eos rerum aspernatur...</p>
    </div>
  
    <h1>GRADIENT SWIPE 🎨</h1>
    <div className="content v8">
      <p>Assumenda odio alias modi...</p>
    </div>
  </div>
  
  );
};

export default HoverEffects;
