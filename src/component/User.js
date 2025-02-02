import { useEffect, useState } from "react"
import axios from "axios"

import { Link } from "react-router-dom"

const User=()=>{
const [users,setUsers]=useState([])
useEffect(()=>{
const fetchData = async()=>{
try{
const response = await axios.get("http://localhost:8000/api/users")
setUsers(response.data)
}catch(error){
console.log("Error while fetching data",error)
}
};
fetchData()
},[])

    return(
        <div className="container mx-auto w-1/2">
        <Link to="/add" className="mx-auto text-white bg-blue-700
        rounded-lg font-medium px-2 py-1 me-2 mb-2 ">
        Add User &nbsp;
        <i className="fa-solid fa-user-plus"></i>
        </Link>
            
            <table className="bg-white center">
                <thead>
                    <tr>
                    <th className="border border-red-300 px-2 py-3">ID</th>
                    <th className="border border-red-300 px-2 py-3">Name</th>
                    <th className="border border-red-300 px-2 py-3">Email</th>
                    <th className="border border-red-300 px-2 py-3">Address</th>
                    <th className="border border-red-300 px-2 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>{
                        return (
                            <tr className="text-center">
                                <td className="border border-red-300 px-2 py-3">{index+3} </td>
                                <td className="border border-red-300 px-2 py-3">{user.name}</td>
                                <td className="border border-red-300 px-2 py-3">{user.email}</td>
                                <td className="border border-red-300 px-2 py-3">{user.address}</td>
                                <td className="border border-red-300 px-2 py-3">
                                <button type="button" className="bg-black hover:bg-green-100 text-yellow-600">Update</button>|
                                <button type="button" className="bg-black hover:bg-orange-100 text-red-600">Delete</button>|
                                <button type="button" className="text-red-600"></button>
                                </td>
                            </tr>
                        )})}
                </tbody>    
            </table>
        </div>
    )
}
export default User;