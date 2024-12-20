import React from 'react';
import { useState } from 'react';

function Salary()
{
    
    const[value1,setValue1]=useState();
    const[value2,setValue2]=useState();
    const[hra,sethra]=useState();
    const[da,setda]=useState();
    const[total,settotal]=useState();
    const[pf,setpf]=useState();
    const[fs,setfs]=useState();

function mysalary()
{
    sethra(value2*10/100);
    setda(value2*5/100);
    
    //var t=parseInt(value2)+parseInt(hra)+parseInt(da);
    // var t=(parseInt( value2)+(hra)+(da));
    // settotal(t);

    //settotal(parseInt( value2)+(value2*10/100)+(value2*5/100));
    
    var hra1=value2*10/100;
    var da1=value2*5/100;
    var t=(parseInt( value2)+(hra1)+(da1));
    settotal(t);
    var pf1=t*6/100;
    setpf(pf1);

     var fs1=(parseInt(t)-(pf1))
     setfs(fs1);


}
return(
    <div>
        <h1>Salary</h1>
        <p>Enter employee name:<input type='text' id='txt1' value={value1} onChange={(e)=>{setValue1(e.target.value)}}></input></p>
        <p>Enter salary:<input type='text' id='txt2' value={value2} onChange={(e)=>{setValue2(e.target.value)}}></input></p>
        <p><input type='button' onClick={mysalary} value="submit"></input></p>
        <p>Hra:<input type='text'  value={hra}></input></p>
        <p>Da:<input type='text' value={da}></input></p>
        <p>Total:<input type='text'  value={total}></input></p>
        <p>Pf:<input type='text'  value={pf}></input></p>
        <p>Fs:<input type='text'  value={fs}></input></p>
    </div>
)
    
}

export default Salary