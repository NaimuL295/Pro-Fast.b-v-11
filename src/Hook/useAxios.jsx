import axios from 'axios';
import React from 'react';
const axiosPublic= axios.create({
    baseURL:"https://pro-fast-server-sites.vercel.app"
})
const useAxios = () => {
    return axiosPublic
    
};

export default useAxios;