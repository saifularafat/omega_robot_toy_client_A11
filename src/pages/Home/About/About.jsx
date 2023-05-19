
import robot3 from './../../../assets/images/about/robot_3.jpg'
import robot4 from './../../../assets/images/about/robot_4.jpg'
import robot6 from './../../../assets/images/about/robot_about.png'

const About = () => {
    return (
        <div className=' mb-16'>
            <div className='my_container'>
                <div
                    className='text-center mt-20 mb-10'>
                    <h2
                        data-aos="fade-right"
                        className='text-5xl font-Lobster font-semibold pb-3 '>About Us
                    </h2>
                    <p
                        data-aos="fade-left"
                        className='md:w-[480px] mx-auto text-lg font-open text-description-color'>The history of robotics for kids can be traced back to the emergence of educational robotics in the late 20th century. Here are some key milestones and developments.
                    </p>
                </div>

                <div className='grid md:grid-cols-2'>
                    <div
                        data-aos="fade-down-right"
                        data-aos-duration="1500"
                    >
                        <img src={robot6} alt=""
                            className='rounded-r-xl md:w-full md:h-[440px] md:ml-2' />
                    </div>

                    <div
                        data-aos="fade-down-left"
                        data-aos-duration="1500"
                        className='relative mt-12 md:ml-10'>
                        <div className='md:flex flex-row-reverse justify-around'>
                            <div>
                                <img src={robot3} alt="" className='md:h-64 md:w-full ' />
                            </div>
                            <div>
                                <img src={robot4} alt="" className='md:h-64 md:w-full ' />
                            </div>
                        </div>
                        <h2 className='text-center text-lg text-description-color font-open mt-3'>The Logo programming language, developed by Seymour Papert and his colleagues at MIT in the 1960s, introduced the concept of programming as a tool for children learning.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;