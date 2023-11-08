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
                        <h2 className="md:text-3xl text-2xl font-Lobster font-semibold md:font-bold">Seller Name :{sellerName ? <span className="pl-2 md:text-2xl text-lg font-medium md:font-semibold">{sellerName}</span> : 'Saiful'}</h2>
                        <h2 className="details_title">Robot Name: <span className="text-orange-700 capitalize font-semibold">{name}</span></h2>
                        <h2 className="details_title">Email: <span className="text-slate-700 font-normal underline">{email}</span></h2>
                        <h2 className="details_title">Category: <span className="text-slate-700 font-semibold">{category_name}</span></h2>
                        <p className="details_title">Available Quantity: <span className="text-slate-700 font-semibold">{quantity}p</span></p>
                        <p className="details_title">Price: <span className="text-slate-700 font-semibold">{'$' + price}</span></p>
                        <p className="details_title">Price: <span className="text-slate-700 font-semibold">{rating}</span></p>
                        <p className="text-lg font-open font-semibold text-slate-500">Details: <span className="text-base font-normal">{details}</span></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dynamic;