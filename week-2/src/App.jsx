import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
    const [value, setValue] = useState('');

    // 의존성 배열
    // 이 배열에 값을 넣으면 그 값이 바뀔때만 useEffect를 실행한다.

    // clean up
    useEffect(()=>{ // 랜더링 될때마다 실행됨
        console.log(`hello! ${value}`)

        return () => {
            console.log('나 사라져요...')
        }
    }, [value])

    return (
    <div>
        <input
        type="text"
        value={value}
        onChange={(event)=>{setValue(event.target.value)}}></input>
    </div>
    )
}

export default App