import { useLoaderData } from "react-router-dom";
import Toys from "./Toys";

const AllToys = () => {
    const allRobotToys = useLoaderData()
    console.log(allRobotToys);
    return (
        <div className="bg-gradient-to-r from-[#eed9b4] to-[#c7dedb]">
            <div className="my_container py-12">
                {/* search felid */}
                <div className="form-control ">
                    <div className="input-group justify-center mb-8">
                        <input
                            type="text"
                            placeholder="Search your robot"
                            className="input input-bordered md:w-4/12 py-5 " />
                        <button className="btn btn-square py-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="table_header">images</th>
                                <th className="table_header">Seller Name</th>
                                <th className="table_header">Toy Name</th>
                                <th className="table_header">Category</th>
                                <th className="table_header">Price</th>
                                <th className="table_header">A.Q.</th>
                                <th className="table_header">Details</th>
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
        </div>

    );
};

export default AllToys;