import React from "react";
import { useState } from "react";

function MaxMin() {
    const [value1, setValue1] = useState()
    const [value2, setValue2] = useState()
    const [result, setResult] = useState();

    function MaxNumber() {
        if (value1 > value2) {
            setResult("a is maximum");
        }
        else if (value2 > value1) {
            setResult("b is maximum");

        }
        else if (value1 == value2) {
            setResult("both r same values");

        }


    }
    function MinNumber() {
        if (value1 < value2) {
            setResult("a is Minimum");
        }
        else if (value2 < value1) {
            setResult("b is Minimum");

        }
        else if (value1 == value2) {
            setResult("both r same values");

        }


    }

    return (
        <>
            <h1>Maximum and Minimum</h1>
            <p>enter value:1 <input type='text' id='txt1' value={value1} onChange={(e) => { setValue1(e.target.value) }}></input></p>
            <p>enter value:2 <input type='text' id='txt2' value={value2} onChange={(e) => { setValue2(e.target.value) }}></input></p>
             <br />
            <br />
            <br />
            <button onClick={MaxNumber}>Max</button>
            <button onClick={MinNumber}>Min</button>

            <br />
            <br />
            {/* <button onClick={MinNumber}>Minimum</button> */}

            <label>{result}</label>
        </>

    )
}

export default MaxMin;