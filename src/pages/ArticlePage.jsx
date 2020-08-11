import React from "react";
import articleContent from "./article-content";
import ArticleList from "../components/ArticleList";

const ArticlePage = (props) => {
  console.log(props);
  const name = props.match.params.name;

  const article = articleContent.find(
    (artic) => artic.name.toLowerCase() === name
  );

  const otherAricles = articleContent.filter(
    (article) => article.name.toLowerCase() !== name
  );

  if (!article) {
    return <h3>Page Not Found.?</h3>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, index) => (
        <p className="article-pagarg" key={index}>{paragraph}</p>
      ))}
      <h2 className="other-article">Other articles :</h2>
      <ArticleList articles={otherAricles} />
    </div>
  );
};

export default ArticlePage;
