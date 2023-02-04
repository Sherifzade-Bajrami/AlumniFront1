import { useState } from "react";
import React from "react";
import "./css/Students.css";


export const Students = ()=>{
    const [data, setData] = useState([
        { id: 1, name: ' ', surname: ' ', birthday: ' ',email:"",contact:"",city:"",state:"",university:"",
          avgrade:"",gender:"",jobstatus:""},
          { id: 1, name: ' ', surname: ' ', birthday: ' ',email:"",contact:"",city:"",state:"",university:"",
          avgrade:"",gender:"",jobstatus:""},
          { id: 1, name: ' ', surname: ' ', birthday: ' ',email:"",contact:"",city:"",state:"",university:"",
          avgrade:"",gender:"",jobstatus:""},
      ]);
    return<>
        <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Birthday</th>
          <th>Email</th>
          <th>Contact</th>
          <th>City</th>
          <th>State</th>
          <th>University</th>
          <th>AvGrade</th>
          <th>Gender</th>
          <th>JobStatus</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.surname}</td>
            <td>{row.birthday}</td>
            <td>{row.email}</td>
            <td>{row.contact}</td>
            <td>{row.city}</td>
            <td>{row.state}</td>
            <td>{row.university}</td>
            <td>{row.avgrade}</td>
            <td>{row.gender}</td>
            <td>{row.jobstatus}</td>







          </tr>
        ))}
      </tbody>
    </table>
    </>
}