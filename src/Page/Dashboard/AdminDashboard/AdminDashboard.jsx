
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaMotorcycle, FaTruckMoving, FaCheckCircle } from 'react-icons/fa';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
 import useAxios from '../../../Hook/useAxios';
import useUserRole from '../../../Hook/useUserRole.jsx';


const statusConfig = {
  rider_assigned: {
    label: 'Rider Assigned',
    icon: <FaMotorcycle className="text-yellow-500 text-4xl" />,
    bg: 'bg-yellow-50',
    border: 'border-yellow-400',
    color: '#FACC15',
  },
  in_transit: {
    label: 'In Transit',
    icon: <FaTruckMoving className="text-blue-500 text-4xl" />,
    bg: 'bg-blue-50',
    border: 'border-blue-400',
    color: '#60A5FA',
  },
  delivered: {
    label: 'Delivered',
    icon: <FaCheckCircle className="text-green-600 text-4xl" />,
    bg: 'bg-green-50',
    border: 'border-green-400',
    color: '#34D399',
  },
};

const AdminDashboard = () => {
  const axiosSecure = useAxios();
const {role} =useUserRole()
const { data: stats = [], isLoading } = useQuery({
  queryKey: ['parcel-status-count', role],
  queryFn: async () => {
    const res = await axiosSecure.get(`/parcels/delivery/status-count?role=${role}`);
    return res.data;
  },
});

  const pieData = stats.map((item) => ({
    name: statusConfig[item.delivery_status]?.label || item.delivery_status,
    value: item.count,
    color: statusConfig[item.delivery_status]?.color || '#A3A3A3',
  }));

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">📦 Parcel Delivery Overview</h2>

      {/* Status Cards */}
      {isLoading ? (
        <p className="text-gray-600">Loading status counts...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((item) => {
            const config = statusConfig[item.delivery_status] || {
              label: item.delivery_status,
              icon: null,
              bg: 'bg-gray-100',
              border: 'border-gray-400',
            };

            return (
              <div
                key={item.delivery_status}
                className={`p-5 rounded-xl shadow-md border-l-8 ${config.bg} ${config.border} hover:scale-[1.02] transition-transform`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>{config.icon}</div>
                  <p className="text-3xl font-bold text-gray-800">{item.count}</p>
                </div>
                <p className="text-lg font-semibold text-gray-700">{config.label}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* Pie Chart */}
      {!isLoading && (
        <div className="w-full h-[350px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} (${(percent * 100).toFixed(0)}%)`
                }
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
