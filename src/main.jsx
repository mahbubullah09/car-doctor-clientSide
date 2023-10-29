import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layouts1 from './Component/Layouts/Layouts1';
import Home from './Component/home/Home';
import SingUp from './Component/Authentication/SingUp';
import LogIn from './Component/Authentication/LogIn';
import Error from './Component/ErrorPage/Error';
import AuthProvider from './Component/Provider/AuthProvider';
import Checkout from './Component/Checkout/Checkout';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts1/>,
    errorElement:<Error/>,
    children: [
      {
        path: '/',
        element:<Home/>,
      },
      {
        path:"/checkout/:id",
        element:<Checkout/>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        
        
      },
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
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
