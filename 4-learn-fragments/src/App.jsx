
// import React from 'react';

import ItemsList from './components/ItemsList';
import Errormsg from './components/ErrorMsg';
import Container from './components/Container';
import Input from './components/Input';
import './App.css'
import { useState } from 'react';

function App() {
  // there is another way of using react fragment 

  // first we have to import


  // and then returning 

  // return (
  //   <React.Fragment>
  //     <h1>Healthy Foods</h1>
  //         <ul class="list-group">
  //           <li class="list-group-item">An item</li>
  //           <li class="list-group-item">A second item</li>
  //           <li class="list-group-item">A third item</li>
  //           <li class="list-group-item">A fourth item</li>
  //           <li class="list-group-item">And a fifth one</li>
  //         </ul>
  //   </React.Fragment>
  // );


// let items = []
// let items = ["Baadham","Karjura","Kismis","Jeedi Pappu","Kaaju","Walnut","Pista","Sunflower seeds "];
// iam commenting this while using the useState Hook , so that we are able to check the performance of the ErrorMsg component and performance the App at Overall level


// let textState = useState();
// let textStateVal = textState[0];
// let setTextState = textState[1];

// let [textStateVal,setTextState] = useState("User Entered"); 
//above takes the defaultvalue in between ()





// now we are applying useState on input tag , which effects the app to add a new item into the food items list when ENTER is clicked !!

let [items,setinputChange] = useState([])

const onKeyDown = (event)=>{
  if(event.key === 'Enter'){
    let enteredItem = event.target.value;
    let newList = [...items,enteredItem];
    event.target.value = '';
    setinputChange(newList);
  }

}



// this is while painting the enterd value has to be shown in the para tag,but here we dont want to show it separatly ,so we r commenting
// const onChangeInput = (event)=>{
//   console.log(event.target.value);
//   setTextState(event.target.value) ;

// }
  return <>
  {/* what evr it may be the chilfdren passed in the container,it can be img,video,post,story or any,that will be rendered irrespective of the type which is to be used  */}
      <Container>
        <h1 class="heading">Dry Fruits List</h1>
        <Input handleKeyDown = {onKeyDown}></Input>
        <Errormsg list = {items}></Errormsg>
        {/* <p>{}</p> */}
        <ItemsList list = {items}></ItemsList>
      </Container>

      <Container>
        <p>Above are the list of Dry Fruits that are good for your health and well being</p>
      </Container>
  
  </>
}
export default App;
