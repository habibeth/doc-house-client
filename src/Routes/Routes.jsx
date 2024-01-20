import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Pages/DoctorProfile/DoctorProfile";


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
        ]
    },
]);


export default router