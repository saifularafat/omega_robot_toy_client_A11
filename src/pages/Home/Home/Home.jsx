import About from "../About/About";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import SubCategory from "../SubCategory/SubCategory/SubCategory";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Gallery />
            <SubCategory />
        </div>
    );
};

export default Home;