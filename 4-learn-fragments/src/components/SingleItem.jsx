import styles from "./SingleItem.module.css"

function SingleItem(props){
  let s = props.single;
  let Click = props.onClickBuyButton;


  return (<li class= {`${styles["my-row"]} list-group-item`} >
    <span class ={styles["my-item"]} > {s}</span>
    <button class={`${styles["my-btn"]} btn btn-info`} onClick= {Click}>Buy</button>
    </li>);
}

export default SingleItem;