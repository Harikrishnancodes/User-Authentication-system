import React, { useState } from 'react'
import axios from 'axios'
import './SignUp.css'
function SignUp() {
  
    const [name,setUsername] = useState('')
    const [email,setemail] = useState('')
    const [password,setPass] = useState('')
    let data = {
        name,
        email,
        password
    }
    function clicked(){
        console.log(data);
        axios.post("http://localhost:3000/signup",data).then((res)=>{
            console.log(res.data);
        })
    }
    function logclicked(){
      window.location.href = "http://localhost:5173/";
    }

  return (
    
    
    <div className="App">
    <div className="login-container">
      <h1> Register</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(e)=>setUsername(e.target.value)}
      />
      <input
        type="Email"
        placeholder="Email"
        onChange={(e)=>setemail(e.target.value)}
      />
      <input
        type="password"
       placeholder="Password"  
       onChange={(e)=>setPass(e.target.value)}
      />
      <button className='butt' onClick={clicked}>REGISTER</button>
      <p>Already have an account? <button className='navbut'onClick={logclicked} >Login</button></p>
    </div>
  </div>

  )
  
}

export default SignUp