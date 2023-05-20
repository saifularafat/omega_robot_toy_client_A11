
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CarRobot from '../CarRobot/CarRobot';
import ElectricRobot from '../ElectricRobot/ElectricRobot';
import FlyingRobot from '../FlyingRobot/FlyingRobot';

const SubCategory = () => {
    return (
        <div className=" pb-16 bg-gradient-to-r from-[#c7dedb] to-[#eed9b4]">
            <div className='text-center md:pt-20 pt-10 mb-10'>
                <h2
                    data-aos="fade-right"
                    className='text-5xl font-Lobster font-semibold pb-3'>Sub Category
                </h2>
                {/* <div className="divider">OR</div> */}
                <p
                    data-aos="fade-left"
                    className='md:w-[480px] mx-auto text-lg font-open text-description-color'>The history of robotics for kids can be traced back to the emergence of educational robotics in the late 20th century. Here are some key milestones and developments
                </p>
            </div>
            <div className='my_container'>
                <Tabs className='text-center'>
                    <TabList>
                        <Tab><span className='sub_nav text_gradient'>Car Robot</span></Tab>
                        <Tab><span className='sub_nav'>Electric Robot</span></Tab>
                        <Tab><span className='sub_nav'>Flying Robot</span></Tab>
                    </TabList>

                    <div className='mt-7'>
                        <TabPanel>
                            <CarRobot />
                        </TabPanel>
                        <TabPanel>
                            <ElectricRobot />
                        </TabPanel>
                        <TabPanel>
                            <FlyingRobot />
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default SubCategory;