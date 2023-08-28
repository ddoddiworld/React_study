import React, { useCallback } from 'react'
import { useState } from 'react'
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'


function App() {
  console.log('App 랜더링');
  const [count, setCount]= useState(0);

  // 1증가
  const plus = () => {
    setCount(count + 1)
  }

  // 1감소
  const minus = () => {
    setCount(count - 1)
  }

  // 초기화
  // 함수도 객체기 때문에
  const reset = useCallback(() => {
    console.log(`${count}에서 0으로 변경되었습니다.`); // 0에서 0으로 변경되었습니다.
    setCount(0);
  }, [count]); // dependency array

    return (
      <>
        <h3>카운트 예제입니다!</h3>
        <p>현재 카운트 : {count}</p>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>

        <div style={{display:'flex', marginTop:'10px'}}>
          <Box1 reset={reset}></Box1>
          <Box2></Box2>
          <Box3></Box3>
        </div>
      </>
    )
}

export default App