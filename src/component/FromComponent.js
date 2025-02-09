import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
import toast from "react-hot-toast";

const FromComponane = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();
  const [formValid, setFormValid] = useState(false);
  const [incomeList, setIncomeList] = useState([]); 

  useEffect(() => {
    const fetchIncomeData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/income");
        const data = await response.json();

        if (response.ok) {
          setIncomeList(data); 
        } else {
          console.error(data.message); 
        }
      } catch (error) {
        console.error("Error fetching data:", error); 
      }
    };

    fetchIncomeData();
  }, []); 

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };

  const inputAmount = (event) => {
    const value = Number(event.target.value);
    if (value >= 0) {
      setAmount(value);
    }
  };

  const saveItem = async (event) => {
    event.preventDefault();
    const itemData = { title, amount: Number(amount) };

    try {
      const response = await fetch("http://localhost:8000/api/income", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
      });

      const data = await response.json();

      if (response.status === 201) {
        setIncomeList((prevIncome) => [...prevIncome, data.data]); 
        setTitle(""); 
        setAmount(""); 
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteItem = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/income/${userId}`);
      setIncomeList((prevIncome) => prevIncome.filter((item) => item._id !== userId)); 
      toast.success(response.data.message, { position: "top-right" }); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkData = title.trim().length > 0 && amount > 0;
    setFormValid(checkData);
  }, [title, amount]);

  return (
    <div>
      <form onSubmit={saveItem} className="bg-green-200 shadow-md rounded flex justify-center items-top">
        <div className="w-full max-w-xs">
          <div className="mb-2 ">
            <label>ชื่อรายการ</label>
            <div>
              <input
                type="text"
                onChange={inputTitle}
                value={title}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="โปรดระบุชื่อรายการ"
              />
            </div>
          </div>
          <div>
            <label>จำนวนเงิน</label>
            <div>
              <input
                type="number"
                onChange={inputAmount}
                value={amount}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="ใส่จำนวนเงิน"
                min="0"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-3 my-1"
              disabled={!formValid}
            >
              เพิ่มข้อมูล
            </button>
          </div>
        </div>
      </form>

      <div className="mt-4">
        <h2 className="text-lg font-bold flex justify-center items-top">รายรับ</h2>
        <table className="mx-auto w-full bg-white shadow-md rounded-lg mt-4">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="border border-gray-300 px-1.5 py-1">#</th>
              <th className="border border-gray-300 px-1.5 py-1">Name</th>
              <th className="border border-gray-300 px-1.5 py-1">Amount</th>
              <th className="border border-gray-300 px-1.5 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {incomeList.map((item, index) => {
              return (
                <tr key={item.id} className="text-center">
                  <td className="border border-gray-300 px-1.5 py-1">{index + 1}</td>
                  <td className="border border-gray-300 px-1.5 py-1">{item.title}</td>
                  <td className="border border-gray-300 px-1.5 py-1">{item.amount} บาท</td>
                  <td className="border border-gray-300 px-1.5 py-1">
                    <Link to={`/updateitem/${item._id}`}>
                      <button type="button" className="text-yellow-600">
                        Update
                      </button>
                    </Link>

                    <button
                      onClick={() => deleteItem(item._id)}
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
    </div>
  );
};

export default FromComponane;
