
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function RegisterPage(){
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    async function registerUser(ev){
        ev.preventDefault();

        try{
        await axios.post("/register",{
            name,
            email,
            password,
        });
        alert("Registration successful. Now you can log in");
    }catch(e){
        alert("Registration failed. Please try again later");
    }
    }
    return(
        <div className="mt-4 grow items-center justify-around"> 
        <h1 className="text-3xl font-bold text-center text-gray-400 py-10">Register</h1>
        <form className="max-w-md mx-auto " onSubmit={(registerUser)}>
            <input type="text" placeholder="name" value={name} onChange={ev=> setName(ev.target.value)}/>
            <input type="email" placeholder="email" value={email} onChange={ev=> setEmail(ev.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={ev=> setPassword(ev.target.value)}/>
            <button className="bg-primary w-full rounded-2xl text-white py-1 px-2">Register</button>
            <div className="text-gray-400 text-center">Already a member?
                <span className="text-gray-600 underline">
               <Link to = {"/login"}> Login</Link>
               </span>
            </div>
        </form>

        </div>
    );
}