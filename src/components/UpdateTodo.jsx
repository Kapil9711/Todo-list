import React, { useContext, useEffect } from "react";
import { TodoContext } from "../App";
import { Actions } from "../data";

const UpdateTodo = (props) => {
  const { setIsEditing, todo } = props;
  const { dispatch } = useContext(TodoContext);
  const updateInputRef = React.useRef(null);

  const handleUpdate = () => {
    const value = updateInputRef.current.value;
    console.log(value);
    if (value === "") return;

    if (value === todo.title) {
      return setIsEditing(false);
    }

    dispatch({
      type: Actions.Update,
      payload: {
        title: todo.title,
        newTitle: value,
      },
    });
    setIsEditing(false);
  };

  useEffect(() => {
    updateInputRef.current.focus();
  }, []);

  return (
    <form
      style={{ display: "flex", gap: "10px" }}
      onSubmit={(e) => e.preventDefault()}
    >
      <input ref={updateInputRef} type="text" defaultValue={todo.title} />
      <button onClick={handleUpdate}>save</button>
    </form>
  );
};

export default UpdateTodo;
