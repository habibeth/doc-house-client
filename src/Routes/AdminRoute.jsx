import { Navigate } from "react-router-dom";
import Loading from "../Pages/Shared/Loading/Loading";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    if(loading || isAdminLoading){
        return <Loading></Loading>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/"></Navigate>;
};

export default AdminRoute;