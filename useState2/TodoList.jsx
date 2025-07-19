import React, { useState } from 'react'

const TodoList = () => {

    const [todos, setTodos] = useState([])

    const [inputvalue, setInputValue] = useState("");

const handleSubmit=(e)=>{
    e.preventDefault()

    if(inputvalue.trim()){
        setTodos([...todos,inputvalue])
        setInputValue("");

    }
}

const handleChange=(e)=>{
    setInputValue(e.target.value);

}

  return (
    <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit} >

            <input value={inputvalue} placeholder="add a new Todo" type="text" onChange={handleChange} />
            <button type="submit">Add Todo</button>
        </form>


        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>{todo}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default TodoList
