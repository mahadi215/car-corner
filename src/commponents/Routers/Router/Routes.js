import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Main/DashboardLayout/DashboardLayout";
import Main from "../../Main/Main";
import About from "../../pages/About/About";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import Allsellers from "../../pages/Dashboard/Allsellers/Allsellers";
import Allusers from "../../pages/Dashboard/Allusers/Allusers";
import DashBoard from "../../pages/Dashboard/MyProducts/MyProducts";
import MyProducts from "../../pages/Dashboard/MyProducts/MyProducts";
import MywishList from "../../pages/Dashboard/MywishList/MywishList";
import Payment from "../../pages/Dashboard/Payment/Payment";
import FourOFour from "../../pages/FourOFour/FourOFour";

import AllCategories from "../../pages/Home/AllCategories/AllCategories";
import Blog from "../../pages/Home/Blog/Blog";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Adminroute from "../Adminroute/Adminroute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                loader: ({params})=>fetch(`https://car-corner-server.vercel.app/allCategories/${params.id}`)
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/about',
                element:<About></About>
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <FourOFour></FourOFour>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
        children:[
            {
                path: '/dashboard/myproduct',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/addProduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/allusers',
                element:<Adminroute><Allusers></Allusers></Adminroute>
            },
            {
                path: '/dashboard/allsellers',
                element:<Adminroute><Allsellers></Allsellers></Adminroute>
            },
            {
                path: '/dashboard/mywishlist',
                element:<BuyerRoute><MywishList></MywishList></BuyerRoute>
            },
            {
                path: '/dashboard/payment',
                element:<BuyerRoute><Payment></Payment></BuyerRoute>
            },
            {
                path: '*',
                element: <FourOFour></FourOFour>
            }
        ]
    },
]);

export default router;