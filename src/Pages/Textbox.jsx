import React from "react";
import { useState } from 'react';

function Textbox() {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event1) => {
        const newValue = event1.target.value;
        setValue(newValue);

        if (!/^[0-9]*$/.test(newValue)) {
            setError('Please enter only numbers.');
        } else {
            setError(null);
        }


    };
    return (
        <div>
            <h2>textbox example</h2>
            <label>
                Enter a number:
                <input type="text" value={value} onChange={handleInputChange}></input>
            </label>
            {
                <p style={{ color: 'red' }}>{error}</p>
            }
        </div>
    );
}
export default Textbox;