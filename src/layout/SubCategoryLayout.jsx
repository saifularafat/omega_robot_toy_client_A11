import { Outlet } from "react-router-dom";
import NavBer from "../Shares/Navber/Navber";
import Footer from "../Shares/Footer/Footer";

const SubCategoryLayout = () => {
    return (
        <div>
            <NavBer />
            <Outlet />
            <Footer />
            
        </div>
    );
};

export default SubCategoryLayout;