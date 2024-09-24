import styles from "./Button.module.css"
function Button({b,f}){
  return <button key={b} className={styles["but"]} onClick={()=>{f(b)}}> {b}</button>
}

export default Button;