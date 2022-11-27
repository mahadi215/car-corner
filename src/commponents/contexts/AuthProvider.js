import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleSignIn = (provider)=>{
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
     const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     };

     const updateUser = (userInfo) =>{
      setLoading(true)
      return updateProfile(auth.currentUser, userInfo);
     }

     const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
     }

     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
         })
         return ()=> unsubscribe();
     },[])

     const authInfo = {
        createUser,
        logIn,
        googleSignIn,
        updateUser,
        logOut,
        user,
        loading

     }

    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;