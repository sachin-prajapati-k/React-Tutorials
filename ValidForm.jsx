import react, { useState } from "react";

function ValidForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [mailError, setMailError] = useState("");
  const NameError = (e) => {
    let name = e.target.value;
    setName(name);
    if (name.length < 4) {
      return setNameError("length of name should be less that 3");
    } else {
      return setNameError("");
    }
  };
  const MailError = (e) => {
    let email = e.target.value;
    setEmail(email);
    if (email !== "sachin@gmail.com") {
      return setMailError("Enter your mail");
    } else {
      return setMailError("");
    }
  };
  const Submit = () => {
    alert(`Name : ${name} '\n' Email : ${email}`);
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <lable>Enter your Name:</lable>
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={NameError}
        />
        <span className="text-danger ">{nameError}</span>
        <br />
        <br />
        <lable>Enter your Email:</lable>
        <input
          type="email"
          placeholder="email..."
          value={email}
          onChange={MailError}
        />

        <br />
        <h4 className="text-danger">{mailError}</h4>
        <input type="submit" />
      </form>
    </div>
  );
}

export default ValidForm;
