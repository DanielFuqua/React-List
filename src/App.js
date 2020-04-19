import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(todos.concat(inputValue));
    setInputValue("");
  };

  console.log(inputValue, todos);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} />
        <TodoList todos={todos} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
