const Item =(props)=>{
    const {Title,Price}=props;
    return(
    <li className="item">{props.Title}<span>{props.Price}</span></li>
    );
    }
export default Item;