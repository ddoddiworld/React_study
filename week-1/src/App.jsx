import { useState } from "react";

function App() {
    // state를 사용하는 이유 : UI를 바꾸기 위해서다!
    // hook
    // const [state, setState] = useState('절대값');
    // const [count, setCount] = useState(0);
    // const [todoList, setTodoList] = useState[[]];

    // const [name, setName] = useState('김할아버지')
    const [fruits, setFruits]= useState("")

    return (
        <div> 과일 : <input 
                        value={fruits} 
                        onChange={(event)=>{setFruits(event.target.value)}}
                        // 이벤트의 경우 target이 필요. (콘솔로그 + F12 참고)
                        />
        <br/>
        {fruits}
    </div>) 
}

export default App;
