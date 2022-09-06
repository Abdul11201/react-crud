import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import TodoList from './components/TodoList';



function App() {
  const [todos,setTodos] = useState([]);


  async function getData(){
    try {
        const res = await fetch('http://localhost:8000/todos');
        const data = await res.json();

        setTodos(data);  
    } catch (err) {
        if (err.name === "AbortError") {
            console.log("fetch aborted.");
        }
    }
}


  return (
    <div className="App">
      <div className="content">
        <Header getData={getData} />
        <TodoList getData={getData} todos={todos}/>
      </div>
    </div>
  );
}

export default App;
