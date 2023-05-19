
const AddAToy = () => {
    return (
        <div className="bg-orange-300 md:p-10">
            <div
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-anchor-placement="bottom-center"
                className="text-center">
                <h2 className="font-Lobster font-bold text-3xl pb-3">ADD TOY</h2>
                <p className="text-2xl text-description-color font-open">Please Add Your toy information</p>
            </div>
            <div
                className="my_container mt-8">
                <form
                    className="space-y-5 mx-2">
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        className="md:flex">
                        <div className="md:w-1/2">
                            <p className="label_style">Name
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
                                name="seller"
                                placeholder="Your Name"
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
                                name="quantity"
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
                                name="quantity"
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
                            <p className="label_style">Available
                            </ p>
                            <input
                                type="email"
                                name="available"
                                placeholder="Available Toy"
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
                            name="photo"
                            readOnly
                            placeholder="Toy Rating"
                            className="input w-full"
                        />
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className=" md:w-full">
                        <textarea rows={3} placeholder="Description"
                            className="w-full p-3 rounded-xl"></textarea>
                    </div>

                    <input
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        type="submit" value="Add Toy" className="bg-red-500 w-full py-3 text-white rounded-xl cursor-pointer mb-7" />
                </form>
            </div>
        </div>
    );
};

export default AddAToy;