import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <Greeting title={"aaa"} des={'aa'}/>
    </>
  )
}

function Greeting(props){
  return (<>
      <h1>{props.title}</h1>
      <h2>{props.des}</h2>
  </>)
}


export default App
