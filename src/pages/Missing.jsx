import React from "react";

function Missing() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600">PAGE NOT FOUND</p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 transition duration-300 border *:"
      >
        Go to Home
      </a>
    </div>
  );
}

export default Missing;
