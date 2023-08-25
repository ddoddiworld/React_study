import React, { useState } from "react";
import "./App.css"; // css 연결

function App() {
    // 분리 안한 css 작성 법
    const style = {
        color : 'green'
    }

    return (
    <div>
        <ul className="vege" style={style}>
            <li>감자</li>
            <li>고구마</li>
            <li>오이</li>
            <li>가지</li>
            <li>옥수수</li>
        </ul>
    </div>) 
}

export default App;
