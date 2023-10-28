import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layouts1 from './Component/Layouts/Layouts1';
import Home from './Component/home/Home';
import SingUp from './Component/Authentication/SingUp';
import LogIn from './Component/Authentication/LogIn';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts1/>,
    children: [
      {
        path: '/',
        element:<Home/>,
      }
    ]
  },
  {
    path:"/singup",
    element:<SingUp/>
  },
  {
    path:"/login",
    element:<LogIn/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
