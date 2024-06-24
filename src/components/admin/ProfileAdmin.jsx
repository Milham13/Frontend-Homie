import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SidebarAdmin from './SidebarAdmin';

const ProfileAdmin = () => {
  const [profile, setProfile] = useState({
    nama: '',
    nomorHp: '',
    email: '',
    profilePicture: ''
  });

  const [file, setFile] = useState(null);
  const userId = 1; // Ganti dengan userId yang sesuai

  useEffect(() => {
    axios.get(`http://localhost:4000/profile/${userId}`)
      .then(response => {
        setProfile(response.data.Result);
      })
      .catch(error => {
        console.log('Error fetching profile', error);
      });
  }, [userId]);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('profilePicture', file);
    formData.append('userId', userId);

    axios.post('http://localhost:4000/uploadProfilePicture', formData)
      .then(response => {
        console.log('Profile picture uploaded', response.data);
      })
      .catch(error => {
        console.log('Error uploading profile picture', error);
      });

    axios.put(`http://localhost:4000/profile/${userId}`, profile)
      .then(response => {
        console.log('Profile updated', response.data);
      })
      .catch(error => {
        console.log('Error updating profile', error);
      });
  };

  return (
    <div>
    <SidebarAdmin/>
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
            Nama
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nama"
            type="text"
            name="nama"
            value={profile.nama}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nomorHp">
            Nomor HP
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nomorHp"
            type="text"
            name="nomorHp"
            value={profile.nomorHp}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePicture">
            Profile Picture
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="profilePicture"
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
          />
        </div> */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ProfileAdmin;