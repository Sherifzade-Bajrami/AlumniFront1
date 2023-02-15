import axios from "axios";
import React, { useEffect, useState } from "react";

export const Faq = () => {
  const [faq, setFaqs] = useState([]);

  var token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    axios
      .get("https://localhost:7189/api/FaqsAPI", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => setFaqs(response.data));
  }, [token]);

  return (
    <>
      <h1
        style={{ textAlign: "center", paddingTop: "20px", color: "GrayText" }}
      >
        FAQs
      </h1>
      <section
        style={{
          padding: "60px 13vw",
          display: "flex",
        }}
      >
        {faq?.map((item, index) => (
          <div key={index}>
            <h3 style={{ paddingLeft: "20px" }}>{item.question}</h3>
            <p style={{ width: "90%", paddingLeft: "25px" }}>{item.answer}</p>
          </div>
        ))}
      </section>
    </>
  );
};
