import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import LoginMain from './pages/LoginMain';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Ingredients from './pages/Ingredients';
import Recipe from './pages/Recipe';
import Refrigerator from './pages/Refrigerator';
import AddIngredientOne from './pages/AddIngredientOne';
import AddIngredientTwo from './pages/AddIngredientTwo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/login' />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <LoginMain />,
    errorElement: <NotFound />,
  },
  {
    path: '/Home',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Ingredients', element: <Ingredients /> },
      { path: 'Recipe/:RecipeId', element: <Recipe /> },
      { path: 'Refrigerator', element: <Refrigerator /> },
      { path: 'AddIngredient/1', element: <AddIngredientOne /> },
      { path: 'AddIngredient/2', element: <AddIngredientTwo /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <RouterProvider router={router} />
    <meta name='viewport' content='initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width' />
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
