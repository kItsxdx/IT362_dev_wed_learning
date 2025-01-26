import DataContext from "../data/DataContext";
import { useContext } from "react";
import './ReportComponent.css'
const ReportComponent=()=>{
    const {income,expense} = useContext(DataContext)
    const output = (income - expense).toLocaleString()
    return(
        <div>
            <div>
                <p>ยอดเงินคงเหลือ (บาท) : ฿{output}</p>

            </div>
            <div>
                    <p className="box green">
                        รายรับ:{income}</p>
                    <p className="box red">
                        รายจ่าย:{expense}</p>
            </div>
        </div>
    );
}
export default ReportComponent