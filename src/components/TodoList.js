import React from "react";

const TodoList = ({ tasksArray }) => {
  console.log(tasksArray);
  //debugger;
  return (
    <div className="todolist">
      <ul>
        {tasksArray.map((task, index) => (
          // key is unique identifier for each task in the array
          <>
            <input type="checkbox" />
            <li key={index}>{task}</li>
          </>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
