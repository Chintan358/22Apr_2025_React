import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Shop } from "./pages/Shop.jsx";
import { Accounts } from "./pages/Accounts.jsx";
import { Compare } from "./pages/Compare.jsx";
import { Login } from "./pages/Login.jsx";
import { Wishlist } from "./pages/Wishlist.jsx";
import { Cart } from "./pages/Cart.jsx";
import { Details } from "./pages/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/accounts",
        element: <Accounts />,
      },
      {
        path: "/compare",
        element: <Compare />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
