import React, { useState } from "react";
import "./App.css"; // css 연결

function App() {
    // 분리 안한 css
    const style = {
        color : 'green'
    }

    const testArr = ['감자','고구마','오이','가지','옥수수']

    return (
    <div>
        {testArr
        .filter((item)=>{
            return item !== '오이';
        }).map((item)=>{
            return <div className="vege">{item}</div>
        }) 
        }
    </div>) 
}

export default App;
