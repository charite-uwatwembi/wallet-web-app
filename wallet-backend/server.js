const app = require("./app");
const budgetRoutes = require("./routes/budgetRoutes");
const reportRoutes = require("./routes/reportRoutes");

app.use("/api/budgets", budgetRoutes);
app.use("/api/reports", reportRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});





