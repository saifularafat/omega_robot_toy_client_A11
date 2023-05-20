
import img1 from './../../../assets/images/gallery/gallery-1.avif'
import img2 from './../../../assets/images/gallery/gallery-2.avif'
import img3 from './../../../assets/images/gallery/gallery-3.avif'
import img4 from './../../../assets/images/gallery/gallery-4.avif'
import img5 from './../../../assets/images/gallery/gallery-5.avif'
import img6 from './../../../assets/images/gallery/gallery-6.avif'
import img7 from './../../../assets/images/gallery/gallery-7.avif'
import img8 from './../../../assets/images/gallery/gallery-8.avif'
import img9 from './../../../assets/images/gallery/gallery-9.avif'
import img10 from './../../../assets/images/gallery/gallery-10.avif'
import img11 from './../../../assets/images/gallery/gallery-11.avif'
import img12 from './../../../assets/images/gallery/gallery-12.avif'

const Gallery = () => {
    return (
        <div className='bg-gradient-to-r from-[#eed9b4] to-[#c7dedb]'>
            <div className='my_container md:pb-20 pb-10'>
                <div className='text-center md:pt-20 pt-10 mx-3 mb-10'>
                    <h2 data-aos="fade-down"
                        className='md:text-5xl text-3xl font-Lobster font-semibold pb-3'>Our Gallery </h2>
                    <p data-aos="fade-up"
                        className='md:w-[480px] mx-auto text-lg font-open text-description-color'>The history of robotics for kids can be traced back to the emergence of educational robotics in the late 20th century. Here are some key milestones and developments</p>
                </div>
                <div>
                    <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-2 mx-2">
                        {/* first column */}
                        <div data-aos="flip-left"
                            className="shadow-2xl rounded-xl bg-slate-100 p-2">
                            <img src={img1} alt="Robot" className='md:h-44 h-full md:w-80 w-full rounded-xl' />
                        </div>
                        <div data-aos="flip-left"
                            className="shadow-2xl rounded-xl bg-slate-100 p-2">
                            <img src={img2} alt="Robot" className='md:h-44 h-full md:w-80 w-full rounded-xl' />
                        </div>
                        <div data-aos="flip-left"
                            className="shadow-2xl rounded-xl bg-slate-100 p-2">
                            <img src={img3} alt="Robot" className='md:h-44 h-full md:w-80 w-full rounded-xl' />
                        </div>
                        <div data-aos="flip-left"
                            className="shadow-2xl rounded-xl bg-slate-100 p-2">
                            <img src={img4} alt="Robot" className='md:h-44 h-full md:w-80 w-full rounded-xl' />
                        </div>
                        {/* second column */}
                        <div data-aos="zoom-in-up"
                            className="shadow-2xl rounded-xl bg-slate-100 p-2">
                            <img src={img5} alt="Robot" className='md:h-44 h-full md:w-80 w-full rounded-xl' />
                        </div>
                        <div data-aos="zoom-in-up"
                            className="shadow-2xl rounded-xl bg-slate-100 p-2">
                            <img src={img6} alt="Robot" className='md:h-44 h-full md:w-80 w-full rounded-xl' />
                        </div>
                        <div data-aos="zoom-in-up"
                            className="shadow-2xl rounded-xl bg-slate-100 p-2">
                            <img src={img7} alt="Robot" className='md:h-44 h-full md:w-80 w-full rounded-xl' />
                        </div>
                        <div data-aos="zoom-in-up"
                            className="shadow-2xl rounded-xl bg-slate-100 p-2">
                            <img src={img8} alt="Robot" className='md:h-44 h-full md:w-80 w-full rounded-xl' />
                        </div>
                        {/* three column */}
                        <div data-aos="flip-left"
                            className="shadow-2xl rounded-xl bg-slate-100 p-2">
                            <img src={img10} alt="Robot" className='md:h-44 h-full md:w-80 w-full rounded-xl' />
                        </div>
                        <div data-aos="flip-left"
                            className="shadow-2xl rounded-xl bg-slate-100 p-2">
                            <img src={img11} alt="Robot" className='md:h-44 h-full md:w-80 w-full rounded-xl' />
                        </div>
                        <div data-aos="flip-left"
                            className="shadow-2xl rounded-xl bg-slate-100 p-2">
                            <img src={img12} alt="Robot" className='md:h-44 h-full md:w-80 w-full rounded-xl' />
                        </div>
                        <div data-aos="flip-left"
                            className="shadow-2xl rounded-xl bg-slate-100 p-2">
                            <img src={img9} alt="Robot" className='md:h-44 h-full md:w-80 w-full rounded-xl' />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;