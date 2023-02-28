import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const Students = () => {
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [university, setUniversity] = useState("");
  const [AvGrade, setAvGrade] = useState("");
  const [gender, setGender] = useState("");
  const [JobStatus, setJobStatus] = useState("");

  const { register, handleSubmit } = useForm();
  var id = JSON.parse(localStorage.getItem("user"));
  const onSubmit = async (data) => {
    var token = JSON.parse(localStorage.getItem("token"));
    axios.post("https://localhost:7189/api/StudentisAPI", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
  };

  return (
    <>
      <h1
        style={{ textAlign: "center", color: "GrayText", paddingTop: "20px" }}
      >
        Apply Now
      </h1>
      <form style={{ paddingTop: "50px" }} onSubmit={handleSubmit(onSubmit)}>
        <section style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "400px",
            }}
          >
            <label
              style={{ fontWeight: "bold", fontSize: "18px" }}
              htmlFor="username"
            >
              Username:
            </label>
            <input
              {...register("Name", { required: "Please enter your name." })}
              style={{ width: "300px", height: "40px", borderRadius: "10px" }}
              type="text"
              id="username"
              value={username}
              placeholder=" Your username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <label
              style={{ fontWeight: "bold", fontSize: "18px" }}
              htmlFor="surname"
            >
              Surname:
            </label>
            <input
              {...register("Surname", {
                required: "Please enter your surname.",
              })}
              style={{ width: "300px", height: "40px", borderRadius: "10px" }}
              type="text"
              id="surname"
              value={surname}
              placeholder=" Your surname"
              onChange={(e) => setSurname(e.target.value)}
            />

            <label
              style={{ fontWeight: "bold", fontSize: "18px" }}
              htmlFor="birthday"
            >
              Birthday:
            </label>
            <input
              {...register("Birthday", {
                required: "Please enter your Birthday.",
              })}
              style={{ width: "300px", height: "40px", borderRadius: "10px" }}
              type="datetime-local"
              id="birthday"
              value={birthday}
              placeholder=" dd/mm/yy"
              onChange={(e) => setBirthday(e.target.value)}
            />

            <label
              style={{ fontWeight: "bold", fontSize: "18px" }}
              htmlFor="email"
            >
              Email:
            </label>
            <input
              {...register("Email", { required: "Please enter your Email." })}
              style={{ width: "300px", height: "40px", borderRadius: "10px" }}
              type="email"
              id="email"
              value={email}
              placeholder=" youremail@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label
              style={{ fontWeight: "bold", fontSize: "18px" }}
              htmlFor="contact"
            >
              Contact:
            </label>
            <input
              {...register("Contact", {
                required: "Please enter your Contact.",
              })}
              style={{ width: "300px", height: "40px", borderRadius: "10px" }}
              type="text"
              id="contact"
              value={contact}
              placeholder=" 000-000-000"
              onChange={(e) => setContact(e.target.value)}
            />

            <label
              style={{ fontWeight: "bold", fontSize: "18px" }}
              htmlFor="city"
            >
              City:
            </label>
            <input
              {...register("City", { required: "Please enter your City." })}
              style={{ width: "300px", height: "40px", borderRadius: "10px" }}
              type="text"
              id="city"
              value={city}
              placeholder=" City"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "50px",
            }}
          >
            <label
              style={{ fontWeight: "bold", fontSize: "18px" }}
              htmlFor="state"
            >
              State:
            </label>
            <input
              {...register("State", { required: "Please enter your State." })}
              style={{ width: "300px", height: "40px", borderRadius: "10px" }}
              type="text"
              id="state"
              value={state}
              placeholder=" State"
              onChange={(e) => setState(e.target.value)}
            />

            <label
              style={{ fontWeight: "bold", fontSize: "18px" }}
              htmlFor="university"
            >
              University:
            </label>
            <input
              {...register("University", {
                required: "Please enter your University.",
              })}
              style={{ width: "300px", height: "40px", borderRadius: "10px" }}
              type="text"
              id="university"
              value={university}
              placeholder=" University"
              onChange={(e) => setUniversity(e.target.value)}
            />

            <label
              style={{ fontWeight: "bold", fontSize: "18px" }}
              htmlFor="AvGrade"
            >
              AvGrade:
            </label>
            <input
              {...register("AvGrade", {
                required: "Please enter your AvGrade.",
              })}
              style={{ width: "300px", height: "40px", borderRadius: "10px" }}
              type="text"
              id="AvGrade"
              value={AvGrade}
              onChange={(e) => setAvGrade(e.target.value)}
            />

            <label
              style={{ fontWeight: "bold", fontSize: "18px" }}
              htmlFor="gender"
            >
              Gender:
            </label>
            <input
              {...register("Gender", { required: "Please enter your Gender." })}
              style={{ width: "300px", height: "40px", borderRadius: "10px" }}
              type="text"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />

            <label
              style={{ fontWeight: "bold", fontSize: "18px" }}
              htmlFor="JobStatus"
            >
              JobStatus:
            </label>
            <input
              {...register("JobStatus", {
                required: "Please enter your JobStatus.",
              })}
              style={{ width: "300px", height: "40px", borderRadius: "10px" }}
              type="text"
              id="JobStatus"
              value={JobStatus}
              onChange={(e) => setJobStatus(e.target.value)}
            />
            <input {...register("UserId")} hidden type="text" value={id} />

            <br></br>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                width: "150px",
                height: "40px",
                borderRadius: "8px",
                marginLeft: "150px",
              }}
              type="submit"
            >
              Apply
            </button>
          </div>
        </section>
      </form>

      <br></br>
      <br></br>
    </>
  );
};
