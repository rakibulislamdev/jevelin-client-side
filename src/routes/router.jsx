import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: "shop",
            element: <Shop/>
        },
        {
            path: "cart",
            element: <Cart/>
        },
    ]
  },
]);

export default router;
