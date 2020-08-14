import React from "react";

const UpvoteSection = ({ upvotes, name, setAricleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(`http://localhost:8001/api/${name}/upvotes`, {
      method: "POST",
    });
    const data = await result.json();
    setAricleInfo(data);
  };

  return (
    <div className="upvotes">
      <p>
        this article has benn upvotes <span className="number-upvote">{upvotes}</span> times
      </p>
      <span
        className="upvote-img"
        role="img"
        aria-label=""
        onClick={() => upvoteArticle()}
      >
        &#9996;
      </span>
    </div>
  );
};

export default UpvoteSection;
