import React, { useState } from "react";




export const Login = ()=> {
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');

    const handleSubmit =(e)=>{

      e.prevenetDefault();
      console.log(email);

    }

    return<>
    <div style={{ display:"flex", alignItems:"center",flexDirection:"column", padding:"80px 0"}}>
       <div style={{padding:"5rem",border:"1px solid black",borderRadius:"30px",backgroundColor:"rgb(240, 240, 240)"}}>
       <form style={{flexDirection:"column",display:"flex"}} onSubmit={handleSubmit}>
        
        <label style={{padding:"0.5rem 0",fontSize:"20px" }} htmlFor="email">Email</label>
        <input style={{width:"300px",height:"40px",borderRadius:"10px"}}  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="  youremail@gmail.com" id="email" name="email" />
        
        <label style={{padding:"0.5rem 0",fontSize:"20px" }} htmlFor="password">Password</label>
        <input style={{width:"300px",height:"40px",borderRadius:"10px"}}  value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="  **********" id="password" name="password" />
        
       
        
        <button style={{backgroundColor:"black",color:"white", width:"150px",height:"40px",borderRadius:"8px",margin:"40px 0 0 70px"}} type="submit">Log in</button>
       
       </form>
     </div>
     </div>
       
    </>
}