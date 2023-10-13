import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

const Navbar = () => {
  
const navigate = useNavigate();

  function Login(){
    return navigate('/login')
  }
  function NavHome(){
   return    navigate('/')
  }
  return (
    <div className='nav'>
       <h3 onClick={NavHome}>Dashboard</h3> 
        <h3 onClick={Login}>Login</h3>
        <h3 onClick={()=>navigate('/users')}>Signup</h3>
    </div>
  )
}

export default Navbar