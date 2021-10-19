import React from "react";
import Todos from "./components/Todos";
import "./App.css";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("React"), new Todo("TypeScript")];

  return (
    <div className="App">
      <Todos items={todos}></Todos>
    </div>
  );
}

export default App;
