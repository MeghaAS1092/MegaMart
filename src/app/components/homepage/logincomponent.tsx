"use client";

import { useState } from "react";
import LoginForm from "./loginForm";

export default function LoginComponent() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="bg-white rounded-lg w-full max-w-xl p-6 shadow-2xl shadow-gray-600">
      {/* Tab buttons */}
      <div className="flex border-b">
        <button
          className={`flex-1 px-4 py-2 ${
            activeTab === "login" ? "border-b-2 border-blue-500 font-bold" : ""
          }`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={`flex-1 px-4 py-2 ${
            activeTab === "register"
              ? "border-b-2 border-blue-500 font-bold"
              : ""
          }`}
          onClick={() => setActiveTab("register")}
        >
          Register
        </button>
      </div>

      {/* Tab content */}
      <div className="p-6">
        {activeTab === "login" && <LoginForm/>}
        {activeTab === "register" && <p>👤 This is your Register tab</p>}
      </div>
    </div>
  );
}
