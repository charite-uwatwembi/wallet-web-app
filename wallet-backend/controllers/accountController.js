const Account = require("../models/Account");

// Create an account
exports.createAccount = async (req, res) => {
  const { name, balance } = req.body;
  try {
    const account = await Account.create({ name, balance, user: req.user.id });
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all accounts for the logged-in user
exports.getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({ user: req.user.id });
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an account
exports.updateAccount = async (req, res) => {
  const { id } = req.params;
  const { name, balance } = req.body;

  try {
    const account = await Account.findOneAndUpdate(
      { _id: id, user: req.user.id },
      { name, balance },
      { new: true }
    );
    if (!account) return res.status(404).json({ error: "Account not found" });

    res.json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an account
exports.deleteAccount = async (req, res) => {
  const { id } = req.params;

  try {
    const account = await Account.findOneAndDelete({ _id: id, user: req.user.id });
    if (!account) return res.status(404).json({ error: "Account not found" });

    res.json({ message: "Account deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
