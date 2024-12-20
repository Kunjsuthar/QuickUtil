import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap first
import './index.css';  // Then your custom styles
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Navbar from './Components/Navbar'; // Import the Navbar
import AgeCalc from './Pages/AgeCalc';
import Checkbox from './Pages/Checkbox'
import Forloop from './Pages/Forloop'
import Forloop1to10 from './Pages/Forloop1to10'
import MaxMin from './Pages/MaxMin'
import OddEven from './Pages/OddEven'
import OnlineExamm from'./Pages/OnlineExamm'
import Positive from'./Pages/Postive'
import PropEx from './Pages/PropEx'
import Radio from './Pages/Radio'
import Salary from './Pages/Salary';
import Shopping from './Pages/Shopping';
import Sum from './Pages/Sum';
import Swaping from './Pages/Swaping';
import Textbox from './Pages/Textbox';
import Timer from './Pages/Timer';
import Timer2 from './Pages/Timer2';
import Unitconverter from './Pages/Unitconverter';
import DynamicTextboxes from './Pages/DynamicTextboxes';
import Encryption from './Pages/Encryption';
import FileUpload from './Pages/Fileupload';
import LoanCalculator from './Pages/LoanCalculator';
import Listbox from './Pages/Listbox';
import Marksheet from './Pages/Marksheet';
import MinMaxTextboxes from './Pages/MinMaxTextoxes';
import SumOfEvenAndOdd from './Pages/SumofEvenAndIOdd';
import CookieExample from './Pages/CookieExample'
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Tools from './Components/Tools';
import { AnimatePresence } from 'framer-motion';

// Import more pages...

const App = () => {
  return (
    
    <Router>
         <Navbar />
         <AnimatePresence mode="wait">
      <div>
      <TransitionGroup>
      <CSSTransition classNames="fade" timeout={300}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AgeCalc" element={<AgeCalc />} />
          <Route path="/Checkbox" element={<Checkbox/>} />
          <Route path="/CookieExample" element={<CookieExample/>} />
          <Route path="/Forloop" element={<Forloop/>} />
          <Route path='/Forloop1to10'element={<Forloop1to10/>}/>
          <Route path='/MaxMin' element={<MaxMin/>}/>
          <Route path='/OddEven' element={<OddEven/>}/>
          <Route path='/OnlineExamm' element={<OnlineExamm/>}/>
          <Route path='/Positive' element={<Positive/>}/>
          <Route path='/PropEx' element={<PropEx/>}/>
          <Route path='/Radio' element={<Radio/>}/>
          <Route path='/Salary' element={<Salary/>}/>
          <Route path='/Shopping' element={<Shopping/>}/>
          <Route path='/Sum' element={<Sum/>}/>
          <Route path='/Swaping' element={<Swaping/>}/>
          <Route path='/Textbox' element={<Textbox/>}/>
          <Route path='/Timer' element={<Timer/>}/>
          <Route path='/Timer2' element={<Timer2/>}/>
          <Route path='/Unitconverter' element={<Unitconverter/>}/>
          <Route path='/DynamicTextboxes' element={<DynamicTextboxes/>}/>
          <Route path='/Encryption' element={<Encryption/>}/>
          <Route path='/FileUpload' element={<FileUpload/>}/>
          <Route path='/LoanCalculator' element={<LoanCalculator/>}/>
          <Route path='/Listbox' element={<Listbox/>}/>
          <Route path='/Marksheet' element={<Marksheet/>}/>
          <Route path='/MinMaxTextboxes' element={<MinMaxTextboxes/>}/>
          <Route path='/SumOfEvenAndOdd' element={<SumOfEvenAndOdd/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tools" element={<Tools />} />
          
         
          {/* More routes */}
        </Routes>
        </CSSTransition>
        </TransitionGroup>
      </div>
      </AnimatePresence>
      <Footer/>
    </Router>
  );
};

export default App;
