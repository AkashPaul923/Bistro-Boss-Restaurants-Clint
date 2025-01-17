import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUser = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        },
    })

    const handleMakeAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "To make Admin this user",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/${id}`)
                .then(res =>{
                    if(res.data.modifiedCount){
                        refetch()
                        Swal.fire({
                            title: "Success!",
                            text: "Now, this user is a Admin",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }

    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                .then(res =>{
                    if(res.data.deletedCount){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }

    return (
        <div>
            <p className="text-2xl md:text-4xl font-bold text-center my-6">Manage All Users</p>
            <div className="overflow-x-auto">
                <p className="text-2xl font-bold my-6">Total User: {users.length}</p>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl no</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, idx) => <tr key={user._id} className="hover">
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === "Admin" ? "Admin" : <button onClick={()=>handleMakeAdmin(user._id)} className="btn"><FaUsers/></button>}</td>
                                <td><button onClick={()=>handleDeleteUser(user._id)} className="btn"><FaTrashAlt/></button></td>
                            </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;