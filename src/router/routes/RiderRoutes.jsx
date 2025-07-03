import React from 'react';
import useAuth from '../../Hook/useAuth';
import useUserRole from '../../Hook/useUserRole';

const RiderRoutes = ({children}) => {
      const { user, loading } = useAuth();
    const { role, roleLoading } = useUserRole();

    if (loading || roleLoading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if (!user || role !== 'rider') {
        return <Navigate state={{ from: location.pathname }} to="/forbidden"></Navigate>
    }

    return children;
};


export default RiderRoutes;