import React from 'react'
import {Data,Data1} from "./App"
import { useContext } from 'react'
const ComponentC = () => {

const userName =   useContext(Data)
const Age = useContext(Data1)
  
  return (
    <h1>My name is: {userName} and I'm {Age} years old</h1>
  )
}

export default ComponentC
