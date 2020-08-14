import React from "react";

const CommentsList = ({ comments }) => {
  const articleComments = comments.map((comment, index) => (
    <div key={index}>
      <h4>{comment.name}</h4>
      <p>{comment.text}</p>
      <hr />
    </div>
  ));
  return (
    <>
      <h3>Comments:</h3>
      {articleComments}
    </>
  );
};

export default CommentsList;
