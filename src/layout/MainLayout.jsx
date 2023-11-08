import { Outlet } from "react-router-dom";
import NavBer from "../Shares/Navber/Navber";
import Footer from "../Shares/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Shares/Loading";

const MainLayout = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <div className="">
                <NavBer />
                <div className="min-h-[calc(100vh-440px)]">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;