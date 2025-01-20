import React from "react";

const Transactions: React.FC = () => {
  const transactions = [
    {
      date: "Jun 23, 2023",
      type: "Payment",
      name: "Carter Johnson",
      amount: "$1,000",
      fee: "$30",
      net: "$970",
      balance: "$5,420",
    },
    {
      date: "Jun 21, 2023",
      type: "Payment",
      name: "Carter Johnson",
      amount: "$1,000",
      fee: "$30",
      net: "$970",
      balance: "$5,420",
    },
    {
      date: "Jun 21, 2023",
      type: "Payment",
      name: "Carter Johnson",
      amount: "$1,000",
      fee: "$30",
      net: "$970",
      balance: "$5,420",
    },
    {
      date: "Jun 21, 2023",
      type: "Payment",
      name: "Carter Johnson",
      amount: "$1,000",
      fee: "$30",
      net: "$970",
      balance: "$5,420",
    },
    {
      date: "Jun 21, 2023",
      type: "Payment",
      name: "Carter Johnson",
      amount: "$1,000",
      fee: "$30",
      net: "$970",
      balance: "$5,420",
    },
    {
      date: "Jun 21, 2023",
      type: "Payment",
      name: "Carter Johnson",
      amount: "$1,000",
      fee: "$30",
      net: "$970",
      balance: "$5,420",
    },
    
  ];

  return (
    <div className="flex flex-col mb-80 sm:mb-12 md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <p className="text-gray-600 font-medium flex items-center">
            <svg
              className="h-5 w-5 text-gray-600 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M3 3v17a1 1 0 0 0 1 1h17v-2H5V3H3z"></path>
              <path d="M15.293 14.707a.999.999 0 0 0 1.414 0l5-5-1.414-1.414L16 12.586l-2.293-2.293a.999.999 0 0 0-1.414 0l-5 5 1.414 1.414L13 12.414l2.293 2.293z"></path>
            </svg>
            Dashboard
          </p>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg font-medium"
              >
                <svg
                  className="h-5 w-5 text-white mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z"></path>
                  <path d="M6 14h6v2H6z"></path>
                </svg>
                Transactions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-lg font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H3"
                  />
                </svg>
                Reports
              </a>
            </li>
          </ul>
        </nav>
        <div className="px-6 py-4 space-y-2 text-sm text-gray-500">
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 3h12M6 7h12M6 11h12M6 15h12M6 19h12"
              />
            </svg>
            Settings
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <h1 className="text-2xl md:text-3xl font-bold">Transactions</h1>
          <button className="px-4 py-2 bg-gray-200 text-sm font-medium rounded-lg hover:bg-gray-300 transition">
            Add a transaction
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for transactions"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Transactions Table */}
        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="px-6 py-3 font-medium text-sm">Date</th>
                <th className="px-6 py-3 font-medium text-sm">Type</th>
                <th className="px-6 py-3 font-medium text-sm">Name</th>
                <th className="px-6 py-3 font-medium text-sm">Amount</th>
                <th className="px-6 py-3 font-medium text-sm">Fee</th>
                <th className="px-6 py-3 font-medium text-sm">Net</th>
                <th className="px-6 py-3 font-medium text-sm">Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {transaction.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {transaction.fee}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {transaction.net}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {transaction.balance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Transactions;
