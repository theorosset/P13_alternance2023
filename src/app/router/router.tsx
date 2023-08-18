import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login"
import ConnectedHomePage  from "../pages/connectedHomePage/ConnectedHomePage";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/login',
      element: <Login/>,
    },
    {
      path: '/connected-home-page',
      element: <ConnectedHomePage/>,
    },
  ])
  
  export default router