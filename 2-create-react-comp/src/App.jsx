// default export
import MyButton  from "./components/MyButton"
// default export
import DynamicComponents from "./components/DynamicComponents"
// default export
import Reusable from "./components/Reusable"



// named export
import { MyBut } from "./components/MyBut"
// named export
import { Header } from "./components/MyBut"


function App() {
  return <div>
    <button>Click 1st</button>
    <MyButton></MyButton>
    <MyBut></MyBut>
    <Header></Header>
    <DynamicComponents></DynamicComponents>
    <Reusable></Reusable>
    <Reusable></Reusable>
    <Reusable></Reusable>

  </div>
}

export default App
