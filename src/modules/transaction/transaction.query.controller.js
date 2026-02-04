const pool = require("../../config/db");

exports.getAllTransactions = async (req, res) => {
  const [rows] = await pool.query(
    "SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC",
    [req.userId]
  );
  res.json(rows);
};

exports.getFilteredTransactions = async (req, res) => {
  const { type } = req.query;
  const [rows] = await pool.query(
    "SELECT * FROM transactions WHERE user_id = ? AND type = ? ORDER BY created_at DESC",
    [req.userId, type]
  );
  res.json(rows);
};