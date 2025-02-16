import React, { useState, useEffect } from "react";
import taskData from "../data/tasks.json";
import { Form, Label, Input, Alert, Row, Col, Button, List } from "reactstrap";

const Todoform = ({ onTaskAdded, randomTask }) => {
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState([]);

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
      onTaskAdded(input);
      setInput("");
    }
  };

  const hasErrors = errors.length > 0 ? true : false;

  const errorELements = errors.map((error, index) => {
    return (
      <Alert color="danger" key={index}>
        {error}
      </Alert>
    );
  });

  const generateRandomTask = () => {
    const taskArray = taskData.tasks;
    const randomNumber = Math.floor(Math.random() * taskData.tasks.length);
    const randomTask = taskArray[randomNumber];
    setInput(randomTask);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="row-cols-lg-auto g-3 justify-content-center">
          <Col>
            <Input
              id="exampleText"
              name="task"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a task"
            />
          </Col>
          <Col>
            <Button type="submit" disabled={hasErrors}>
              Add Task
            </Button>
          </Col>
          <Col>
            <Button type="button" onClick={generateRandomTask}>
              Random Task
            </Button>
          </Col>
        </Row>
      </Form>
      <List>{errorELements}</List>
    </>
  );
};

export default Todoform;
