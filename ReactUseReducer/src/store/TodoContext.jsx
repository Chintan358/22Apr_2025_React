import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const reducer = (state, action) => {
  if (action.type == "add") {
    state = [...state, action.data];
  } else if (action.type == "delete") {
    state = state.filter((ele) => ele != action.data);
  }
  return state;
};

const TodoContextProvider = ({ children }) => {
  const [todo, dispatcher] = useReducer(reducer, []);

  const addTodo = (data) => {
    const payload = {
      type: "add",
      data: data,
    };
    dispatcher(payload);
  };

  const deleteTodo = (data) => {
    const payload = {
      type: "delete",
      data: data,
    };
    dispatcher(payload);
  };

  return (
    <TodoContext.Provider value={{ todo, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
