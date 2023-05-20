import { useLoaderData } from "react-router-dom";

const Dynamic = () => {
    const detailsToy = useLoaderData();
    console.log(detailsToy);
    const { img, sellerName, name, category_name, price, quantity, rating, email, details } = detailsToy
    return (
        <div className="bg-gradient-to-r from-[#eed9b4] to-[#c7dedb]">
            <div className="my_container md:py-14 py-7">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img src={img} alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-3xl font-Lobster font-bold">Seller Name :<span>{sellerName ? '' : 'Saiful'}</span></h2>
                        <h2>Robot Name: <span>{name}</span></h2>
                        <h2>Email: <span>{email ? '' : 'saifularafat.info@gmail.com'}</span></h2>
                        <h2>Category: <span>{category_name}</span></h2>
                        <p>Available Quantity: <span>{quantity}</span></p>
                        <p>Price: <span>{'$' + price}</span></p>
                        <p>Price: <span>{rating}</span></p>
                        <p>Details: <span>{details}</span></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dynamic;