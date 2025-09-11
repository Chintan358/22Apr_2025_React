import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Reg from './components/Reg.jsx'

const router = createBrowserRouter([{
    path: "/",
    element: <App></App>,
    children: [{
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/reg",
        element: <Reg></Reg>
    }


    ]
}])
createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}></RouterProvider>
)
