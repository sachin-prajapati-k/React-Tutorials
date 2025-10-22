import React, { useEffect, useState } from "react";
import Axios from "axios";

function PostAxios() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: title,
      body: body,
    })
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br></br>
        <br />
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button>click</button>
      </form>
    </div>
  );
}

export default PostAxios;
