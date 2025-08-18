import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, Navigate, RouterProvider, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Shop } from "./pages/Shop.jsx";
import { Accounts } from "./pages/Accounts.jsx";
import { Compare } from "./pages/Compare.jsx";
import { Login } from "./pages/Login.jsx";
import { Wishlist } from "./pages/Wishlist.jsx";
import { Cart } from "./pages/Cart.jsx";
import { Details } from "./pages/Details.jsx";
import { store } from './app/store'
import { Provider, useSelector } from 'react-redux'


const AuthProvider = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.login);

  if (!isAuthenticated) {
    // 🚪 If not logged in, redirect to login page
    alert("Please login first !!!")
    return <Navigate to="/login" replace />;
  }

  // ✅ If logged in, render children
  return children;
};


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
        element: (
          <AuthProvider>
            <Accounts />
          </AuthProvider>
        ),
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
        element: (
          <AuthProvider>
            <Wishlist />
          </AuthProvider>
        ),
      },
      {
        path: "/cart",
        element: (
          <AuthProvider>
            <Cart />
          </AuthProvider>
        ),
      },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(

  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
