import { Link } from "react-router-dom";

const Electric = ({ electric }) => {
    const { _id, img, name, price, rating } = electric;
    return (
        <div>
            <div
                data-aos="zoom-in-down"
                data-aos-duration="1500"
                className="card md:w-96 mx-3 h-fit bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="robot" className="md:h-72" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title sub_title">
                        {name}
                    </h2>
                    <p className="sub_desc"><small>Price: <span className="text-3xl">${price}</span></small></p>
                    <div className='flex'>
                        <p className="sub_desc">
                            <small className=''>
                                Rating: {rating}
                            </small>
                        </p>
                    </div>
                    <div className="md:text-right text-center">
                        <Link to={`/details/${_id}`}>
                            <button className='logout_btn'>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Electric;