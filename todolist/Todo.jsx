import React, { useState } from 'react'
import "./index.css"

const Todo = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    const handleFunction = ()=>{
        const newTodo = input
        if(newTodo.trim() !== "")
            setTodos([...todos, newTodo])
        setInput('');
    }

   
    // deleting the todo 
    const deleteTodo=(id)=>{
        const updatedTodo = todos.filter((_,id)=>id!==id)
        setTodos(updatedTodo)
    }
  return (
    <div>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder='Enter the todo' />
        <button onClick={handleFunction}>Submit</button>   

        <ul>
        {todos.map((todo, index)=>(
            <li key={index}>{todo}
            
            <button onClick={()=>deleteTodo(index)}>Delete</button>
            </li>
        ))}
        </ul>   
    </div>
  )
}

export default Todo

