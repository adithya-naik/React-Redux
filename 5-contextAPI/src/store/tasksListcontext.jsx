import { createContext, useReducer } from "react";

export const tasksListcontext = createContext({
  tasksList: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// after using useReducer we are separating the UI and bussiness Logic in this file

const todoReducer = (currentTodo, action) => {
  let newTodos = currentTodo;
  if (action.type === "ADD_ITEM") {
    newTodos = [
      ...currentTodo,
      { task: action.payload.name, date: action.payload.date },
    ];
  } else if (action.type === "DEL_ITEM") {
    newTodos = currentTodo.filter((item) => item.task !== action.payload.name);
  }
  return newTodos;
};



  const TasksListContextReducerProvider = ({ children}) => {
    let [tasksList, todoDispatch] = useReducer(todoReducer, []);
    

  let addNewItem = (name, date) => {
    let addAction = {
      type: "ADD_ITEM",
      payload: {
        name: name,
        date: date,
      },
    };

    todoDispatch(addAction);
  };
  let deleteItem = (name) => {
    let delAction = {
      type: "DEL_ITEM",
      payload: {
        name: name,
      },
    };

    todoDispatch(delAction);
  };
  return (
    <>
      <tasksListcontext.Provider
        value={{
          tasksList: tasksList,
          addNewItem: addNewItem,
          deleteItem: deleteItem,
        }}
      >
        {children}
      </tasksListcontext.Provider>
    </>
  );
};

export default TasksListContextReducerProvider;
