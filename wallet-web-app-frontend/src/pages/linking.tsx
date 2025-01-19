import React from 'react';
// import { FiChevronDown } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';
const ExpenseLinking = () => {
  const expenses = [
    { id: 1, name: 'Grocery Shopping', amount: '$50', category: 'Uncategorized' },
    { id: 2, name: 'Bus Ticket', amount: '$3', category: 'Uncategorized' },
  ];

  return (
    <div className="p-6 md:px-32">
      <h1 className="text-2xl font-bold mb-4">Link Expenses</h1>
      <table className="w-full border">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="text-left p-2">Expense</th>
            <th className="text-left p-2">Amount</th>
            <th className="text-left p-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="border-b">
              <td className="p-2">{expense.name}</td>
              <td className="p-2">{expense.amount}</td>
              <td className="p-2">
                <div className="relative">
                  <button className="flex items-center bg-gray-200 rounded px-2 py-1 text-sm">
                    {expense.category}
                    <FiChevronDown className="ml-2" />
                  </button>
                  {/* Add dropdown logic */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseLinking;
