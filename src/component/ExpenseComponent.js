import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const ExpenseComponent = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    const fetchExpenseData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/expense");
        const data = await response.json();

        if (response.ok) {
          setExpenseList(data);
        } else {
          console.error("Fetch Failed:", data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchExpenseData();
  }, []);

  
  useEffect(() => {
    const isValid = title.trim().length > 0 && amount !== "" && Number(amount) < 0;
    setFormValid(isValid);
  }, [title, amount]);

  
  const inputTitle = (event) => {
    setTitle(event.target.value);
  };

  
  const inputAmount = (event) => {
    let value = event.target.value;
    if (value === "" || Number(value) < 0) {
      setAmount(value);
    }
  };

  
  const saveItem = async (event) => {
    event.preventDefault();
    const itemData = { title, amount: Number(amount) };

    console.log("Data to Send:", itemData);

    if (!title.trim() || amount === "" || Number(amount) >= 0) {
      console.error("Invalid input: ต้องกรอกชื่อ และจำนวนเงินต้องเป็นค่าลบ");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/expense", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
      });

      const data = await response.json();

      if (response.status === 201) {
        console.log("✅ เพิ่มข้อมูลสำเร็จ:", data);
        setExpenseList((prev) => [...prev, data.data]); // 🔹 อัปเดตรายการทันที
        setTitle("");
        setAmount("");
        toast.success("เพิ่มรายการสำเร็จ!");
      } else {
        console.error("❌ เพิ่มข้อมูลไม่สำเร็จ:", data.message);
        toast.error("ไม่สามารถเพิ่มรายการได้");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      toast.error("เกิดข้อผิดพลาดในการเพิ่มรายการ");
    }
  };

  const deleteItem = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/expense/${userId}`);
      setExpenseList((prev) => prev.filter((item) => item._id !== userId));
      toast.success(response.data.message);
    } catch (error) {
      console.error("❌ Error deleting:", error);
    }
  };

  return (
    <div>
      <form onSubmit={saveItem} className="bg-red-300 shadow-md rounded flex justify-center items-top">
        <div className="w-full max-w-xs">
          <div className="mb-2">
            <label>ชื่อรายการ</label>
            <input
              type="text"
              onChange={inputTitle}
              value={title}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="โปรดระบุชื่อรายการ"
            />
          </div>
          <div>
            <label>จำนวนเงิน (ต้องเป็นค่าลบ)</label>
            <input
              type="number"
              onChange={inputAmount}
              value={amount}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="ใส่จำนวนเงิน"
            />
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
        <h2 className="text-lg font-bold flex justify-center items-top">รายจ่าย</h2>
        <table className="mx-auto w-full bg-white shadow-md rounded-lg mt-4">
          <thead className="bg-red-700 text-white">
            <tr>
              <th className="border border-gray-300 px-2 py-1">#</th>
              <th className="border border-gray-300 px-2 py-1">Name</th>
              <th className="border border-gray-300 px-2 py-1">Amount</th>
              <th className="border border-gray-300 px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenseList.map((item, index) => (
              <tr key={item._id} className="text-center">
                <td className="border border-gray-300 px-2 py-1">{index + 1}</td>
                <td className="border border-gray-300 px-2 py-1">{item.title}</td>
                <td className="border border-gray-300 px-2 py-1">{item.amount} บาท</td>
                <td className="border border-gray-300 px-2 py-1">
                  <Link to={`/updateitemEx/${item._id}`}>
                    <button className="text-yellow-600">Update</button>
                  </Link>
                  <button onClick={() => deleteItem(item._id)} className="text-red-600 ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseComponent;
