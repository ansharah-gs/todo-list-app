import React, { useState } from "react";
import Todoform from "./Todoform";

import TodoList from "./TodoList";

const TodoCategory = (props) => {
  const [tasks, setTasks] = useState([]);
  //  take the task thats added, AND ADD IT TO THE ARRAY OF TASKS(sending it to the children)
  const onTaskAddedCallback = (task) => {
    setTasks([...tasks, task]);
    //spread out the previous task first so that it doesn't get overrides
    // update tasks array from user input to tasks array and re-renders
  }

  // debugger;
  //outside of function so it renders and than displays the tasks array
  // console.log(" task:",tasks);
  //destructure the props; extra is just anything other than children, children is whats inside header tag
  return (
    <>
      <Todoform onTaskAdded={onTaskAddedCallback} />
      {/* // has input ; send tasks to todolist */}
      <TodoList tasksArray={tasks} />
      {/* // has output */}
    </>
  );
};
export default TodoCategory;
