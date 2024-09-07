import styles from "./Button.module.css"
function Button({b}){
  return <button className={styles["but"]}>{b}</button>
}

export default Button;