import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Layout';
import App from './App'; // this is your Products page
import Cart from './Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // includes NavBar
    children: [
      { index: true, element: <App /> }, // default = Products
      { path: 'cart', element: <Cart /> }, // Cart route
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
