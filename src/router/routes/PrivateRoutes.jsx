import React from 'react';
import useAuth from '../../Hook/useAuth';
import { Form, Navigate, useLocation, } from 'react-router';

const PrivateRoutes = ({children}) => {
const {user, loading}=useAuth()

 const location =useLocation()

if (loading) {
   return<span className="loading loading-spinner loading-xl"></span> 
}

if (!user) {
    <Navigate to="/login" state={{From:location.pathname}}></Navigate>
}
    return ( children
    );
};

export default PrivateRoutes;