import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation();
    const loginLocation = location.pathname.includes('login')
    const registerLocation = location.pathname.includes('register')
    return (
        <div>
            {loginLocation || registerLocation || <Navbar></Navbar>}
            <Outlet></Outlet>
            {loginLocation || registerLocation || <Footer></Footer>}
        </div>
    );
};

export default Main;