import { useContext, useState, Fragment } from "react";
import { TodoContext } from "../App";
import { Actions } from "../data";
import UpdateTodo from "./UpdateTodo";
const SingleTodo = (props) => {
  const { dispatch } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const { todo } = props;

  return (
    <section className={`todo-item ${todo.completed && "completed"}`}>
      {!isEditing && (
        <Fragment>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) =>
              dispatch({
                type: Actions.Completed,
                payload: { title: todo.title, completed: e.target.checked },
              })
            }
          />
          <span>{todo.title}</span>
        </Fragment>
      )}

      {isEditing && <UpdateTodo {...{ setIsEditing, todo }} />}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button
        onClick={() =>
          dispatch({ type: Actions.Delete, payload: { title: todo.title } })
        }
      >
        Delete
      </button>
    </section>
  );
};

export default SingleTodo;
