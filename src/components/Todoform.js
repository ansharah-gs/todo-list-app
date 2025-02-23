import React, { useState, useEffect } from "react";
import taskData from "../data/tasks.json";
import {
  Form,
  Input,
  Alert,
  Row,
  Col,
  Button,
  List,
  Container,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addTodos } from "./TodoSlice";

const Todoform = ({ onTaskAdded, randomTask }) => {
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (randomTask) {
      setInput(randomTask);
    }
  }, [randomTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];
    if (input === "") {
      newErrors.push("Please enter a task");
    } else if (input.trim() === "") {
      newErrors.push("Task can't be spaces");
    }

    setErrors(newErrors);
    if (newErrors.length === 0) {
      dispatch(addTodos(input));
      setInput("");
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const hasErrors = errors.length > 0;

  const errorELements = errors.map((error, index) => (
    <Alert color="danger" key={index}>
      {error}
    </Alert>
  ));

  const generateRandomTask = () => {
    const taskArray = taskData.tasks;
    const randomNumber = Math.floor(Math.random() * taskData.tasks.length);
    const randomTask = taskArray[randomNumber];
    setInput(randomTask);
    dispatch(addTodos(randomTask)); // Add the random task directly
    setErrors([]); // Clear errors when a random task is added
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container className="align-middle">
          <Row className="d-flex row cols align-items-center">
            <Col className="p-2 col-12">
              <Input
                id="exampleText"
                name="task"
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Add a task"
              />
            </Col>
            <Col className="p-2 col-auto offset-sm-5">
              <Button type="submit" color="success" disabled={hasErrors}>
                Add Task
              </Button>
            </Col>
            <Col className="p-2 col-auto ">
              <Button type="button" color="info" onClick={generateRandomTask}>
                Random Task
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
      <List>{errorELements}</List>
    </>
  );
};
export default Todoform;
