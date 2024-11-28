// importing contextAPI
import { tasksListcontext } from "../store/tasksListcontext";
// to use that context
import { useContext } from "react";

import Item from "./Item";
import styles from "./ItemsContainer.module.css"

function ItemsContainer({delfun}){

  const {tasksList} = useContext(tasksListcontext);
  
// console.log(listC);
  return <div className={styles["items-row"]}>
    {tasksList.map(item => (
      <Item key={item} f = {delfun} todoName={item.task} dueDate={item.date}></Item>
    ))}
</div>
}

export default ItemsContainer;