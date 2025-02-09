import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const { id } = useParams();
  const inputUser = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/user/${id}`, user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        console.log("User updated successfully.");
        navigate("/user");
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
   return (
    <div className="container mx-auto w-1/6">
      <h1 >Add New User</h1>
      <form form onSubmit={submitForm} className="x-auto text-back bg-sky-500/100 rounded-lg font-medium px-1.5 py-1 me-2 mb-2">
        <div>
          <label >Name</label>
            <div>
          <input className="border border-gray-800 px-1.5 py-1 mb-2" value={user.name} onChange={inputUser} type="text" id="name" name="name" required />
          </div>
          <label>Your email</label>
          <div>
          <input className="border border-gray-800 px-1.5 py-1 mb-2" value={user.email} onChange={inputUser} type="email" id="email" name="email" required />
          </div>
          <label for="address">Your address</label>
          <div>
          <input className="border border-gray-800 px-1.5 py-1 mb-2" value={user.address} onChange={inputUser} type="text" id="address" name="address" required />
          </div>
        </div>
        <button className="mx-auto text-white bg-sky-800 rounded-lg font-medium px-1.5 py-1 me-2 mb-2" type="submit">Submit &nbsp;</button>
        
      </form>
    </div>
  );
};

export default UpdateUser;
