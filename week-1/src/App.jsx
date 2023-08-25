import { useState } from "react";

function App() {
    // state를 사용하는 이유 : UI를 바꾸기 위해서다!
    // hook
    // const [state, setState] = useState('절대값');
    // const [count, setCount] = useState(0);
    // const [todoList, setTodoList] = useState[[]];

    const [id, setId]= useState("");
    const [pw, setPw]= useState("");

    return (
        <div>
            <p>
                아이디 : <input 
                        value={id} 
                        onChange={(event)=>{setId(event.target.value)}}
                        // 이벤트의 경우 target이 필요. (콘솔로그 + F12 참고)
                        />
            </p>
            <p>
                비밀번호 : <input type={"password"}
                    value={pw} 
                    onChange={(event)=>{setPw(event.target.value)}}
                    // 이벤트의 경우 target이 필요. (콘솔로그 + F12 참고)
                    />
            </p>
            <button onClick={()=>{
                alert(`고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${pw}입니다.`)
                // document.querySelector('input').value = ""; // 인풋 값 초기화
                setId(''); // 초기화
                setPw(''); // 초기화
                }}>로그인</button>
        <br/>
    </div>) 
}

export default App;
