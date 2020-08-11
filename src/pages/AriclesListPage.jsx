import React from "react";
import ArticleList from "../components/ArticleList";
import articlesContent from "./article-content"
const AriclesListPage = () => {
  
  return (
    <>
      <h1 className="title-articles-list">Articles</h1>
      <ArticleList articles={articlesContent}/>
    </>
  );
};

export default AriclesListPage;
