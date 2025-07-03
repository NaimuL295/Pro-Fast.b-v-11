import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosInstance from '../../../Hook/useAxiosInstance/useAxiosInstance';
import useAuth from '../../../Hook/useAuth';
import useUserRole from '../../../Hook/useUserRole';


const statusLabels = {
  rider_assigned: 'Rider Assigned',
  in_transit: 'In Transit',
  delivered: 'Delivered',
  pending: 'Pending',
  // add more as needed
};

const UserDashboard = () => {
  const axiosSecure = useAxiosInstance();
  const { user } = useAuth();
  const { role } = useUserRole();
  const email = user?.email;

  const { data: stats = [], isLoading, isError } = useQuery({
    queryKey: ['parcel-status-count', role, email],
    enabled: !!email && !!role,
    queryFn: async () => {
      const res = await axiosSecure.get('/parcels/delivery/status-count', {
        params: { role, email },
      });
      return res.data;
    },
  });

  if (!user) return <p>Please login first.</p>;

  if (isLoading) return <p>Loading your parcel status...</p>;
  if (isError) return <p>Failed to load parcel status data.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">My Parcel Delivery Status</h2>

      {stats.length === 0 ? (
        <p>No parcel data found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map(({ delivery_status, count }) => (
            <div
              key={delivery_status}
              className="bg-blue-100 p-4 rounded shadow text-center"
            >
              <p className="text-lg font-semibold">
                {statusLabels[delivery_status] || delivery_status}
              </p>
              <p className="text-3xl">{count}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
