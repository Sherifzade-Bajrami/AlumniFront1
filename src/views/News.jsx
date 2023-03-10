import axios from "axios";
import React, { useEffect, useState } from "react";

export const News = () => {
  const [news, setNews] = useState([]);

  var token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    axios
      .get("https://localhost:7189/api/NewsAPI", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => setNews(response.data));
  }, [token]);
  console.log(news);
  return (
    <>
      <h1
        style={{ textAlign: "center", paddingTop: "20px", color: "GrayText" }}
      >
        News
      </h1>
      <section
        style={{
          padding: "60px 13vw",
          display: "flex",
        }}
      >
        {news?.map((item, index) => (
          <div key={index}>
            <img
              src="./img/news.png"
              height={"300"}
              width={"300"}
              alt=""
              className="img-h"
            />
            <h3 style={{ paddingLeft: "20px", color: "black" }}>
              {item.title}
              <span style={{ paddingLeft: "220px", color: "black" }}>
                {item.date}
              </span>
            </h3>
            <p style={{ width: "90%", paddingLeft: "25px", color: "black" }}>
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};
