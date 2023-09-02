import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setuser] = useState(null)

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const loginWithEmail = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setuser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {user, providerLogin, logOut, createUser, loginWithEmail}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;