import { FaRegClock } from "react-icons/fa";
import { MdPhoneCallback } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Feature = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-5 my-32 text-white">
            <div className="bg-[#07332F] py-12 pl-12 rounded-lg flex items-center">
                <FaRegClock className="text-7xl" />
                <div className="ml-5">
                    <h2 className="text-2xl">Opening Hours</h2>
                    <p className="">Open 9.00 am to 5.00pm <br /> Everyday</p>
                </div>
            </div>
            <div className="bg-[#F7A582] py-12 pl-12 rounded-lg flex items-center">
                <MdPhoneCallback  className="text-7xl" />
                <div className="ml-5">
                    <h2 className="text-2xl">Location</h2>
                    <p className="">Dhanmondi 17, Dhaka -1200, <br /> Bangladesh</p>
                </div>
            </div>
            <div className="bg-[#07332F] py-12 pl-12 rounded-lg flex items-center">
                <FaLocationDot className="text-7xl" />
                <div className="ml-5">
                    <h2 className="text-2xl">Contact US</h2>
                    <p className="">+88 01750 00 00 00 <br /> +88 01750 00 00 00</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;