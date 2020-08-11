import React from "react";
import articleContents from "./article-content";
import { Link } from "react-router-dom";
const AriclesListPage = () => {
  return (
    <>
      <h1 className="title-articles-list">Articles</h1>
      {articleContents.map((article, i) => (
        <>
          <Link
            className="article-page"
            to={`/article/${article.name.toLowerCase()}`}
            key={i}
          >
            <h3>
              {i + 1} - {article.title}
            </h3>
            <p>{article.content[0].substring(0, 250)}...</p>
          </Link>
          <hr />
        </>
      ))}
    </>
  );
};

export default AriclesListPage;
