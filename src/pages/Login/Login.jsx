import { Link, useLocation, useNavigate } from "react-router-dom";
import img from './../../assets/images/logo/login.svg'
import Social from "./Social";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";



const Login = () => {
    const { signIn, loading } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || '/';

    if (loading) {
        return <progress className="progress w-56 mx-auto"></progress>
    }

    const handlerLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const logged = result.user;
                console.log(logged);

                navigate(from, { replace: true })

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your login Success',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: (error.message),
                })
            })
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200 rounded-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl text-center font-bold pt-8">Login</h1>
                        <form onSubmit={handlerLogin}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name='email'
                                        required
                                        placeholder="your email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name='password'
                                        required
                                        placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign In" className="main_btn" />
                                </div>

                                {/* <SocialLogin /> */}
                                <Social />

                                <p className='text-center text-lg font-open'>Have an account?
                                    <Link to='/register'>
                                        <span className='text-title-color font-semibold hover:underline'> register
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Login;