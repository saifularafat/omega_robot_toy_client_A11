import { useEffect, useState } from "react";
import Electric from "./Electric";

const ElectricRobot = () => {
    const [electricRobot, setElectricRobot] = useState([]);

    useEffect(() => {
        // https://y-pearl-eight.vercel.app/electricRobot
        fetch('http://localhost:5000/electricRobot')
            .then(res => res.json())
            .then(data => setElectricRobot(data))
    }, [])
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    electricRobot.map(car => <Electric
                        key={car._id}
                        electric={car}
                    ></Electric>)
                }
            </div>
        </div>
    );
};

export default ElectricRobot;