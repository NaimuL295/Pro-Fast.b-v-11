import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.in';

const googleProvider=new  GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading ,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signUser=(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }
const  logout=()=>{
    return signOut(auth);
}
 const signWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
 }
useEffect(()=>{

 const unSubscribe=   onAuthStateChanged(auth, currentUser => { 
setLoading(false)
setUser(currentUser)
});
return ()=>{
    unSubscribe()
}
},[])


    const authInfo={
createUser,
signUser
,user,
setUser,
loading,
logout,
signWithGoogle,
    }



    return (
       <AuthContext value={authInfo}>
            {children}
   </AuthContext>
    );
};

export default AuthProvider;