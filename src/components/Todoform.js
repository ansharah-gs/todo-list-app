import React, { useState, useMemo, useEffect } from "react";
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
  Card,
  CardTitle,
  CardBody,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addTodos } from "./TodoSlice";
import moment from "moment";

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
    // dispatch(addTodos(randomTask)); // Add the random task directly
    setErrors([]); // Clear errors when a random task is added
  };
  const currentDate = useMemo(() => {
    return {
      day: moment().format("ddd"),
      date: moment().format("DD"),
      month: moment().format("MMM"),
    };
  }, []);
  const { day, date, month } = currentDate;

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container className="align-middle">
          <Row className="d-flex row cols align-items-center">
            <Col className="p-2 col-auto">
              <Card
                color="success"
                inverse
                style={{
                  width: "9rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h3">
                    <time>
                      <em>{day}</em>
                      <strong>{date}</strong>
                      <span>{month}</span>
                    </time>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col className="p-2">
              <Input
                id="exampleText"
                name="task"
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Add a task"
              />
            </Col>
            <Col className="p-2 col-auto ms-auto">
              <Button type="submit" color="success" disabled={hasErrors}>
                Add Task
              </Button>
            </Col>
            <Col className="p-2 col-auto">
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
