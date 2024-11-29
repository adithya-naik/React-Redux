
import Title from "./components/Title";
import InputRow from "./components/InputRow";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";
import Footer from "./components/Footer";

import "./App.css"

function App() {
  return (
    <center>

      <Title></Title>


      <div className="input-row">
        <InputRow></InputRow>
      </div>
      <div className="items-row">

        <Item1></Item1>
        
        <Item2></Item2>

      </div>

      <Footer />

      {/* <Footer></Footer> */}

    </center>
  );
}

export default App;
