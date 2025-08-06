
import {useRef, React} from 'react'

const App = () => {

    const inputElement = useRef(null);
    
    const focusInput =()=>{
        inputElement.current.focus();
        inputElement.current.value = 'Ramu';
    }
    
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={()=> focusInput()}>Focus & Write Ramu</button>
    </div>
  )
}

export default App
