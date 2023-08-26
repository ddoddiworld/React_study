import React, { useState } from "react";
import "./App.css"; // css 연결

function App() {
    const [users, setUsers] = useState([
        {id: 1, age: 20, name: '김뫄뫄'},
        {id: 2, age: 19, name: '박뫄뫄'},
        {id: 3, age: 27, name: '최뫄뫄'},
        {id: 4, age: 12, name: '장뫄뫄'},
        {id: 5, age: 30, name: '정뫄뫄'},
    ]);

    const [name, setName]= useState('');
    const [age, setAge] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const clickAddBtn = () =>{
        const newUser = {
            id : users.length + 1,
            age : age,
            name : name
        }

        setUsers([...users, newUser]);
    }

    const clickRemoveBtn = (id) => {
        const newUsers = users.filter((user)=> user.id !== id);
        setUsers(newUsers)
    }

    return (
        <>
        <div>
            이름: <input value={name} onChange={nameChangeHandler} type="text" />
            나이: <input value={age} onChange={ageChangeHandler} type="number" />
            <button onClick={clickAddBtn}>추가</button>
        </div>
        {users.map((item) => (
            <div key={item.id}>{item.age} - {item.name}
            <button onClick={()=>{clickRemoveBtn(item.id)}}>X</button>
            </div>
        ))}
        </>
    )
}

export default App;
