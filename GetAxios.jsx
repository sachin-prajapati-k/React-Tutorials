import React, { useEffect, useState } from "react";
import Axios from "axios";

const MyUrl = "https://jsonplaceholder.typicode.com/posts";
function GetAxios() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get(MyUrl).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <ul>
        {data.map((item) => {
          const { id, title, body } = item;
          return (
            <>
              <li key={id}>{id}</li>
              <li key={id}>{title}</li>
              <li key={id}>{body}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
export default GetAxios;
