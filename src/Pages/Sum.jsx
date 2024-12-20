import React from 'react'
import { useState } from 'react'

function Sum() {
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [value3, setValue3] = useState();
    const [value4, setValue4] = useState();
    const [value5, setValue5] = useState();
    const [ans, setAns] = useState();
    const [avg, setAvg] = useState();
    const [grade, setGrade] = useState();

    function mysum() {
        setAns(parseInt(value1) + parseInt(value2) + parseInt(value3) + parseInt(value4) + parseInt(value5))

        setAvg((parseInt(value1) + parseInt(value2) + parseInt(value3) + parseInt(value4) + parseInt(value5)) / 5)


        var g = ((parseInt(value1) + parseInt(value2) + parseInt(value3) + parseInt(value4) + parseInt(value5)) / 5)
        //var gd="saumya";
        //grade(g);
        //setGrade(gd);
        if (g > 80) {
            var gd = "A";
            setGrade(gd);
        }
        else if (g > 70) {
            var gd = "B";
            setGrade(gd);
        }
        else if (g > 60) {
            var gd = "C";
            setGrade(gd);
        }
        else if (g > 50) {
            var gd = "D";
            setGrade(gd);
        }
        else if (g < 35) {
            var gd = "You are fail";
            setGrade(gd);
        }

    }
    // function mysub()
    // {
    //     setAns(parseInt(value1)-parseInt(value2)-parseInt(value3)-parseInt(value4)-parseInt(value5))
    // }


    return (
        <div>
            <h1>Sum</h1>
            <p>enter value:1 <input type='text' id='txt1' value={value1} onChange={(e) => { setValue1(e.target.value) }}></input></p>
            <p>enter value:2 <input type='text' id='txt2' value={value2} onChange={(e) => { setValue2(e.target.value) }}></input></p>
            <p>enter value:3 <input type='text' id='txt3' value={value3} onChange={(e) => { setValue3(e.target.value) }}></input></p>
            <p>enter value:4 <input type='text' id='txt4' value={value4} onChange={(e) => { setValue4(e.target.value) }}></input></p>
            <p>enter value:5 <input type='text' id='txt5' value={value5} onChange={(e) => { setValue5(e.target.value) }}></input></p>

            <p><input type='button' id='btn1' value="sum" onClick={mysum}></input></p>
            {/* <p><input type='button' id='btn2' value="sub" onClick={mysub}></input></p> 
         <p><input type='button' id='btn3' value="avg" onClick={myavg}></input></p>  */}

            <p>result:<input type='text' id='txt3' value={ans} ></input></p>
            <p>avg:<input type='text' id='btn4' value={avg}></input></p>
            <p>grade:<input type='text' id='btn5' value={grade}></input></p>
        </div>
    )
}

export default Sum;