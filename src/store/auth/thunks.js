import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

//thunk que checkea que los datos esten el BD
export const checkingAuthentication = (email,password) => {

    return async(dispatch) => {
        dispatch(checkingCredentials())
    }
}

//thunk que inicia la sesion con cuentas de google
export const startGoogleSignIn = () => {

    return async(dispatch) => {
        dispatch(checkingCredentials())
        const result = await signInWithGoogle();

        if(!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
        console.log({result});
    }
}

//thunk que permite crear usuarios manualmente
export const startCreatingUserWithEmailPassword = ({email,password,displayName}) => {
    return async(dispatch)=>{
        dispatch(checkingCredentials());

        const {photoURL,uid,ok,errorMessage} = await registerUserWithEmailPassword({email,password,displayName});
        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid,email,displayName,photoURL,errorMessage}));
        
    }
}

//thunk que permite iniciar sesion con datos registrados manualmente
export const startLoginWithEmailPassword = ({email,password}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const {photoURL,uid,ok,errorMessage,displayName} = await loginWithEmailPassword({email,password})
        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid,email,displayName,photoURL,errorMessage}));
    }
}

//thunk para cerrar sesion en firebase
export const startLogOut = () => {
    return async(dispatch)=> {
        await logoutFirebase();

        dispatch(logout());
    }
}