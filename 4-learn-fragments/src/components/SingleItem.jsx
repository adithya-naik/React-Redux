import styles from "./SingleItem.module.css"

function SingleItem(props){
  let s = props.single;
  return (<li class= {styles["my-row"]} ><span class ={styles["my-item"]} >  {s}</span></li>);
}

export default SingleItem;