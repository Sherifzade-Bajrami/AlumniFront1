import axios from "axios";
import React, { useEffect, useState } from "react";

export const Center = () => {
  const [center, setCenter] = useState([]);

  var token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    async function fetchData() {
      axios
        .get("https://localhost:7189/api/CentersAPI", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => setCenter(response.data));
    }

    fetchData();
  }, [token]);

  return (
    <>
      <h1
        style={{ textAlign: "center", paddingTop: "20px", color: "GrayText" }}
      >
        Visit our center
      </h1>
      <section
        style={{
          padding: "60px 13vw",
          display: "flex",
        }}
      >
        {center?.map((item, index) => (
          <div key={index}>
            <img
              src="./img/teacher.png"
              height={"300"}
              width={"300"}
              alt=""
              className="img-h"
            />
            <p style={{ width: "90%", paddingLeft: "25px" }}>
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};
