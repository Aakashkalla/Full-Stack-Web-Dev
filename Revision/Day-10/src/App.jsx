import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [number, setNumber] = useState(0);

  function addPost(){
    setPosts([...posts,{
      title : "Hey",
      desc : "HELLO",
      time : "2 min"
    }])
  }

  const postComponents = posts.map(post=><BlogPost time={post.time}  title={post.title} desc={post.desc}/>)

  function increase(){
    setCount((count)=>count+1);
  }

  useEffect(()=>{
    setInterval(()=>{
      setNumber(number => number + 1)
    },1000)
  }, [])

  return (
    <>
      <div>
        <h1>Count:{count}</h1>
        <button onClick={increase}> Increase </button>
        <button onClick={()=>setCount(count => count - 1)}> Decrease </button>
        <button onClick={()=>setCount(count => count * count)}> Square </button>
        <button onClick={()=>setCount(count => (count / 2))}> Half </button>
        <button onClick={()=>setCount(0)}> Reset </button>
        {count===0 ? <h2>Count is zero</h2> : null}
        {count===Infinity ? <h2>BLUD RESET</h2> : null}
      <br/>

      <button onClick={()=>setVisible(prev=>!prev)}>Make Something Appear</button>
      {visible ? <p>Hello I am here</p> : null}
      </div>

      <h3>{number}</h3>

      <button onClick={addPost} >Add Post</button>
      {postComponents}
    </>
  )
}

function BlogPost(props){
  return (
    <div>
    <h3>{props.title}</h3>
    <h3>{props.desc}</h3>
    {props.time ? <h3>{props.time}</h3> : <h3>No Time Passed</h3>}
    </div>
  )
}

export default App
