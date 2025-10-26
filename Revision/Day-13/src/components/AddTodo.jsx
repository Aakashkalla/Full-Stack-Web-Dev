import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    function addTodofn(){
        if(!input.trim()) return;
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <>
        <h2>Add Todos</h2>
        <input value={input}  type='text' placeholder='Todo'
        onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={addTodofn} >Add Todo</button>
    </>
  )
}

export default AddTodo