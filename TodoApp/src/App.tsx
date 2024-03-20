import React, { useEffect, useState } from "react";
import './App.css'
import Todolist from "./components/Todolist";
import { baseURL } from "./utils/constant";
import axios from 'axios';


function App() {
  interface TodoItem {
    _id: string;
    toDo: string;
  }
 
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    axios.get(`${baseURL}/home`)
      .then((res) => {
        console.log("Received todos:", res.data);
        setTodos(res.data); 
      })
      .catch((err) => {
        console.log("Error caught:", err);
      });
  }, []);

  const saveTodo = () => {
    axios.post(`${baseURL}/save`, { toDo: input })
      .then((res) => {
        console.log("Todo saved:", res.data);
       setInput("");
      })
      .catch((err) => {
        console.error("Error while saving todo:", err);
      });
  };

  return (
    <main> 
      <div className="container">
        <h1 className="title">TODO APP</h1>
        <div className="inputholder">
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={saveTodo}>Add</button>
      </div>
      <div className="Todolist">
        <Todolist />
        <Todolist />
        <Todolist />
      </div>
      </div>
     
    </main>
  );
}

export default App;
