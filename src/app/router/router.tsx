import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/work-in-progress',
      element: "",
    },
  ])
  
  export default router