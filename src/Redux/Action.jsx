import axios from "axios";
import { ADD_SIGNUP, GET_DATA, LOGIN } from "./ActionType";

export const adding_signup=(data)=>async (dispatch)=>{
    try {
        const api= await axios.post('http://localhost:8080/users',data);
        dispatch({type:ADD_SIGNUP,payload:data})
    } catch (error) {
        console.log(error);
    }
}

export const getData=async (dispatch)=>{
    try {
        const api=await axios.get('http://localhost:8080/tracker');
        console.log("api",api.data);
        dispatch({type:GET_DATA,payload:api.data})
      } catch (error) {
        console.log(error);
      }
}

export const deleteing=(id)=>async (dispatch)=>{
    try {
        await axios.delete(`http://localhost:8080/tracker/${id}`);
        dispatch(getData)
    } catch (error) {
        console.log(error);
    }
}

export const patching=(id,data)=>async (dispatch)=>{
    try {
        await axios.patch(`http://localhost:8080/tracker/${id}`,data);
        dispatch(getData())
    } catch (error) {
        console.log(error);
    }
}

export const tracker=async (data)=>{
    try {
        const api=await axios.post('http://localhost:8080/tracker',data);
        console.log("added success from action");
    } catch (error) {
        console.log(error);
    }
}

export const login=(dispatch)=>{
    dispatch({type:LOGIN})
}