import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const User = () => {
  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/user/${userId}`)
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success(response.data.message, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="">
            <Link
                    to="/add"
                    className="flex justify-center items-top text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 rounded me-200 mb-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    aria-current="page"
                  >Add User    
         </Link>
      <table className="mx-auto w-full bg-white shadow-md rounded-lg mt-4">
        <thead className="bg-green-400 text-white">
          <tr>
            <th className="border border-gray-300 px-1.5 py-1">ID</th>
            <th className="border border-gray-300 px-1.5 py-1">Name</th>
            <th className="border border-gray-300 px-1.5 py-1">Email</th>
            <th className="border border-gray-300 px-1.5 py-1">Address</th>
            <th className="border border-gray-300 px-1.5 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
                
              <tr className="text-center">
                <td className="border border-gray-300 px-1.5 py-1">
                  {index + 1}{" "}
                </td>
                <td className="border border-gray-300 px-1.5 py-1">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-1.5 py-1">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-1.5 py-1">
                  {user.address}
                </td>
               
                <td className="border border-gray-300 px-1.5 py-1">
                  <Link to={`/update/` + user._id}>
                    <button type="button" className="text-yellow-600">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    type="button"
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
