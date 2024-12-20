// Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (

    <motion.div
    className="container py-5"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>© 2024 QuickUtil. All Rights Reserved.</p>
        <p>Developed by Kunj Suthar</p>
        <div>
          <a href="https://github.com/Kunjsuthar" target="_blank" rel="noopener noreferrer" className="text-white me-4">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/kunj-suthar-44a697299/" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
      
    </footer>
    </motion.div>
  );
};

export default Footer;
