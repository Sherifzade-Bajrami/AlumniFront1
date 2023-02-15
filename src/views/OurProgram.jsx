import axios from "axios";
import React, { useEffect, useState } from "react";

export const OurProgram = () => {
  const [ourprogram, setOurProgram] = useState([]);

  var token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    axios
      .get("https://localhost:7189/api/ProgramsAPI", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => setOurProgram(response.data));
  }, [token]);

  return (
    <>
      <h1
        style={{ textAlign: "center", paddingTop: "20px", color: "GrayText" }}
      >
        Our Programs
      </h1>
      <section
        style={{
          padding: "60px 13vw",
          display: "flex",
        }}
      >
        {ourprogram?.map((item, index) => (
          <div key={index}>
            <img
              src="./img/teacher.png"
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
