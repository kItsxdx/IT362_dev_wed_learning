import Item from './Item';
import { v4 as uuidv4 } from 'uuid';


const Transaction = (props) => {
    const { items } = props;
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {items.map((e) => (<Item {...e} key={uuidv4()}
            />))}
        </ul>
    );
}





  
  export default Transaction;
  