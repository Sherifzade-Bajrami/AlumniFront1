import React, { useState } from "react";




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
       
    </>
}