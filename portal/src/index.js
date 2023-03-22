import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import Menu from './components/Menu/Menu';
import Checkout from './components/Checkout/Checkout';
import Order from './components/Order/Order';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    element: <Order />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
