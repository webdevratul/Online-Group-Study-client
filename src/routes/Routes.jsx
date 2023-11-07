import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Banner from "../components/pages/Banner";
import Features from "../components/pages/Features";
import Faq from "../components/pages/Faq";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CreateAssignment from "../pages/CreateAssignment";
import PrivateRoutes from "./PrivateRoutes";
import Assignments from "../pages/Assignments";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/hero",
                element: <Banner></Banner>
            },
            {
                path: "/feature",
                element: <Features></Features>
            },
            {
                path: "/faq",
                element: <Faq></Faq>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/createAssignment",
                element: <PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>
            },
            {
                path: "/assignments",
                element: <Assignments></Assignments>
            }
        ]
    },
]);

export default router;