import React, { useState } from 'react'
import "./LoginPage.css"
import axios from 'axios';


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let data={
      email,
      password
    }
    function regclicked(){
      window.location.href = "http://localhost:5173/register";
  };
    function log(){
      window.location.href = "http://localhost:5173/profile"
    }
  
    function submit(){
      console.log(data)
      axios.post("http://localhost:3000/checkuser",data).then((res)=>{
        console.log(res.data);
        if(res.data){
          alert("login success");
         log();

        }
        else{
          alert("wrong username or password");
        }
      
    
      })
    }
  
    return (

      
        

      <div className="App">
        <div className="login-container">
          <h1> Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
           placeholder="Password"  
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='butt' onClick={submit}>Login</button>
          <p>new user?
          <button className='navbut'onClick={regclicked} >Register</button>
      </p>
        </div>
       
      </div>
      
      
    );
  }
  
 

export default LoginPage