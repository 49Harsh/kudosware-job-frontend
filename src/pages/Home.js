import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to YourHR</h2>
      <p className="mb-4">Find your dream job today!</p>
      <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Sign Up
      </Link>
    </div>
  );
}

export default Home;
