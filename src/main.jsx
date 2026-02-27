import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import Products from "./pages/Products.jsx"
import Layout from './components/layout/Layout.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "contact",
        element: <ContactPage />
      }
    ]
  }
]);






createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>
  
)
