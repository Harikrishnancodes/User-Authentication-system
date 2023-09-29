import React from 'react'
import './Navbar.css'
function Navbar() {
 
    function logclicked(){
        window.location.href = "http://localhost:5173/";
      }
  

  return (
    <nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>

   <li><button className='navlogout'onClick={logclicked} >Logout</button></li>
       
    </ul>
</nav>
  )
}

export default Navbar