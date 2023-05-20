import { Link } from "react-router-dom";

const MyRobot = ({ myRobot, handlerDelete }) => {
    // console.log(myRobot);
    const { _id, img, name, category_name, price } = myRobot
    return (
        <tbody>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask rounded-lg md:w-24 md:h-24">
                                {
                                    img && <img src={img} alt="robot" />
                                }
                            </div>
                        </div>
                    </div>
                </td>
                <td className="text-lg font-open text-black font-medium">
                    {name}
                </td>
                <td className="text-lg font-open text-black font-medium">
                    {category_name}
                </td>
                <td className="text-lg font-open text-black font-medium">
                    {price}
                </td>
                <td>
                    <Link to={`/update/${_id}`}>
                        <button
                            className="py-2 px-4 bg-blue-500 text-white rounded-xl text-xl font-medium mr-2 "
                        >Edit</button>
                    </Link>
                    <Link>
                        <button
                            onClick={() => handlerDelete(_id)}
                            className="py-2 px-3 bg-red-600 text-white rounded-xl text-xl font-medium"
                        >Delete</button>
                    </Link>
                </td>
            </tr>

        </tbody>
    );
};

export default MyRobot;