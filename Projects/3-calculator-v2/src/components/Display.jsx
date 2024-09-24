import styles from "./Display.module.css"

function Display(props){
  return <>
  <input className={styles["display"]} type="text" value = {props.Curvalue} readOnly /></>
}

export default Display;