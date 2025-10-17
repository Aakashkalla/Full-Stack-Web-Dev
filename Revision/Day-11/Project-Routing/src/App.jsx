import { useRef, useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
function App() {

  const [count, setCount] = useState(0)
  const inputRef = useRef(); 
  const timerRef = useRef();

  function focusOnInput(){
    inputRef.current.focus()
  }

  function startClock(){
    if (timerRef.current) return;
    let value = setInterval(()=>{
      setCount(c => c + 1);
    }, 1000)
    timerRef.current = value;
  }

  function stopClock(){
    clearInterval(timerRef.current)
    timerRef.current = null;
  }

  return (
    <>  
      <BrowserRouter>
        <Link to='/a'> <button>A Page</button> </Link>
        <Link to='/'> <button>Landing Page</button> </Link>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/a' element={<A/>} />
          <Route path='*' element={<ERROR/>} />
        </Routes>
      </BrowserRouter>
      <input ref={inputRef}  type={"text"} placeholder='name'></input>
      <input  type={"text"} placeholder='password'></input>
      <button onClick={focusOnInput} >Submit</button>

      <h1>{count}</h1>
      <button onClick={startClock}>Start Timer</button>
      <button onClick={stopClock}>Stop Timer</button>
      {timerRef.current!=null ? <h1>Timer Started</h1> : <h1>Timer STopped</h1>}
    </>
  )
}

function Landing(){
  return <h1>Hello Landing Here</h1>
}

function A(){
  return <h1>A here</h1>
}

function ERROR(){
  return <>
    <h1>Sorry Page Not Found</h1>
    <Link to='/' ><button>Go Home</button></Link>
  </>
}

export default App
