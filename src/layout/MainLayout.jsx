import { Outlet } from "react-router-dom";
import NavBer from "../Shares/Navber/Navber";
import Footer from "../Shares/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="">
                <NavBer />
                <div className="min-h-[calc(100vh-364px)]">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;