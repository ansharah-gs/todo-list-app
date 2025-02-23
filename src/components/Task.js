import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { toggleTodos } from "./TodoSlice";

const Tasks = ({ children }) => {
  const dispatch = useDispatch();

  const taskStyle = {
    textDecoration: children.completed ? "line-through gray 15%" : "none",
  };
  return (
    <FormGroup check className="d-flex justify-content-start align-items-start">
      <Input
        name={children.completed}
        type="checkbox"
        onChange={() => dispatch(toggleTodos(children.id))}
      />

      <Label className="mx-2" check style={taskStyle} tag="p">
        {children?.text}
      </Label>
    </FormGroup>
  );
};
export default Tasks;
