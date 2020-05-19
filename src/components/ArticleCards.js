// src/components/ArticleCard.js
import React from "react";

export default function ArticleCard(props) {
  return (
    <div className="Article" key={props.id}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}
