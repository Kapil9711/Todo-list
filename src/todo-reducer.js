import { Actions } from "./data";



const reducer = (state, { type, payload }) => {
  switch (type) {
    case Actions.Completed: {
      return state.map((todo) => {
        if (todo.title === payload.title) return payload;
        return todo;
      });
    }
    case Actions.Delete:
      return state.filter((todo) => todo.title !== payload.title);
    case Actions.CreateTodo: {
      if (isTodoExists(state, payload)) return state;
      return [...state, payload];
    }
    case Actions.Update: {
      return state.map((todo) => {
        if (todo.title === payload.title)
          return { title: payload.newTitle, completed: false };
        return todo;
      });
    }
  }
};

const isTodoExists = (todos, newTodo) => {
  return todos.some((todo) => todo.title === newTodo.title);
};

export default reducer;
