import React, { useState } from "react";

const Reports: React.FC = () => {
  const [selectedAccount, setSelectedAccount] = useState<string>("Checking");
  const [reportType, setReportType] = useState<string>("Income statement");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-100 p-6">
        <nav className="space-y-4">
          <a href="/dashboard" className="block py-2 text-gray-700 hover:text-black">
            Dashboard
          </a>
          <a href="/transactions" className="block py-2 text-gray-700 hover:text-black">
            Transactions
          </a>
          <a href="/invoices" className="block py-2 text-gray-700 hover:text-black">
            Invoices
          </a>
          <a href="/balances" className="block py-2 text-gray-700 hover:text-black">
            Balances
          </a>
          <a href="/reports" className="block py-2 text-blue-600 font-semibold">
            Reports
          </a>
          <a href="/settings" className="block py-2 text-gray-700 hover:text-black">
            Settings
          </a>
        </nav>

        <button className="mt-8 w-full px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition">
          New report
        </button>

        <div className="mt-8 space-y-4 text-sm text-gray-600">
          <a href="#" className="block hover:text-black">
            Help Center
          </a>
          <a href="#" className="block hover:text-black">
            Community
          </a>
          <a href="#" className="block hover:text-black">
            API Documentation
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 mb-6">
        <h1 className="text-2xl font-bold mb-4">Create a new report</h1>
        <p className="text-gray-600 mb-8">
          Select the time range and accounts you’d like to include in this report. You can also
          choose the type of report you’d like to generate.
        </p>

        {/* Time Range */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Time range</h2>
          <div className="flex gap-2 flex-wrap">
            {["Custom date range", "This month", "Last month", "This quarter", "Last quarter", "This year", "Last year"].map(
              (range) => (
                <button
                  key={range}
                  className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-sm"
                >
                  {range}
                </button>
              )
            )}
          </div>
        </div>

        {/* Accounts */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Accounts</h2>
          {["Checking • 1234", "Savings • 5678", "Credit • 9012"].map((account) => (
            <label key={account} className="block mb-2 text-sm">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedAccount === account}
                onChange={() => setSelectedAccount(account)}
              />
              {account}
            </label>
          ))}
        </div>

        {/* Report Type */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Report type</h2>
          {[
            "Income statement",
            "Balance sheet",
            "Cash flow statement",
            "Trial balance",
            "General ledger",
          ].map((type) => (
            <label key={type} className="block mb-2 text-sm">
              <input
                type="radio"
                name="report-type"
                className="mr-2"
                checked={reportType === type}
                onChange={() => setReportType(type)}
              />
              {type}
            </label>
          ))}
        </div>

        <button className="mt-4 px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition">
          Create report
        </button>
      </main>
    </div>
  );
};

export default Reports;
