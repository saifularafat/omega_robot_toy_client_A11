import image from './../../../assets/images/about/robot_3.jpg'

const ShowRobot = ({ allToy }) => {
    console.log(allToy);
    const { img, name } = allToy
    return (
        <div className="mt-8 ">
            <div className="text-center">
                <div className="avatar">
                    <div className="md:w-52 md:h-50 rounded">
                        <img src={img ? img : image} />
                    </div>
                </div>
                <p> {name}</p>
            </div>
        </div>
    );
};

export default ShowRobot;