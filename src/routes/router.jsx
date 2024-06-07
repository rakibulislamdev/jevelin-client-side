import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";


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
    ]
  },
]);

export default router;
