import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useDoctors from "../../../hooks/useDoctors";



const ManageDoctors = () => {
    const [doctors, refetch] = useDoctors();
    const axiosSecure = useAxiosSecure();

    const handleDoctorDelete = async (doctor) => {
        const id = doctor?._id;
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/doctors/${id}`)
                    .then(res => {                        
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `You have been deleted ${doctor.doctorName}  .`,
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className="pr-10 mb-20">
            <h2 className="text-2xl font-bold mb-5">All Doctors : {doctors?.length}</h2>
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#07332F] text-white uppercase">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>specialty</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                            doctors?.map((doctor, i) => <tr key={doctor?._id}>
                                <td>{i + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="w-16 h-16 rounded-full">
                                                <img src={doctor?.images} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor?.doctorName}</td>
                                <td>{doctor?.specialization}</td>
                                <td>
                                    <button onClick={() => handleDoctorDelete(doctor)} className="btn bg-red-800 text-white">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;