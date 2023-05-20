import { Link } from 'react-router-dom';
import logo from './../../assets/images/logo/robot_logo.png'
const Footer = () => {
  return (
    <div className='bg-gray-800'>
      <footer className="footer p-10 text-white">
        <div>
          <img src={logo} alt="" className='bg-white rounded-2xl' />
          <p><small className='text-xl text-btn-color2 font-Lobster font-semibold'> Omega Robot Kids Lmt.</small>
            <span className='text-xl text-blue-400 font-semibold'><br />Developer by Saiful Arafat</span>
          </p>
        </div>
        <div>
          <span className="footer_title">Robot</span>
          <Link to='/'><span className='footer_desc'>Home</span> </Link>
          <Link to='allToys'><span className='footer_desc'>All Toys</span> </Link>
          <Link to='myToy'><span className='footer_desc'>My Toy</span> </Link>
          <Link to='addToy'><span className='footer_desc'>Add Toy</span> </Link>
          <Link to='blog'><span className='footer_desc'>Blog</span> </Link>
        </div>
        <div>
          <span className="footer_title">Company</span>
          <Link ><span className='footer_desc'> Firebase</span></Link>
          <Link ><span className='footer_desc'> MongoDB</span></Link>
          <Link ><span className='footer_desc'> Vercel</span></Link>
          <Link ><span className='footer_desc'> React</span> </Link>
        </div>
        <div>
          <span className="footer_title">Legal</span>
          <Link to='terms'><span className='footer_desc'>Terms of use</span></Link>
          <Link className='footer_desc'>Privacy policy</Link>
          <Link className='footer_desc'>Cookie policy</Link>
        </div>
      </footer>
      <hr />
      <p className=' my_container text-center py-3 text-white'>@copyright by saiful arafat</p>
    </div>
  )
};

export default Footer;