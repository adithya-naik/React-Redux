import Title from "./components/Title";
import InputRow from "./components/InputRow";
import ItemsContainer from "./components/ItemsConatiner";
import WelcomeNote from "./components/WelcomeNote";
import { useState } from "react";
import { tasksListcontext } from "./store/tasksListcontext";
import "./App.css";

function App() {
  let [tasksList, setTasksList] = useState([]);

  let addNewItem = (name, date) => {
    let list = [...tasksList, { task: name, date: date }];
    setTasksList(list);
  };
  let deleteItem = (name) => {
    let list = tasksList.filter((item) => item.task !== name);
    setTasksList(list);
  };
  return (
    // now we have to ,ention the context api provider for tasksListContext
    <tasksListcontext.Provider
      value={{
        tasksList: tasksList,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center>
        <Title></Title>
        <div className="input-row">
          <InputRow></InputRow>
        </div>
        <div>
        <WelcomeNote> </WelcomeNote>
        <ItemsContainer></ItemsContainer>
        </div>
      </center>
    </tasksListcontext.Provider>
  );
}

export default App;
