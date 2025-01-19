import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

const FromComponane =(props)=>{

    const [title,setTitle]=useState('')
    const [amount,setAmount ]=useState(0)
    
    const inputTitle =(event)=>{
        setTitle(event.target.value)
    }
    const inputAmount =(event)=>{
        setAmount(event.target.value)
    }
    const saveItem=(event)=>{
        event.preventDefault()
        const itemData = {
        id:uuidv4(),
        title:title,
        amount:amount,
        }
        console.log(itemData)
    
        props.onAddItem(itemData); 
        
        }
    return(
        <div>
             <form onSubmit={saveItem} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="w-full max-w-xs">
                
                <div className="mb-2">
                    <label>ชื่อรายการ</label>
                    <div><input type="text" onChange={inputTitle} value={title} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"placeholder=" โปรดระบุชื่อรายการ"/></div>
                </div>
                <div>
                    <label>จำนวนเงิน</label>
                    <div><input type="text" onChange={inputAmount} value={amount} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"placeholder =" +รายรับ,-รายจ่าย"/></div>
                </div>
                <div>
                    <button type="submit"className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-3 my-1">เพื่มข้อมูล</button>
                </div>
                </div>
                
            </form>
        </div>
    )
}
export default FromComponane