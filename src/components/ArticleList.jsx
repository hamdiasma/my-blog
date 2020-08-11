import React from "react";
import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        
          <Link
            className="article-page"
            to={`/article/${article.name.toLowerCase()}`}
            key={index}
          >
            <h3>
              {index + 1} - {article.title}
            </h3>
            <p className="article-pagarg">{article.content[0].substring(0, 250)}...</p>
            <hr />
          </Link>
         
       
      ))}
    </>
  );
};

export default ArticleList;
