import React from "react";
import { useState } from "react";

function Swaping()
{
    const[value1, setValue1]=useState();
    const[value2, setValue2]=useState();
    //const[temp, setTemp]=useState();

    function submit()
    {
        
       setValue1(value2);
       setValue2(value1);

        console.log(value1);
        console.log(value2);
        

       //  setValue2(temp);
        //  console.log(temp1);
    //     var x=value1;
    //      var y=value2;
      
    //    setValue1(y);
    //    setValue2(x);
    }
    return(
        <>
            <h1>Swaping of two values</h1>
           a: <input type="text"value={value1} onChange={(e)=>{setValue1(e.target.value)}}></input>
            <br/>
            <br/>
           b: <input type="text"value={value2} onChange={(e)=>{setValue2(e.target.value)}}></input>
            <br/>
            <br/>
            <button onClick={submit}>Swap</button>
            {/* <label>{temp}</label> */}
        </>
    )
}
export default Swaping;