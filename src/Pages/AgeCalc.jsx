import React from "react";
import { useState } from "react";
import { motion } from 'framer-motion';


function AgeCalc() {
    const [age, setAge] = useState();
    const [month, setMonth] = useState();
    const [weeks, setWeeks] = useState(); 
    const [days, setDays] = useState();
    const [hour, setHour] = useState();
    const [min, setMin] = useState(); 
    const [sec, setSec] = useState();
    
    const [result, setResult] = useState();

    function submit() {
        setMonth( age * 12);
        setWeeks( age * 52);
        setDays( age * 365);
        setHour( age * 8760);
        setMin( age * 525600);
        setSec( age * 31536000);

    }
    return (

        <motion.div
        className="container py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <>
            <h1>Age Calculator</h1>
            <p>enter age <input type='text' id='txt1' value={age} onChange={(e) => { setAge(e.target.value) }}></input></p>
            <button onClick={submit}>Submit</button>
            <br></br>

            <p>
               Total Months <input type='text' id='txt1' value={month} ></input>
               <br/>
               <br/>
               Total Weeks<input type='text' id='txt1' value={weeks} ></input>
               <br/>
               <br/>
               Total Days <input type='text' id='txt1' value={days} ></input>
               <br/>
               <br/>
               Total Hour <input type='text' id='txt1' value={hour} ></input>
               <br/>
               <br/>
               Total Min     <input type='text' id='txt1' value={min} ></input>
               <br/>
               <br/>
               Total Second <input type='text' id='txt1' value={sec} ></input>
               <br/>
            </p>


        </>
</motion.div>
        
    )

}

export default AgeCalc;