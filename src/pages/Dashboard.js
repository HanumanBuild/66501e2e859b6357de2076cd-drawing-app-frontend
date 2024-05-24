import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const Dashboard = () => {
  const [userDrawings, setUserDrawings] = useState([]);
  const [galleryDrawings, setGalleryDrawings] = useState([]);

  useEffect(() => {
    const fetchDrawings = async () => {
      try {
        const token = localStorage.getItem('token');
        const userResponse = await axiosInstance.get('/api/drawings/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserDrawings(userResponse.data);

        const galleryResponse = await axiosInstance.get('/api/drawings');
        setGalleryDrawings(galleryResponse.data);
      } catch (error) {
        console.error('Error fetching drawings', error);
      }
    };

    fetchDrawings();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-2">Your Drawings</h2>
          {userDrawings.map((drawing) => (
            <div key={drawing._id} className="mb-2">
              <h3 className="text-lg">{drawing.title}</h3>
              <img src={drawing.image} alt={drawing.title} className="w-full" />
            </div>
          ))}
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-2">Gallery</h2>
          {galleryDrawings.map((drawing) => (
            <div key={drawing._id} className="mb-2">
              <h3 className="text-lg">{drawing.title}</h3>
              <img src={drawing.image} alt={drawing.title} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;