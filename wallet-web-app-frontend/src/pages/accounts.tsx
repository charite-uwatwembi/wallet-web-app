import React from 'react';
import { FiUser, FiBell, FiMoon } from 'react-icons/fi';

const Settings = () => {
  return (
    <div className="p-6 md:px-32">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="space-y-6">
        {/* Accounts */}
        <div className="border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Accounts</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FiUser className="text-gray-500" />
              <span>Main Account</span>
            </div>
            <button className="text-red-500">Remove</button>
          </div>
          <button className="text-blue-500 mt-2">Add Account</button>
        </div>

        {/* Notifications */}
        <div className="border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Notifications</h2>
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <input type="checkbox" className="toggle-input" />
          </div>
        </div>

        {/* Theme */}
        <div className="border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Theme</h2>
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <FiMoon className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
