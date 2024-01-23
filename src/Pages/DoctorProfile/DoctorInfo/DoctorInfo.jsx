import { Link, useParams } from "react-router-dom";
import useDoctors from "../../../hooks/useDoctors";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



const DoctorInfo = () => {
    const [doctors] = useDoctors();
    const { id } = useParams();
    const doctor = doctors.find(doc => doc._id === id)
    // console.log(doctor)
    return (
        <div className="max-w-6xl mx-auto my-32">
            <div className="hero bg-white rounded-lg">
                <div className="hero-content flex-col lg:flex-row justify-start">
                    <div className="w-1/3">
                        <img src={doctor?.images} className="w-[800px] h-[300px] rounded-xl" />
                    </div>
                    <div className="w-8/12">
                        <h1 className="text-5xl font-bold">{doctor?.doctorName}</h1>
                        <p className="my-5">MBBS, MD - {doctor?.specialization}</p>
                        <div className="text-orange-600 flex mt-2 items-center">
                            <FaStar className="mr-1" />
                            <FaStar className="mr-1" />
                            <FaStar className="mr-1" />
                            <FaStar className="mr-1" />
                            <FaStar className="mr-2" />
                            <p className="text-black">(35)</p>
                        </div>
                        <div className="flex items-center my-5">
                            <FaLocationDot />
                            <Link>
                                <p className="ml-2">{doctor?.location} - Get Direction </p>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <button className="btn btn-outline mr-5">Dental Filling</button>
                            <button className="btn btn-outline">Dental Filling</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorInfo;