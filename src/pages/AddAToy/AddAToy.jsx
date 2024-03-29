import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const AddAToy = () => {
    const { user } = useContext( AuthContext )
    useTitle('Add A Toy -')

    const handlerAddRobotSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const category_name = form.category_name.value;
        const price = form.price.value;
        const email = form.email.value;
        const number = form.number.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const img = form.img.value;
        const details = form.details.value;
        const addRobotInfo = {
            name,
            sellerName,
            category_name,
            price,
            email,
            number,
            quantity,
            rating,
            img,
            details
        }
        console.log(addRobotInfo);
        fetch('https://y-pearl-eight.vercel.app/robotProducts', {
        // fetch('http://localhost:5000/robotProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addRobotInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Robot Add Successful',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }
    return (
        <div className="bg-gray-400 md:p-10">
            <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-center pt-5">
                <h2 className="font-Lobster font-bold text-3xl pb-3">ADD TOY</h2>
                <p className="text-2xl text-description-color font-open">Please Add Your toy information</p>
            </div>
            <div
                className="my_container mt-8">
                <form onSubmit={handlerAddRobotSubmit}
                    className="space-y-5 mx-2">
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        className="md:flex">
                        <div className="md:w-1/2">
                            <p className="label_style">Product Name
                            </ p>
                            <input
                                type="text"
                                name="name"
                                placeholder="Toy Name"
                                required
                                className="input w-full"
                            />
                        </div>
                        <div className="md:w-1/2 md:ml-5">
                            <p className="label_style">Seller Name
                            </ p>
                            <input
                                type="text"
                                name="sellerName"
                                placeholder="Your Name"
                                defaultValue={user?.displayName}
                                required
                                className="input w-full"
                            />
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="md:flex">
                        <div className="md:w-1/2">
                            <p className="label_style">Category
                            </ p>
                            <input
                                type="text"
                                name="category_name"
                                placeholder="Toy Category"
                                required
                                className="input w-full"
                            />
                        </div>
                        <div className="md:w-1/2 md:ml-5">
                            <p className="label_style"> Price
                            </ p>
                            <input
                                type="text"
                                name="price"
                                placeholder="Toy Price"
                                required
                                className="input w-full"
                            />
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="md:flex">
                        <div className="md:w-1/2">
                            <p className="label_style">Email
                            </ p>
                            <input
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                placeholder="Seller Email"
                                required
                                className="input w-full"
                            />
                        </div>
                        <div className="md:w-1/2 md:ml-5">
                            <p className="label_style"> Phone Number
                            </ p>
                            <input
                                type="text"
                                name="number"
                                placeholder="Seller Number (Optional)"
                                className="input w-full"
                            />
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1000" className="md:flex">
                        <div className="md:w-1/2">
                            <p className="label_style">Available Quantity
                            </ p>
                            <input
                                type="text"
                                name="quantity"
                                placeholder="Available Quantity"
                                required
                                className="input w-full"
                            />
                        </div>
                        <div className="md:w-1/2 md:ml-5">
                            <p className="label_style">Rating
                            </ p>
                            <input
                                type="text"
                                name="rating"
                                required
                                placeholder="Toy Rating"
                                className="input w-full"
                            />
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className=" w-full">
                        <p className="label_style">Photo Url
                        </ p>
                        <input
                            type="url"
                            name="img"
                            required
                            placeholder="Photo Url"
                            className="input w-full"
                        />
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className=" md:w-full">
                        <textarea
                            rows={3}
                            required
                            name="details"
                            placeholder="Description"
                            className="w-full p-3 rounded-xl"></textarea>
                    </div>

                    <input
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        type="submit" value="Add Toy" className="addToy_btn" 
                        />
                </form>
            </div>
        </div>
    );
};

export default AddAToy;