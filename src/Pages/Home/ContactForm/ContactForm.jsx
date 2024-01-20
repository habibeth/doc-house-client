import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const ContactForm = () => {
    const {
        register,
        handleSubmit,
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-[#07332F] p-20">
            <div className="text-white">
                <h2>Contact With Us</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                <div className="text-white flex items-center">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" {...register("name", { required: true })} placeholder="Name" className="input bg-[#16534e] hover:bg-[#16534e] input-bordered w-full" />
                        <input type="email" {...register("email", { required: true })} placeholder="Email" className="input bg-[#16534e] input-bordered w-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" {...register("mobile", { required: true })} placeholder="Mobile" className="input bg-[#16534e] input-bordered w-full" />
                        <input type="text" {...register("doctor", { required: true })} placeholder="Doctor Name" className="input bg-[#16534e] input-bordered w-full" />
                        
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="date" {...register("mobile", { required: true })} placeholder="Date" className="input bg-[#16534e] input-bordered w-full" />
                        <input type="text" {...register("doctor", { required: true })} placeholder="Time" className="input bg-[#16534e] input-bordered w-full" />
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default ContactForm;