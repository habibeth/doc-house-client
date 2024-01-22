import { useForm } from "react-hook-form";
import loginImg from '../../assets/login/loginbg.jpg'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const {createUser} = useAuth();
    const navugate = useNavigate()
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        createUser(data?.email, data?.password)
        .then(res=> {
            console.log(res.user)
        })
        .catch(error=> console.log(error))
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
                <div className="bg-green-800">
                    <img src={loginImg} alt="" className='w-full' />
                </div>
                <div className="m-20">
                    <h2 className='text-2xl font-extrabold text-center'>Sign Up to Doc House</h2>
                    <div className="card w-full shadow-2xl bg-base-100 border mt-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Name"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">User Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("userName", { required: true })}
                                    placeholder="User Name"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    placeholder="Email"
                                    className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                {/* <input type='submit' className="btn btn-primary">Login</input> */}
                                <input type="submit" value="Create Account" className='btn bg-[#F7A582] text-white' />
                            </div>                            
                        </form>
                        <p className="text-center pb-10">Already Have an Account. Please <Link className="text-green-600 uppercase" to="/login">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;