import React from "react";
import "./css/Students.css";
import { useState } from "react";



export const Students = ()=>{
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

   
    const handleSubmit = (e) => {
        e.preventDefault();
    }

   return<>
    <form  onSubmit={handleSubmit}>

      <div>
        <label htmlFor="username">Username:</label>
        <input 
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="surname">Surname:</label>
        <input
          type="surname"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="birthday">Birthday:</label>
        <input
          type="birthday"
          id="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contact">Contact:</label>
        <input
          type="contact"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="city"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <input
          type="state"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="university">University:</label>
        <input
          type="university"
          id="university"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="AvGrade">AvGrade:</label>
        <input
          type="AvGrade"
          id="AvGrade"
          value={AvGrade}
          onChange={(e) => setAvGrade(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <input
          type="gender"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="JobStatus">JobStatus:</label>
        <input
          type="JobStatus"
          id="JobStatus"
          value={JobStatus}
          onChange={(e) => setJobStatus(e.target.value)}
        />
      </div>

      <button text="Click Me">Apply</button>
    </form>
    </>
}