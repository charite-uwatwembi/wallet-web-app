const Account = require("../models/Account");

exports.createAccount = async (req, res) => {
  const { name, balance } = req.body;
  try {
    const account = await Account.create({ name, balance, user: req.user.id });
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// more CRUD operations
