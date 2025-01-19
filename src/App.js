import Transation from './component/Transation';
import FormComponent from './component/FromComponent';
import './App.css';

function App() {
  return (
    <div className="App">
          <h1 className=' text-3xl font-bold underline'>แอปบัญชีรายรับรายจ่าย</h1>
          <h2>วันที่ 10 มหราคม</h2>
          <FormComponent/>
          <Transation/>
          </div>
      
);
}

export default App;
