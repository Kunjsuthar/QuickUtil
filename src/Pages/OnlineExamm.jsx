import { func } from 'prop-types';
import React, { useEffect, useState } from 'react';

function OnlineExamm() {
    const [wrong,setWrong] = useState(0);
    const [Right,setRight] = useState(0);
    const [marks, setMarks] = useState("");
    const [result, setResult] = useState("");
const[attend,setAttendedQuestions]=useState("");
const[unattend,setunAttendedQuestions]=useState("");


    function wrongClicked(){
        setWrong(wrong+1);
    } 

    function rightClicked(){
        setRight(Right+1);
    } 
function attendclicked(){
    setAttendedQuestions(  )
}
    function resultClicked(){
        // setMarks((currVal)=> currVal = Right*5);
        setResult("Right:"+Right+", Wrong:"+wrong+", Marks:"+(Right*5));
    }

  return (
    <>
        <h1>Q1: 1+0 = ?</h1>
        <input type="radio" name='q1' value="1" onChange={rightClicked} />1<br/>
        <input type="radio" name='q1' value="2" onChange={wrongClicked} />2<br/>
        <input type="radio" name='q1' value="3" onChange={wrongClicked} />3<br/>
        <br />
        <h1>Q2: 1+1 = ?</h1>
        <input type="radio" name='q2' value="1" onChange={wrongClicked} />1<br/>
        <input type="radio" name='q2' value="2" onChange={rightClicked} />2<br/>
        <input type="radio" name='q2' value="3" onChange={wrongClicked} />3<br/>
        <br />
        <h1>Q3: 1+2 = ?</h1>
        <input type="radio" name='d3' value="1" onChange={wrongClicked} />1<br/>
        <input type="radio" name='d3' value="2" onChange={wrongClicked} />2<br/>
        <input type="radio" name='d3' value="3" onChange={rightClicked} />3<br/>
        <br />
        <button onClick={resultClicked} >Show Result</button>
        <br />
        Result: <label>{result}</label>
    </>
  );
}

export default OnlineExamm;
