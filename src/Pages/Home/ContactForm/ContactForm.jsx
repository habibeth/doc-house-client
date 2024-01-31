import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import useDoctors from "../../../hooks/useDoctors";



const ContactForm = () => {
    const { user } = useAuth();
    const [doctors] = useDoctors();
    // const axiosPublic = useAxiosPublic();

    // const { data: appointmentOption } = useQuery({
    //     queryKey: ['appointmentOption'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/appointmentOption');
    //         return res.data;
    //     }
    // })
    // const time = appointmentOption?.map(options=> options)
    // // setTreatment(time)
    // console.log(time)
    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        reset();
    }
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-[#07332F] p-20 items-center gap-5 my-32 rounded-lg">
            <div className="text-white">
                <h2 className="text-4xl font-bold mb-5">Contact With Us</h2>
                <p className="mb-7">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                <div className="text-white flex items-center mb-6">
                    <FaPhoneAlt />
                    <p className="ml-2">+88 01750 14 14 14</p>
                </div>
                <div className="text-white flex items-center">
                    <FaLocationDot />
                    <p className="ml-2">Dhanmondi, Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <input type="text" {...register("name", { required: true })} placeholder="Name" value={user?.displayName} className="input bg-[#16534e] hover:bg-[#16534e] input-bordered w-full" />
                        <input type="email" {...register("email", { required: true })} placeholder="Email" value={user?.email} className="input bg-[#16534e] input-bordered w-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <input type="text" {...register("mobile", { required: true })} placeholder="Mobile" className="input bg-[#16534e] input-bordered w-full" />
                        <select name="" id="" {...register("doctor", { required: true })} className="bg-[#16534e] rounded-lg px-2">
                            {
                                doctors?.map(doctor => <option key={doctor._id} value={doctor.doctorName}>{doctor?.doctorName}</option>)
                            }
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <input type="date" {...register("date", { required: true })} placeholder="Date" className="input bg-[#16534e] input-bordered w-full" />
                        <select name="" id="" {...register("slot", { required: true })} className="bg-[#16534e] rounded-lg px-2">
                            <option value="08.00 AM - 08.30 AM">08.00 AM - 08.30 AM</option>
                            <option value="08.30 AM - 09.00 AM">08.30 AM - 09.00 AM</option>
                            <option value="09.00 AM - 9.30 AM">09.00 AM - 9.30 AM</option>
                            <option value="09.30 AM - 10.00 AM">09.30 AM - 10.00 AM</option>
                            <option value="10.00 AM - 10.30 AM">10.00 AM - 10.30 AM</option>
                            <option value="10.30 AM - 11.00 AM">10.30 AM - 11.00 AM</option>
                            <option value="11.00 AM - 11.30 AM">11.00 AM - 11.30 AM</option>
                            <option value="11.30 AM - 12.00 AM">11.30 AM - 12.00 AM</option>
                            <option value="1.00 PM - 1.30 PM">1.00 PM - 1.30 PM</option>
                            <option value="1.30 PM - 2.00 PM">1.30 PM - 2.00 PM</option>
                            <option value="2.00 PM - 2.30 PM">2.00 PM - 2.30 PM</option>
                            <option value="2.30 PM - 3.00 PM">2.30 PM - 3.00 PM</option>
                            <option value="3.00 PM - 3.30 PM">3.00 PM - 3.30 PM</option>
                            <option value="3.30 PM - 4.00 PM">3.30 PM - 4.00 PM</option>
                            <option value="4.00 PM - 4.30 PM">4.00 PM - 4.30 PM</option>
                            <option value="4.30 PM - 5.00 PM">4.30 PM - 5.00 PM</option>
                        </select>
                    </div>
                    {/* <input type="submit" value="Book Now" className="w-full cursor bg-[#F7A582] rounded-lg py-3" /> */}
                    <input type="submit" className="btn bg-[#F7A582] text-white w-full" value="Book Now" />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;