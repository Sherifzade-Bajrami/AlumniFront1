import { useState } from "react";
import React from "react";
import "./css/Students.css";


export const Students = ()=>{
    const [data, setData] = useState([
        { id: 1, name: 'John Doe', age: 32, location: 'New York' },
        { id: 2, name: 'Jane Doe', age: 29, location: 'London' },
        { id: 3, name: 'Jim Brown', age: 40, location: 'Paris' },
      ]);
    return<>
        <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
}