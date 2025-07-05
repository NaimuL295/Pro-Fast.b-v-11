import React from 'react';
import useAxiosInstance from './useAxiosInstance/useAxiosInstance';

const useTrackingLogger = () => {
       const axiosInstance = useAxiosInstance();
    const logTracking = async ({ tracking_id, status, details, location, updated_by }) => {
        try {
            const payload = {
                tracking_id,
                status,
                details,
                location,
                updated_by,
            };
            await axiosInstance.post("/trackings", payload);
        } catch (error) {
            console.error("Failed to log tracking:", error);
        }
    };
    return { logTracking };
};

export default useTrackingLogger;