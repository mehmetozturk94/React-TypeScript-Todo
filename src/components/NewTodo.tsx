import React from "react";

const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {};

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text"></input>
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
