import React, {useState, useEffect, useRef } from 'react'

function App() {
    const [id, setId] = useState('')
    const idRef = useRef('');
    const pwRef = useRef('');

    // 화면이 랜더링될 때 어떤 작업을 하고 싶다! : useEffect
    useEffect(()=>{
        idRef.current.focus();
        // pwRef.current.focus();
    }, [])

    // useEffect
    useEffect(()=>{
        if(id.length >= 10) {
            pwRef.current.focus();
        }
    }, [id]) // []안에 넣으면 넣은 값이 바뀔때마다 업데이트 해 줘야 하기 때문에 넣어야 함!

    // useState
    // const idChk = (event) => {
    //     setId(event.target.value);
    //     // 리액트에서 state -> 배치 업데이트... 1개씩 늦게 업데이트가 됨!
    //     if(id.length === 9) {
    //         pwRef.current.focus();
    //     } else {
    //         idRef.current.focus();
    //     }
    // }

    return (
    <>
    <div>
        아이디 : <input type="text" value={id} onChange={(event)=>{setId(event.target.value)}} ref={idRef}></input>
    </div>
    <div>
        비밀번호 : <input type="password" ref={pwRef}></input>
    </div>
    </>
    )
}

export default App