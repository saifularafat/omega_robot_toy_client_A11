import { Link, NavLink } from 'react-router-dom';
import logo from './../../assets/images/logo/robot_logo.png'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const NavBer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-slate-200 py-2 sticky top-0 z-10'>
            <div className="my_container flex justify-between items-center">
                <Link to='/'>
                    <div className=''>
                        <img
                            src={logo}
                            alt=""
                            className='w-36 h-24 md:pl-6' />
                        <h2 className='mt-0 text-2xl font-Lobster font-bold'>Omega <span className='text-orange-500'>Robot</span></h2>
                    </div>
                </Link>
                <nav>
                    {/* navBer section style start */}
                    <ul className='md:flex items-center hidden space-x-3'>
                        <li>
                            <NavLink to='/'
                                className={({ isActive }) =>
                                    (isActive ? 'active' : 'default')}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='allToys'
                                className={({ isActive }) =>
                                    (isActive ? 'active' : 'default')}>
                                All Toys
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='myToy'
                                className={({ isActive }) =>
                                    (isActive ? 'active' : 'default')}>
                                My Toy
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='addToy'
                                className={({ isActive }) =>
                                    (isActive ? 'active' : 'default')}>
                                Add A Toy
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='blog'
                                className={({ isActive }) =>
                                    (isActive ? 'active' : 'default')}>
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='login'
                                className={({ isActive }) =>
                                    (isActive ? 'active' : 'default')}>
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* mobile responsive section start */}
                <div className='md:hidden px-2'>
                    <button
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}>
                        <Bars3BottomRightIcon className="h-10 w-10 text-gray-700" />
                    </button>
                    {
                        isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='flex justify-between items-center px-2 py-2 bg-gray-500 shadow-lg'>
                                    {/* logo and close ber section */}
                                    <div>
                                        <Link to='/'>
                                            <div className=''>
                                                <img src={logo} alt=""
                                                    className='w-32 h-24' />
                                                <h2 className='mt-0 text-2xl font-Lobster text-white font-bold'>Omega <span className='text-orange-500'>Robot</span></h2>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}>
                                            <XMarkIcon
                                                className='w-10 ' />
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                {/* menu dropdown section */}
                                <nav>
                                    <ul
                                        className='space-y-3 py-6
                                         bg-slate-300
                                         text-white w-full'>
                                        <li className='p-2
                                            hover:bg-orange-400 
                                            '>
                                            <Link to='/' className='default hover:text-white'>
                                                Home
                                            </Link>
                                        </li>
                                        <li className='p-2
                                            hover:bg-orange-400'>
                                            <Link to='allToys' className='default hover:text-white'>
                                                All Toys
                                            </Link>
                                        </li>
                                        <li className='p-2
                                            hover:bg-orange-400'>
                                            <Link to='myToy' className='default hover:text-white'>
                                                My Toy
                                            </Link>
                                        </li>
                                        <li className='p-2
                                            hover:bg-orange-400'>
                                            <Link to='addToy' className='default hover:text-white'>
                                                Add A Toy
                                            </Link>
                                        </li>
                                        <li className='p-2
                                            hover:bg-orange-400'>
                                            <Link to='blog' className='default hover:text-white'>
                                                Blog
                                            </Link>
                                        </li>
                                        <li className='p-2
                                            hover:bg-orange-400'>
                                            <Link to='login' className='default hover:text-white'>
                                                Login
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default NavBer;