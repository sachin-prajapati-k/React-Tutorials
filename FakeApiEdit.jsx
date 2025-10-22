import react, { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export function FakeApiEdit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setAddress(localStorage.getItem("address"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const navigate = useNavigate();
  const handleData = (e) => {
    e.preventDefault();
    Axios.put(`https://68ed1f80eff9ad3b1404a957.mockapi.io/Fake/${id}`, {
      e_name: name,
      e_email: email,
      e_address: address,
      e_age: age,
    }).then(() => {
      localStorage.clear();
      navigate("/");
    });
  };
  return (
    <div>
      <div className="bg-dark d-flex justify-content-between">
        <Link to="/create">
          <button className="btn btn-warning m-3">Create New</button>
        </Link>
        <Link to="/">
          <button className="btn btn-primary m-3">Read data</button>
        </Link>
      </div>
      <div>
        <form onSubmit={handleData}>
          <label className="form-label">Enter Your Name</label>
          <input
            className="form-control"
            type="text"
            name={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form-label">Enter Your Email</label>
          <input
            className="form-control"
            type="email"
            name={email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label">Enter Your Address</label>
          <input
            className="form-control"
            type="textarea"
            name={address}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label className="form-label">Enter Your age</label>
          <input
            className="form-control"
            type="number"
            name={age}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <div className="row justify-content-center">
            <button className="btn btn-primary m-3 col-11 ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
