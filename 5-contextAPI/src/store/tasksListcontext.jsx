
import { createContext } from 'react'




export const tasksListcontext = createContext({
  tasksList: [],
  addNewItem: ()=>{},
  deleteItem: ()=>{},
}
);