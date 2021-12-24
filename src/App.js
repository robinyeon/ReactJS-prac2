import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return
    }
    setTodos(currentArr => [...currentArr, todo]);
    setTodo("");
  }
  console.log(todos);
  return (
    <div className="App">
      <h1>My To-Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder='plz write your todo :)' />
        <button>ADD</button>
      </form>
      <hr />
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>

    </div>
  );
}

export default App;
