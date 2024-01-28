import { format } from "date-fns";
import useAuth from "../../../hooks/useAuth";


const CustomerReviews = () => {
    const date = new Date();
    const {user} = useAuth();
    const formatDate = format(date, "PP")
    return (
        <div>
            <h2 className="text-2xl font-bold mb-5 text-center">Reviews ITEM</h2>
            <form className="card-body">
                <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">                    
                    <input type="text" placeholder="Name" value={user?.displayName} disabled className="input input-bordered" required />
                    <input type="text" placeholder="Profession" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">                    
                    <input type="text" placeholder="Date" value={formatDate} disabled className="input input-bordered" required />
                    <select defaultValue="default" className="select select-bordered">                        
                        <option value="default">Give me your Ratings</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-control">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Gives yours comments" className="p-4 rounded-lg"></textarea>
                </div>
                
                <div className="form-control mt-6">
                    <button className="btn bg-[#07332F] text-white">Submit your Comments</button>
                </div>
            </form>
        </div>
    );
};

export default CustomerReviews;