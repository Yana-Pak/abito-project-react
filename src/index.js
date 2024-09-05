import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Home } from './pages/Home'
import { Product } from './pages/Product';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './layout/Layout';
import { Error } from './components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ]
  },
  {
    path: "*",
    element: < Error />,
    errorElement: < Error />,
    exact: false
  }

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




