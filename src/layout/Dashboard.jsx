import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { FaHome } from "react-icons/fa";


const Dashboard = () => {
    return (
        <div className="bg-gray-200">
            <Navbar></Navbar>
            <h2 className="text-xl font-bold pt-24 ml-16 pb-3">Appointments</h2>
            <div className="bg-gray-200 flex min-h-screen">
                <div className="w-64 bg-white pl-5">
                    <ul className="menu text-xl font-bold w-full">
                        <li>
                            <Link to="/dashboard/appointment">
                                My Appointments
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/reviews">
                                My Reviews
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/history">
                                My History
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 pl-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;