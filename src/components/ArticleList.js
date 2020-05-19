// src/components/ArticleList.js
import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCards";
import Timeout from "await-timeout";
import axios from "axios";

export default function ArticleList() {
  /*   const articles = [
    {
      id: 1,
      title: "What is React all about?",
      body:
        "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!",
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      body:
        "So yeah, you won't be able to look these images up. They're placeholders",
    },
  ]; 

  const [showArticles, set_articles] = useState(true);*/
  const [articles, set_articles] = useState();
  /*     {
      id: 1,
      title: "What is React all about?",
      body:
        "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!",
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      body:
        "So yeah, you won't be able to look these images up. They're placeholders",
    }, */

  const clearList = () => {
    // set_articles(newArticle);
  };

  useEffect(() => {
    async function waitForATimer() {
      console.log("A");
      await Timeout.set(2000); // time in milliseconds!
      console.log("B");
    }
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");
      await Timeout.set(2000);
      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      console.log("Got back:", res);

      set_articles(res.data);
    }
    doSomeDataFetching();
  }, []);

  //call clearList in onClick and also remove showArticles in line 57
  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {/*     <button onClick={() => set_articles(!showArticles)}>Toggle Me</button>
       //{showArticles &&*/}
      <button onClick={clearList}>clear Notification</button>
      {articles ? (
        articles.map((article) => {
          return (
            <ArticleCard
              key={article.id}
              title={article.title}
              content={article.body}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
