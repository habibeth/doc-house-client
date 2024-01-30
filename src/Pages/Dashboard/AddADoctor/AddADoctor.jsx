// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AddADoctor = () => {
    // const axiosSecure = useAxiosSecure()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        // const image = form.image.value;
        const amount = form.amount.value;
        const location = form.location.value;
        const specialization = form.specialization.value;
        const university1 = form.university1.value;
        const degree1 = form.degree1.value;
        const university2 = form.university2.value;
        const degree2 = form.degree2.value;
        const service1 = form.service1.value;
        const service2 = form.service2.value;
        const service3 = form.service3.value;
        const awardsName1 = form.awardsName1.value;
        const awardsName2 = form.awardsName2.value;
        const awardDesc1 = form.awardDesc1.value;
        const awardDesc2 = form.awardDesc2.value;
        const awardYear1 = form.awardYear1.value;
        const awardYear2 = form.awardYear2.value;
        const special1 = form.special1.value;
        const special2 = form.special2.value;
        const special3 = form.special3.value;
        const biography = form.biography.value;

        const addDoctor = {
            doctorName: name,
            visitAmount: amount,
            location,
            // image,
            specialization,
            education: [
                {university: university1, degree: degree1},
                {university: university2, degree: degree2},
            ],
            services: [
                service1,
                service2,
                service3
            ],
            awards: [
                {awardName: awardsName1, awardDescription: awardDesc1, awardYear: awardYear1},
                {awardName: awardsName2, awardDescription: awardDesc2, awardYear: awardYear2},
            ],
            specializations: [
                special1,
                special2,
                special3
            ],
            biography,
        }

        console.log(addDoctor)

        // axiosSecure.post('', userReviews)
        //     .then(result => {
        //         const data = result?.data;
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: "Your Comments has been saved",
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //         }
        //         console.log(data)
        //     })

    }
    return (
        <div className="pr-10">
            <h2 className="text-2xl font-bold mb-5 text-center">Add A Doctor</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    <input type="text" name="amount" placeholder="Visit Amount" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                    <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
                    <input type="text" name="specialization" placeholder="Specialization" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                    <input type="text" name="university1" placeholder="University" className="input input-bordered" required />
                    <input type="text" name="degree1" placeholder="Degree" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                    <input type="text" name="university2" placeholder="University" className="input input-bordered" required />
                    <input type="text" name="degree2" placeholder="Degree" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
                    <input type="text" name="awardsName1" placeholder="Awards name" className="input input-bordered" required />
                    <input type="text" name="awardDesc1" placeholder="Award Description" className="input input-bordered" required />
                    <input type="text" name="awardYear1" placeholder="Award Year" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
                    <input type="text" name="awardsName2" placeholder="Awards name" className="input input-bordered" required />
                    <input type="text" name="awardDesc2" placeholder="Award Description" className="input input-bordered" required />
                    <input type="text" name="awardYear2" placeholder="Award Year" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
                    <input type="text" name="service1" placeholder="Services" className="input input-bordered" required />
                    <input type="text" name="service2" placeholder="Services" className="input input-bordered" required />
                    <input type="text" name="service3" placeholder="Services" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
                    <input type="text" name="special1" placeholder="Specializations" className="input input-bordered" required />
                    <input type="text" name="special2" placeholder="Specializations" className="input input-bordered" required />
                    <input type="text" name="special3" placeholder="Specializations" className="input input-bordered" required />
                </div>
                <div className="form-control mb-4 max-w-xs">
                    <input type="file" name="photo" placeholder="Yours Photo" className="file-input file-input-bordered max-w-xs" required />                    
                </div>
                <div className="form-control">
                    <textarea name="biography" id="" cols="30" rows="10" placeholder="Biography" className="p-4 rounded-lg"></textarea>
                </div>

                <div className="form-control mt-6">
                    <input type="submit" className="btn bg-[#07332F] text-white" value="Add A Doctor" />
                </div>
            </form>
        </div>
    );
};

export default AddADoctor;