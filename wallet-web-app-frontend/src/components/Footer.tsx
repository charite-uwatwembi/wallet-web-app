// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b   from-blue-600 to-white text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">.Wallet</h3>
          <p className="text-sm text-gray-100">
            Simplify your financial management with our smart wallet app. Track
            your income, expenses, and budgets effortlessly.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:underline hover:text-blue-300 transition"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/transactions"
                className="hover:underline hover:text-blue-300 transition"
              >
                Transactions
              </a>
            </li>
            <li>
              <a
                href="/budgets"
                className="hover:underline hover:text-blue-300 transition"
              >
                Budgets
              </a>
            </li>
            <li>
              <a
                href="/categories"
                className="hover:underline hover:text-blue-300 transition"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="/reports"
                className="hover:underline hover:text-blue-300 transition"
              >
                Reports
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-medium mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.954 4.569c-.885.39-1.83.654-2.825.774a4.92 4.92 0 0 0 2.163-2.723 9.863 9.863 0 0 1-3.127 1.195 4.902 4.902 0 0 0-8.36 4.467c-4.076-.2-7.688-2.156-10.096-5.134A4.822 4.822 0 0 0 .964 7.29a4.907 4.907 0 0 0 2.188 4.081 4.895 4.895 0 0 1-2.224-.616v.061a4.908 4.908 0 0 0 3.946 4.814 4.996 4.996 0 0 1-2.212.085 4.923 4.923 0 0 0 4.59 3.417A9.862 9.862 0 0 1 0 20.298 13.913 13.913 0 0 0 7.548 22c9.14 0 14.307-7.721 14.307-14.418 0-.22-.004-.438-.014-.655A10.093 10.093 0 0 0 24 4.59a9.869 9.869 0 0 1-2.046.554z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0H1.325C.595 0 0 .593 0 1.322v21.354C0 23.406.593 24 1.325 24h11.495v-9.294H9.847v-3.622h2.973V8.413c0-2.938 1.792-4.54 4.408-4.54 1.252 0 2.329.093 2.643.135v3.06l-1.815.001c-1.42 0-1.694.674-1.694 1.664v2.183h3.39l-.44 3.622h-2.949V24h5.778c.73 0 1.322-.593 1.322-1.324V1.322C24 .593 23.406 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.98 3.5c0 1.381-1.119 2.5-2.5 2.5S0 4.881 0 3.5 1.119 1 2.5 1s2.5 1.119 2.5 2.5zM.666 24h4.644V7.646H.666V24zm7.38-16.354c-1.612 0-2.664.79-3.11 1.34h-.045V7.646H0V24h4.536v-7.52c0-.466.039-.932.173-1.261.384-.932 1.258-1.903 2.724-1.903 1.924 0 2.7 1.433 2.7 3.535V24H15V15.54c0-4.584-2.448-6.714-5.71-6.714z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center border-t border-blue-700 pt-6 text-sm text-gray-800">
        © {new Date().getFullYear()} .Wallet. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
