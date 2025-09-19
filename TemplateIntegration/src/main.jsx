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
import AdminLogin from "./adminpages/AdminLogin.jsx";
import { Dashboard } from "./adminpages/Dashboard.jsx";
import { AdminHome } from "./adminpages/AdminHome.jsx";
import { Category } from "./adminpages/Category.jsx";
import { Product } from "./adminpages/Products..jsx";
import { Forgot } from "./pages/Forgot.jsx";
import { ChangePass } from "./pages/ChangePass.jsx";


const AuthProvider = ({ children }) => {
  const { isAuthenticated, role } = useSelector((state) => state.login);

  if (!isAuthenticated) {
    // 🚪 If not logged in, redirect to login page
    alert("Please login first !!!")
    return <Navigate to="/login" replace />;
  }
  else if (isAuthenticated && role === 'user') {
    return children;
  }
  else {
    alert("Please login first !!!")
    return <Navigate to="/login" replace />
  }

  // ✅ If logged in, render children

};

const AdminAuthProvider = ({ children }) => {
  const { isAuthenticated, role } = useSelector((state) => state.login);

  if (!isAuthenticated) {
    // 🚪 If not logged in, redirect to login page
    alert("Please login first !!!")
    return <Navigate to="/admin" replace />;
  }
  else if (isAuthenticated && role === 'admin') {
    return children;
  }
  else {
    alert("Please login first !!!")
    return <Navigate to="/admin" replace />
  }

  // ✅ If logged in, render children

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
      {
        path: "/forgot",
        element: <Forgot />
      },
      {
        path: "/changepass",
        element: <ChangePass />
      },


    ],



  },
  {
    path: "/admin",
    element: <AdminLogin />
  },
  {
    path: "/dashboard",
    element: (<AdminAuthProvider>
      <Dashboard />
    </AdminAuthProvider>),
    children: [{
      path: "/dashboard",
      element: <AdminHome />
    },
    {
      path: "/dashboard/category",
      element: <Category />
    },
    {
      path: "/dashboard/products",
      element: <Product />
    },




    ]
  }
]);

createRoot(document.getElementById("root")).render(

  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
