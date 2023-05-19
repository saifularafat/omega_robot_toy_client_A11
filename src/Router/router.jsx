import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
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