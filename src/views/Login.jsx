import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";



export const Login = ()=> {
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