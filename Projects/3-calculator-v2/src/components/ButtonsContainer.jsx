import Button from "./Button";
import styles from "./ButtonsContainer.module.css";
function ButtonsContainer({ func }) {
  // let Buttons = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0",".",]
  let Buttons = [
    "C",
    "DEL",
    "|x|",
    "/",
    
    "7",
    "8",
    "9",
    "*",
    
    "4",
    "5",
    "6",
    "-",

    "1",
    "2",
    "3",
    "+",

    "00",
    "0",
    ".",
    "="
  ];
  return (
    <div className={styles["container"]}>
      {Buttons.map((but) => (
        <Button key={but} b={but} f={func}></Button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
