import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const MyAppointment = () => {
    const { user } = useAuth();
    const email = user?.email;
    const axiosSecure = useAxiosSecure();
    const { data: bookings } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const result = await axiosSecure.get(`/bookings?email=${email}`, { withCredentials: true });
            const data = result.data;
            return data;
        }
    })
    // console.log(email);
    // console.log(bookings)
    return (
        <div className="pr-10 mb-20">
            <h2 className="text-2xl font-bold mb-5">My Appointments : {bookings?.length}</h2>
            <table className="table">
                {/* head */}
                <thead className="bg-gray-400">
                    <tr className="rounded-t-lg">
                        <th>#</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings?.map((booking, i) => <tr key={booking._id} className="bg-white">
                            <th>{i+1}</th>
                            <td>{booking?.patient}</td>
                            <td>{booking?.appointmentDate}</td>
                            <td>{booking?.slot}</td>
                            <td>{booking?.treatment}</td>
                            <td>${booking?.price}</td>
                            <td><button className="btn bg-[#07332F] text-white">Pay</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;