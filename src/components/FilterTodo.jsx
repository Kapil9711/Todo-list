import { useContext } from "react";
import { TodoContext } from "../App";

const FilterTodo = () => {
  const { inputs, setInputs } = useContext(TodoContext);

  const handleInputs = (id, value) => {
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => e.preventDefault();

  return (
    <header>
      <form onSubmit={handleSubmit} className="filter-todo-form">
        <label htmlFor="name">Name </label>
        <input
          value={inputs.name}
          onChange={(e) => handleInputs(e.target.id, e.target.value)}
          type="text"
          id="name"
        />
        <input
          checked={inputs.completed}
          onChange={(e) => handleInputs(e.target.id, e.target.checked)}
          type="checkbox"
          id="completed"
        />
        <label htmlFor="completed">Hide Completed</label>
      </form>
    </header>
  );
};

export default FilterTodo;
