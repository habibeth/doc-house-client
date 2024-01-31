// import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_api_keys = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const uploadURL = `https://api.imgbb.com/1/upload?key=${image_api_keys}`


const AddADoctor = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        // console.log(imageFile)
        const res = await axiosPublic.post(uploadURL, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })

        if (res.data.success) {
            const addDoctor = {
                doctorName: data.name,
                visitAmount: data.amount,
                location: data.location,
                images: res.data.data.display_url,
                specialization: data.specialization,
                education: [
                    { university: data.university1, degree: data.degree1 },
                    { university: data.university2, degree: data.degree2 },
                ],
                services: [
                    data.service1,
                    data.service2,
                    data.service3
                ],
                workExperience: `${data.experience} years`,
                awards: [
                    { awardName: data.awardsName1, awardDescription: data.awardDesc1, awardYear: data.awardYear1 },
                    { awardName: data.awardsName2, awardDescription: data.awardDesc2, awardYear: data.awardYear2 },
                ],
                specializations: [
                    data.special1,
                    data.special2,
                    data.special3
                ],
                biography: data.biography,
            }

            const doctorPost = await axiosSecure.post('/doctors', addDoctor);
            if (doctorPost.data.insertedId) {
                reset()
                Swal.fire({                    
                    position: "top-end",
                    icon: "success",
                    title: "Your Comments has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }
        // console.log(res.data.data.display_url)

    }


    return (
        <div className="pr-10">
            <h2 className="text-2xl font-bold mb-5 text-center">Add A Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                    <input type="text" {...register("name")} placeholder="Name" className="input input-bordered" required />
                    <input type="text" {...register("amount")} placeholder="Visit Amount" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
                    <input type="text" {...register("location")} placeholder="Location" className="input input-bordered" required />
                    <input type="text" {...register("experience")} placeholder="Experience" className="input input-bordered" required />
                    <input type="text" {...register("specialization")} placeholder="Specialization" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                    <input type="text" {...register("university1")} placeholder="University" className="input input-bordered" required />
                    <input type="text" {...register("degree1")} placeholder="Degree" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                    <input type="text" {...register("university2")} placeholder="University" className="input input-bordered" required />
                    <input type="text" {...register("degree2")} placeholder="Degree" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
                    <input type="text" {...register("awardsName1")} placeholder="Awards name" className="input input-bordered" required />
                    <input type="text" {...register("awardDesc1")} placeholder="Award Description" className="input input-bordered" required />
                    <input type="text" {...register("awardYear1")} placeholder="Award Year" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
                    <input type="text" {...register("awardsName2")} placeholder="Awards name" className="input input-bordered" required />
                    <input type="text" {...register("awardDesc2")} placeholder="Award Description" className="input input-bordered" required />
                    <input type="text" {...register("awardYear2")} placeholder="Award Year" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
                    <input type="text" {...register("service1")} placeholder="Services" className="input input-bordered" required />
                    <input type="text" {...register("service2")} placeholder="Services" className="input input-bordered" required />
                    <input type="text" {...register("service3")} placeholder="Services" className="input input-bordered" required />
                </div>
                <div className="form-control grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
                    <input type="text" {...register("special1")} placeholder="Specializations" className="input input-bordered" required />
                    <input type="text" {...register("special2")} placeholder="Specializations" className="input input-bordered" required />
                    <input type="text" {...register("special3")} placeholder="Specializations" className="input input-bordered" required />
                </div>
                <div className="form-control mb-4 max-w-xs">
                    <input type="file" {...register("image")} placeholder="Yours Photo" className="file-input file-input-bordered max-w-xs" required />
                </div>
                <div className="form-control">
                    <textarea {...register("biography")} id="" cols="30" rows="10" placeholder="Biography" className="p-4 rounded-lg"></textarea>
                </div>

                <div className="form-control mt-6">
                    <input type="submit" className="btn bg-[#07332F] text-white" value="Add A Doctor" />
                </div>
            </form>
        </div>
    );
};

export default AddADoctor;