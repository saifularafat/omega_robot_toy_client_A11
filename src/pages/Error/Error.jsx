import { Link } from 'react-router-dom';
import error from './../../assets/images/error/error.png'

const Error = () => {
    return (
        <div className='text-center bg-slate-100 p-3'>
            <img src={error} alt="" className='md:w-7/12 mx-auto' />
            <Link to='/'>
                <button className='text-2xl border-2 rounded-xl py-3 px-6 font-Lobster font-semibold text-white bg-red-500'>Back to Home</button>
            </Link>
        </div>
    );
};

export default Error;