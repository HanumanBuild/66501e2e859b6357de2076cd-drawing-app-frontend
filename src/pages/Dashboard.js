import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-2">Your Drawings</h2>
          {/* Add your drawings here */}
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-2">Gallery</h2>
          {/* Add gallery of other people's drawings here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;