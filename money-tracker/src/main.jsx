//React and Router
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Loaders
import App, { appLoader } from './App.jsx'
//Pages
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard.jsx"
import Error from "./pages/Error.jsx"
//Helpers
import { logoutAction } from "./actions/logout.js"
//CSS
import './index.css'


const router = createBrowserRouter ([
  {
    path:'/',
    element: <App/>,
    loader: appLoader,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Dashboard/>,
        loader: dashboardLoader,
        action: dashboardAction,
      },
      {
        path:"/logout",
        action: logoutAction,
      }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <RouterProvider router = {router}/>
    <ToastContainer/>
    </>
)