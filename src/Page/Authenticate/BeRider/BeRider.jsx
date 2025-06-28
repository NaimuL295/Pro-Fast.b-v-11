
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import toast from 'react-hot-toast';
import axios from 'axios';
import useAuth from '../../../Hook/useAuth';
import { useLoaderData } from 'react-router';

const BeRider = () => {
    const serviceData=useLoaderData()
  const { user } = useAuth();
  const [districts, setDistricts] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const selectedRegion = watch('region');

  useEffect(() => {
    if (selectedRegion) {
      const regionData = serviceData.find(r => r.region === selectedRegion);
      setDistricts(regionData ? [regionData.district] : []);
    }
  }, [selectedRegion, serviceData]);

  const onSubmit = async (data) => {
    const riderInfo = {
      ...data,
      name: user?.name,
      email: user?.email,
      status: 'pending',
      appliedAt: new Date().toISOString(),
    };

    try {
      await axios.post('/api/riders', riderInfo);
      toast.success('Application submitted!');
      reset();
    } catch (err) {
      console.error(err);
      toast.error('Submission failed');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white  p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Become a Rider</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Read-only Name */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            value={user?.displayName || ''}
            readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Read-only Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            value={user?.email || ''}
            readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block font-medium">Age</label>
          <input
            type="number"
            {...register('age', { required: true })}
            className="input input-bordered w-full"
          />
          {errors.age && <p className="text-red-500 text-sm">Age is required</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-medium">Phone Number</label>
          <input
            type="text"
            {...register('phone', { required: true })}
            className="input input-bordered w-full"
          />
          {errors.phone && <p className="text-red-500 text-sm">Phone number is required</p>}
        </div>

        {/* National ID */}
        <div>
          <label className="block font-medium">National ID</label>
          <input
            type="text"
            {...register('nid', { required: true })}
            className="input input-bordered w-full"
          />
          {errors.nid && <p className="text-red-500 text-sm">NID is required</p>}
        </div>

        {/* Bike Brand */}
        <div>
          <label className="block font-medium">Bike Brand</label>
          <input
            type="text"
            {...register('bikeBrand', { required: true })}
            className="input input-bordered w-full"
          />
          {errors.bikeBrand && <p className="text-red-500 text-sm">Bike brand is required</p>}
        </div>

       {/* Region Selection */}
<div>
  <label className="block font-medium">Region</label>
  <select
    {...register('region', { required: true })}
    className="select select-bordered w-full"
  >
    <option value="">Select a region</option>
    {serviceData.map(region => (
      <option key={region.region} value={region.region}>
        {region.region}
      </option>
    ))}
  </select>
  {errors.region && <p className="text-red-500 text-sm">Region is required</p>}
</div>

{/* District */}
<div>
  <label className="block font-medium">District</label>
  <select
    {...register('district', { required: true })}
    className="select select-bordered w-full"
    disabled={districts.length === 0}
  >
    <option value="">Select district</option>
    {districts.map((district, idx) => (
      <option key={idx} value={district}>{district}</option>
    ))}
  </select>
  {errors.district && <p className="text-red-500 text-sm">District is required</p>}
</div>


        {/* Submit */}
        <button type="submit" className="btn btn-primary w-full">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default BeRider;
