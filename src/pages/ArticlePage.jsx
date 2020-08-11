import React from "react";
import articleContent from "./article-content";

const ArticlePage = ({ match }) => {
  //   console.log(props);
  const name = match.params.name;

  const article = articleContent.find(
    (artic) => artic.name.toLowerCase() === name
  );

if (!article) {
    return <h3>Page Not Found.?</h3>
}

  return (
    <div>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default ArticlePage;
