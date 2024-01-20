// import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';
import { FaLocationDot } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaCalendar, FaStar } from "react-icons/fa";
import useDoctors from "../../../hooks/useDoctors";
import { Link } from "react-router-dom";

const OurDoctors = () => {
    // const [doctors, setDoctors] = useState([]);

    // useEffect(() => {
    //     fetch('doctors.json')
    //         .then(res => res.json())
    //         .then(data => setDoctors(data))
    // }, [])
    const [doctors] = useDoctors()
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 mt-20">
                <h2 className="text-4xl font-bold">Our Expert Doctors</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br />quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <Swiper
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <div className="grid grid-cols-1 md:grid-cols-3">

                    {
                        doctors.map((doctor) => <SwiperSlide className="mr-5" key={doctor._id}>
                            <div className="card bg-white border p-5">
                                <figure className="">
                                    <img src={doctor.images} alt="Shoes" className="rounded-xl w-full" />
                                </figure>
                                <div className="">
                                    <h2 className="card-title mt-5">{doctor.doctorName}</h2>
                                    <p>BTP- {doctor.specialization}</p>
                                    <div className="text-orange-600 flex mt-2">
                                        <FaStar className="mr-1" />
                                        <FaStar className="mr-1" />
                                        <FaStar className="mr-1" />
                                        <FaStar className="mr-1" />
                                        <FaStar className="mr-1" />
                                    </div>
                                    <div className="flex items-center mt-10">
                                        <FaLocationDot />
                                        <p className="ml-2">{doctor.location}</p>
                                    </div>
                                    <div className="flex items-center my-2">
                                        <FaCalendar />
                                        <p className="ml-2">Available on {doctor.availableOn}</p>
                                    </div>
                                    <div className="flex items-center mb-5">
                                        <LuCircleDollarSign />
                                        <p className="ml-2">{doctor.visitAmount}</p>
                                    </div>

                                    <Link to={`/doctorsProfile/${doctor._id}`}>
                                        <div className="w-full">
                                            <button className="btn w-full btn-outline btn-warning">View Profile</button>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>


        </div>
    );
};

export default OurDoctors;