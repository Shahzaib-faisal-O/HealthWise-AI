import React from 'react';
import '../styles/Algorithm.css';
import algo from '../assets/uri_ifs___M_d4b05a78-2452-4da9-84f1-8a207af38475-removebg-preview.png';

const Algorithm = () => {
  return (
    <div className="algo-container">
      <div className="algo-main-section">
        <section>
          <img src={algo} alt="AI Algorithm Illustration" className="algo-image" />
        </section>
        <section className="algo-intro">
          <h1>
            Using Decision Tree & K-Nearest Neighbors (K-NN) <br />
            to Solve Real-World Health Problems
          </h1>
        </section>
      </div>

      <div className="algo-explain-container">

        {/* Decision Tree */}
        <article className="algo-explanation">
          <h2>1. Decision Tree</h2>
          <p>
            A Decision Tree is a supervised learning algorithm used for classification and regression.
            It models decisions and their consequences in a tree-like structure, making it easy to interpret.
          </p>
          <pre>
{`# Example in Python using sklearn
from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier()
model.fit(X_train, y_train)
predictions = model.predict(X_test)`}
          </pre>
        </article>

        {/* K-NN */}
        <article className="algo-explanation">
          <h2>2. K-Nearest Neighbors (K-NN)</h2>
          <p>
            K-NN is a non-parametric method used for classification. It assigns the class of a test point based on the majority class among its 'k' nearest neighbors in the training data.
          </p>
          <pre>
{`# K-NN with sklearn
from sklearn.neighbors import KNeighborsClassifier

knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)
predictions = knn.predict(X_test)`}
          </pre>
        </article>

      </div>
    </div>
  );
};

export default Algorithm;
