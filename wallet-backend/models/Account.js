const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  balance: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Account", AccountSchema);
