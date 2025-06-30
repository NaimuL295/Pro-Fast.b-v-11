// src/hooks/useUserRole.js
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth'; // your custom auth hook
import useAxiosInstance from './useAxiosInstance/useAxiosInstance';


const useUserRole = () => {
    const { user, loading: authLoading } = useAuth();
     const axiosSecure = useAxiosInstance();;
    const {
        data: role = 'user',
        isLoading: roleLoading,
        refetch,
    } = useQuery({
        queryKey: ['userRole', user?.email],
        enabled: !authLoading && !!user?.email,
        queryFn: async () => {
             const res = await axiosSecure.get(`/users/${user.email}/role`);
            return res.data.role;
        },
    });

    return { role, roleLoading: authLoading || roleLoading, refetch };
};



export default useUserRole;
