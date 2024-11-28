// importing contextAPI
import { tasksListcontext } from "../store/tasksListcontext";
// to use that context
import { useContext } from "react";

import { useRef } from "react";
import styles from "./InputRow.module.css";
import { MdOutlineAddTask } from "react-icons/md";

function InputRow() {
  const { addNewItem } = useContext(tasksListcontext);

  let nameElement = useRef();
  let dateElement = useRef();

  let clikedAdd = () => {
    let namestate = nameElement.current.value;
    let datestate = dateElement.current.value;
    addNewItem(namestate, datestate);
    nameElement.current.value = "";
    dateElement.current.value = "";
  };

  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-4">
          <input
            ref={nameElement}
            className={styles["input"]}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>

        <div className="col-4">
          <input ref={dateElement} className={styles["input"]} type="date" />
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-success my-btn"
            onClick={clikedAdd}
          >
            <MdOutlineAddTask />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputRow;
