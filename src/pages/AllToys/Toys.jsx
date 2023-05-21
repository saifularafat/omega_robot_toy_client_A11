import { Link } from "react-router-dom";

const Toys = ({ toys, index }) => {
    // console.log(toys);
    const { _id, img, sellerName, name, category_name, price, quantity } = toys
    return (
        <tr>
            <td className="table_body">{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                        <img src={img} alt="" className=""/>
                    </div>
                </div>
            </td>
            <td className="table_body">{sellerName}</td>
            <td className="table_body">{name}</td>
            <td className="table_body">{category_name}</td>
            <td className="table_body">{'$'+ price}</td>
            <td className="table_body">{quantity}</td>
            <th>
                <Link to={`/details/${_id}`}>
                    <button className="details_btn">Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default Toys;