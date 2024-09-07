
// import React from 'react';

import ItemsList from './components/ItemsList';
import Errormsg from './components/ErrorMsg';
import './App.css'

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
let items = ["Baadham","Karjura","Kismis","Jeedi Pappu","Kaaju","Walnut","Pista","Sunflower seeds "]

  return <>
    <h1 class="heading">Dry Fruits List</h1>
    <Errormsg list = {items}></Errormsg>
    <ItemsList list = {items}></ItemsList>
  </>
}

export default App
