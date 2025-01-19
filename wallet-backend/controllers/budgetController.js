const Budget = require("../models/Budget");

// Create a budget
exports.createBudget = async (req, res) => {
  const { name, amount, category, endDate } = req.body;

  try {
    const budget = await Budget.create({
      name,
      amount,
      category,
      endDate,
      user: req.user.id,
    });
    res.status(201).json(budget);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all budgets for the logged-in user
exports.getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({ user: req.user.id });
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a budget
exports.updateBudget = async (req, res) => {
  const { id } = req.params;
  const { name, amount, category, endDate } = req.body;

  try {
    const budget = await Budget.findOneAndUpdate(
      { _id: id, user: req.user.id },
      { name, amount, category, endDate },
      { new: true }
    );
    if (!budget) return res.status(404).json({ error: "Budget not found" });

    res.json(budget);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a budget
exports.deleteBudget = async (req, res) => {
  const { id } = req.params;

  try {
    const budget = await Budget.findOneAndDelete({ _id: id, user: req.user.id });
    if (!budget) return res.status(404).json({ error: "Budget not found" });

    res.json({ message: "Budget deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
