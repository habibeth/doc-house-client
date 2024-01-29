import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="bg-gray-200">
            <Navbar></Navbar>
            <h2 className="text-xl font-bold pt-24 ml-16"></h2>
            <div className="bg-gray-200 flex min-h-screen">
                <div className="w-64 bg-white pl-5">
                    <ul className="menu text-xl font-bold w-full">
                        {
                            isAdmin ? <>
                                <li>
                                    <Link to="/adminDashboard">
                                        DashBoard
                                    </Link>
                                </li>                                
                                <li>
                                    <Link to="/dashboard/allUsers">
                                        All Users
                                    </Link>
                                </li>                                
                                <li>
                                    <Link to="/dashboard/addDoctor">
                                        Add a Doctor
                                    </Link>
                                </li>                                
                                <li>
                                    <Link to="/dashboard/manageDoctors">
                                        Manage Doctors
                                    </Link>
                                </li>                                
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>                                
                            </>
                                :
                                <>
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
                                </>
                        }
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