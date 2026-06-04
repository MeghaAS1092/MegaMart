"use client";

import { useState } from "react";
import { FaEnvelope, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Welcome back!</h1>
      <h6 className="font-light">Sign in to continue to your account</h6>
      <br />
      <form>
        <label htmlFor="email" className="block mb-2 font-medium">
          Email Address
        </label>
        <div className="flex items-center border rounded px-3 py-2">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input
            id="email"
            type="text"
            placeholder="Enter your email address"
            className="flex-1 outline-none"
          />
        </div>
        <br />
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="flex items-center border rounded px-3 py-2">
          <FaLock className="text-gray-400 mr-2" />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="flex-1 outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-gray-500 focus:outline-none"
          >
            {showPassword ? (
              <FaEyeSlash className="h-5 w-5" />
            ) : (
              <FaEye className="h-5 w-5" />
            )}
          </button>
        </div>
        <br />
        <div className="flex items-center justify-between text-sm mt-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <span className="text-gray-500">
            Need help? <span className="text-blue-500">Contact Support</span>
          </span>
        </div>
        <br />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
