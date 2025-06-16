import React from "react";

const Customers = () => {
  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", joined: "2023-08-10" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", joined: "2023-06-21" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", joined: "2023-05-12" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Customers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Joined</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="text-center">
                <td className="px-4 py-2 border">{customer.name}</td>
                <td className="px-4 py-2 border">{customer.email}</td>
                <td className="px-4 py-2 border">{customer.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
