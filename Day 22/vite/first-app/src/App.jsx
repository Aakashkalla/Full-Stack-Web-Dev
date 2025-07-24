import NavBar from "./components/NavBar"
import Card from "./components/Card"
import { useState,useEffect } from "react"
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    alert(`Hey Welcome`)
  }, [])
  
  useEffect(() => {
    alert(`Count has been changed`)
  }, [count])
  
  return (
    <>
      <NavBar />
      <br></br>
      <div className="cards">
        <Card title="Card 1" content="Hey Lol" />
        <Card title="Card 2" content="Hey Lol" />
        <Card title="Card 3" content="Hey Lol" />
        <Card title="Card 4" content="Hey Lol" />
      </div>
      <div>
        The count is {count}
        <button onClick={()=>{setCount(count+1)}}>Update Count</button>
      </div> 
    </>
  )
}

export default App
