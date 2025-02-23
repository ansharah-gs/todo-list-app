import React from "react";
import Tasks from "./Task";
import { Container, Row, Col, List } from "reactstrap";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <Container>
      <Row>
        <Col className="bg-muted" md="12">
          <div className="d-flex align-items-start ">
            <List>
              {todos.map((todo) => (
                <Tasks key={todo.id}>{todo}</Tasks>
              ))}
            </List>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default TodoList;
