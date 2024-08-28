import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";


export default function LoginPage(){
    const[email, setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);
    async function handleLoginSubmit(ev){
        ev.preventDefault();
        try{
        const response = await axios.post("/login", {email,password}, {withCredentials: true});
        setUser(response.data);
        alert("login successful");
        setRedirect(true);
    } catch(e){
        alert('Login failed');
    }}
    if (redirect){
        return <Navigate to = {"/"}/>
    }
    return(
        <div className="mt-4 grow items-center justify-around"> 
        <h1 className="text-3xl font-bold text-center text-gray-400 py-10">Login</h1>
        <form className="max-w-md mx-auto" onSubmit ={(handleLoginSubmit)}>
            <input type="email" placeholder="email" value={email} onChange={ev=>setEmail(ev.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={ev=>setPassword(ev.target.value)}/>
            <button className="bg-primary w-full rounded-2xl text-white py-1 px-2">Login</button>
            <div className="text-gray-400 text-center">Don't have an account yet? 
                <span className="text-gray-600 underline">
               <Link to = {"/register"}> Register now</Link>
               </span>
            </div>
        </form>

        </div>
    );
}