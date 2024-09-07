import SingleItem from './SingleItem'
import styles from "./ItemsList.module.css"


function ItemsList(props){
let recieved_list = props.list;
  return <>
  <ul class={`${styles["my-container"]} list-group`}>
      {recieved_list.map(item =>(
        <SingleItem key={item} single = {item}></SingleItem>
      ))}
    </ul>
  </>
}

export default ItemsList;