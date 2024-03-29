
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shares/Loading';

const Social = () => {
    const { socialLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { loading } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    if (loading) {
        return <Loading />
    }

    const handlerGoogle = () => {
        socialLogin(googleProvider)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'login In Success!',
                    showConfirmButton: false,
                    timer: 2500
                });
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    const handleGithub = () => {
        socialLogin(githubProvider)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'login In Success!',
                    showConfirmButton: false,
                    timer: 2500
                });
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    return (
        <div>
            <div className="divider">OR</div>

            <div className=' text-center mb-7 mt-5'>
                <Link to=''>
                    <button
                        onClick={handlerGoogle}
                        className='social_btn flex justify-center items-center'
                    >
                        <FaGoogle className='w-7 h-7' />
                        <span className='ml-3'>G<span>oo</span>gle</span>
                    </button>
                </Link>
                <Link to=''>
                    <button
                        onClick={handleGithub}
                        className='social_btn flex justify-center items-center mt-3'
                    >
                        <FaGithub className='w-7 h-7' />
                        <span className='ml-3'>Github</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Social;