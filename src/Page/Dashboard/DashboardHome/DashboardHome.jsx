import React from 'react';
import useUserRole from '../../../Hook/useUserRole';
import Loading from '../../../Component/Loading';
import Forbidden from '../../Forbidden/Forbidden';
import RiderDashboard from '../RiderDashboard/RiderDashboard';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import UserDashboard from '../UserDashboard/UserDashboard';

const DashboardHome = () => {
    const {role, roleLoading}=useUserRole()
   if (roleLoading) {
    return <Loading></Loading>
   }
   


   if (role==="user") {
    return <UserDashboard></UserDashboard>
   }
   if (role==="admin") {
    return <AdminDashboard></AdminDashboard>
   } 
   if (role === "rider") {
    return <RiderDashboard></RiderDashboard>
   }else{
    return <Forbidden></Forbidden>
   }
   
    
};

export default DashboardHome;