import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [todo, setTodo] = useState("")
  
  const [todos, setTodos] = useState([]) 

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  }
  
  const handleEdit = (id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    setTodos(todos.filter(i => i.id !== id))
  }


  const handleDelete = (id) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  const handleAdd = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { id: generateId(), todo, isCompleted: false }])
    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleCheckbox = (id) => {
    let newTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item
    })
    setTodos(newTodos)
  }


  return (
    <>
      <NavBar />
      <div className='container mx-auto my-5 rounded-xl p-5 bg-slate-400 min-h-[80vh]'>
        <div className='addTodo my-5'>
          <h2 className='text-lg font-bold'>Add a ToDo</h2>
          <input onChange={handleChange} value={todo} className='bg-slate-200 w-1/2 p-2 rounded-md' type='text' />
          <button onClick={handleAdd} className='bg-slate-800 text-white hover:bg-slate-900 p-3 py-1 rounded-md mx-6 transition-all hover:font-bold cursor-pointer'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className='todos'>
          
          {todos.length === 0 && <div className="m-5">No Todos to display!</div>}
          {todos.map(item => {
            return (
              
              <div key={item.id} className="todo flex justify-between w-1/2 my-3 items-center">
                <div className="flex gap-5">
                  <input name={item.id} onChange={() => handleCheckbox(item.id)} type="checkbox" checked={item.isCompleted} />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                </div>
                <div className="buttons">
                  
                  <button onClick={() => handleEdit(item.id)} className='bg-slate-800 text-white hover:bg-slate-900 transition-all hover:font-bold p-3 py-1 rounded-md mx-2 cursor-pointer'>Edit</button>
                  <button onClick={() => handleDelete(item.id)} className='bg-slate-800 text-white hover:bg-slate-900 transition-all hover:font-bold p-3 py-1 rounded-md mx-2 cursor-pointer'>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App