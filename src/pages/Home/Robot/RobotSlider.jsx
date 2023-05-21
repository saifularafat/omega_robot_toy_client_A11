import { useEffect, useState } from "react";
import ShowRobot from "./ShowRobot";
import Marquee from "react-fast-marquee";

const RobotSlider = () => {
    const [robotAllToys, setRobotAllToys] = useState([]);

    useEffect(() => {
        fetch("https://y-pearl-eight.vercel.app/robotProducts")
            .then((res) => res.json())
            .then((data) => setRobotAllToys(data));
    }, []);
    return (
        <div className="bg-gradient-to-r from-[#c7dedb] to-[#eed9b4] py-9">
            <div className="text-center" data-aos="fade-down-right">
                <h2 className="text-4xl font-bold mb-3">Robot All Product Show</h2>
                <p className="text-lg font-normal md:max-w-[700px] mx-auto">
                A robot is a machine—especially one programmable by a computer—capable of carrying out a complex series of actions automatically.The control may be embedded within. Robots may be constructed to evoke human form, but most robots are task-performing machines, designed with an emphasis on stark functionality, rather than expressive aesthetics.
                </p>
            </div>
            <div className="grid gap-5">
                <Marquee pauseOnHover={true} speed={120}>
                    {
                        robotAllToys.map((allToy) => (
                            <ShowRobot
                                key={allToy._id}
                                allToy={allToy}>

                            </ShowRobot>
                        ))}
                </Marquee>
            </div>

        </div>
    );
};

export default RobotSlider;