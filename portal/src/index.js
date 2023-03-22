import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import Menu from './components/Menu/Menu';
import Checkout from './components/Checkout/Checkout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Provider} from 'react-redux';
import store from './redux/store';

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
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
