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
            Integrating K-Means, K-NN, Single-Layer Perceptron, <br />
            and Decision Tree to Solve Real World Problems
          </h1>
        </section>
      </div>

      <div className="algo-explain-container">

        {/* Decision Tree */}
        <article className="algo-explanation">
          <h2>1. Decision Tree</h2>
          <p>
            A Decision Tree is a supervised machine learning algorithm used for both classification and regression tasks.
            It works like a flowchart, where each node represents a feature, each branch a decision rule, and each leaf a result.
          </p>
          <pre>
{`# Example in Python using sklearn
from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier()
model.fit(X_train, y_train)
predictions = model.predict(X_test)`}
          </pre>
        </article>

        {/* K-Means */}
        <article className="algo-explanation">
          <h2>2. K-Means Clustering</h2>
          <p>
            K-Means is an unsupervised learning algorithm that groups data into *k* clusters. It minimizes the variance within each cluster.
            It's ideal for customer segmentation, image compression, etc.
          </p>
          <pre>
{`# K-Means in Python
from sklearn.cluster import KMeans

kmeans = KMeans(n_clusters=3)
kmeans.fit(data)
labels = kmeans.labels_`}
          </pre>
        </article>

        {/* K-NN */}
        <article className="algo-explanation">
          <h2>3. K-Nearest Neighbors (K-NN)</h2>
          <p>
            K-NN is a simple yet powerful classification algorithm. It classifies new data points based on the majority label of the 'k' closest neighbors.
          </p>
          <pre>
{`# K-NN with sklearn
from sklearn.neighbors import KNeighborsClassifier

knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)
predictions = knn.predict(X_test)`}
          </pre>
        </article>

        {/* Single-Layer Perceptron */}
        <article className="algo-explanation">
          <h2>4. Single-Layer Perceptron</h2>
          <p>
            A Single-Layer Perceptron is a linear classifier that makes predictions based on a weighted sum of input features.
            It's a foundational building block for neural networks.
          </p>
          <pre>
{`# Perceptron in Python
from sklearn.linear_model import Perceptron

model = Perceptron()
model.fit(X_train, y_train)
predictions = model.predict(X_test)`}
          </pre>
        </article>

      </div>
    </div>
  );
};

export default Algorithm;
