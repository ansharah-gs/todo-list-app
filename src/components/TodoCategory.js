import React, { useState } from "react";
import Todoform from "./Todoform";

import TodoList from "./TodoList";

const TodoCategory = (props) => {
  const [tasks, setTasks] = useState([]);
  const onTaskAddedCallback = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <>
      <Todoform onTaskAdded={onTaskAddedCallback} />
      <TodoList tasksArray={tasks} />
    </>
  );
};
export default TodoCategory;
