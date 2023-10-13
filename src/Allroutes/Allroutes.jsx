import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import PrivateRoute from './Privateroute'
import Analytics from '../Components/Analytics'
import History from '../Components/History'
import Editpage from '../Components/Editpage'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={
            <PrivateRoute>

            <Home />
            </PrivateRoute>
            }/>
            <Route path='/login' element={<Login />}/>
            <Route path='/users' element={<Signup />}/>
            <Route path='/analytics' element={<Analytics />}/>
            <Route path='/history' element={<History />}/>
            <Route path='/edit/:id' element={<Editpage />}/>
        </Routes>
    </div>
  )
}

export default Allroutes