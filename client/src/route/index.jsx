import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home.jsx";
import Searchpage from "../pages/Searchpage"
import Register from "../pages/Register"
import Login from "../pages/Login"



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
                },                
                 {
                path :"search",
                element: <Searchpage />
            },
            {
                path :"login",
                element: <Login />
            },
            {
                path :"register",
                element: <Register />
            }
                ]
                    }
           
])

export default router