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
                        <h2 className="details_title">Robot Name: <span className="text-btn-color2 font-bold">{name}</span></h2>
                        <h2 className="details_title">Email: <span className="text-slate-700 font-bold">{email}</span></h2>
                        <h2 className="details_title">Category: <span className="text-slate-700 font-bold">{category_name}</span></h2>
                        <p className="details_title">Available Quantity: <span className="text-slate-700 font-bold">{quantity}p.</span></p>
                        <p className="details_title">Price: <span className="text-slate-700 font-bold">{'$' + price}</span></p>
                        <p className="details_title">Price: <span className="text-slate-700 font-bold">{rating}</span></p>
                        <p className="text-lg font-open font-medium text-slate-500">Details: <span>{details}</span></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dynamic;