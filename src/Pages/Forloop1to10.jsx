import React from "react";
import { useState } from "react";

// aa ek component kevay function and enu badhu j coding e perticular component ma thay
//kem ke aa ek jsx file ma multiple component banai shakay



const Forloop1to10 = () => {
  const [numbers, setNumbers] = useState("");

  const handleClick = () => {
    let numString = "";
    for (let i = 1; i <= 10; i++) {
      numString += i + ", ";
    }
    setNumbers(numString);
  };

  return (
    <div>
      <h2>Numbers from 1 to 10:</h2>
      <button onClick={handleClick}>Print Numbers</button><br />
      <h3><label> Result: {numbers}</label></h3>  
    </div>
  );
};

export default Forloop1to10;

// You can uncomment and modify the following code similarly for numbers 11 to 20:

// export const Forloop11to20 = () => {
//   const [numbers, setNumbers] = useState("");

//   const handleClick = () => {
//     let numString = "";
//     for (let i = 11; i <= 20; i++) {
//       numString += i + ", ";
//     }
//     setNumbers(numString);
//   };

//   return (
//     <div>
//       <h2>Numbers from 11 to 20:</h2>
//       <button onClick={handleClick}>Print Numbers</button>
//       <label>{numbers}</label>
//     </div>
//   );
// };
