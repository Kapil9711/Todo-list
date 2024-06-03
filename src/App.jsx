import "./app.scss";
import AddNewTodo from "./components/AddNewTodo";
import FilterTodo from "./components/FilterTodo";
import TodoList from "./components/TodoList";
import { useReducer, createContext, useState } from "react";
import reducer from "./todo-reducer";
import { initialTodos } from "./data";

export const TodoContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialTodos);
  const [inputs, setInputs] = useState({ name: "", completed: false });

  let filteredTodos = state.filter((todo) =>
    todo.title.toLowerCase().includes(inputs.name.toLowerCase())
  );
  if (inputs.completed === true)
    filteredTodos = filteredTodos.filter((todo) => !todo.completed);

  return (
    <TodoContext.Provider
      value={{ filteredTodos, dispatch, inputs, setInputs }}
    >
      <FilterTodo />
      <main>
        <TodoList />
        <AddNewTodo />
      </main>
    </TodoContext.Provider>
  );
}

export default App;
