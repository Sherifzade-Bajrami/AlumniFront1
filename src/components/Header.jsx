import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  var token = JSON.parse(localStorage.getItem("token"));
  var userId = JSON.parse(localStorage.getItem("user"));
  var role = JSON.parse(localStorage.getItem("role"));

  const [open, setOpen] = useState(false);
  useEffect(() => {}, [token]);
  const onSubmit = () => {
    window.location.reload(true);
    localStorage.clear();
    window.location.replace("http://localhost:3000/login");
  };
  return (
    <>
      <header>
        <ul className="ul-container">
          <img
            src={require("./img/logo1.png")}
            height={"50"}
            width={"300"}
            alt=""
            className="img-h"
          />
          <li className="link-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="link-item">
            <Link to="/students">Students</Link>
          </li>
          <li className="link-item">
            <Link to="/events">Events</Link>
          </li>
          <li className="link-item">
            <Link to="/news">News</Link>
          </li>
          <li className="link-item">
            <Link to="/partners">Partners</Link>
          </li>
          <ul style={{ width: "100px" }} className="link-item">
            <Link to="/about">About</Link>{" "}
            <img
              onClick={() => setOpen(!open)}
              src="./img/arrow.png"
              width={20}
              height={20}
              alt=""
            />
            {open ? (
              <>
                <li
                  style={{
                    border: "1px solid #ccc",
                    width: "120px",
                    transform: "translateY(4px)",
                    overflow: "auto",
                    backgroundColor: "lightgrey",
                  }}
                  className="link-item"
                >
                  <Link to="/faq">Faqs</Link>
                </li>
                <li
                  style={{
                    border: "1px solid #ccc",
                    width: "120px",
                    transform: "translateY(4px)",
                    overflow: "auto",
                    backgroundColor: "lightgrey",
                  }}
                  className="link-item"
                >
                  <Link to="/center">Center</Link>
                </li>
                <li
                  style={{
                    border: "1px solid #ccc",
                    width: "120px",
                    transform: "translateY(4px)",
                    overflow: "auto",
                    backgroundColor: "lightgrey",
                  }}
                  className="link-item"
                >
                  <Link to="/team">Team</Link>
                </li>
                <li
                  style={{
                    border: "1px solid #ccc",
                    width: "120px",
                    transform: "translateY(4px)",
                    overflow: "auto",
                    backgroundColor: "lightgrey",
                  }}
                  className="link-item"
                >
                  <Link to="/ourprogram">OurProgram</Link>
                </li>
              </>
            ) : null}
          </ul>
          <li className="link-item">
            <a href={"https://localhost:7189/Studentis?id=" + userId}>
              List of Users
            </a>
          </li>

          {token == null && (
            <li className="link-item">
              <button className="btn">
                <Link to="/login">Login</Link>
              </button>
            </li>
          )}
          {role === "Admin" && (
            <li className="link-item">
              <button className="btn">
                <Link to="/login/registeradmin">Add an admin</Link>
              </button>
            </li>
          )}

          {token !== null && (
            <li className="link-item">
              <button type="submit" onClick={() => onSubmit()} className="btn">
                Logout
              </button>
            </li>
          )}
        </ul>
      </header>
    </>
  );
};
