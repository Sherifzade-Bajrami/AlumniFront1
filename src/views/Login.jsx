<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";

=======
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
>>>>>>> 78657d2abab1341e15cd5ee4c0260a1d89af830e



export const Login = ()=> {
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');

    const handleSubmit =(e)=>{

      e.prevenetDefault();
      console.log(email);

    }

    return<>
    <div style={{ display:"flex", alignItems:"center",flexDirection:"column"}}>
       
       <form style={{flexDirection:"column",display:"flex"}} onSubmit={handleSubmit}>
        
        <label style={{padding:"0.5rem 0",fontSize:"20px" }} htmlFor="email">Email</label>
        <input style={{width:"300px",height:"40px",borderRadius:"10px"}}  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="  youremail@gmail.com" id="email" name="email" />
        
        <label style={{padding:"0.5rem 0",fontSize:"20px" }} htmlFor="password">Password</label>
        <input style={{width:"300px",height:"40px",borderRadius:"10px"}}  value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="  **********" id="password" name="password" />
        
        <br></br>
        
        <button style={{backgroundColor:"black",color:"white", width:"150px",height:"40px",borderRadius:"8px"}} type="submit">Log in</button>
        <br></br>
       </form>
     </div>
       
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

const onSubmit = async data => { 
    axios.post('https://localhost:7189/api/Authentication/login', data ,
   { headers: {'Content-Type': 'application/json'
  //  'Authorization': localStorage.getItem('token')
  },})
        .then(response => console.log(response));
        // localStorage.setItem('token ', JSON.stringify(response))
 };

    return<>
        <main>
            
        <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("Email", { required: "Please enter your first name." })} // custom message
      />
        <input
        {...register("Password", { required: "Please enter your Password.",minLength : (8) })} // custom message
      />
      <input type="submit" />
    </form>
        </main>
    </>
}
=======
>>>>>>> 7a107338c7dc2a3d11801edfc533dda7bd200740
