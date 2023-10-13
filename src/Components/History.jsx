import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteing, getData } from '../Redux/Action';
import '../App.css'
import Editpage from './Editpage';

const History = () => {
  var navigate=useNavigate();
var dispatch=useDispatch();

 const data=useSelector((state)=>state.tracker);

const deletin=(id)=>{
  dispatch(deleteing(id));
}

  useEffect(()=>{
  dispatch(getData);
  },[])
  return (
    <div>
    <div className='buttons'>
      <button onClick={()=>navigate('/')}>Tracker</button>
      <button onClick={()=>navigate('/analytics')}>Analytics</button>
      <button onClick={()=>navigate('/history')}>History</button>
    </div>
    <h1>History</h1>
    <div className='history'>
       {data?.map((ele,idx)=>(
        <div key={idx}>
             <h2>{ele.category}</h2>
             <h4>{ele.date}</h4>
             <p>{ele.type}</p>
             <p>{ele.type==='expense' ? `- ₹ ${ele.amount}`:`+ ₹ ${ele.amount}`}</p>
       <Link to={`/edit/${ele.id}`}><button>Edit</button></Link>  
         <button onClick={()=>deletin(ele.id)}>Delete</button>
        </div>
       ))}
    </div>
    </div>
  )
}

export default History