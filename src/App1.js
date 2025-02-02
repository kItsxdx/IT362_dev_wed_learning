import Transaction from './component/Transation'
import FromComponane from './component/FromComponent';
import './App.css';
import { useEffect, useState,useReducer} from "react";
import DataContext from './data/DataContext';
import ReportComponent from './component/ReportComponent';
import  { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

function App() {
  const initData = [
    { id: 1, title: "ค่าเดินทาง", amount: 100 },
    { id: 2, title: "ค่าอาหาร", amount: 200 },
    { id: 3, title: "ค่าชอปปิ้ง", amount: -300 },
  ];

  const [items, setItems] = useState(initData);
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
    setReportIncome(income)
    setReportExpense(expense)    
  },[items,reportIncome,reportExpense])

//Use reducer stat
// const [showReport,setShowReport]= useState(false)
// const reducer = (state,action)=>{
//       switch(action.type){case "SHOW" :
//         return setShowReport(!showReport)}
//       }
// const
// [result,dispatch]=useReducer(reducer,showReport)
 
  return (
    <div>
      {/* <div align="center">
<h1>{result}</h1>
      <button className='btn'
      onClick={()=>dispatch({type:"SHOW"})}>แสดง/ซ่อน</button>
      
    </div> */}
    
      <DataContext.Provider value={
        {
          income:reportIncome,
          expense:reportExpense
        }
      }>
        <div className="App">
          <h1 className="text-4xl font-bold underline bg-white px-8 pt-6 pb-8 mb-4 text-center ">
            แอพบัญชีรายรับ-รายจ่าย
          </h1>
          <h2 className='text-xl text-center underline'>
            วันที่ 10 มกราคม 2568</h2>
            <Router>
              <div>
                <ul>
                  <li className='btnA'><Link to ="/">ข้อมูลบัญชี</Link></li>
                  <li className='btnB'><Link to ="/insert">บันทึกข้อมูล</Link></li>
                </ul>
                <Routes>
                  <Route path='/' element={<ReportComponent/>}/>
                  <Route path='/insert' element={
                    <div>
                      <FromComponane onAddItem={onAddNewItem}/>
                      <Transaction items = {items}/>
                    </div>
                  }/>
                </Routes>
              </div>

            </Router>
          <FromComponane onAddItem={onAddNewItem} />
          <Transaction items={items} />
        </div>
      </DataContext.Provider>
      </div>
  );
}

export default App;