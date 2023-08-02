import React from "react";

class TodoformClass extends React.Component {
  //initialize the object
  constructor(props) {
    super(props);
    //default value for the state ;this will return json (key pair values)
    this.state = {
      errors: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onTaskChanged = this.onTaskChanged.bind(this);
  }
  componentDidMount() {
    console.log("DID Mount", this.state);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("DID Update", this.state, this.props, prevProps, prevState);

    if (prevProps !== this.props) {
      console.log("props changed");
    }
  }
  componentWillUnmount() {
    console.log("DID Update", this.state, this.props);
  }
  onSubmit(event) {
    event.preventDefault(); //prevents page from refreshing
    //console.log(event.target.task.value);
    //create a new task and add it to the list of task
    const value = event.target.task.value;
    console.log("🚀 ~ file: Todoform.js:15 ~ onSubmit ~ value:", value);

    const newErrors = [];
    //testing logic
    if (value === "") {
      //==== means value isn't  empty and type should be same
      newErrors.push("Please enter a task");
    } else if (value.trim() === "") {
      // trim remove white space from the string
      newErrors.push("task can't be spaces");
    }
    //set the errors array
    this.setState({ errors: newErrors }, () => {
      console.log("state changed");
    });
    //if the errors array is empty, then add the value(tasks) to the errors array
    if (newErrors.length == 0) {
      this.props.onTaskAdded(value);
    }

    // debugger;
  }
  onTaskChanged(event) {
    // debugger;
    const value = event.target.value;
    const newErrors = [];
    //testing logic
    if (value === "") {
      //==== means value isn't  empty and type should be same
      newErrors.push("Please enter a task");
    } else if (value.trim() === "") {
      // trim remove white space from the string
      newErrors.push("task can't be spaces");
    }

    this.setState({ errors: newErrors });
    //cant use below code
    //setErrors([]);
    // onTaskAdded(value);
  }
  render() {
    const {} = this.props;
    const { errors } = this.state;

    const ulStyles = {
      color: "red",
    };
    const hasErrors = errors.length > 0 ? true : false;

    const errorELements = errors.map((error, index) => {
      return <li key={index}>{error}</li>;
    });
    //destructure for props and state

    // MOVED from todoform
    return (
      //because its a method that why using this keyword
      <form onSubmit={this.onSubmit}>
        <input type="text" name="task" onChange={this.onTaskChanged} />
        {/* always use button tag for buttons  */}
        <button type="submit" className="addBtn" disabled={hasErrors}>
          <strong>Add Task</strong>
        </button>
        <ul style={{ ulStyles }}>{errorELements}</ul>
      </form>
    );
  }
}
export default TodoformClass;
