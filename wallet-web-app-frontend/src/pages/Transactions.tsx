import React from "react";

const Transactions: React.FC = () => {
  const transactions = [
    {
      date: "Today",
      items: [
        { id: 123, description: "Invoice #123", amount: "$2,000" },
        { id: 122, description: "Invoice #122", amount: "$1,000" },
      ],
    },
    {
      date: "Yesterday",
      items: [
        { id: 121, description: "Invoice #121", amount: "$5,000" },
        { id: 120, description: "Invoice #120", amount: "$2,000" },
        { id: 119, description: "Invoice #119", amount: "$3,000" },
      ],
    },
  ];

  return (
    <div className="sm:px-32 p-6 space-y-6">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <button className="px-4 py-2 bg-gray-100 text-sm font-medium rounded-lg hover:bg-gray-200 transition">
          Export
        </button>
      </div>

      {/* Transaction Groups */}
      {transactions.map((group) => (
        <div key={group.date} className="space-y-4">
          {/* Date Header */}
          <h2 className="text-lg font-semibold">{group.date}</h2>

          {/* Transaction Items */}
          {group.items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition hover:bg-gray-100"
            >
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="bg-gray-200 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16l-4-4m0 0l4-4m-4 4h16"
                    />
                  </svg>
                </div>

                {/* Transaction Info */}
                <div>
                  <p className="text-sm font-medium">{item.description}</p>
                  <p className="text-sm text-gray-500">{item.amount}</p>
                </div>
              </div>

              {/* Chevron Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Transactions;
