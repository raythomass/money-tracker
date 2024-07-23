import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Dashboard, { dashboardLoader } from "./pages/Dashboard.jsx"
import Error from "./pages/Error.jsx"

const router = createBrowserRouter ([
  {
    path:'/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Dashboard/>,
        loader: dashboardLoader,
      }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)