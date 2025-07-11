import { Create } from "./components/Create";
import { View } from "./components/View";
import TodoContextProvider from "./store/TodoContext";

const App = () => {
  return (
    <>
      {" "}
      <div class="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">
          📝 To-Do List
        </h1>
        <TodoContextProvider>
          <Create></Create>
          <View></View>
        </TodoContextProvider>
      </div>
    </>
  );
};

export default App;
