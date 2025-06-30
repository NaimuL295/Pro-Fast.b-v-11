
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../Hook/useAxios';

const ActiveRiders = () => {
  const Axios = useAxios();
  const [searchText, setSearchText] = useState('');

  const { data: activeRiders = [], 
    isLoading } = useQuery({
    
      queryKey: ['active-riders'],
    
    queryFn: async () => {
      const res = await Axios.get('/riders/active');
      return res.data;
    }
  });

  const filteredRiders = activeRiders.filter(rider =>
    
    rider.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  if (isLoading) {
    return <div className="text-center py-10 font-semibold">Loading active riders...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Active Riders</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full max-w-sm"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Region</th>
              <th>District</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredRiders.map(rider => (
              <tr key={rider._id}>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.phone}</td>
                <td>{rider.region}</td>
                <td>{rider.district}</td>
                <td>
                  <span className="badge badge-success capitalize">{rider.status}</span>
                </td>
              </tr>
            ))}
            {filteredRiders.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-gray-400 py-4">
                  No riders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveRiders;
