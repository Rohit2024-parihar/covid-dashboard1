import React from "react";
import moment from "moment";
import "./NewsArticle.css";

function NewsArticle({ data }) {
  const date = new Date();

  return (
    <div className="news__card">
      {data &&
        data.map((news, i) => (
          //    console.log(news)
          <div className="newsarticle__container" key={i}>
            <p className="title">{news.title}</p>
            <p className="desc">{news.excerpt}</p>
            <a href={news.originalUrl} target="_blank">
              Read Article
            </a>
          </div>
        ))}
    </div>
  );
}

export default NewsArticle;
