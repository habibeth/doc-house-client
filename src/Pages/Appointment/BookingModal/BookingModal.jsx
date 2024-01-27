import { format } from "date-fns";
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const BookingModal = ({ treatment, selected, refetch }) => {
    const date = format(selected, 'PP');
    // console.log(date)
    const { name: treatmentName, slots, price } = treatment;
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleBookingData = async (e) => {
        e.preventDefault();
        const form = e.target;
        const date = form.date.value;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const bookingInfo = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            email,
            phone,
            slot,
            price
        }
        // console.log(bookingInfo)
<<<<<<< HEAD
        axiosSecure.post('/bookings', bookingInfo, { withCredentials: true })
            .then(res => {
                if (res.data.insertedId) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Your have successfully Booked ${treatmentName}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

=======
        const result = await axiosSecure.post('/bookings', bookingInfo, {withCredentials: true});
        const data = result.data;
        console.log(data)
        if(data.insertedId){
            refetch();
        }
>>>>>>> e9f0aa3dd2a262d97da1c42a68a5f043f32e2a09
    }

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute bg-gray-200 right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">{treatmentName}</h3>
                <form className="mt-5" onSubmit={handleBookingData}>
                    <div className="form-control mb-5">
                        <input type="text" name="date" value={date} disabled className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <select name="slot" id="" className="select select-bordered">
                            {
                                slots?.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control mb-5">
                        <input type="text" name="name" placeholder="Full Name" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-5">
                        <input type="email" name="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        
                            <button className="w-full btn btn-primary uppercase" data-dismiss="modal">Submit</button>
                                              
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default BookingModal;