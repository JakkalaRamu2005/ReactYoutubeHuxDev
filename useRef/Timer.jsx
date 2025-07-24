import React from 'react'
import {useRef, useEffect, useState} from 'react'
const Timer = () => {
    const [count, setCount] = useState(0);
    const interValRef = useRef(null);

    useEffect(()=>{
        interValRef.current = setInterval(() => {

            setCount(prevCount => prevCount+1);
            
        }, 1000);

        return ()=>{
            clearInterval(interValRef.current)
        }
    },[])
  return (
    <div>
      <h1>Timer : {count} seconds</h1>
      <button onClick={()=> clearInterval(interValRef.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer
