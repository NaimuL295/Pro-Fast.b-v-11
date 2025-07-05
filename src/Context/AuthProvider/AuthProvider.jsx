import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.in';
//import axios from 'axios';
import useAxios from '../../Hook/useAxios';



const googleProvider=new  GoogleAuthProvider()
const AuthProvider = ({children}) => {
  const Axios=useAxios()
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


    const updateUserProfile=(profileInfo)=>{
       setLoading(true)
        return updateProfile(auth.currentUser,profileInfo);
  
    }
const  logout=()=>{
    return signOut(auth);
}
 const signWithGoogle=()=>{
  //  setLoading(true)
    return signInWithPopup(auth,googleProvider)
 }
useEffect(()=>{

 const unSubscribe=   onAuthStateChanged(auth, currentUser => { 

setUser(currentUser)

if (user?.email) {
    Axios.post("/jwt",
        {
email:currentUser?.email,

    },
{
   withCredentials:true 
}).then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});

}

setLoading(false)
});
return ()=>{
    unSubscribe()
}
},[user])


    const authInfo={
createUser,
signUser
,user,
setUser,
loading,
logout,
signWithGoogle,
updateUserProfile
    }



    return (
       <AuthContext value={authInfo}>
            {children}
   </AuthContext>
    );
};

export default AuthProvider;