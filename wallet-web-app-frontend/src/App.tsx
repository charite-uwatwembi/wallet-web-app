import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/index.css'; 
import Navigation from "./components/Navigation.tsx";

import Dashboard from "./pages/Dashboard.tsx";
import Transactions from "./pages/Transactions.tsx";
import Reports from "./pages/Reports.tsx";
import Budget from "./pages/Budget.tsx";
import Categories from "./pages/Categories.tsx";

const App: React.FC = () => {
  return (
    <Router>
      {/* Add Navigation here */}
      <Navigation />
      {/* Main content */}
      <main className=" p-4"></main>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/budgets" element={<Budget />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
};

export default App;
