import react, { useState } from "react";
import { useEffect } from "react";

function FetchApi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((Response) => {
      Response.json().then((result) => {
        console.log(result);
        setData(result);
      });
    });
  }, []);

  return (
    <div>
      {/* <p>{data}</p> */}
      <ul>
        {data.map((value) => (
          <>
            <li>{value.id}</li>
            <li>{value.title}</li>
            <li>{value.body}</li>{" "}
          </>
        ))}
      </ul>
    </div>
  );
}
export default FetchApi;
