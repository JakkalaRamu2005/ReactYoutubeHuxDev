import { useState, useEffect } from "react";

const App=()=>{
  const [data, setData] = useState([])

  useEffect(()=>{
    async function getData(params){

     const response = await fetch("https://jsonplaceholder.typicode.com/todos")
     const data = await response.json()

     if(data && data.length) setData(data)

    }
    getData();
  })

  return <div>
    <ul>
      {data.map((todo)=>(
        <li key={Math.random()}>{todo.title}</li>
      ))}
    </ul>
  </div>
}

export default App;