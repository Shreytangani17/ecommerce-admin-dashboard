// === File: src/components/Header.jsx ===
import React, { useState } from "react";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleNotifications = () => setShowNotifications(!showNotifications);
  const toggleProfile = () => setShowProfile(!showProfile);

  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Admin Dashboard</h1>
      <div className="flex items-center space-x-4 relative">
        <button className="text-gray-600 dark:text-gray-200 text-lg">
          <FaSearch />
        </button>

        <div className="relative">
          <button
            onClick={toggleNotifications}
            className="text-gray-600 dark:text-gray-200 text-lg"
          >
            <FaBell />
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded shadow-lg z-10 p-4">
              <h4 className="font-semibold mb-2">Notifications</h4>
              <ul className="text-sm space-y-2">
                <li>🛒 New order received</li>
                <li>👤 New user registered</li>
                <li>📈 Sales increased by 15%</li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={toggleProfile}
            className="text-gray-600 dark:text-gray-200 text-lg"
          >
            <FaUserCircle />
          </button>
          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded shadow-lg z-10 p-4">
              <p className="font-semibold">Admin User</p>
              <p className="text-sm">admin@example.com</p>
              <button className="mt-2 text-blue-600 dark:text-blue-400 text-sm">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
