import { useEffect, useState } from "react";
import Car from "./Car";

const CarRobot = () => {
    const [carRobot, setCarRobot] = useState([]);

    useEffect(() => {
        fetch('https://y-pearl-eight.vercel.app/carRobot')
            .then(res => res.json())
            .then(data => setCarRobot(data))
    }, [])
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    carRobot.map(car => <Car
                        key={car._id}
                        car={car}
                    ></Car>)
                }
            </div>
        </div>
    );
};

export default CarRobot;