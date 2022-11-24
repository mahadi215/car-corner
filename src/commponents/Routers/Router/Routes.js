import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import AllCategories from "../../pages/Home/AllCategories/AllCategories";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allCategories/:id',
                element: <PrivateRoute><AllCategories></AllCategories></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/allCategories/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;