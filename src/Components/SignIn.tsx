

import React, { useState } from 'react';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic for sign-in can be added here (e.g., authentication API calls)
    console.log('Sign In clicked');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className=" p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="h-1 bg-orange-500 w-48 mb-6"></div>
        <h2 className="text-2xl text-orange-500 font-bold mb-6 text-center">Sign In</h2>
        
        <form onSubmit={handleSignIn}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"     
            className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-400 transition duration-300"
          >
            Sign In
          </button>
        </form>
        
        {/* Extra Options */}
        <div className="mt-4 text-center">
          <p className="text-gray-400">Don't have an account? <a href="#" className="text-orange-500 hover:underline">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

