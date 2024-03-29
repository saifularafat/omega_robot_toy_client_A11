import { useLoaderData } from "react-router-dom";
import Toys from "./Toys";
import useTitle from "../../hooks/useTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../../Shares/Loading";

const AllToys = () => {
    useTitle('All Toys -')
    const allRobotToys = useLoaderData();
    const { loading } = useContext(AuthContext);
    const [robotToys, setRobotToys] = useState(allRobotToys)
    const [searchText, setSearchText] = useState("");

    if (loading) {
        return <Loading />
    }

    const handlerSearch = () => {
        fetch(`https://y-pearl-eight.vercel.app/searchFieldRobot/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setRobotToys(data);
            })
    }

    /* Ascending Descending handler */
    const handlerAscending = () => {
        fetch('https://y-pearl-eight.vercel.app/ascendingPrice')
            .then(res => res.json())
            .then(data => setRobotToys(data))
    }
    const handlerDescending = () => {
        fetch('https://y-pearl-eight.vercel.app/descendingPrice')
            .then(res => res.json())
            .then(data => setRobotToys(data))
    }


    return (
        <div className="bg-gradient-to-r from-[#eed9b4] to-[#c7dedb]">
            <div className="my_container py-12">
                {/* search felid */}
                <div className="md:flex items-center mb-6 justify-between">
                    <div className="input-group">
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            type="text"
                            placeholder="Search your robot"
                            className="input input-bordered md:w-4/12 py-5 " />
                        <button
                            onClick={handlerSearch}
                            className="btn btn-square py-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    <div className="flex text-right my-5">
                        <button
                            onClick={handlerAscending}
                            className="btn  mr-5 text-xl  font-semibold">
                            Ascending
                        </button>
                        <button
                            onClick={handlerDescending}
                            className="btn  mr-5 text-xl font-semibold">
                            Descending
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="table_header">#</th>
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
                                robotToys.map((toys, index) => <Toys
                                    key={toys?._id}
                                    index={index}
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