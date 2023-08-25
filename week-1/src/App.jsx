import React, { useState } from "react";

function App() {
    const [num, setNum] = useState(0);
    // [] 안에 있는 num, setNum은 fn이다. 배열처럼 보이지만... 아님

    return (
    <div style={{margin:'50px'}}>
        <p>{num}</p>
        <button onClick={()=>{setNum(num-1)}}>-</button>
        <button onClick={()=>{setNum(num+1)}}>+</button>
    </div>) 
}

export default App;
