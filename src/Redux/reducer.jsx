import React from 'react'
import { ADD_SIGNUP, DELETE_DATA, GET_DATA, HISTORY_DATA, LOGIN, PATCH_DATA } from './ActionType'

const initial_state={
  isAuth:false,
  Signup:[],
  tracker:[],
  history:[]
}

const reducer=(state=initial_state,{type,payload})=>{
   switch(type){
    case ADD_SIGNUP:
      return {...state,Signup:[...state.Signup,payload]}
      case LOGIN :
        return {...state,isAuth:true}
      case GET_DATA:
        return {...state,tracker:payload}
     default:
      return state
   }
}
export default reducer