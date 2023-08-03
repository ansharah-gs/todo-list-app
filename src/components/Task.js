import React, { useState } from "react";
const Tasks = (props) => {
  const { children } = props;
  const [completed, setCompleted] = useState(false);

  const onCompletedChange = (e) => {
    //console.log(e.target.checked);
    const isChecked = e.target.checked;
    setCompleted(isChecked);
  };
  const taskStyle = {
    textDecoration: completed ? "line-through" : "none",
  };
  return (
    <div>
      <li>
        <span style={taskStyle}>{children}</span>
      </li>{" "}
      <input type="checkbox" name="completed" onChange={onCompletedChange} />
    </div>
  );
};
export default Tasks;
