import Title from './components/Title';
import Slogan from './components/Slogan';
import CurrentTimeDate from './components/CurrentTimeDate';


import './App.css'

function App() {
  let timeDate = new Date();
  return <center>
    <Title></Title>
    <Slogan></Slogan>
    <CurrentTimeDate></CurrentTimeDate>
  </center>
}

export default App
