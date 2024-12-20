import React from 'react';
import './Hero.css'; // Import your animation styles
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleScroll = () => {
    const section = document.getElementById('tools-section'); // Select the tools section by ID
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title animate-title">Welcome to QuickUtil</h1>
        <p className="hero-subtitle animate-subtitle">
          Your one-stop solution for all utility tools
        </p>
       
        
           <Link to="/tools" className="btn btn-primary explore-tools-btn">
           Explore Tools</Link>
          
      </div>
    </div>
  );
};

export default Hero;
