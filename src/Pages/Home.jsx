import React, { useEffect, useState } from 'react'
import { getData, tracker } from '../Redux/Action';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css'
const Home = () => {
const [type,setType]=useState('');
const [cat,setCat]=useState('');
const [amount,setAmount]=useState('');
const [date,setDate]=useState('');
var dispatch=useDispatch();
var navigate=useNavigate();
const tracker_add=(e)=>{
e.preventDefault();
const new_obj={
  type,
  category:cat,
  amount,
  date
}

  tracker(new_obj);
  alert('added success')
  console.log("from tracker");
}
const data=useSelector((state)=>state.tracker);
console.log(data);
  useEffect(()=>{
  dispatch(getData)
  console.log("runned");
  },[])


  return (
    <div>
    <h1>Kindly Run it localy on port 8080. I was not able to deploy because of storage error</h1>
    <h1>Dashboard</h1>
    <div className='buttons'>
      <button onClick={()=>navigate('/')}>Tracker</button>
      <button onClick={()=>navigate('/analytics')}>Analytics</button>
      <button onClick={()=>navigate('/history')}>History</button>
    </div>
    <h1>Tracker</h1>
    <form onSubmit={tracker_add}>
    <label>Type: </label>
      <select required name='type' onChange={(e)=>setType(e.target.value)}>
        <option value='income'>Income</option>
        <option value='expense'>Expense</option>
      </select>
      <br />
      <br />
      <label>Category: </label>
      {type=='income'? <select name='category' onChange={(e)=>setCat(e.target.value)}>
        <option value='salary'>Salary</option>
        <option value='gifts'>Gifts</option>
        <option value='refunds'>Refunds</option>
        <option value='others'>others</option>
      </select>
      :
      <select name='category' onChange={(e)=>setCat(e.target.value)}>
      <option value='food & drinks'>Food & Drinks</option>
        <option value='shopping'>Shopping</option>
        <option value='housing'>Housing</option>
        <option value='bills'>Bills</option>
        <option value='vehicle & transport'>Vehicle & Transport</option>
        <option value='lifestyle'>Lifestyle</option>
      </select>}
      <br />
      <br />
      <label>Amount: ₹</label>
      <input type='number' placeholder='Enter amount' onChange={(e)=>setAmount(e.target.value)} />
      <br />
      <br />
      <label>Date: </label>
      <input type='date'  onChange={(e)=>setDate(e.target.value)}/>
      <input type='submit' value='Create' />
    </form>
    </div>
  )
}

export default Home