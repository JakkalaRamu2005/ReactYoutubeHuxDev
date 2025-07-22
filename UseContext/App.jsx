import React from 'react'
import ComponentA from './ComponentA';
import { createContext } from 'react'


export const Data = createContext();
export const Data1 = createContext();
const App = () => {

  const name="Ramu";
  const age = 22;
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA/>
        </Data1.Provider>

      </Data.Provider>
      
    </div>
  )
}

export default App
