import { useContext, useRef } from "react";
import { TodoContext } from "../store/TodoContext";

export const Create = () => {
  const { addTodo } = useContext(TodoContext);

  const inputref = useRef();
  const addTodoHanler = () => {
    addTodo(inputref.current.value);
    inputref.current.value = "";
  };

  return (
    <>
      <div class="flex mb-4">
        <input
          type="text"
          placeholder="Add a new task..."
          class="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ref={inputref}
        />
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
          onClick={addTodoHanler}
        >
          Add
        </button>
      </div>
    </>
  );
};
