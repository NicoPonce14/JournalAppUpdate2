import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";

//hook que checkea el status del user en la app
export const useCheckAuth = () => {

    const{status}=useSelector(state=>state.auth);
    const dispatch = useDispatch();
  
    useEffect(()=>{
       onAuthStateChanged(FirebaseAuth, async(user) => {
        if(!user) return dispatch(logout());
  
        const {uid,email,displayName, photoUrl} = user;
        dispatch(login({uid,email,displayName, photoUrl}));
       })
    }, [])

    return status;
}
