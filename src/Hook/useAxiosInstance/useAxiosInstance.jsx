import axios from 'axios';
import useAuth from '../useAuth';
import { useNavigate } from 'react-router';



const axiosInstance = axios.create({
  baseURL:"http://localhost:5000",
       withCredentials:true,
});

const useAxiosInstance = () => {
const {logout}=useAuth()
const navigate=useNavigate()
axiosInstance.interceptors.response.use(
    (response) => response, // Success: pass through
    (error) => {
      
      const status = error.response?.status;


    if (status === 403) {
            navigate('/forbidden');
        }

      if (status === 401 || status===403) {
        // Logout without async/await
      logout().then(() => console.log('User logged out (401/403)'))
          .catch((err) => console.error('Logout failed:', err));
      }

      return Promise.reject(error); // Always reject to propagate the error
    }
  );

    return axiosInstance;
}




   

export default useAxiosInstance;


