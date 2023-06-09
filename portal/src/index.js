import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//Components
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Checkout from './components/Checkout/Checkout';
import PizzaForm from './components/PizzaForm/PizzaForm';
//React-Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "/order",
    element: <PizzaForm />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
