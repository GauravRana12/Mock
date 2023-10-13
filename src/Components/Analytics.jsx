import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DogChart from '../charts/Daugnut';
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/Action';
// import UserData from './UserData';

const Analytics = () => {

const data=useSelector((state)=>state.tracker);

  const UserData=data.filter((person)=>person.type==='income')
  const UserDat=data.filter((person)=>person.type==='expense')

  console.log(UserDat);

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => { return data.category}) ,
    datasets: [
      {
        label: "Income",
        data: UserData.map((data) =>  data.amount),
        backgroundColor: [
          "rgba(15,192,192,1)",
          "blue",
          "pink",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [userDat, setUserDat] = useState({
    labels: UserDat.map((data) =>  data.category) ,
    datasets: [
      {
        label: "Income",
        data: UserDat.map((data) =>  data.amount),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "grey",
          "pink",
          "orange",
          "purple",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });




 

  var navigate=useNavigate();
  return (
    <div><h1>Analytics</h1>
    <div className='buttons'>
      <button onClick={()=>navigate('/')}>Tracker</button>
      <button onClick={()=>navigate('/analytics')}>Analytics</button>
      <button onClick={()=>navigate('/history')}>History</button>
    </div>
    <div className='BigDiv'>
    <div>
    <h1>Income Chart</h1>
    <DogChart chartData={userData} />
    </div>

    <div>
    <h1>Expense chart</h1>
    <DogChart chartData={userDat} />
    </div>
    </div>
    
    
    </div>
  )
}

export default Analytics