// src/pages/Blog.js
import React from 'react';
import './Blog.css';  // Link the Blog styles

function Blog() {
  return (
    <section className="blog-section">
      <h2>Latest Blog Posts</h2>
      <div className="blog-post">
      <h1>The Past: The Dawn of the Web</h1>
      <p>Web design has come a long way since the inception of the internet. From simple text-based pages to intricate and interactive user experiences, web design has evolved dramatically. This blog explores the journey of web design, highlighting key milestones in its past, the current trends shaping its present, and predictions for its future.</p>
      </div>




      <div className="blog-post">
      <h1>The Future of Quantum Computing</h1>
      <p>Quantum computing is a rapidly advancing field poised to revolutionize various industries...</p>

      <p>
                Quantum computers differ fundamentally from classical computers in how they process information. While classical computers use bits as the smallest unit of data, quantum computers use quantum bits or qubits. Qubits can exist in multiple states simultaneously, thanks to a phenomenon known as superposition. Additionally, qubits can be entangled, meaning the state of one qubit can depend on the state of another, no matter the distance between them. These properties allow quantum computers to perform parallel computations and solve certain types of problems much faster than classical computers.
            Potential Applications of Quantum Computing
            1.	Cryptography: One of the most well-known potential applications of quantum computing is in the field of cryptography. Quantum computers could break widely-used cryptographic protocols, such as RSA and ECC, by efficiently solving problems like integer factorization and discrete logarithms. This has led to the development of quantum-resistant cryptographic algorithms to secure data in the quantum era.
            2.	Drug Discovery and Material Science: Quantum computers can simulate molecular structures and chemical reactions with high accuracy, potentially revolutionizing drug discovery and material science. This capability could lead to the development of new medications, advanced materials, and more efficient chemical processes.
            3.	Optimization Problems: Many industries, including logistics, finance, and manufacturing, face complex optimization problems. Quantum computers can solve these problems more efficiently by exploring multiple solutions simultaneously. This could result in optimized supply chains, improved financial models, and better resource management.
            4.	Artificial Intelligence and Machine Learning: Quantum computing could enhance artificial intelligence and machine learning by accelerating the training of models and improving the performance of algorithms. Quantum algorithms, such as quantum support vector machines and quantum neural networks, hold promise for advancing AI research.
            </p>
      </div>
    </section>
  );
}

export default Blog;
