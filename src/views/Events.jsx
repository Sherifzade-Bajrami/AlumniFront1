import axios from "axios";
import React, { useEffect, useState } from "react";

export const Events = () => {
  const [events, setEvents] = useState([]);

  var token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    async function fetchData() {
      axios
        .get("https://localhost:7189/api/EventsAPI", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => setEvents(response.data));
    }

    fetchData();
  }, []);
  console.log(events);

  return (
    <>
      <h1
        style={{ textAlign: "center", paddingTop: "20px", color: "GrayText" }}
      >
        Events
      </h1>
      <section
        style={{
          paddingLeft: "80px",
          paddingTop: "50px",
        }}
      >
        {events?.map((item, index) => (
          <div key={index} style={{ display: "flex" }}>
            <img
              src={require("./img/events.jpg")}
              height={"300"}
              width={"300"}
              alt=""
              className="img-h"
            />
            <div>
              <h1 style={{ paddingLeft: "40px" }}>{item.title}</h1>
              <h3 style={{ paddingLeft: "40px", paddingTop: "10px" }}>
                {item.author}
              </h3>
              <p
                style={{
                  paddingLeft: "40px",
                  paddingTop: "10px",
                  width: "70%",
                }}
              >
                {item.description}
              </p>
              <h3 style={{ paddingLeft: "40px", paddingTop: "110px" }}>
                {item.date}
              </h3>
              <p style={{ paddingLeft: "40px" }}>{item.deadline}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
