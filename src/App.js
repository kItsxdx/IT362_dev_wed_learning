import Transaction from './component/Transation'
import FromComponane from './component/FromComponent';
import './App.css';
import { useState } from "react";

function App() {
  const initData = [
    { id: 1, title: "ค่าเดินทาง", amount: 100 },
    { id: 2, title: "ค่าอาหาร", amount: 200 },
    { id: 3, title: "ค่าชอปปิ้ง", amount: 300 },
  ];

  const [items, setItems] = useState(initData);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  

  return (
    <div className="App">
      <h1 className="text-4xl font-bold underline bg-white px-8 pt-6 pb-8 mb-4">
        แอพบัญชีรายรับ-รายจ่าย
      </h1>
      <h2 className='text-xl text-center underline'>วันที่ 10 มกราคม 2568</h2>
      <FromComponane onAddItem={onAddNewItem} />
      <Transaction items={items} /> 
    </div>
  );
}

export default App;