
import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import Profile from './components/Profile'



function App() {
  return (
   < div>
    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<LoginPage/>}/>
         <Route path='/register' element={<SignUp/>}/>
         <Route path='/profile' element={<Profile />}/>
   </Routes>
     
    </BrowserRouter>
   
  
    
  </div>
  )
}

export default App