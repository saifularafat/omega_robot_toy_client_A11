import { Rating } from '@smastrom/react-rating'
import { Link } from 'react-router-dom';

const Car = ({ car }) => {
    console.log(car);
    const { _id, img, name, price, rating } = car
    return (
        <div>
            <div
                data-aos="zoom-in-down"
                data-aos-duration="1500"
                className="card w-96 h-fit bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="robot" className="md:h-72" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title sub_title">
                        {name}
                    </h2>
                    <p className="sub_desc"><small>Price: <span className="text-3xl">${price}</span></small></p>
                    <div className='flex'>
                        <p className="sub_desc"><small className=''>Rating:
                            <Rating
                                style={{ maxWidth: 25 }}
                                value={Math.round(rating || 0)}
                                readOnly
                            />

                        </small></p>
                    </div>
                    <div className="text-right">
                        <Link to={`/:${_id}`}>
                            <button className='logout_btn'>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;