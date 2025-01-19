import Transation from './component/Transation';
import FormComponent from './component/InputForm'
import './App.css';

function App() {
  return (
    <div className="App">
          <h1>แอปบัญชีรายรับรายจ่าย</h1>
          <h2>วันที่ 10 มหราคม</h2>
          <FormComponent/>
          <Transation/>
          </div>
      
);
}

export default App;
