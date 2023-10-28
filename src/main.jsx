import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/home'
import CreateAccount from "./Pages/createaccount";
import LoginPages from './pages/login'
import AddProductPage from './pages/product/addProduct'
import ProductPage from './pages/product/productPage'
import EditProductPage from './pages/product/editProduct'
import AddUserPage from './pages/user/addUser'
import UserPage from './pages/user/userPage'
import EditUserPage from './pages/user/editUser'
import OrderPage from './pages/order/orderPage'



const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />
  },
  {
    path: "/home",
    element:<Home />
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
  {
    path: "product/product-page",
    element: <ProductPage />,
  },
  {
    path: "product/add-product",
    element: <AddProductPage />,
  },
  {
    path: "product/edit-product",
    element: <EditProductPage />,
  },
  {
    path: "user/add-user",
    element: <AddUserPage />,
  },
  {
    path: "user/user-page",
    element: <UserPage />,
  },
  {
    path: "user/edit-user",
    element: <EditUserPage />,
  },
  {
    path: "order/order-page",
    element: <OrderPage />,
  },

  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
