import react, { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export function FakeApi() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const handleData = (e) => {
    e.preventDefault();
    Axios.post("https://68ed1f80eff9ad3b1404a957.mockapi.io/Fake", {
      e_name: name,
      e_email: email,
      e_address: address,
      e_age: age,
    }).then((Response) => {
      navigate("/");
    });
  };
  return (
    <div>
      <Link to="/">
        <button className="btn btn-primary m-3">Read data</button>
      </Link>
      <div>
        <form onSubmit={handleData}>
          <label className="form-label">Enter Your Name</label>
          <input
            className="form-control"
            type="text"
            name={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form-label">Enter Your Email</label>
          <input
            className="form-control"
            type="email"
            name={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label">Enter Your Address</label>
          <input
            className="form-control"
            type="textarea"
            name={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label className="form-label">Enter Your age</label>
          <input
            className="form-control"
            type="number"
            name={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
