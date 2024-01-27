import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import useAuth from '../../../hooks/useAuth'
import Swal from 'sweetalert2';
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useAuth();
    const handleLogout=()=>{
        logOut()
        .then(()=>{
            Swal.fire({
                icon: "success",
                title: "Successfully you are Logout",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(error=> console.log(error))
    }
    const menuItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/appointment">Appointment</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        {
            user ?
                <>
                    <li><button>{user.displayName}</button></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                </>
                :
                <>
                    <li><NavLink to="/login">Login</NavLink></li>
                </>
        }
    </>

    return (
        <div className="bg-[#07332F] bg-navbar">
            <div className='text-white max-w-6xl mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <a className="text-xl">
                            <div className="flex items-center">
                                <img src={logo} alt="" />
                                <p className='text-4xl font-bold text-white ml-1'><span className='text-[#F7A582]'>Doc</span> House</p>
                            </div>
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;