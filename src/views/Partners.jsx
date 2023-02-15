import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export const Partners = () => {
  const [partners, setPartners] = useState([]);

  // const { register, handleSubmit } = useForm();

  var token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    axios
      .get("https://localhost:7189/api/PartnersAPI", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => setPartners(response.data));
  }, []);
  return (
    <>
      <h1
        style={{ textAlign: "center", color: "GrayText", paddingTop: "20px" }}
      >
        Our Partners
      </h1>

      <section style={{ display: "flex", padding: "50px" }}>
        {partners?.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "100px",
            }}
          >
            <div>
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  paddingBottom: "10px",
                  paddingRight: "20px",
                }}
                htmlFor="username"
              >
                Name:
              </label>
              {item.name}
            </div>
            <div>
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingBottom: "10px",
                  paddingRight: "20px",
                }}
                htmlFor="description"
              >
                Description:
              </label>
              {item.description}
            </div>
            <div>
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingBottom: "10px",
                  paddingRight: "20px",
                }}
                htmlFor="institution"
              >
                Institution:
              </label>
              {item.institution}
            </div>
            <div>
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingBottom: "10px",
                  paddingRight: "20px",
                }}
                htmlFor="email"
              >
                Email:
              </label>
              {item.email}
            </div>
            <div>
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingBottom: "10px",
                  paddingRight: "20px",
                }}
                htmlFor="contact"
              >
                Contact:
              </label>
              {item.contact}
            </div>
            <div>
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingBottom: "10px",
                  paddingRight: "20px",
                }}
                htmlFor="city"
              >
                City:
              </label>
              {item.city}
            </div>
            <div>
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingRight: "20px",
                }}
                htmlFor="state"
              >
                State:
              </label>
              {item.state}
            </div>
          </div>
        ))}
        <div style={{ display: "flex", paddingLeft: "10px" }}>
          <br></br>
        </div>
      </section>
    </>
  );
};
