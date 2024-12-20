import React from "react";
import {useState} from "react";
import { Routes,Route} from "react-router-dom";


function Radio()
{
    const [isChecked , setIsChecked] =useState(false);

    const handleInputChange=(event1)=>
    {
        setIsChecked(event1.target.checked);
    };

    return (
        <div>
            <h2>Checkbox Example</h2>
            <label>
                <input type="radio" checked={isChecked} onChange={handleInputChange}>

                </input>
                Check me
            </label>

            <p>{isChecked ? 'male': 'female'}</p>
        </div>
    );
}
export default Radio;