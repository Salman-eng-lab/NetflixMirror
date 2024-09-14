import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";

export let appRoutes = createBrowserRouter([
    {
        path:'/',
        element:<Login/>,
    },
    {
        path:'/Home',
        element:<Home/>
    }
])