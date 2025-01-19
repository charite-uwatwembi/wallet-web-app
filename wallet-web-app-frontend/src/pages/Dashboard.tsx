import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Jan", spending: 400 },
    { name: "Feb", spending: 300 },
    { name: "Mar", spending: 200 },
    { name: "Apr", spending: 278 },
    { name: "May", spending: 189 },
    { name: "Jun", spending: 239 },
    { name: "Jul", spending: 349 },
  ];
  const tips = [
    {
      title: "Tip 1: How to save on a rainy day",
      description: "Discover the benefits of having an Emergency fund and how to build one.",
    },
    {
      title: "Tip 2: The secret to budgeting success",
      description: "Learn the basics of budgeting and how and how to apply them in your daily life.",
    },
    {
      title: "Tip 3: Why investing your money matters",
      description:"Explore the power of investing and how it can help you archive your financial goals."
    }
  ];
  
  // ...
  
  

  return (
    <div className="sm:px-32 p-6 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Hi There, Let's get your finances in order!</h1>
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        {[
          { label: "Total Balance", value: "$5,000" },
          { label: "Safe-to-Spend", value: "$1,000" },
          { label: "Goals", value: "$3,000" },
          { label: "Wish List", value: "$1,000" },
          { label: "Debt", value: "$2,000" },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl"
          >
            <h4 className="text-gray-500 font-medium">{item.label}</h4>
            <p className="text-2xl font-bold text-gray-800">{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Recent Transactions
        </h2>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="table-auto w-full">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Account",
                  "Date",
                  "Description",
                  "Category",
                  "Type",
                  "Amount",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="px-4 py-2 text-left text-gray-600 font-medium"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(4).keys(),
              ].map((_, i) => (
                <motion.tr
                  key={i}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  className="hover:cursor-pointer border-b"
                >
                  <td className="px-4 py-2">Checking **** 1234</td>
                  <td className="px-4 py-2">10/24/2023</td>
                  <td className="px-4 py-2">Payment to Visa</td>
                  <td className="px-4 py-2">Credit Card Payment</td>
                  <td className="px-4 py-2">Expense</td>
                  <td className="px-4 py-2">-$100.00</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Monthly Budget Visualization */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Monthly Budget
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="spending" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tips & Tricks */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Tips & Tricks💡</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {tips.map((tip, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl"
    >
      <h4 className="text-lg font-bold text-gray-800 mb-2">
        {tip.title}
      </h4>
      <p className="text-gray-600">
        {tip.description}
      </p>
    </motion.div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Dashboard;
