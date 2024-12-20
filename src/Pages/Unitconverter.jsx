// make a program for 
// use 1 textbox for input and one for redult for valid inputs
//1.doller to rs,2.rs to doller,3 cm to foot,4.km to foot,5. pound to kg,6. feranhit to celcius, 7.exit.
import React, { useState } from 'react';

 function Unitconverter() {
  const [inputValue, setInputValue] = useState(''); // for input value
  const [convertedValue, setConvertedValue] = useState(''); // for converted result
  const [conversionType, setConversionType] = useState(''); // for selecting conversion type

  const handleConversion = () => {
    let value = parseFloat(inputValue);
    if (isNaN(value)) {
      setConvertedValue('Invalid input');
      return;
    }

    switch (conversionType) {
      case 'DollarToRs':
        setConvertedValue((value * 82.50).toFixed(2) + ' ₹'); // Conversion rate as example
        break;
      case 'RsToDollar':    
        setConvertedValue((value / 82.50).toFixed(2) + ' $');
        break;
      case 'CmToFoot':
        setConvertedValue((value / 30.48).toFixed(2) + ' ft');
        break;
      case 'KmToFoot':
        setConvertedValue((value * 3280.84).toFixed(2) + ' ft');
        break;
      case 'PoundToKg':
        setConvertedValue((value * 0.453592).toFixed(2) + ' kg');
        break;
      case 'FahrenheitToCelsius':
        setConvertedValue(((value - 32) * 5 / 9).toFixed(2) + ' °C');
        break;
      case 'Exit':
        setConvertedValue('Exited');
        break;
      default:
        setConvertedValue('Select a valid conversion');
    }
  };

  return (
    <div>
      <h1>Unit Converter</h1>

      {/* Input for number */}
      <input
        type="text"
        placeholder="Enter value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Dropdown for conversion type */}
      <select onChange={(e) => setConversionType(e.target.value)} value={conversionType}>
        <option value="">Select conversion type</option>
        <option value="DollarToRs">Dollar to Rs</option>
        <option value="RsToDollar">Rs to Dollar</option>
        <option value="CmToFoot">Cm to Foot</option>
        <option value="KmToFoot">Km to Foot</option>
        <option value="PoundToKg">Pound to Kg</option>
        <option value="FahrenheitToCelsius">Fahrenheit to Celsius</option>
        <option value="Exit">Exit</option>
      </select>

      {/* Button to trigger conversion */}
      <button onClick={handleConversion}>Convert</button>

      {/* Display result */}
      <input
        type="text"
        readOnly
        value={convertedValue}
        placeholder="Result"
      />
    </div>
  );
}
export default  Unitconverter