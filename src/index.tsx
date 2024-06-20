import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Pages/Main';
import Table from './Pages/Right/Table';
// import Vis from './Pages/Right/Vis'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        // {
        //   path:'/',
        //   element:<App/>
        // },
        {
          path:'/table',
          element:<Table/>
        },
        {
          path:'/analytics',
          element:<Main/>
        }
      ]
    }
  ]
)

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
