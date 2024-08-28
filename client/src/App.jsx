import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IndexPage from './pages/IndexPage'
import { Route,Routes } from 'react-router-dom'y
import RegisterPage from './pages/RegisterPage'
import Layout from './Layout'
import axios from 'axios';
import LoginPage from './pages/LoginPage'
import { UserContextProvider } from './UserContext'


axios.defaults.baseURL="http://10.0.0.14:3000";
axios.defaults.withCredentials = true;
function App() {
 
  return (
    //to check at every route if we're logged in or nor
   <UserContextProvider> 
    <Routes>
      <Route path = "/" element = {<Layout />}>
      <Route index element = {<IndexPage/>}/>
      <Route path = "/login" element ={<LoginPage/>}/>
      <Route path = "/register" element ={<RegisterPage/>}/>
      
      

      </Route>
    
    </Routes>
    </UserContextProvider>
   
        
  );
}

export default App
