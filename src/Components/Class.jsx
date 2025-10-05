import React, { Component } from "react";

class Class extends Component {
  render() {
    return (
      <div>
        <h1> hello {this.props.name}</h1>
        <h1> age {this.props.age}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Class;
