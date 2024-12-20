// About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
    <motion.div
      className="container py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}  // Adjust the timing

        >   
    <div className="container py-5">
      <h2>About QuickUtil</h2>
      <p>
        QuickUtil is a comprehensive utility tool designed to simplify everyday tasks, such as calculating age, working with checkboxes, and performing unit conversions. With a user-friendly interface and responsive design, it’s easy to navigate and use across all devices.
      </p>
      <p>
        Developed with a focus on functionality and ease of use, QuickUtil offers a range of tools to assist developers, students, and professionals alike. Whether it's a loan calculator or encryption example, we aim to provide quick and reliable solutions.
      </p>
    </div>

    </motion.div>
    
    </>

  );
};

export default About;
