import { useLoaderData } from "react-router-dom";
import Toys from "./Toys";

const AllToys = () => {
    const allRobotToys = useLoaderData()
    console.log(allRobotToys);
    return (
        <div className="my_container my-12">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>images</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>A.Q.</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allRobotToys.map(toys => <Toys
                                key={toys?._id}
                                toys={toys}
                            ></Toys>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AllToys;