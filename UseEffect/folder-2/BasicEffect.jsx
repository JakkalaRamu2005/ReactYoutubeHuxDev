import React from 'react'
import {useEffect} from "react";

const BasicEffect = () => {

    useEffect(()=>{
        console.log('basic component mounted')

    },[])
  return (
    <div>
   <h1>Check the console to see the msg</h1>
    </div>
  )
}

export default BasicEffect
