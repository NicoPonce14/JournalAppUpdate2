import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
//provider para iniciar sesion con cuenta de google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    //const credentials = GoogleAuthProvider.credentialFromResult(result);
    
    const {displayName,uid,photoURL,email} = result.user;

    return {
        ok:true,
        displayName,uid,photoURL,email
    }
  
} catch (error) {

    const errorCode = error.code;
    const errorMessage = error.message;
    return {
        ok:false,
        errorMessage
    }
  }
};

//provider para registrar usuario de forma manual
export const registerUserWithEmailPassword = async({email,password,displayName}) =>{
  try {

    
    const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password);
    const {uid,photoURL} = resp.user;
    updateProfile(FirebaseAuth.currentUser,{displayName})

    return {
      ok:true,
      displayName,uid,photoURL,email
  }
    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
        ok:false,
        errorMessage
    }
  }
}

//provider para loguearse con email y password creados manualmente
export const loginWithEmailPassword = async({email,password}) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth,email,password);
    const{uid,photoURL,displayName} = resp.user;

    return {
      ok:true,
      displayName,uid,photoURL
  }
    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
        ok:false,
        errorMessage
    }
  }
}

//provider para cerrar sesion en firebase
export const logoutFirebase = async() => {
  return await FirebaseAuth.signOut();
}
