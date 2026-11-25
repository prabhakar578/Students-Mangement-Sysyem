import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Edit from './Pages/Edit.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import View from './Pages/View.jsx'
import Create from './Pages/Create.jsx'
 let router =createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>,
      errorElement:<ErrorPage/>
    },
     {
      path:"/edit/:id",
      element:<Edit/>
    },
     {
      path:"/view/:id",
      element:<View/>
     },
     {
      path:"/create",
      element:<Create/>
     }
    
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
