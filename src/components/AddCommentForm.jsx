import React, { useState } from "react";

const AddCommentForm = ({ articlename, setArticleInfo }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handelSubmut = async () => {
    const result = await fetch(
      `http://localhost:8001/api/${articlename}/comments`,
      {
        method: "POST",
        body: JSON.stringify({ name, text }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await result.json();
    setArticleInfo(data);
    setName("");
    setText("");
  };

  return (
    <>
      {" "}
      <h3>Add Comment:</h3>
      <form onSubmit={handelSubmut}>
        <input
          id="name"
          type="text"
          placeholder="enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          required
        />
        <textarea
          ame=""
          id="text"
          cols="50"
          rows="4"
          placeholder="enter your add comments"
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
          value={text}
        />
        <button type="submit">Add Comment</button>
      </form>
    </>
  );
};

export default AddCommentForm;
