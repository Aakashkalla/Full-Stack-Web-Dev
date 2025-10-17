import './App.css'

function App() {
  const todos = [{
    title : "Go to Gym",
    done : false
  },{
    title : "Study",
    done : true
  }];

  const todosComponent = todos.map(todo => <Todo title={todo.title} done={todo.done}/>)

  return (
    <>
      <div style={{display : "flex", flexDirection : 'column', gap : '10'}}>
      <Card>
        <h1>Hello</h1>
      </Card>
      <Card>
        <h2>Hello</h2>
      </Card>
      <Card>
        <h3>Hello</h3>
      </Card>
      </div>
      <br/>
      {todosComponent}
    </>
  )
}

function Card({children}){
  return (
    < >
      <div style={{backgroundColor:"red", color:"white"}}>
      {children}
      </div>
    </>
  );
}

function Todo({title, done}){
  return <>
    <h1>{title}</h1>
    {done ? <h2>Done</h2> : <h2>Not Done</h2>}
  </>
}

export default App
