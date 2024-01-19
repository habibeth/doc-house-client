import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'

const Navbar = () => {
    const menuItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/appointment">Appointment</NavLink></li>
    </>

    return (
        <div className="">
            <div className='text-white max-w-7xl mx-auto'>
                <div className="navbar fixed z-50">
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
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;