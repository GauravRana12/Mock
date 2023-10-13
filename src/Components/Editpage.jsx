import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { patching } from '../Redux/Action';

const Editpage = () => {
    const {id}=useParams();
    const [prev,setPrev]=useState({});
    const [type,setType]=useState('');
const [cat,setCat]=useState('');
const [amount,setAmount]=useState('');
const [date,setDate]=useState('');
var navigate=useNavigate();
var dispatch=useDispatch();
    const prevData=async (id)=>{
        try {
            const api=await axios.get(`http://localhost:8080/tracker/${id}`);
            console.log(api.data);
            setPrev(api.data);
        } catch (error) {
            
        }
    }
    console.log(prev);

   const tracker_add=(e)=>{
         e.preventDefault();
         const new_data={
            type,
            category:cat,
             amount,
             date
         }
        dispatch(patching(id,new_data))
        console.log("success patched");
        alert('patched successfully')
      navigate('/history')
   }

    useEffect(()=>{
     prevData(id);
    },[id])
  return (
    <div>Edit it
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
      <input value={prev.amount} type='number' placeholder='Enter amount' onChange={(e)=>setAmount(e.target.value)} />
      <br />
      <br />
      <label>Date: </label>
      <input type='date' value={prev.date}  onChange={(e)=>setDate(e.target.value)}/>
      <input type='submit' value='save changes' />
    </form>
    </div>
  )
}

export default Editpage