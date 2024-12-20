import React from "react";
import { useState } from "react";

function Positive() {
    const [value1, setValue1] = useState()
    const [result, setResult] = useState();

    function Positive() {
        if (value1 > 0) {
            setResult("positive");
        }
        else if (value1 < 0) {
            setResult("negative");

        }


    }
    return (
        <>
            <h1>Positive And Negative </h1>
            <p>enter number <input type='text' id='txt1' value={value1} onChange={(e) => { setValue1(e.target.value) }}></input></p>
             <br />
            <button onClick={Positive}>Answer</button>
            <br />
            <br />
            <label>{result}</label>
        </>

    )
}

export default Positive;