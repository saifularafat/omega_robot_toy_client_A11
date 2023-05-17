import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import SubCategory from "../SubCategory/SubCategory/SubCategory";

const Home = () => {
    return (
        <div>
            <h1>This is a Home Page</h1>
            <Banner />
            <Gallery />
            <SubCategory />
        </div>
    );
};

export default Home;