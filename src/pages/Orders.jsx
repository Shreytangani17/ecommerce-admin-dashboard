import React, { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: "ORD001",
      customer: "John Doe",
      date: "2025-06-15",
      total: 199.99,
      status: "Pending",
    },
    {
      id: "ORD002",
      customer: "Jane Smith",
      date: "2025-06-14",
      total: 89.5,
      status: "Shipped",
    },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white dark:bg-gray-800 rounded">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="p-2">Order ID</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Date</th>
              <th className="p-2">Total</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b dark:border-gray-600">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.customer}</td>
                <td className="p-2">{order.date}</td>
                <td className="p-2">${order.total}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      order.status === "Pending"
                        ? "bg-yellow-500"
                        : order.status === "Shipped"
                        ? "bg-blue-600"
                        : "bg-green-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
