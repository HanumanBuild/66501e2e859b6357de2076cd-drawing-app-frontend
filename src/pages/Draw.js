import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const Draw = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  // Function to handle drawing submission
  const handleDraw = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axiosInstance.post(
        '/api/drawings',
        { title, image },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Drawing saved successfully');
    } catch (error) {
      alert('Failed to save drawing');
    }
  };

  // JSX for the drawing form
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl">
        <h2 className="text-center text-2xl mb-4">Drawing Canvas</h2>
        <form className="bg-white shadow-md rounded p-4" onSubmit={handleDraw}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Image URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save Drawing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Draw;