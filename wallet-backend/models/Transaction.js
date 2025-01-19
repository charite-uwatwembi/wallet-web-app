const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  account: { type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["income", "expense"], required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
