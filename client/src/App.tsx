import  { useEffect, useState } from "react";
import './App.css';
import Todolist from "./components/Todolist";
import { baseURL } from "./utils/constant";
import Popup from "./components/Popup";
import axios from 'axios';

interface TodoItem {
  _id: string;
  toDo: string;
}

interface PopupContent {
  id: string;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState<string>("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showpopup, setShowpopup] = useState(false);
  const [popupcontent, setPopupcontent] = useState<PopupContent | null>(null);

  useEffect(() => {
    axios.get(`${baseURL}/home`)
      .then((res) => {
        console.log("Received todos:", res.data);
        setTodos(res.data.data);
        setUpdateUI(prevState => !prevState); 
      })
      .catch((err) => {
        console.log("Error caught:", err);
      });
  }, [updateUI]);

  const saveTodo = () => {
    axios.post(`${baseURL}/save`, { toDo: input })
      .then((res) => {
        console.log("Todo saved:", res.data);
        setUpdateUI(prevState => !prevState);
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
          {Array.isArray(todos) && todos.map((el) => (
            <Todolist
              key={el._id}
              text={el.toDo}
              id={el._id}
              setUpdateUI={setUpdateUI}
              setShowpopup={setShowpopup}
              setPopupcontent={setPopupcontent}
            />
          ))}
        </div>
      </div>
      {showpopup && popupcontent && (
        <Popup
          setShowpopup={setShowpopup}
          popupcontent={popupcontent}
          setUpdateUI={setUpdateUI}
        />
      )}
    </main>
  );
}

export default App;
