import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import './App.css'
import { useState } from 'react'

function App() {
  let [curVal,setCurVal] = useState("");

  let onButClick = (b) =>{
    if(b==="C"){
      setCurVal("");
    }
    else if(b==="="){
      setCurVal(eval(curVal));
    }
    else if(b==="|x|"){
      curVal = Math.abs(curVal);
      setCurVal(curVal);
    }
    else if(b==="≈"){
      curVal = Math.round(curVal);
      setCurVal(curVal);
    }
    else{
      setCurVal(curVal+b);
     }
  }


  return <>
    <div className='calculator'>
      <Display Curvalue = {curVal}></Display>
      <ButtonsContainer func = {onButClick}></ButtonsContainer>
    </div>
  </>
}

export default App
