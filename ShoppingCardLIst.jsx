import { useState } from 'react'


function App() {


  const [items,setItems] = useState([])
  const [name,setName] = useState('')
  const [quantity, setQuantity] = useState("")



  const handleSubmit=e=>{
    e.preventDefault()

    if(!name || !quantity) return;

    const newItem ={

      name,
      quantity: parseInt(quantity)
    };
    setItems((prevItems)=>[...prevItems,newItem])

    setName('')
    setQuantity('')


  }

  return(
    <div>
      <h1>Sopping list</h1>
      <form onSubmit={handleSubmit}>

        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Item Name' value={name}/>

         <input onChange={(e)=>setQuantity(e.target.value)} type="number" placeholder='Quantity' value={quantity}/>


         <button type="submit" >Add Item</button>
      </form>


      <ul>
        {items.map((item,index)=>
        <li key={index}>

          {item.name} - Quantity{item.quantity}
        </li>
        )}
      </ul>
    </div>
  )
}

export default App
