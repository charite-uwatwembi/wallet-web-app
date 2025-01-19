import React from "react";
import { motion } from "framer-motion";

const Categories: React.FC = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Categories</h1>
      <div className="card">
        <h2>Manage Categories</h2>
        <p>Organize your expenses with categories and subcategories.</p>
      </div>
    </motion.div>
  );
};

export default Categories;
