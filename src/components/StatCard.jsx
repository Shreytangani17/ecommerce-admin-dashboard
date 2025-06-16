import React from 'react';

const StatCard = ({ label, value }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow">
      <h3 className="text-sm text-gray-500 dark:text-gray-300">{label}</h3>
      <p className="text-2xl font-bold text-gray-800 dark:text-white">{value}</p>
    </div>
  );
};

export default StatCard;
