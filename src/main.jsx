import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Meals from './components/Meals/Meals.jsx';
import RandomMeal from './components/RandomMeal/RandomMeal.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/randomMeals',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/random.php'),
        element: <RandomMeal/>
      },
      {
        path: '/listMeals',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Meals/>
      },
      {
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

