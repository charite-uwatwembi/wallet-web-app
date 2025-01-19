import React, { useState } from 'react';
import { FiPlus, FiEdit, FiTrash } from 'react-icons/fi';

const Categories = () => {
  const [categories, setCategories] = useState([
    { name: 'Groceries', subcategories: ['Fruits', 'Vegetables'] },
    { name: 'Transportation', subcategories: ['Gas', 'Public Transport'] },
  ]);
  const [showModal, setShowModal] = useState(false);

  const handleAddCategory = () => {
    // Logic to add category
    setShowModal(false);
  };

  return (
    <div className="p-6 md:px-32">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-semibold flex justify-between items-center">
              {category.name}
              <div className="flex space-x-2">
                <FiEdit className="text-blue-500 cursor-pointer" />
                <FiTrash className="text-red-500 cursor-pointer" />
              </div>
            </h2>
            <ul className="mt-2 text-sm text-gray-600">
              {category.subcategories.map((sub, subIndex) => (
                <li key={subIndex}>- {sub}</li>
              ))}
            </ul>
          </div>
        ))}
        <button
          onClick={() => setShowModal(true)}
          className="border-dashed border-2 border-gray-300 flex justify-center items-center rounded-lg p-4 text-gray-500 hover:border-blue-500 hover:text-blue-500"
        >
          <FiPlus className="mr-2" /> Add Category
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Add New Category</h2>
            <input
              type="text"
              placeholder="Category Name"
              className="w-full p-2 border rounded mb-4"
            />
            <button
              onClick={handleAddCategory}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="ml-4 text-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
