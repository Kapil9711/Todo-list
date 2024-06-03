import { useContext } from "react";
import { TodoContext } from "../App";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  const { filteredTodos } = useContext(TodoContext);
  return (
    <section className="todo-item-list">
      {filteredTodos.map((todo, i) => (
        <SingleTodo key={i} todo={todo} />
      ))}
    </section>
  );
};

export default TodoList;
