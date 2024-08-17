import React, { useState } from "react";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [verified, setVerified] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setVerified(true)

    if(email === 'test@email.com' && password === 'test'){
        setVerified(true)
    }
  };
  return (
    <>
      {!verified ? (
        <div>
          <form onSubmit={handleSubmit} className="space-y-4 p-5">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div>

            </div>
            <button
              type="submit"
              className="bg-primary text-2xl font-bold border-2 "
            >
              Sign In
            </button>
          </form>
        </div>
      ) : (
        <p>hello</p>
      )}
    </>
  );
};

export default Admin;
