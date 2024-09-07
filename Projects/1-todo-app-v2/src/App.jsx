import Title from "./components/Title";
import InputRow from "./components/InputRow";
import ItemsContainer from "./components/ItemsConatiner";

import "./App.css";

let tasksList = [
  {
    task: "Take Bath",
    date: "10/9/2024",
  },
  {
    task: "Complete this video",
    date: "10/9/2024",
  },
  {
    task: "BSNL Sim port",
    date: "10/9/2024",
  },
  {
    task: "Go to Lunch",
    date: "10/9/2024",
  },
];

function App() {
  return (
    <center>
      <Title></Title>
      <div className="input-row"><InputRow></InputRow></div>
      <ItemsContainer list = {tasksList}></ItemsContainer>
    </center>
  );
}

export default App;
