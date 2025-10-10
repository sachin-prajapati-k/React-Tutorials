import react, { Component } from "react";

class UseStateClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>plus</button>
        <button onClick={this.decrease}>minus</button>
      </div>
    );
  }
}
export default UseStateClass;
