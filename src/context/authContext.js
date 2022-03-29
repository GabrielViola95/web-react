import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate } from "react-router-dom";


export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if(!context) throw new Error('There is no auth provider')
  return context;
}

export function AuthProvider({children}) {

    let navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    
    const signup = (email,password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    
    const logout = () => {
        signOut(auth).then(()=>{
            localStorage.clear();
            setIsAuth(false)
        })
        
    };

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password).then((result) => {
            localStorage.setItem("isAuth", true );
            setIsAuth(true);
        })
    }

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider() 
        return signInWithPopup(auth, googleProvider).then((result) => {
            localStorage.setItem("isAuth", true );
            setIsAuth(true);
        })
    }

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    

    

    return (
        <authContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle, resetPassword }}>
            {children}
        </authContext.Provider>
    )
}