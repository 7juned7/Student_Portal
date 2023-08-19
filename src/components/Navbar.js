import React from 'react'
import {Link} from 'react-router-dom'
import '../screens/css/Home.css'

export default function Navbar() {
 
  const handleLogout=()=>{
    localStorage.clear()
   
  
  }
 
  
  return (
    <div>
        <nav className="nav">
   
      {
      <div className="nav_container">
 <div className='admin_name'>
        {localStorage.getItem("username")}
        
        </div>
        <Link to='/'  className='btns' onClick={handleLogout}>Logout</Link>
      </div>

      }
      
      
 
  </nav>
  </div>
  )
}
