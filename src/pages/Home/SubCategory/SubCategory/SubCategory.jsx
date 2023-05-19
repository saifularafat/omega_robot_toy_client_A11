
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const SubCategory = () => {
    return (
        <div className='mb-16'>
            <div className='text-center mt-20 mb-10'>
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
            <Tabs className='text-center'>
                <TabList>
                    <Tab><span className='sub_nav text_gradient'>Car Robot</span></Tab>
                    <Tab><span className='sub_nav'>Electric Robot</span></Tab>
                    <Tab><span className='sub_nav'>Flying Robot</span></Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategory;