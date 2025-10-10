import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter count = {count}/>
      <button onClick={()=>setCount(c=>c+1)}>Increase Count</button>
    </>
  )
}

function Counter(props){
  useEffect(function (){
    console.log("First " + props.count);

    return  function(){
      console.log("Second " + props.count)
    }
  }, [props.count]);

  return (<>
    <div>Counter {props.count}</div>
  </>)
}

export default App
