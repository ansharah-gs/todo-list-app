import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import Todoform from "./components/Todoform.js";
import logo from "./logo.svg";

export default function App() {
  const [tasks, setTasks] = useState([]);

  // take the task thats added, AND ADD IT TO THE ARRAY OF TASKS
  const onTaskAddedCallback = (task) => {
    setTasks([...tasks, task]);
  };
  // debugger;
  //outside of function so it renders and than displays the tasks array
  // console.log(" task:",tasks);
  //destructure the props; extra is just anything other than children, children is whats inside header tag
  return (
    <>
      <Header className="top-header">
        <h1>Todo List ✔</h1>
        <img src={logo} alt="logo" width={50} height={50} />
      </Header>
      <Todoform onTaskAdded={onTaskAddedCallback} />
      <TodoList>
        {tasks.map((task, index) => (
          // key is unique identifier for each task in the array
          <li key={index}>{task}</li>
        ))}
      </TodoList>
      <Footer />
    </>
  );
}
