// src/components/Navigation.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <button
            className="text-gray-500 hover:text-gray-900 lg:hidden"
            onClick={toggleSidebar}
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <Link to="/" className="text-2xl font-bold text-blue-600 ml-3 font-mono">
            .Wallet
          </Link>
        </div>
        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 transition duration-200"
          >
            Dashboard
          </Link>
          <Link
            to="/transactions"
            className={`text-gray-600 hover:text-blue-600 transition duration-200 ${
              location.pathname === "/transactions" ? "active-link" : ""
            }`}
          >
            Transactions
          </Link>
          <Link
            to="/reports"
            className={`text-gray-600 hover:text-blue-600 transition duration-200 ${
              location.pathname === "/reports" ? "active-link" : ""
            }`}
          >
            Reports
          </Link>
          <Link
            to="/budgets"
            className={`text-gray-600 hover:text-blue-600 transition duration-200 ${
              location.pathname === "/budgets" ? "active-link" : ""
            }`}
          >
            Budgets
          </Link>
          <Link
  to="/accounts"
  className={`text-gray-600 hover:text-blue-600 transition duration-200 flex  ${
    location.pathname === "/accounts" ? "active-link" : ""
  }`}
>
  Accounts
  <img
    src="/boy.jpg" 
    alt=""
    className="w-8 h-8 p-1 ml-2 rounded-full border-2 border-blue-600"
  />
</Link>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 bg-blue-600 text-white w-64 z-50 shadow-lg flex flex-col p-6"
          >
            <button
              onClick={toggleSidebar}
              className="self-end mb-6 text-gray-200 hover:text-white"
            >
              {/* Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Link
              to="/dashboard"
              className="mb-4 text-lg hover:text-gray-300 transition"
            >
              Dashboard
            </Link>
            <Link
              to="/transactions"
              className="mb-4 text-lg hover:text-gray-300 transition"
            >
              Transactions
            </Link>
            <Link
              to="/reports"
              className="mb-4 text-lg hover:text-gray-300 transition"
            >
              Reports
            </Link>
            <Link
              to="/budgets"
              className="mb-4 text-lg hover:text-gray-300 transition"
            >
              Budgets
            </Link>
            <Link
              to="/accounts"
              className="text-lg hover:text-gray-300 transition"
            >
              Accounts
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
