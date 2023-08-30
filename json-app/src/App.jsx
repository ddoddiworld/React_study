import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((json)=>{
      setData([...json])
      return console.log(json)})
  },[])

  return (
    <div>
      <h3>JSON Placeholder DATA</h3>
      {
        data.map((item)=>{
          return (
            <div style={{border: '1px solid black',margin:'5px'}}>
              <ul>
                <li>{item.userId}</li>
                <li>{item.id}</li>
                <li>{item.title}</li>
                <li>{item.body}</li>
              </ul>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
