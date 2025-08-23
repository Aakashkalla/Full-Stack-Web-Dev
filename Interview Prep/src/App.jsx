import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [post, setPost] = useState([])
  // const [show,setShow] = useState(false);
  const[query,setQuery] = useState("");

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=> response.json())
    .then((data)=>setPost(data))
  },[])

  const filterPost = post.filter(p=>p.title.toLowerCase().includes(query.trim().toLowerCase()));
  return (
    <>
      <h1> Posts</h1>
      <input
        type='text'
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
        placeholder='Search By title'
      />
      {post.length > 0 && filterPost.length === 0 && (
        <p>No results found.</p>
      )}
      <ul>
        {filterPost.map((p) => (
          <li key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
