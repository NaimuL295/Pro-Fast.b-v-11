import React, { useState } from 'react';
import useAuth from '../../Hook/useAuth';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const UpdateProfile = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [previewURL, setPreviewURL] = useState(user?.photoURL || '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      // Force refresh user
     

      toast.success('✅ Profile updated successfully!');
    } catch (error) {
      toast.error('❌ Failed to update profile');
      console.error('Update Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
        Hello, {user?.displayName || 'User'} 👋
      </h2>

      <div className="flex justify-center mb-6">
        <img
          src={previewURL || 'https://i.ibb.co/4pDNDk1/avatar.png'}
          alt="User"
          className="w-24 h-24 rounded-full border-2 border-gray-300 shadow"
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => {
              setPhotoURL(e.target.value);
              setPreviewURL(e.target.value);
            }}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;