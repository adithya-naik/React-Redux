// importing contextAPI
import { tasksListcontext } from "../store/tasksListcontext";
// to use that context
import { useContext } from "react";

import styles from "./WelcomeNote.module.css";
import { FaPersonRunning } from "react-icons/fa6";

function WelcomeNote() {
  
  const {tasksList} = useContext(tasksListcontext);
  return (
    tasksList.length === 0 && (
      <>
        <p className={styles.welcome}>
          Enjoy your Day !!! <FaPersonRunning />
        </p>
      </>
    )
  );
}

export default WelcomeNote;
