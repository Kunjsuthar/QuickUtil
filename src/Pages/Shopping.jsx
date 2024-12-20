import React from 'react';
import { useState } from 'react';

function Shopping()
{
    const[value1,setValue1]=useState();
    const[value2,setValue2]=useState();
    const[value3,setValue3]=useState();
    const[value4,setValue4]=useState();
    const[total,setprice]=useState();
    const[dis, setdiscount]=useState();
    const[net,setnetprice]=useState();

function mysubmit()
{
    setprice(parseInt(value3)* parseInt(value4))
    var t =(parseInt(value3)* parseInt(value4));
    var dis=0 ;
    if(t>1500)
        {
            dis=t*15/100;
            setdiscount(dis);
        }
    else if(t>1000)
        {
            dis=t*10/100;
            setdiscount(dis);
        }
    else if(t>500)
        {
            dis=t*5/100;
            setdiscount(dis);
         }

var net= dis-t
setnetprice(net)

// var name1
// setname1(name1)
}
return(
    <div>
        <h1>Shopping</h1>
        <p>Enter customer name:<input type='text' id='txt1' value={value1} onChange={(e)=>{setValue1(e.target.value)}}></input></p>
        <p>Enter product name:<input type='text' id='txt2' value={value2} onChange={(e)=>{setValue2(e.target.value)}}></input></p>
        <p>Enter price:<input type='text' id='txt3' value={value3} onChange={(e)=>{setValue3(e.target.value)}}></input></p>
        <p>Enter qty:<input type='text' id='txt4' value={value4} onChange={(e)=>{setValue4(e.target.value)}}></input></p>

        <p><input type='button' onClick={mysubmit} value="submit"></input></p>
        <p>Total:<input type='text' id='txt5' value={total}></input></p>
        <p>Discount:<input type='text' id='txt6' value={dis}></input></p>
        <p>Net price:<input type='text' id='txt7' value={net}></input></p>
        Thank you for Shopping:<label >{value1}</label>
    </div>
)

}
export default Shopping