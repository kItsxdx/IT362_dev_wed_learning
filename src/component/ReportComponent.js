import DataContext from "../data/DataContext";
import { useContext } from "react";
const ReportComponent=()=>{
    const {income,expense} = useContext(DataContext)

    return(
        <div>
            <p>รายรับ:{income}</p>
            <p>รายจ่าย:{expense}</p>
        </div>
    );
}
export default ReportComponent