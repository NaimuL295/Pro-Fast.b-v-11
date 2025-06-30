

import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAxios from '../../../Hook/useAxios';


const TrackParcel = () => {
  const { register, handleSubmit, reset } = useForm();
  const Axios = useAxios();

  const onSubmit = async (data) => {
    try {
      const payload = {
        tracking_id: data.tracking_id,
        parcel_id: data.parcel_id || undefined,
        status: data.status,
        message: data.message,
        updated_by: data.updated_by || '',
      };

      const res = await Axios.post('/tracking', payload);

      if (res.data.success) {
        toast.success('Tracking update added!');
        reset();
      } else {
        toast.error('Failed to add tracking update.');
      }
    } catch (err) {
      toast.error('Error posting tracking data.');
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Post Tracking Update</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block font-medium">Tracking ID *</label>
          <input
            {...register("tracking_id", { required: true })}
            className="input input-bordered w-full"
            placeholder="Enter tracking ID"
          />
        </div>

        <div>
          <label className="block font-medium">Parcel ID (optional)</label>
          <input
            {...register("parcel_id")}
            className="input input-bordered w-full"
            placeholder="Parcel ObjectID from MongoDB"
          />
        </div>

        <div>
          <label className="block font-medium">Status *</label>
          <select
            {...register("status", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="">Select status</option>
            <option value="pending">Pending</option>
            <option value="picked">Picked</option>
            <option value="in_transit">In Transit</option>
            <option value="delivered">Delivered</option>
            <option value="failed">Delivery Failed</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Message *</label>
          <textarea
            {...register("message", { required: true })}
            className="textarea textarea-bordered w-full"
            placeholder="Write a short status update"
          />
        </div>

        <div>
          <label className="block font-medium">Updated By (optional)</label>
          <input
            {...register("updated_by")}
            className="input input-bordered w-full"
            placeholder="Name or ID of updater"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Submit Update
        </button>
      </form>
    </div>
  );
};

export default TrackParcel;
