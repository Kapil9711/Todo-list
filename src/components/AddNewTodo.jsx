import { useContext, useRef } from "react";
import { TodoContext } from "../App";
import { Actions } from "../data";

const AddNewTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value === "") return;
    dispatch({
      type: Actions.CreateTodo,
      payload: { title: value, completed: false },
    });
    inputRef.current.value = "";
  };
  return (
    <section className="add-todo ">
      <form onSubmit={handleSubmit} className="add-todo-form">
        <label htmlFor="new-todo">New Todo</label>
        <input ref={inputRef} type="text" id="new-todo" />
        <button>Add Todo</button>
      </form>
    </section>
  );
};

export default AddNewTodo;
