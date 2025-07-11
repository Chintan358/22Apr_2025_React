import { useContext } from "react";
import { TodoContext } from "../store/TodoContext";

export const View = () => {
  const { todo, deleteTodo } = useContext(TodoContext);

  return (
    <>
      <ul class="space-y-3">
        {todo.map((ele) => (
          <li class="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm">
            <div class="flex items-center gap-2">
              <input type="checkbox" class="h-5 w-5 text-blue-500 rounded" />
              <span class="text-gray-800">{ele}</span>
            </div>
            <button
              class="text-red-500 hover:text-red-700 transition"
              onClick={() => deleteTodo(ele)}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
