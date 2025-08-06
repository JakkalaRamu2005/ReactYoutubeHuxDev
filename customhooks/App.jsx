import useFetch from "./useFetch"

const App = () => {

  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')
  return (
    <div>
      {data && data.map(todo=>{
        return <p>{todo.title}</p>
      })}
    </div>
  )
}

export default App
