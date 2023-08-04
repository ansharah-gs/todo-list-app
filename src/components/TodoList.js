import React, { useEffect } from "react";
import Tasks from "./Task";
import { Container, Row, Col,List } from "reactstrap";


const TodoList = ({ tasksArray }) => {
  useEffect(() => {
    //console.log("useeffect called");
    // we made this function to reduce repeating same //console.log calls
    const resizeCallback = () => {
      //console.log("resized");
    };
    const timer = setInterval(() => {
      //console.log("timer called");
    }, 1000);
    window.addEventListener("resize", resizeCallback);
    return () => {
      //console.log("unmounted");
      clearInterval(timer);
      window.removeEventListener("resize", resizeCallback);
    };
  }, [tasksArray]);
  //means ony called when task array is changed
  //console.log(tasksArray);
  //`debugger;
  return (
    <Container>
      <Row>
        <Col className="bg-light" md='12'>
        <div className="d-flex align-items-center">
          <List>
            
            {tasksArray.map((task, index) => (
                        // key is unique identifier for each task in the array
                        <>
                          <Tasks>{task}</Tasks>
                        </>
                      ))}
            </List>         
        </div>
        </Col>
        </Row>
      </Container>
  );
};
export default TodoList;
