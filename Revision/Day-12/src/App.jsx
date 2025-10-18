import { createContext, useContext, useEffect, useState } from 'react'
import './App.css'
import {usePost, usePrev}  from './hooks/usePost';
import {useFetch} from './hooks/usePost'
const BulbContext = createContext();

function App() {
  const[currentPost, setCurrentPost] = useState(1)
  const {post} = usePost();
  const {finalData, loading} = useFetch('https://jsonplaceholder.typicode.com/posts/' + currentPost);
  const [count, setCount] = useState(1);
  const prev = usePrev(count)
  if(loading){
    return <div>LOADING WAIT</div>
  }
  return (
    <>
      <button onClick={()=>setCurrentPost(1)} >See Post Number One</button>
      <button onClick={()=>setCurrentPost(2)} >See Post Number Two</button>
      <button onClick={()=>setCurrentPost(3)} >See Post Number Three</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>{finalData.body}</h2>
      <h2>UserID : {post.userId}</h2>
      <LightBulb/>
      <button onClick={()=>setCount(c=>c+1)} >Increase Count</button>
      <p>Current Count :  {count}</p>
      <p>Previous Count : {prev}</p>
    </>
  )
}

function BulbProvider({children}){
  const [bulb, setBulb] = useState(true);
  return(
    <>
      <BulbContext.Provider value={{
        bulb : bulb,
        setBulb : setBulb 
      }}>
        {children}
      </BulbContext.Provider>
    </>
  )
}

function LightBulb(){
    
  return (
    <>
    <BulbProvider>
      <BulbState/>
      <ToggleBulbState/>
    </BulbProvider>
    </>
  )
}

function BulbState(){
  const {bulb} = useContext(BulbContext);
  return (
    <>
      {bulb ? <h1 style={{backgroundColor : "Green", color : 'white'}} >Bulb ON</h1> : <h1 style={{backgroundColor : "Red", color : 'white'}} >Bulb OFF</h1>}
    </>
  )

}

function ToggleBulbState(){
  const {setBulb} = useContext(BulbContext)
  return (
    <>
      <button onClick={()=>setBulb(c=>!c)}>Toggle The Bulb</button>
    </>
  )
}

export default App
