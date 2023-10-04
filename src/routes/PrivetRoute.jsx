import { Children, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLoaderData, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);


    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>;

    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoute;