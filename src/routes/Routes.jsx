import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Banner from "../components/pages/Banner";
import Features from "../components/pages/Features";
import Faq from "../components/pages/Faq";


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
            }
        ]
    },
]);

export default router;