import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import About from "../../pages/About/About";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import DashBoard from "../../pages/Dashboard/DashBoard";
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
                path: '/about',
                element:<About></About>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute> <DashBoard></DashBoard> </PrivateRoute>
            },
            {
                path: '/addProduct',
                element:<AddProduct></AddProduct>
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