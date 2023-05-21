import { useEffect, useState } from "react";
import Flying from "./Flying";

const FlyingRobot = () => {
    const [ flyingRobot, setFlyingRobot ] = useState([]);

    useEffect( () => {
        fetch('https://y-pearl-eight.vercel.app/flyingRobot')
            .then(res => res.json())
            .then(data => setFlyingRobot(data))
    },[])
    return (
        <div>
        <div className="grid md:grid-cols-3 gap-10">
            {
                flyingRobot.map(car => <Flying
                    key={car._id}
                    flying={car}
                ></Flying>)
            }
        </div>
    </div>
    );
};

export default FlyingRobot;