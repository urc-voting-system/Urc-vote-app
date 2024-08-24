import React, { useState } from "react";
import AdminContent from "./AdminContent";

const Admin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const [verified, setVerified] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "admin" && password === "root") {
      setVerified(true);
    }
  };
  return (
    <>
      {!verified ? (
        <div>
          <form onSubmit={handleSubmit} className="space-y-4 p-5">
            {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Admin Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div></div>
            <button
              type="submit"
              className="flex w-fit justify-center items-center p-2 bg-blue-500 text-white font-bold rounded-sm"
            >
              Access
            </button>
          </form>
        </div>
      ) : (
        <AdminContent />
      )}
    </>
  );
};

export default Admin;
