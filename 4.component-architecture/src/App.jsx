/*import Parent from "./components/Parent";
import LoginToggle from "./components/LoginToggle";
import Parent1 from "./components/Parent1";
import Box from "./components/Box";


function App() {
  const userName = "Atik";

  return (
    <div>
      <h1>App Component</h1>
      <Parent name={userName} />
      <LoginToggle />
      <Parent1 />
      <Box />
    </div>
  );
}

export default App;*/

// src/App.jsx

import { useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const handleRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggle = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTask input={input} onInputChange={setInput} onAdd={handleAdd} />
      <TodoList tasks={tasks} onRemove={handleRemove} onToggle={handleToggle} />
    </div>
  );
}

export default App;