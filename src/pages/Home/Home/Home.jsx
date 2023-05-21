import useTitle from "../../../hooks/useTitle";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import RobotSlider from "../Robot/RobotSlider";
import SubCategory from "../SubCategory/SubCategory/SubCategory";

const Home = () => {
    useTitle('')
    return (
        <div>
            <Banner />
            <About />
            <Gallery />
            <RobotSlider />
            <SubCategory />
        </div>
    );
};

export default Home;