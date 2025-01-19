const express = require("express");
const {
  getReportByCategory,
  getReportByAccount,
  getGeneralReport,
} = require("../controllers/reportController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/category", authMiddleware, getReportByCategory);
router.get("/account", authMiddleware, getReportByAccount);
router.get("/overview", authMiddleware, getGeneralReport);

module.exports = router;
