import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Topbar = ({ darkMode, setDarkMode }) => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <h1 className="text-xl font-semibold">Welcome, Admin</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
      </button>
    </header>
  );
};

export default Topbar;