import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    //Create User
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //Login
    const signIn =(email,password)=> {
        return signInWithEmailAndPassword(auth,email,password)
    }

    //update Name
    const updateName =(name)=>{
        return updateProfile(auth.currentUser,{displayName:name})
    }
    //Google Login
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    //Logout
    const logOut = ()=>{
        return signOut(auth)
    }
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
    });
    return ()=>{
        unsubscribe()
    }
},[])
    const AuthInfo = { user, providerLogin,logOut,createUser,signIn,updateName }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;