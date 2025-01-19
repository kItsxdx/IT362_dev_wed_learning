import {u4 as uuidv4} from 'uuid';
import './Transation.css'
import Item from './Item'
const Transation=()=>{
    const data =[
        {Title:"ค่าเดินทาง",Price:100},
        {Title:"ค่าอาหาร",Price:200},
        {Title:"ค่าช็อปปิ้ง",Price:300},
        {Title:"ค่าเที่ยว",Price:3000},
    ]

    return(
        <ul className='item-list'>
            {
                data.map((e)=>{
                    return  <Item{...e}/>
            })
        };
        <hr/>
            <Item Title={data[0].Title} Price={data[0].Price}/>
            <Item Title={data[1].Title} Price={data[1].Price}/>
            <Item Title={data[2].Title} Price={data[2].Price}/>
            <Item Title={data[3].Title} Price={data[3].Price}/>
        </ul>
    );

    // return(
    //     <ul className="item-list">
    //     {data.map((Item)=>(
    //         <li key={Item}>
    //             <span>{Item.Title}</span>
    //             <span>{Item.Price}</span>
    //         </li>
    //     ))}
    //     </ul>
    //     );
}
export default Transation;