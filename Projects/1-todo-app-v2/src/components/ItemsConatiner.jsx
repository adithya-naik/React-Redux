 import Item from "./Item";
import styles from "./ItemsContainer.module.css"

function ItemsContainer({list}){
  return <div className={styles["items-row"]}>
    {list.map(item => (
      <Item todoName={item.task} dueDate={item.date}></Item>
    ))}
</div>
}

export default ItemsContainer;