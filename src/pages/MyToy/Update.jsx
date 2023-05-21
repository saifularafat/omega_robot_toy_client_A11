import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Update = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams({})

    const handlerRobotUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const category_name = form.category_name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const updateInfo = {
            category_name,
            price,
            quantity,
            rating,
            details
        }

        fetch(`https://y-pearl-eight.vercel.app/robotProducts/${id}`, {
        // fetch(`http://localhost:5000/robotProducts/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Wow!',
                        text: 'Updated Robot successfully..!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div className="bg-orange-200 py-7">
            <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-center pt-5">
                <h2 className="font-Lobster font-bold text-3xl pb-3">Update TOY</h2>
                <p className="text-2xl text-description-color font-open">Do you want to Change anything?</p>
            </div>
            <div
                className="my_container mt-8">
                <form onSubmit={handlerRobotUpdate}
                    className="space-y-5 mx-2">
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="md:flex">
                        <div className="md:w-1/2">
                            <p className="label_style">Category Name
                            </ p>
                            <input
                                type="text"
                                name="category_name"
                                defaultValue={user?.category_name}
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
                                defaultValue={user?.price}
                                placeholder="Toy Price"
                                required
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
                                defaultValue={user?.quantity}
                                placeholder="Available Quantity"
                                required
                                className="input w-full"
                            />
                        </div><div className="md:w-1/2 md:ml-5">
                            <p className="label_style">Rating
                            </ p>
                            <input
                                type="text"
                                name="rating"
                                defaultValue={user?.rating}
                                required
                                placeholder="Toy Rating"
                                className="input w-full"
                            />
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className=" md:w-full">
                        <textarea
                            rows={3}
                            required
                            name="details"
                            defaultValue={user?.details}
                            placeholder="Description"
                            className="w-full p-3 rounded-xl"></textarea>
                    </div>

                    <input
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        type="submit" value="Update Toy" className="addToy_btn"
                    />
                </form>
            </div>
        </div>
    );
};

export default Update;