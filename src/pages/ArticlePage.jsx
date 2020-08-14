import React, { useState, useEffect } from "react";
import articleContent from "./article-content";
import ArticleList from "../components/ArticleList";
import PageNotFound from "./PageNotFound";
import CommentsList from "../components/CommentsList";
import UpvoteSection from "../components/UpvoteSection";
import AddCommentForm from "../components/AddCommentForm";

const ArticlePage = (props) => {
  const [articleInfo, setAricleInfo] = useState({ upvotes: 0, comments: [] });

  console.log(props);
  const name = props.match.params.name.toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8001/api/${name}`);
      const data = await response.json();
      console.log(data);
      setAricleInfo(data);
    };
    fetchData();
  }, [name]);

  const article = articleContent.find(
    (artic) => artic.name.toLowerCase() === name
  );

  const otherAricles = articleContent.filter(
    (article) => article.name.toLowerCase() !== name
  );

  if (!article) {
    return <PageNotFound />;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <UpvoteSection
        upvotes={articleInfo.upvotes}
        name={name}
        setAricleInfo={setAricleInfo}
      />
      {article.content.map((paragraph, index) => (
        <p className="article-pagarg" key={index}>
          {paragraph}
        </p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articlename={name} setArticleInfo={articleInfo}/>
      <h2 className="other-article">Other articles :</h2>
      <ArticleList articles={otherAricles} />
    </div>
  );
};

export default ArticlePage;
