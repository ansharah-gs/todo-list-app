import React from "react";
//functions to get props
// on task added State lifting; sending data from child to parent,
const Todoform = ({ onTaskAdded }) => {
  //setting up errors array to be used to display errors in the form
  const [errors, setErrors] = React.useState([]);
  //on submit function

  const onSubmit = (event) => {
    event.preventDefault(); //prevents page from refreshing
    //console.log(event.target.task.value);
    //create a new task and add it to the list of task
    const value = event.target.task.value;

    const newErrors = [];
    //testing logiv
    if (value === "") {
      //==== means value isn't  empty and type should be same
      newErrors.push("Please enter a task");
    } else if (value.trim() === "") {
      // trim remove white space from the string
      newErrors.push("task can't be spaces");
    }
    
    setErrors(newErrors);
    //if the errors array is empty, then add the value(tasks) to the errors array
    if (newErrors.length == 0) {
      onTaskAdded(value);
    }

    // debugger;
  };
  const ulStyles = {
    color: "red",
  };
  const hasErrors = errors.length > 0 ? true : false;

  const errorELements = errors.map((error, index) => {
    return <li key={index}>{error}</li>;
  });

  const onTaskChanged = (event) => {
    // debugger;
    const value = event.target.value;
    setErrors([]);
    // onTaskAdded(value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="task" onChange={onTaskChanged} />
        {/* always use button tag for buttons */}
        <button type="submit" className="addBtn" disabled={hasErrors}>
          <strong>Add Task</strong>
        </button>
        <ul style={{ ulStyles }}>{errorELements}</ul>
      </form>
    </>
  );
};
export default Todoform;
