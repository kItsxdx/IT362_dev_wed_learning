import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../App.css';

const AddUser=()=>{
    
    
        const users={
        name:"",
        email:"",
        address:"",
        };
        const [user,setUser]=useState(users)
        const navigate = useNavigate()
        const inputUser = (e)=>{
        const{name,value}=e.target
        console.log(name,value)
        setUser({...user,[name]:value})
        }

        const submitForm=async(e)=>{
            e.preventDefault();
            await axios.post("http://localhost:8000/api/user",user)
            .then((response)=>{
            toast.success(response.data.message,{position:"top-right"})
            console.log("User created successfully.")
            navigate("/user")
            
            })
            .catch((error)=>{
            console.log(error)
            })
            }
            return(<div className="block mb-2 text-sm font-medium text-gray-900 ">
    <h3 className='text-4xl font-bold underline bg-white px-8 pt-6 pb-8 mb-4 text-center'>Add New User</h3>
    <form onSubmit={submitForm}>
    <div className='inputAdd'>
            <label >Name:</label>
        <input type="text" id="name" name="name" required onChange={inputUser}/>
            
            <label >Your email:</label>
        <input type="email" id="email" name="email" required onChange={inputUser}/>
            
            <label for="address">Your address:</label>
        <input type="text" id="address" name="address" required onChange={inputUser} />
    </div>
    <button 
    className="bg-white hover:bg-green-100 text-green-800 font-semibold py-2 px-4 border border-green-400 rounded shadow mt-3 my-1"
    
    type="submit">Submit</button>
    </form>
    </div>
    );}


export default AddUser