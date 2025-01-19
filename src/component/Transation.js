import './Transation.css';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

const Transation = (props) => {
    const { items } = props;
    return (
        <ul className="item-list">
            {
                items.map((e) => (
                    <Item {...e} key={uuidv4()} />
                ))
            }
        </ul>
    );
}

export default Transation;