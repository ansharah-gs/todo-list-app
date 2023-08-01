import React from "react";

const Todoform = ({ onTaskAdded }) => {
  const onSubmit = (event) => {
    event.preventDefault(); //prevents page from refreshing
    console.log(event.target.task.value);
    //create a new task and add it to the list of task
    onTaskAdded(event.target.task.value);
    debugger;
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="task">Task</label>
        <input type="text" name="task" />
        {/* always use button tag for buttons */}
        <button type="submit">
          <strong>Add Task</strong>
        </button>
      </form>
    </>
  );
};
export default Todoform;
