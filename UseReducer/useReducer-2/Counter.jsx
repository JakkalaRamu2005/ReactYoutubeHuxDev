import React from 'react'
import {useState, useReducer} from 'react'

import {counterReducer,initialState } from './CounterReducer'

const Counter = () => {

const [state, dispatch] = useReducer(counterReducer, initialState)

const [inputValue, setInputValue] = useState(0);


const handleIncrement =()=> dispatch({type:'increment'});
const handleDecrement=()=> dispatch({type:'decrement'});


const increaseByValue=()=>{
    dispatch({type: 'incrementByAmount', payload: Number(inputValue)})
}

const decreaseByValue=()=>{
    dispatch({type: 'decrementByAmount', payload: Number(inputValue)})
}

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>


       <div>
        <input type="number" value={inputValue} onChange={e=>setInputValue(e.target.value)} />
        <button onClick={increaseByValue}>Add</button>
        <button onClick={decreaseByValue}>Subtract</button>
        
        
    </div>
    </div>

   
  )
}

export default Counter
