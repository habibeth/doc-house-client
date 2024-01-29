import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            const data = res.data;
            return data
        }
    })

    const handleMakeAdmin = (user) => {
        console.log(user)
        const id = user._id
        const name = user.name
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make as Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: `${name} is Admin Now!`,
                                text: "Make Admin Successfully.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleDeleteUsers = (user) => {
        const id = user?._id;
        const name = user?.name;

        console.log('database connected')
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `You Successfully deleted ${name}.`,
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }
    // console.log(users)
    return (
        <div className="pr-10 mb-20">
            <h2 className="text-2xl font-bold mb-5">All Users : {users?.length}</h2>
            <table className="table">
                {/* head */}
                <thead className="bg-gray-400">
                    <tr className="rounded-t-lg">
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, i) => <tr key={user._id} className="bg-white">
                            <th>{i + 1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>
                                {
                                    user.role === 'admin' ? '' :
                                        <button onClick={() => handleMakeAdmin(user)} className="btn bg-[#07332F] text-white">Make Admin</button>
                                }
                            </td>
                            <td><button onClick={()=>handleDeleteUsers(user)} className="btn bg-[#07332F] text-white">Remove Users</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;