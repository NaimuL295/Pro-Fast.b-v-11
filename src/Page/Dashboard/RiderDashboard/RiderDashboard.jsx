import React, { useState, useEffect } from 'react';
import {
  FaTruck,
  FaCheckCircle,
  FaClock,
  FaUser,
} from 'react-icons/fa';

const RiderDashboard = () => {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time string: e.g. 14:23:08
  const timeString = time.toLocaleTimeString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-6 py-10">
      {/* Header with time */}
      <div className="mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Rider Dashboard</h1>
          <p className="text-gray-500">Manage your deliveries efficiently</p>
        </div>
        <div className="text-gray-600 font-mono text-xl tracking-wide">
          🕒 {timeString}
        </div>
      </div>

   

      {/* Delivery List */}
      <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaUser className="text-blue-600" /> Upcoming Deliveries
        </h2>
        <p className="text-gray-400 italic">No deliveries available.</p>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title }) => (
  <div className="bg-white rounded-2xl border p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition">
    <div className="bg-blue-100 p-3 rounded-full">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  </div>
);

export default RiderDashboard;
