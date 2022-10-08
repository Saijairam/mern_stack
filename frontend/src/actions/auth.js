import * as api from '../api'
import { setcurrentUser } from './currentUser';

export const signup = (authData,navigate)=>async (dispatch)=>{
    try {
        const {data} = await api.Signup(authData);
        dispatch({type:'AUTH',data});
        dispatch(setcurrentUser(JSON.parse(localStorage.getItem("Profile"))));
        navigate('/');
    } catch (error) {
        console.log(error.message);
    }
}
export const login = (authData,navigate)=>async (dispatch)=>{
    try {
        const {data} = await api.Login(authData);
        dispatch({type:'AUTH',data});
        dispatch(setcurrentUser(JSON.parse(localStorage.getItem("Profile"))));
        navigate('/');
    } catch (error) {
        console.log(error.message);
    }
}