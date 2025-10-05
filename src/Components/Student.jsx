import react, { Component } from "react";
class Student extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}

export default Student;
