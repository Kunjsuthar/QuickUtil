// Tools.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Tools = () => {
  return (
    <motion.div
    className="container py-5"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container py-5">
      <h2>Explore Our Tools</h2>
      {/* Include your card component here */}
      {/* Or if you've added all cards to the Home page, link them appropriately */}

      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card" id="tools-section">
              <div className="card-body">
                <h5 className="card-title">Age Calculator</h5>
                <p className="card-text">Find out how old you are down to the exact day!</p>
                <Link to="/AgeCalc" className="btn btn-primary">Calculate Now</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Checkbox Example</h5>
                <p className="card-text">Explore how checkboxes work with this interactive example.</p>
                <Link to="/Checkbox" className="btn btn-primary">Try It Out</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">For-Loop Example</h5>
                <p className="card-text">Understand for-loops with this simple demonstration.</p>
                <Link to="/Forloop1to10" className="btn btn-primary">Check It Out</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Max-Min Finder</h5>
                <p className="card-text">Quickly find the maximum and minimum values from your inputs.</p>
                <Link to="/Maxmin" className="btn btn-primary">Find Max-Min</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Odd or Even Identifier</h5>
                <p className="card-text">Enter a number and see if it’s odd or even.</p>
                <Link to="/OddEven" className="btn btn-primary">Check Now</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Online Exam Simulator</h5>
                <p className="card-text">Test your knowledge with this interactive online exam.</p>
                <Link to="/OnlineExamm" className="btn btn-primary">Take the Test</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Positive or Negative Checker</h5>
                <p className="card-text">Input a number to check if it’s positive or negative.</p>
                <Link to="/Positive" className="btn btn-primary">Check Now</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Prop Exchange Example</h5>
                <p className="card-text">Learn how to pass props between components dynamically.</p>
                <Link to="/PropEX" className="btn btn-primary">Explore Now</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Radio Button Example</h5>
                <p className="card-text">See how radio buttons work in forms.</p>
                <Link to="/Radio" className="btn btn-primary">Try It Now</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Salary Slip Generator</h5>
                <p className="card-text">Generate your salary slip with a few simple inputs.</p>
                <Link to="/Salary" className="btn btn-primary">Generate Slip</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Shopping System</h5>
                <p className="card-text">Test out an interactive shopping system example.</p>
                <Link to="/Shopping" className="btn btn-primary">Start Shopping</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sum & Grade Calculator</h5>
                <p className="card-text">Enter numbers to calculate their sum and grade.</p>
                <Link to="/Sum" className="btn btn-primary">Calculate Now</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Character or Number Swapping</h5>
                <p className="card-text">Swap characters or numbers effortlessly.</p>
                <Link to="/Swaping" className="btn btn-primary">Swap Now</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Number Field Example</h5>
                <p className="card-text">Test the number field with dynamic data validation.</p>
                <Link to="/Textbox" className="btn btn-primary">Try Now</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Timer Example</h5>
                <p className="card-text">Test a basic countdown timer in action.</p>
                <Link to="/Timer" className="btn btn-primary">Start Timer</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Advanced Timer with Count</h5>
                <p className="card-text">Try an advanced timer with dynamic button controls.</p>
                <Link to="/Timer2" className="btn btn-primary">Start Advanced Timer</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Unit Conversion Tool</h5>
                <p className="card-text">Convert units effortlessly with this handy tool.</p>
                <Link to="/Unitconverter" className="btn btn-primary">Convert Units</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Dynamic Textboxes</h5>
                <p className="card-text">Create dynamic text boxes with real-time interaction.</p>
                <Link to="/DynamicTextboxes" className="btn btn-primary">Try It Out</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Encryption Example</h5>
                <p className="card-text">Encrypt and decrypt text using this simple tool.</p>
                <Link to="/Encryption" className="btn btn-primary">Encrypt Now</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">File Upload Example</h5>
                <p className="card-text">Test a file upload example for your projects.</p>
                <Link to="/FileUpload" className="btn btn-primary">Upload File</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Loan Calculator</h5>
                <p className="card-text">Easily calculate your loan EMI and other details.</p>
                <Link to="/LoanCalculator" className="btn btn-primary">Calculate Loan</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Listbox Example</h5>
                <p className="card-text">Explore how to use list boxes with dynamic options.</p>
                <Link to="/Listbox" className="btn btn-primary">Try It Now</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Marksheet Generator</h5>
                <p className="card-text">Input scores and generate a marksheet instantly.</p>
                <Link to="/Marksheet" className="btn btn-primary">Generate Marksheet</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Min-Max Textboxes</h5>
                <p className="card-text">Learn how to use min and max limits with textboxes.</p>
                <Link to="/MinMaxTextboxes" className="btn btn-primary">Test It Out</Link>
              </div>
            </div>
          </div>
         
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cookie Example</h5>
                <p className="card-text">Learn how to set Cookies.</p>
                <Link to="/CookieExample" className="btn btn-primary">Test It Out</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sum of Even and Odd</h5>
                <p className="card-text">Input numbers and see the sum of evens and odds.</p>
                <Link to="/SumOfEvenAndOdd" className="btn btn-primary">Calculate Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </motion.div>
  );
};

export default Tools;
