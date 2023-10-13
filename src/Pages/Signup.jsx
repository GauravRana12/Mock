import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { adding_signup } from '../Redux/Action';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  var navigate=useNavigate();
  var dispatch=useDispatch();
  const SigningUp=(e)=>{
    e.preventDefault();
      const data={
        name,
        email,
        password:pass
      }
      dispatch(adding_signup(data))
      console.log("signup success");
      navigate('/login')
  }
  return (
    <div><h1>Signup Page</h1>
    <form onSubmit={SigningUp}>
    <input type='text' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
    <input type='email' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/>
    <input type='password' placeholder='Enter Password' onChange={(e)=>setPass(e.target.value)}/>
    <input type='submit' value='Signup' />
    </form>
    </div>
  )
}

export default Signup