import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const inputUser = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/user", user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        console.log("User created successfully.");
        navigate("/user");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto w-1/6 ">
      <h1 className="text-2xl font-bold flex justify-center items-top">Add New User</h1>
      <form form onSubmit={submitForm} className="x-auto text-back bg-yellow-200 rounded-lg font-medium px-1.5 py-1 me-2 mb-2">
        <div>
          <label className="flex justify-center items-top" >Name</label>
            <div>
          <input className="border border-gray-800 px-1.5 py-1 mb-2" onChange={inputUser} type="text" id="name" name="name" required />
          </div>
          <label className="flex justify-center items-top">Your email</label>
          <div>
          <input className="border border-gray-800 px-1.5 py-1 mb-2" onChange={inputUser} type="email" id="email" name="email" required />
          </div>
          <label for="address" className="flex justify-center items-top">Your address</label>
          <div>
          <input className="border border-gray-800 px-1.5 py-1 mb-2" onChange={inputUser} type="text" id="address" name="address" required />
          </div>
        </div>
        <button className="mx-auto text-white bg-black rounded-lg font-medium  flex justify-center items-top" type="submit">Submit &nbsp;</button>
        
      </form>
    </div>
  );
};
export default AddUser;
