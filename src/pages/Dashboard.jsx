// === File: src/pages/Dashboard.jsx ===
import React from "react";
import {
  FaShoppingCart,
  FaChartBar,
  FaUserPlus,
  FaChartPie,
  FaBell
} from "react-icons/fa";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  AreaChart,
  Area,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { useNavigate } from "react-router-dom";

const StatCard = ({ color, icon, title, value }) => {
  const navigate = useNavigate();

  return (
    <div className={`flex-1 p-4 rounded shadow text-white ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{value}</h3>
          <p>{title}</p>
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
      <button
        className="mt-4 text-sm underline"
        onClick={() => navigate("/analytics")}
      >
        More info →
      </button>
    </div>
  );
};

const salesData = [
  { name: "Jan", sales: 40 },
  { name: "Feb", sales: 55 },
  { name: "Mar", sales: 65 },
  { name: "Apr", sales: 80 },
  { name: "May", sales: 60 },
  { name: "Jun", sales: 90 }
];

const pieData = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Home Goods', value: 300 },
  { name: 'Other', value: 200 }
];

const radarData = [
  {
    subject: "Sales", A: 120, fullMark: 150
  },
  {
    subject: "Marketing", A: 98, fullMark: 150
  },
  {
    subject: "Development", A: 86, fullMark: 150
  },
  {
    subject: "Customer Support", A: 99, fullMark: 150
  },
  {
    subject: "IT", A: 85, fullMark: 150
  }
];

const Dashboard = () => {
  const pieColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded"
          />
          <button className="text-xl text-gray-700">
            <FaBell />
          </button>
          <img
            src="https://via.placeholder.com/32"
            alt="User Avatar"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          color="bg-cyan-600"
          icon={<FaShoppingCart />}
          title="New Orders"
          value="150"
        />
        <StatCard
          color="bg-green-600"
          icon={<FaChartBar />}
          title="Bounce Rate"
          value="53%"
        />
        <StatCard
          color="bg-yellow-500"
          icon={<FaUserPlus />}
          title="User Registrations"
          value="44"
        />
        <StatCard
          color="bg-red-600"
          icon={<FaChartPie />}
          title="Unique Visitors"
          value="65"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Sales Line Chart</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={salesData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Category Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Monthly Sales Bar Chart</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Department Performance (Radar)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart outerRadius={90} data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar name="Performance" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Visitors (Map Coming Soon)</h3>
          <div className="h-48 bg-blue-100 rounded flex items-center justify-center text-gray-700">
            US Map Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
