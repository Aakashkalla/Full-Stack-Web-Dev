import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice.js'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  const startEdit = (todo) => {
    setEditId(todo.id)
    setEditText(todo.text)
  }

  const saveEdit = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }))
      setEditId(null)
      setEditText('')
    }
  }

  const cancelEdit = () => {
    setEditId(null)
    setEditText('')
  }

  return (
    <div className="max-w-md mx-auto mt-12">
      <h2 className="mb-6 text-3xl font-bold text-indigo-400 text-center">My Todos</h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            className="flex items-center justify-between bg-zinc-800 px-5 py-3 rounded-lg shadow transition"
            key={todo.id}
          >
            <div className="flex-1">
              {editId === todo.id ? (
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    className="bg-zinc-700 border-none text-white px-4 py-2 rounded focus:ring-2 focus:ring-indigo-500 w-full"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    autoFocus
                  />
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded font-medium transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded font-medium transition"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-lg text-white">{todo.text}</span>
                  <button
                    onClick={() => startEdit(todo)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition text-sm"
                    title="Edit"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="ml-3 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded font-medium transition"
              title="Delete"
            >
              {/* Trash Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
