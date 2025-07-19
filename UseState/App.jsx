import React from 'react'
import {useState} from 'react'
import "./ComponentOne"
import "./ComponentTwo"
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'

const App = () => {


  const [count, setCount] = useState(0);



  return (
    <div>

      <ComponentOne count={count} onClickHandler={()=>setCount(count+1)}/>
      <ComponentTwo count={count} onClickHandler={()=>setCount(count+1)}/>
      
    </div>
  )
}

export default App
