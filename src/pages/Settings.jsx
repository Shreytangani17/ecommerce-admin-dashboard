// === File: src/pages/Settings.jsx ===
import React, { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Settings</h2>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-lg">Dark Mode</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700">
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                  darkMode ? "translate-x-6" : "translate-x-1"
                }`}
              ></div>
            </div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg">Email Notifications</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700">
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                  emailNotifications ? "translate-x-6" : "translate-x-1"
                }`}
              ></div>
            </div>
          </label>
        </div>

        <div>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
