//{this is firste approach}

// import react, { Component } from "react";

// class MultiFormInput extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "rohan",
//       email: "rohan@gmail.com",
//     };
//   }
//   forName = (e) => {
//     this.setState({ name: e.target.value });
//   };
//   forEmail = (e) => {
//     this.setState({ email: e.target.value });
//   };
//   render() {
//     return (
//       <div>
//         <form>
//           <label>enter name</label>
//           <input type="text" value={this.state.name} onChange={this.forName} />
//           <label>enter email</label>
//           <input
//             type="email"
//             value={this.state.email}
//             onChange={this.forEmail}
//           />
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// }

// export default MultiFormInput;

//{this is second approach}

import react, { Component } from "react";

class MultiFormInput extends Component {
  constructor() {
    super();
    this.state = {
      name: undefined,
      email: undefined,
    };
  }
  forchange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>enter name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.forchange}
          />
          <label>enter email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.forchange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default MultiFormInput;
