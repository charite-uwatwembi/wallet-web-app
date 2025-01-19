import React from "react";

const Budget: React.FC = () => {
  console.log("Budget component is rendering");
  const budgets = [
    { category: "Groceries", description: "Set a limit and get notified when you're close to it", amount: 300 },
    { category: "Eating Out", description: "Set a limit and get notified when you're close to it", amount: 300 },
    { category: "Transportation", description: "Set a limit and get notified when you're close to it", amount: 300 },
    { category: "Shopping", description: "Set a limit and get notified when you're close to it", amount: 300 },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-100 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4">Finances</h2>
          <nav className="space-y-4">
            <a href="/overview" className="flex items-center py-2 text-gray-700 hover:text-black">
              <span className="material-icons-outlined mr-2">home</span> Overview
            </a>
            <a href="/transactions" className="flex items-center py-2 text-gray-700 hover:text-black">
              <span className="material-icons-outlined mr-2">list</span> Transactions
            </a>
            <a href="/budgets" className="flex items-center py-2 text-blue-600 font-semibold">
              <span className="material-icons-outlined mr-2">filter_alt</span> Budgets
            </a>
            <a href="/reports" className="flex items-center py-2 text-gray-700 hover:text-black">
              <span className="material-icons-outlined mr-2">bar_chart</span> Reports
            </a>
            <a href="/goals" className="flex items-center py-2 text-gray-700 hover:text-black">
              <span className="material-icons-outlined mr-2">flag</span> Goals
            </a>
          </nav>
        </div>

        <div className="space-y-4">
          <a href="/profile" className="flex items-center py-2 text-gray-700 hover:text-black">
            <span className="material-icons-outlined mr-2">person</span> Profile
          </a>
          <a href="/settings" className="flex items-center py-2 text-gray-700 hover:text-black">
            <span className="material-icons-outlined mr-2">settings</span> Settings
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Budgets</h1>
          <p className="text-gray-600">Stay on top of your spending</p>
        </header>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold">General</h2>
          {budgets.map((budget, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm"
            >
              <div>
                <h3 className="text-base font-medium">{budget.category}</h3>
                <p className="text-sm text-gray-600">{budget.description}</p>
              </div>
              <span className="text-lg font-semibold">${budget.amount}</span>
            </div>
          ))}
        </section>

        <button className="mt-6 px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition">
          Create a budget
        </button>
      </main>
    </div>
  );
};

export default Budget;
