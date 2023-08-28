import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const style = {border: '1px solid black', margin: '10px', padding: '10px'}

    const plusStateCountButtonHandler = () => {
        setCount(count+1) // 랜더링 일어남
    }

    const plusRefCountButtonHandler = () => {
        countRef.current ++;
        console.log(countRef.current) // 랜더링 안일어남 -> 콘솔창으로 확인 가능.
    }

    return (
        <>
            <div style={style}>State 영역입니다. {count} <br/> <button onClick={plusStateCountButtonHandler}>state 증가</button></div>
            <div style={style}>Ref 영역입니다. {countRef.current} <br/> <button onClick={plusRefCountButtonHandler}>Ref 증가</button></div>
        </>
    )
}

export default App