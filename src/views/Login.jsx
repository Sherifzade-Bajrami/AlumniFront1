import React from "react";
import { useForm } from "react-hook-form";



export const Login = ()=> {
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
const onSubmit = async data => { console.log(data); };

    return<>
        <main>
            
        <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("Name", { required: "Please enter your first name." })} // custom message
      />
        <input
        {...register("Passowrd", { required: "Please enter your Password.",minLength : (8) })} // custom message
      />
      <input type="submit" />
    </form>
        </main>
    </>
}