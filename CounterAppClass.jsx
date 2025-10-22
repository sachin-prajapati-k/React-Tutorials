import react, { Component } from "react";

class CounterAppClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  plus = () => {
    this.setState({ count: this.state.count + 1 });
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <h1> {this.state.count}</h1>
        <button onClick={this.plus}>increment</button>
        <button onClick={this.state.count > 0 ? this.minus : null}>
          Decrement
        </button>
      </>
    );
  }
}

export default CounterAppClass;
