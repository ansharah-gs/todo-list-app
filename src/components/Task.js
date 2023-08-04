import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
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
    <FormGroup check className="d-flex justify-content-start">
      <Input
        id="checkbox2"
        name="completed"
        type="checkbox"
        onChange={onCompletedChange}
      />
      <Label check style={taskStyle} tag="p">
        {children}
      </Label>
    </FormGroup>
  );
};
export default Tasks;
