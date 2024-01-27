import { useForm } from 'react-hook-form';
import loginImg from '../../assets/login/loginbg.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
// import loginImg1 from '../../assets/login/Screenshot_3-removebg-preview.png'

const Login = () => {
    const { loginUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(user)
    const from = location?.state?.from.pathname || '/'

    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        // console.log(data);
        loginUser(data.email, data.password)
            .then(res => {
                // const user = res.user;
                // console.log(user)
                Swal.fire({
                    icon: "success",
                    title: "User Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, {replace: true});
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
                <div className="bg-green-800">
                    <img src={loginImg} alt="" className='w-full' />
                </div>
                <div className="m-20">
                    <h2 className='text-2xl font-extrabold text-center'>Sign in to Doc House</h2>
                    <div className="card w-full shadow-2xl bg-base-100 border mt-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                {/* <input type='submit' className="btn btn-primary">Login</input> */}
                                <input type="submit" value="Login" className='btn bg-[#F7A582] text-white' />
                            </div>
                        </form>
                        <p className="text-center pb-10">You are new to Our Site. Please <Link className='text-green-600 uppercase' to="/register">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;