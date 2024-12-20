import React from "react";
import { useState } from "react";

function OddEven() {
    const [value1, setValue1] = useState()
    const [result, setResult] = useState();

    function OddEven() {
        if (value1 % 2==0) {
            setResult("even");
        }
        else if (value1 % 2==1) {
            setResult("odd");

        }
 } 

    return (
        <>
            <h1>Odd And Even</h1>
            <p>enter value <input type='text' id='txt1' value={value1} onChange={(e) => { setValue1(e.target.value) }}></input></p>
            <button onClick={OddEven}>Submit</button>
            <br />
            <br />
            {/* <button onClick={MinNumber}>Minimum</button> */}

            <label>{result}</label>
        </>

    )
}

export default OddEven;