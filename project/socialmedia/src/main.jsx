import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Create } from "./components/Create.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/create",
        element: <Create></Create>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
