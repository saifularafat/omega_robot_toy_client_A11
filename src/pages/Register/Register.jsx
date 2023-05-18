import { Link } from "react-router-dom";
import Social from "../Login/Social";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handlerSubmit = e => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        const confirm = from.confirm.value;
        const checkbox = from.checkbox.value;
        console.log(name, photo, email, password, confirm, checkbox);

        createUser(email, password)
            .then(result => {
                const createAccount = result.user;
                console.log(createAccount);
                from.reset();
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'New Account Successful..!',
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
        <div className="hero min-h-screen bg-gradient-to-r from-slate-500 to-gray-200">
            <div className="">
                <div className="text-center">
                    <h1 className="text-5xl font-bold my-6">Register now!</h1>

                </div>
                <div className="card flex-shrink-0 md:w-[540px] w-full mx-4 shadow-2xl bg-base-100">
                    <form onSubmit={handlerSubmit}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text label_style">
                                    Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your Name"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text label_style">
                                    Photo Url
                                </span>
                            </label>
                            <input
                                type="url"
                                name="photo"
                                required
                                placeholder="Your Photo url"
                                className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text label_style">
                                    Email
                                </span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Your Email"
                                className="input input-bordered" />
                        </div>
                        <div
                            className="form-control">
                            <label
                                className="label">
                                <span
                                    className="label-text label_style">
                                    Password
                                </span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                required
                                placeholder="password"
                                className="input input-bordered" />

                        </div>

                        <div
                            className="form-control">
                            <label
                                className="label">
                                <span
                                    className="label-text label_style">
                                    Confirm Password
                                </span>
                            </label>
                            <input
                                type="confirm"
                                name="confirm"
                                required
                                placeholder="Confirm password"
                                className="input input-bordered" />
                        </div>

                        <p className="label_style mt-1">Show password</p>

                        <label className=" inline-flex mt-2">
                            <input
                                type="checkbox"
                                name="checkbox"
                                required className="checkbox" />
                            <p className='pl-5 text-xl font-open'>Accept
                                <Link to='/terms' className='text-blue-600 underline pl-2'>Terms and Condition
                                </Link>
                            </p>
                        </label>
                        <div className=" mt-6">
                            <button
                                className="login_btn ">
                                Register
                            </button>
                        </div>

                        {/* social section added */}
                        <Social />

                        <p className='text-center text-lg font-open'>Already have an account?
                            <Link to='/login'>
                                <span className='text-title-color font-semibold hover:underline'> login
                                </span>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;