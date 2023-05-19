
const Car = ({ car }) => {
    console.log(car);
    const { img, name, price, Rating } = car
    return (
        <div>
            <div className="card w-96 h-fit bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="robot" className="md:h-72"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title sub_title">
                        {name}
                    </h2>
                    <p className="sub_desc"><small>Price: <span className="text-3xl">${price}</span></small></p>
                    <p className="sub_desc"><small>Rating: {Rating}</small></p>
                    <div className="text-right">
                        <button>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;