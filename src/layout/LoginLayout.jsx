import { Outlet } from "react-router-dom";
import NavBer from "../Shares/Navber/Navber";

const LoginLayout = () => {
    return (
        <div>
            <NavBer />
            <Outlet />
        </div>
    );
};

export default LoginLayout;