import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold text-indigo-500 mb-10 select-none drop-shadow-lg">
        Redux Todo App
      </h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
