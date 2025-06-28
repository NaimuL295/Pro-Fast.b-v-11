import axios from 'axios';
import React from 'react';
const axiosPublic= axios.create({
    baseURL:"http://localhost:5000"
})
const useAxios = () => {
    return axiosPublic
    
};

export default useAxios;