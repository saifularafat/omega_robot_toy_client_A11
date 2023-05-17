import { Outlet } from "react-router-dom";
import NavBer from "../Shares/Navber/Navber";
import Footer from "../Shares/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <NavBer />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;