import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Main/DashboardLayout/DashboardLayout";
import Main from "../../Main/Main";
import About from "../../pages/About/About";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import DashBoard from "../../pages/Dashboard/MyProducts/MyProducts";
import MyProducts from "../../pages/Dashboard/MyProducts/MyProducts";

import AllCategories from "../../pages/Home/AllCategories/AllCategories";
import Blog from "../../pages/Home/Blog/Blog";
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
                element:<Blog></Blog>
            },
            {
                path: '/blog',
                element:<About></About>
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
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
        children:[
            {
                path: '/dashboard',
                element:<MyProducts></MyProducts>
            },
            {
                path: '/dashboard/addProduct',
                element:<AddProduct></AddProduct>
            },
        ]
    },
]);

export default router;