import { useContext, useEffect, useState } from "react";
import MyRobot from "./MyRobot";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    useTitle('MyToy -')

    const [myToyRobot, setMyToyRobot] = useState([])
    const url = `https://y-pearl-eight.vercel.app/robotProducts?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('omega-robot')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (!data.error) {
                    setMyToyRobot(data)
                }
                else {
                    navigate('/login')
                }
            })
    }, [url, navigate])

    const handlerDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this Product!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://y-pearl-eight.vercel.app/robotProducts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your service has been deleted.',
                                'success'
                            )
                            const remaining = myToyRobot.filter(robot => robot._id !== id)
                            setMyToyRobot(remaining)
                        }
                    })

            }
        })
    }

    return (
        <div className="my_container pt-10">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-lg font-open">photo</th>
                            <th className="text-lg font-open">name</th>
                            <th className="text-lg font-open">Category</th>
                            <th className="text-lg font-open">Price</th>
                            <th className="text-lg font-open">Action</th>
                        </tr>
                    </thead>
                    {
                        myToyRobot.map(myRobot => <MyRobot
                            key={myRobot._id}
                            myRobot={myRobot}
                            handlerDelete={handlerDelete}
                        ></MyRobot>)
                    }
                </table>
            </div>

        </div>
    );
};

export default MyToy;