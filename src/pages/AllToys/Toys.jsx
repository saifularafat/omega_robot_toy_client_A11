import { Link } from "react-router-dom";

const Toys = ({ toys }) => {
    console.log(toys);
    const { _id, img, sellerName, name, category_name, price, quantity, } = toys
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                        <img src={img} alt="" className=""/>
                    </div>
                </div>
            </td>
            <td>{sellerName? {sellerName} : 'saiful' }</td>
            <td>{name}</td>
            <td>{category_name}</td>
            <td>{price}</td>
            <td>{quantity ? '' : ' 12 '}</td>
            <th>
                <Link to={`/:${_id}`}>
                    <button className="details_btn">Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default Toys;