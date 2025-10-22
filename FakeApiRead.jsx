import react, { useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
export function FakeApiRead() {
  const [data, setData] = useState([]);
  const getData = () => {
    Axios.get("https://68ed1f80eff9ad3b1404a957.mockapi.io/Fake").then(
      (Response) => {
        setData(Response.data);
      }
    );
  };
  const toDelete = (id) => {
    Axios.delete(`https://68ed1f80eff9ad3b1404a957.mockapi.io/Fake/${id}`).then(
      (Response) => {
        getData();
      }
    );
  };
  const setDataToStorage = (e_name, e_address, e_age, e_email, id) => {
    localStorage.setItem("name", e_name);
    localStorage.setItem("age", e_age);
    localStorage.setItem("email", e_email);
    localStorage.setItem("address", e_address);
    localStorage.setItem("id", id);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Link to="/create">
        <button className="btn btn-warning m-3">Create New</button>
      </Link>
      <table className="table table-bordered table-striped table-dark table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>address</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const { id, e_name, e_email, e_age, e_address } = item;
            return (
              <>
                <tr>
                  <td>{id}</td>
                  <td>{e_name}</td>
                  <td>{e_email}</td>
                  <td>{e_age}</td>
                  <td>{e_address}</td>
                  <td>
                    <Link to="/edit">
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          setDataToStorage(
                            e_name,
                            e_address,
                            e_age,
                            e_email,
                            id
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        if (window.confirm("Are sure to delete this")) {
                          toDelete(id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
