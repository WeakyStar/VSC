import React from 'react';
import 'styles/styles.css'; 

const NewInfo = ({ news }) => {
  return (
    <div className="news-container">
      {news.map((item, index) => (
        <article className="news-info" key={index}>
          <h1 className="title">{item[0]}</h1>
          <p className="lead">{item[1]}</p>
          <p className="body">{item[2]}</p>
        </article>
      ))}
    </div>
  );
};

export default NewInfo;