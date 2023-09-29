import React from 'react'
import './Profile.css'
import Navbar from './Navbar';

function Profile() {
    
  return (
    
    <div className='hero' >
        <Navbar />
    <div className='container'>
        <div className='content'>
           <h1>Your Data</h1>
            <h1 className='blue'>Our Magic</h1>
            <h3>Transform your Data Analytics with Us</h3> 
        </div>
    </div>
</div>
)
  
}

export default Profile