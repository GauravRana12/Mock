import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Action';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const data=useSelector((state)=>state.Signup);
  var dispatch=useDispatch();
  var navigate=useNavigate();


// const LoggingIn=(e)=>{
//   e.preventDefault();
//   console.log(data);
      
// }

const LoggingIn=async (e)=>{
  e.preventDefault();
  try {
      const api= await axios.get('http://localhost:8080/users');
      const data= api.data;
      console.log(data);
      data.map((ele)=>{
        if(ele.email==email && ele.password==pass){
          console.log("logged in");
          dispatch(login);
          navigate('/')
        }
      })
  } catch (error) {
      console.log(error);
  }
}

  return (
    <div><h1>Login Page</h1>
    <form onSubmit={LoggingIn}>
    <input type='email' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/>
    <input type='password' placeholder='Enter Password' onChange={(e)=>setPass(e.target.value)}/>
    <input type='submit' value='Login' />
    </form>
    </div>
  )
}

export default Login