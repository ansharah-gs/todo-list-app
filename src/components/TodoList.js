import React, { useEffect } from "react";

const TodoList = ({ tasksArray }) => {
  useEffect(() => {
    //console.log("useeffect called");
    // we made this function to reduce repeating same //console.log calls
    const  resizeCallback= () => {
      //console.log("resized");
    };
    const timer = setInterval(() => {
          //console.log("timer called");
        }, 1000);
    window.addEventListener("resize", resizeCallback)
    return () => {
          //console.log("unmounted");
          clearInterval(timer);
          window.removeEventListener("resize",resizeCallback);
        };
  },[tasksArray]);
  //means ony called when task array is changed 
  //console.log(tasksArray);
  //`debugger;
  return (
    <div className="todolist">
      <ul>
        {tasksArray.map((task, index) => (
          // key is unique identifier for each task in the array
          <>
            <input type="checkbox" />
            <li key={index}>{task}</li>
          </>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
