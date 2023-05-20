import { useContext, useEffect, useState } from "react";
import MyRobot from "./MyRobot";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const [ myToyRobot, setMyToyRobot ] = useState([])
    const url = `http://localhost:5000/robotProducts?email=${user?.email}`
    useEffect(() => {
        fetch(url,{
            method: 'GET',
            headers: {
                'content-type' : 'application/json'
            },
        })
        .then( res => res.json())
        .then( data => {
            console.log(data);
            if(!data.error){
                setMyToyRobot(data)
            }
            else{
                navigate('/login')
            }
        })
    },[url, navigate])

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
                fetch(`http://localhost:5000/robotProducts/${id}`, {
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
                            <th>photo</th>
                            <th>name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        myToyRobot.map(myRobot => <MyRobot
                            key={myRobot._id}
                            myRobot={myRobot}
                            handlerDelete = {handlerDelete}
                        ></MyRobot>)
                    }
                </table>
            </div>

        </div>
    );
};

export default MyToy;