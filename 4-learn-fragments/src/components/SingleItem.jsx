import styles from "./SingleItem.module.css"

function SingleItem(props){
  let s = props.single;
  let funct = props.call;

  return (<li class= {`${styles["my-row"]} list-group-item`} >
    <span class ={styles["my-item"]} >  {s}</span>
    <button class={`${styles["my-btn"]} btn btn-info`} onClick= {(event) => funct}>Buy</button>
    </li>);
}

export default SingleItem;