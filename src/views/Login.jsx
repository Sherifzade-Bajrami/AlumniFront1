import axios from "axios";
import { useForm } from "react-hook-form";


export const Login = ()=> {

  const { register, handleSubmit } = useForm();

const onSubmit = async data => { 

    axios.post('https://localhost:7189/api/Authentication/login', data ,
   { headers: {'Content-Type': 'application/json'
  //  'Authorization': localStorage.getItem('token')
  },})
      .then(response => ( localStorage.setItem('token ', JSON.stringify(response.data.token)) ));
       
 };

    return(
    <div style={{ display:"flex", alignItems:"center",flexDirection:"column", padding:"80px 0"}}>
       <div style={{padding:"5rem",border:"1px solid black",borderRadius:"30px",backgroundColor:"rgb(240, 240, 240)"}}>
       <form  style={{flexDirection:"column",display:"flex"}} onSubmit={handleSubmit(onSubmit)}>
        
        <label style={{padding:"0.5rem 0",fontSize:"20px" }} htmlFor="email">Email</label>

        <input {...register("Email",{ required: "Please enter your Email." })} type="email" style={{width:"300px",height:"40px", paddingLeft:"5px",borderRadius:"10px"}} placeholder="youremail@gmail.com" id="email" />
        
        <label style={{padding:"0.5rem 0",fontSize:"20px" }} htmlFor="password">Password</label>

        <input style={{width:"300px",height:"40px", paddingLeft:"5px",borderRadius:"10px"}} 
         {...register("Password", { required: "Please enter your Password.",minLength : (8) })} 
        type="password" placeholder="********" id="password"  />
        
       
        
        <button type="submit" style={{backgroundColor:"black",color:"white", width:"150px",height:"40px",borderRadius:"8px",margin:"40px 0 0 70px"}} >Submit</button>
       
       </form>
     </div>
     </div>
       
   )
}