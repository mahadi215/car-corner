import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import AllCategories from "../../pages/Home/AllCategories/AllCategories";
import Home from "../../pages/Home/Home";

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
                element: <AllCategories></AllCategories>,
                loader: ({params})=>fetch(`http://localhost:5000/allCategories/${params.id}`)
            }
        ]
    }
]);

export default router;