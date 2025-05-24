// Bottle.jsx
import React from 'react';
import '../styles/Bottle.css';

const text = 'HealthWise Ai';
const transforms = [
  [2, 0, 1],
  [2, 0, 1],
  [2.25, -30, 1],
  [2.75, -30, 1.3],
  [3.25, -30, 1.5],
  [3.5, 0, 1.75],
  [3.5, 0, 1.75],
  [3.5, 0, 1.75],
  [3.3, 15, 1.5],
  [3, 15, 1.4],
  [2.8, 0, 1.3],
  [2.8, 0, 1.3],
  [3, -15, 1.4],
  [3.3, -15, 1.5],
  [3.5, 0, 1.75],
  [3.5, 0, 1.75],
  [3.25, 15, 1.5],
];

const Bottle = () => {
  const sides = 10;
  const rotateStep = 360 / sides;

  return (
    <div className="bottle">
      <div className="bottle__sides">
        {[...Array(sides)].map((_, i) => (
          <div
            className="bottle__side"
            key={i}
            style={{
              transform: `translateY(-50%) rotateX(${rotateStep * i}deg)`
            }}
          >
            {text.split('').map((char, index) => {
              const [z, rotY, scaleY] = transforms[index % transforms.length];
              return (
                <span
                  key={index}
                  style={{
                    transform: `translateZ(${z}ch) rotateY(${rotY}deg) scaleY(${scaleY})`
                  }}
                >
                  {char}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bottle;
