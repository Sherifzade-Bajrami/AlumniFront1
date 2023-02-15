import axios from "axios";
import React, { useEffect, useState } from "react";

export const About = () => {
  const [about, setAbout] = useState([]);

  var token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    async function fetchData() {
      axios
        .get("https://localhost:7189/api/AboutsAPI", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => setAbout(response.data));
    }

    fetchData();
  }, [token]);

  console.log(about);
  return (
    <>
      <h1
        style={{ textAlign: "center", paddingTop: "20px", color: "GrayText" }}
      >
        About
      </h1>
      <section
        style={{
          padding: "60px 13vw",
          display: "flex",
        }}
      >
        {about?.map((item, index) => (
          <div key={index}>
            <img
              src=".\img\travel.jpg"
              height={"300"}
              width={"300"}
              alt=""
              className="img-h"
            />
            <h3 style={{ paddingLeft: "20px" }}>{item.title}</h3>
            <p style={{ width: "90%", paddingLeft: "25px" }}>
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};
