import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Pages/DoctorProfile/DoctorProfile/DoctorProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import CustomerReviews from "../Pages/Dashboard/CustomerReviews/CustomerReviews";
import CustomerHistory from "../Pages/Dashboard/CustomerHistory/CustomerHistory";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/doctorsProfile/:id',
                element: <DoctorProfile></DoctorProfile>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            //admin Route
            {
                path: 'adminDashboard',
                element: <AdminRoute><PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute></AdminRoute>
            },
            {
                path: 'allUsers',
                element: <AdminRoute><PrivateRoute><AllUsers></AllUsers></PrivateRoute></AdminRoute>
            },
            //userRoute
            {
                path: 'appointment',
                element: <PrivateRoute><MyAppointment></MyAppointment></PrivateRoute>
            },
            {
                path: 'reviews',
                element: <PrivateRoute><CustomerReviews></CustomerReviews></PrivateRoute>
            },
            {
                path: 'history',
                element: <PrivateRoute><CustomerHistory></CustomerHistory></PrivateRoute>
            },
        ]
    }
]);


export default router