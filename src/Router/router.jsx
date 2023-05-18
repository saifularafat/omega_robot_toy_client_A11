import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import SubCategoryLayout from "../layout/SubCategoryLayout";
import CarRobot from "../pages/Home/SubCategory/CarRobot/CarRobot";
import ElectricRobot from "../pages/Home/SubCategory/ElectricRobot/ElectricRobot";
import FightingRobot from "../pages/Home/SubCategory/FlghtingRobot/FightingRobot";
import AllToys from "../pages/AllToys/AllToys";
import MyToy from "../pages/MyToy/MyToy";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blog from "../pages/Blog/Blog";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Terms from "../pages/Terms/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'allToys',
                element: <AllToys />
            },
            {
                path:'myToy',
                element:<MyToy />
            },
            {
                path: 'addToy',
                element: <AddAToy />
            },
            {
                path: 'blog',
                element: <Blog />
            }
        ]
    },
    /* subCategory router setup */
    {
        path: '/',
        element: <SubCategoryLayout />,
        children: [
            {
                path:'/carRobot',
                element: <CarRobot />
            },
            {
                path: 'electricRobot',
                element: <ElectricRobot />
            },
            {
                path: 'fightingRobot',
                element: <FightingRobot />
            }
        ]
    },

    /* login and register page router setup */
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'terms',
                element: <Terms />
            }
        ]
    },
    /* error all page router setup  */
    {
        path: '*',
        element: <Error />,
    }
]);

export default router;