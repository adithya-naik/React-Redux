import styles from"./Input.module.css";
function Input(props){


// this is while painting the enterd value has to be shown in the para tag,but here we dont want to show it separatly ,so we r commenting
  // return <input className={styles["input"]} placeholder="Enter missing DryFruits" onChange={props.onChangeInput} type="text" />
  return <input className={styles["input"]} placeholder="Enter missing DryFruits" onKeyDown={props.handleKeyDown} type="text" />
}


export default Input; 
