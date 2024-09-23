import SingleItem from './SingleItem'
import styles from "./ItemsList.module.css"


function ItemsList(props){
let recieved_list = props.list;

let onClickBuyButton = (s)=>{
  console.log(`${s} is bought`);
}
  return <>
  <ul class={`${styles["my-container"]} list-group`}>
      {recieved_list.map(item =>(
        <SingleItem key={item} single = {item} onClickBuyButton= {()=>console.log(`${item} is being bought`)}> </SingleItem>
      ))}
    </ul>
    </>
}

export default ItemsList;

