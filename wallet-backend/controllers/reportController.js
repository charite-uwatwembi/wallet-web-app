const Transaction = require("../models/Transaction");

// Generate a report by category
exports.getReportByCategory = async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const report = await Transaction.aggregate([
      { $match: { user: req.user._id, createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) } } },
      { $group: { _id: "$category", totalAmount: { $sum: "$amount" } } },
    ]);

    res.json(report);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Generate a report by account
exports.getReportByAccount = async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const report = await Transaction.aggregate([
      { $match: { user: req.user._id, createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) } } },
      { $group: { _id: "$account", totalAmount: { $sum: "$amount" } } },
    ]);

    res.json(report);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// General overview
exports.getGeneralReport = async (req, res) => {
  try {
    const totalIncome = await Transaction.aggregate([
      { $match: { user: req.user._id, type: "income" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const totalExpense = await Transaction.aggregate([
      { $match: { user: req.user._id, type: "expense" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    res.json({
      totalIncome: totalIncome[0]?.total || 0,
      totalExpense: totalExpense[0]?.total || 0,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
