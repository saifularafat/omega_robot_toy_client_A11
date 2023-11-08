import { useContext, useEffect, useState } from "react";
import Car from "./Car";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Loading from "../../../../Shares/Loading";

const CarRobot = () => {
    const [carRobot, setCarRobot] = useState([]);
    const { loading } = useContext(AuthContext);
    
    useEffect(() => {
        fetch('https://y-pearl-eight.vercel.app/carRobot')
            .then(res => res.json())
            .then(data => setCarRobot(data))
    }, [])
    if (loading) {
        return <Loading />
    }
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