import Button from "./Button";
import styles from "./ButtonsContainer.module.css"
function ButtonsContainer(){
  let Buttons = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0",".",]
  return <div className={styles["container"]}>
  {Buttons.map((but =>(
    <Button b = {but}></Button>
  )))}
</div>
}


export default ButtonsContainer;