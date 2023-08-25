import React, { useState } from "react";

function App() {
    const [obj, setObj] = useState({
        name : 'sy',
        age : 10
    });

    console.log(obj)

    return (
    <div>
        <div>{obj.name}</div>
        <button
        onClick={()=>{
            const obj2 = {...obj}; // obj를 복사를 하는데 완전히 새로운 방법으로 복사하는 방법. 주소값이 새로 할당됨.
            // 배열이나 객체 나오면 스프레드 문법 쓸 준비 하세요.
            obj2.name = 'shasha';
            setObj(obj2);
            }}>버튼</button>
    </div>) 
}

export default App;
