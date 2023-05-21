import image from './../../../assets/images/about/robot_3.jpg'

const ShowRobot = ({ allToy }) => {
    const { img, name } = allToy
    return (
        <div className="mt-8 ">
            <div className="text-center">
                <div className="avatar">
                    <div className="w-52 h-50 rounded">
                        <img src={img ? img : image} />
                    </div>
                </div>
                <p> {name}</p>
            </div>
        </div>
    );
};

export default ShowRobot;