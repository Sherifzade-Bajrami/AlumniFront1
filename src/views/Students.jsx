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
   <h1 style={{textAlign:"center",color:"GrayText",paddingTop:"20px"}}>Apply Now</h1>
    <form style={{paddingTop:"50px"}} onSubmit={handleSubmit}>
      <section style={{display:"flex"}}>
      <div style={{ display:"flex", flexDirection:"column",paddingLeft:"400px"}}>
     
        <label style={{fontWeight:"bold",fontSize:"18px"}} htmlFor="username">Username:</label>
        <input style={{width:"300px",height:"40px",borderRadius:"10px"}} type="text" id="username" value={username} placeholder=" Your username" onChange={(e) => setUsername(e.target.value)}/>

        <label style={{fontWeight:"bold",fontSize:"18px"}} htmlFor="surname">Surname:</label>
        <input style={{width:"300px",height:"40px",borderRadius:"10px"}} type="surname" id="surname" value={surname} placeholder=" Your surname" onChange={(e) => setSurname(e.target.value)}/>
     
        <label style={{fontWeight:"bold",fontSize:"18px"}} htmlFor="birthday">Birthday:</label>
        <input style={{width:"300px",height:"40px",borderRadius:"10px"}} type="birthday" id="birthday" value={birthday} placeholder=" dd/mm/yy"  onChange={(e) => setBirthday(e.target.value)}/>
      
        <label style={{fontWeight:"bold",fontSize:"18px"}} htmlFor="email">Email:</label>
        <input style={{width:"300px",height:"40px",borderRadius:"10px"}} type="email" id="email" value={email} placeholder=" youremail@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
     
        <label style={{fontWeight:"bold",fontSize:"18px"}} htmlFor="contact">Contact:</label>
        <input style={{width:"300px",height:"40px",borderRadius:"10px"}}  type="contact" id="contact" value={contact} placeholder=" 000-000-000" onChange={(e) => setContact(e.target.value)}/>
     
     
        <label style={{fontWeight:"bold",fontSize:"18px"}} htmlFor="city">City:</label>
        <input style={{width:"300px",height:"40px",borderRadius:"10px"}} type="city" id="city" value={city} placeholder=" City" onChange={(e) => setCity(e.target.value)} />
      </div>
      
      <div style={{ display:"flex", flexDirection:"column", paddingLeft:"50px"}}>

        <label style={{fontWeight:"bold",fontSize:"18px"}} htmlFor="state">State:</label>
        <input style={{width:"300px",height:"40px",borderRadius:"10px"}} type="state" id="state" value={state} placeholder=" State" onChange={(e) => setState(e.target.value)}/>
     
        <label style={{fontWeight:"bold",fontSize:"18px"}} htmlFor="university">University:</label>
        <input style={{width:"300px",height:"40px",borderRadius:"10px"}} type="university" id="university" value={university} placeholder=" University" onChange={(e) => setUniversity(e.target.value)}/>
      
        <label style={{fontWeight:"bold",fontSize:"18px"}} htmlFor="AvGrade">AvGrade:</label>
        <input style={{width:"300px",height:"40px",borderRadius:"10px"}} type="AvGrade" id="AvGrade" value={AvGrade} onChange={(e) => setAvGrade(e.target.value)}/>
     
        <label style={{fontWeight:"bold",fontSize:"18px"}} htmlFor="gender">Gender:</label>
        <input style={{width:"300px",height:"40px",borderRadius:"10px"}} type="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}/>
     
        <label style={{fontWeight:"bold",fontSize:"18px"}} htmlFor="JobStatus">JobStatus:</label>
        <input style={{width:"300px",height:"40px",borderRadius:"10px"}} type="JobStatus" id="JobStatus" value={JobStatus} onChange={(e) => setJobStatus(e.target.value)} />

        <br>
        </br>
        <button style={{backgroundColor:"black",color:"white", width:"150px",height:"40px",borderRadius:"8px",marginLeft:"150px"}} type="submit">Apply</button>
      
     </div>
      </section>
    </form>
   
    <br></br><br></br>
    
    </>
}