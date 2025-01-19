const Transaction = require("../models/Transaction");

// Create a transaction
exports.createTransaction = async (req, res) => {
  const { account, amount, type, category } = req.body;

  try {
    const transaction = await Transaction.create({
      account,
      amount,
      type,
      category,
      user: req.user.id,
    });
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all transactions for a user
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id }).populate("account");
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a transaction
exports.updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { amount, type, category } = req.body;

  try {
    const transaction = await Transaction.findOneAndUpdate(
      { _id: id, user: req.user.id },
      { amount, type, category },
      { new: true }
    );
    if (!transaction) return res.status(404).json({ error: "Transaction not found" });

    res.json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a transaction
exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await Transaction.findOneAndDelete({ _id: id, user: req.user.id });
    if (!transaction) return res.status(404).json({ error: "Transaction not found" });

    res.json({ message: "Transaction deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
