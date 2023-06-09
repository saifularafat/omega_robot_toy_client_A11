
import { Link } from 'react-router-dom';
import image1 from './../../../assets/images/slider/car_banner.jpg'
import image2 from './../../../assets/images/slider/robot_banner.jpg'
import image3 from './../../../assets/images/slider/robot_banner2.jpg'
import image4 from './../../../assets/images/slider/robot_banner3.jpg'

const Banner = () => {
    const slider_text = [
        <>
            <div data-aos="fade-right" className='text-white md:pl-28 pl-8 md:w-1/2 w-full md:bg-[#3638381c] md:p-10 p-5 rounded-r-xl md:space-y-5 space-y-2'>
                <h2 className='md:text-5xl text-2xl font-Lobster font-semibold'>Robotics for kids has significantly time.</h2>
                <p className='md:text-xl font-sans md:block hidden md:'>Robotics for kids is an educational field that introduces children to the concepts of robotics and programming. It aims to develop their problem-solving skills, critical thinking abilities, and creativity through hands-on activities and projects involving robots.
                </p>
                <div className='md:flex' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <Link to='allToys'>
                        <button className='silder_btn'>Robot View</button>
                    </Link>
                    <Link to=''>
                        <button className='silder_btn1 ml-5 md:block hidden'>Contact Now</button>
                    </Link>
                </div>
            </div>
        </>
    ]
    return (
        <div className="carousel w-full md:h-[580px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full" />
                <div className='flex items-center absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#26242493] to-[rgba(21, 21, 21, 0)'>

                    {slider_text}

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle sliderArray_btn1">❮</a>
                    <a href="#slide2" className="btn btn-circle sliderArray_btn2">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image3} className="w-full" />
                <div className='flex items-center absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#12121299] to-[rgba(21, 21, 21, 0)'>

                    {slider_text}

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle sliderArray_btn1">❮</a>
                    <a href="#slide3" className="btn btn-circle sliderArray_btn2">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image4} className="w-full" />
                <div className='flex items-center absolute top-0 left-0 bottom-0 bg-gradient-to-t from-[#06060640] to-[rgba(21, 21, 21, 0)'>

                    {slider_text}

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle sliderArray_btn1">❮</a>
                    <a href="#slide4" className="btn btn-circle sliderArray_btn2">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image2} className="w-full" />
                <div className='flex items-center absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#1212128a] to-[rgba(21, 21, 21, 0)'>

                    {slider_text}

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle sliderArray_btn1">❮</a>
                    <a href="#slide1" className="btn btn-circle sliderArray_btn2">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;