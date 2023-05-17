import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import SubCategoryLayout from "../layout/SubCategoryLayout";
import CarRobot from "../pages/Home/SubCategory/CarRobot/CarRobot";
import ElectricRobot from "../pages/Home/SubCategory/ElectricRobot/ElectricRobot";
import FightingRobot from "../pages/Home/SubCategory/FlghtingRobot/FightingRobot";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
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
    }
]);

export default router;