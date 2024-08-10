import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup({ onSignup }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Log the request payload for debugging
    console.log('Request payload:', { name, email, password });

    try {
      const response = await axios.post('https://efcxxeeu5j.execute-api.ap-southeast-2.amazonaws.com/dev/Api/Sign_up', {
        name,
        email,
        password,
      });

      if (response && response.data) {
        setSuccess('Signup successful!');
        onSignup(true);  // Notify the parent component of successful signup
        navigate("/")
      } else {
        setError('Signup failed. Please try again.');
        onSignup(false);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Signup failed. Please try again.');
      } else if (error.request) {
        setError('No response from server. Please try again later.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      onSignup(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Sign Up</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Signup
        </button>

        {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
        {success && <p className="text-green-500 text-xs italic mt-4">{success}</p>}
      </form>
    </div>
  );
}

export default Signup;
