import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBox, FaUsers, FaChartBar, FaCog, FaClipboardList } from "react-icons/fa";

const Sidebar = () => {
  const menu = [
    { icon: <FaTachometerAlt />, label: "Dashboard", path: "/" },
    { icon: <FaClipboardList />, label: "Orders", path: "/orders" },
    { icon: <FaBox />, label: "Products", path: "/products" },
    { icon: <FaUsers />, label: "Customers", path: "/customers" },
    { icon: <FaChartBar />, label: "Analytics", path: "/analytics" },
    { icon: <FaCog />, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 h-full shadow-lg">
      <div className="p-6 text-xl font-bold text-center border-b dark:border-gray-700">
        Admin Dashboard
      </div>
      <nav className="mt-4">
        {menu.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
