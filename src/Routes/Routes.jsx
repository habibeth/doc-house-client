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
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'appointment',
                element: <MyAppointment></MyAppointment>
            }
        ]
    }
]);


export default router