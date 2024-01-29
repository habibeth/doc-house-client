import { format } from "date-fns";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const CustomerReviews = () => {
    const date = new Date();
    const { user } = useAuth();
    const formatDate = format(date, "PP");
    const axiosSecure = useAxiosSecure()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const customerImage = form.photo.value;
        const profession = form.profession.value;
        const date = form.date.value;
        const ratings = form.ratings.value;
        const comments = form.comments.value;

        const userReviews = {
            customerName: name,
            customerProfession: profession,
            ratings: parseInt(ratings),
            date,
            reviewText: comments,
            customerImage
        }

        axiosSecure.post('/reviews', userReviews)
            .then(result => {
                const data = result?.data;
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Comments has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                console.log(data)
            })

    }

    return (
        <div className="pr-10">
            <h2 className="text-2xl font-bold mb-5 text-center">Reviews ITEM</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                    <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName} disabled className="input input-bordered" required />
                    <input type="text" name="profession" placeholder="Profession" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                    <input type="text" name="date" placeholder="Date" value={formatDate} disabled className="input input-bordered" required />
                    <select name="ratings" defaultValue="default" className="select select-bordered">
                        <option value="default">Give me your Ratings</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-control mb-4">
                    <input type="text" name="photo" placeholder="Yours Photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <textarea name="comments" id="" cols="30" rows="10" placeholder="Gives yours comments" className="p-4 rounded-lg"></textarea>
                </div>

                <div className="form-control mt-6">
                    <input type="submit" className="btn bg-[#07332F] text-white" value="Submit your Comments" />
                </div>
            </form>
        </div>
    );
};

export default CustomerReviews;