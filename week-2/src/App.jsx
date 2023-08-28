import React from 'react'
import {useState} from 'react'

function App() {
    const [number, setNumber] = useState(0);

    const addNum = () => {
        // 기존 업데이트 방법
        // setNumber(number + 1)
        // 배치 업데이트

        // 함수형 업데이트 방법
        setNumber((currentNumber)=>{
            return currentNumber + 1
        })
        setNumber((currentNumber)=>{
            return currentNumber + 1
        })
        setNumber((currentNumber)=>{
            return currentNumber + 1
        })

        // 랜더링이 잦다 -> 성능에 이슈가 있다는 것... 불필요한 랜더링을 피하려고 함
    }

    return (
    <div>
        Number : {number}

        <button onClick={addNum}>누르면 카운트 추가!</button>
    </div>
    )
}

export default App