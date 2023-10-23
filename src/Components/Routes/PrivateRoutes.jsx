import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

 
const PrivateRoutes = ({children}) => {

    const {user,load} =useContext(AuthContext) 

    if(load) {
        return <progress className="progress w-56"></progress>

    }
    if (user) {
        return children;
    }
    return (
        <Navigate to='login' replace={true}></Navigate>
    );
};

export default PrivateRoutes;