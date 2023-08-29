import { useSelector } from "react-redux";
import "./App.css";
// import counter from "./redux/config/modules/counter";
import { useDispatch } from "react-redux";
// import { PLUS_ONE, MINUS_ONE } from "./redux/config/modules/counter"; // 하드코딩
import { plusOne, minusOne } from "./redux/config/modules/counter";
import { useEffect, useState } from "react";
import { plusN, minusN } from "./redux/config/modules/counter";

function App() {
  const [number, setNumber]= useState(0);
  // 여기서 store에 접근하여 counter 값을 읽어 오고 싶다.
  // useSelector
  const counter = useSelector((state)=>{
    return state.counter;
  });

  // dispatch
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log(`number : ${number}`)
  }, [number])

  return <>
  <div>
    현재 카운트 : {counter.number}
  </div>
  <div>
    <input type="number"
      value={number}
      onChange={(event)=>{
        const {value} = event.target;
        setNumber(+value)
        }}/>
      {/* +를 추가하면 숫자로 바뀜 */}
  </div>
  <button onClick={()=>{
    // dispatch({ // 하드코딩
    //   type: PLUS_ONE,
    // })
    // dispatch(plusOne());
    dispatch(plusN(number));
  }}>+</button>
  <button onClick={()=>{
    // dispatch({ // 하드코딩
    //   type: MINUS_ONE,
    // })
    // dispatch(minusOne());
    dispatch((minusN(number)));
  }}>-</button>
  </>
}

export default App;
