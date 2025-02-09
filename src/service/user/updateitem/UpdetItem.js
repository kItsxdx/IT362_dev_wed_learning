import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateItem = () => {
  const users = {
    title: "",
    amount: "",
  };
  
  const [update, setUser] = useState(users);
  const navigate = useNavigate();
  const { id } = useParams();

  const inputUser = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...update, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/income/${id}`)
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
      .put(`http://localhost:8000/api/income/${id}`, update)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        console.log("updated successfully.");
        navigate("/income");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto w-1/6">
      <h1>Update</h1>
      <form onSubmit={submitForm} className="x-auto text-back bg-sky-500/100 rounded-lg font-medium px-1.5 py-1 me-2 mb-2">
        <div>
          <label>List</label>
          <div>
            <input
              className="border border-gray-800 px-1.5 py-1 mb-2"
              value={update.title}
              onChange={inputUser}
              type="text"
              id="title"
              name="title"
              required
            />
          </div>
          <label>Amount</label>
          <div>
            <input
              className="border border-gray-800 px-1.5 py-1 mb-2"
              value={update.amount}
              onChange={inputUser}
              type="number"
              id="amount"
              name="amount"
              required
            />
          </div>
          <button
            className="mx-auto text-white bg-sky-800 rounded-lg font-medium px-1.5 py-1 me-2 mb-2"
            type="submit"
          >
            Submit &nbsp;
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;
