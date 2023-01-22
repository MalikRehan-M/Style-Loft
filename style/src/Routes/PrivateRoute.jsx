import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({children}) => {
    const{authState}=useContext(AuthContext);
    if(!authState){
        return <Navigate to="/Sign&SignUp"/>
    }
    return children;
}

export default PrivateRoute
