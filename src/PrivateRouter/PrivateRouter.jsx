import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <p>Loader....</p>
    }
    if (user?.email) {
        return children
    }
    return <Navigate 
    to='/login'
    state={{ from: location }}
    replace
    >
    </Navigate>
};

export default PrivateRouter;