import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routers from './Components/Routers/Routers.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={Routers}></RouterProvider>
  </StrictMode>,
)