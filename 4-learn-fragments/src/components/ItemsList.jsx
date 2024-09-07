import SingleItem from './SingleItem'
import styles from "./ItemsList.module.css"


function ItemsList(props){
let recieved_list = props.list;
let handleClick = (e) => {
  console.log(e)
  console.log(`${} is being Bought`)
}
  return <>
  <ul class={`${styles["my-container"]} list-group`}>
      {recieved_list.map(item =>(
        <SingleItem key={item} single = {item} call= {handleClick} </SingleItem>
      ))}
    </ul>
  </>
}

export default ItemsList;