import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App, { appLoader } from './App.jsx'
import './index.css'
import Dashboard, { dashboardLoader } from "./pages/Dashboard.jsx"
import Error from "./pages/Error.jsx"
import { logoutAction } from "./actions/logout.js"

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
      },
      {
        path:"/logout",
        action: logoutAction,
      }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)