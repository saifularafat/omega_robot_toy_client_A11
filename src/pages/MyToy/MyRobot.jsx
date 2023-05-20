import { Link } from "react-router-dom";

const MyRobot = ({ myRobot, handlerDelete }) => {
    console.log(myRobot);
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
                <td>
                    {name}
                </td>
                <td>{category_name}</td>
                <td>{price}</td>
                <td>
                    <Link to={`/${_id}`}>
                        <button
                        className=""
                        >Edit</button>
                    </Link>
                    <Link>
                        <button
                        onClick={() => handlerDelete(_id)}
                        className=""
                        >Delete</button>
                    </Link>
                </td>
            </tr>

        </tbody>
    );
};

export default MyRobot;