const pool = require("../../config/db");

exports.createTransaction = async (req, res) => {
  const { type, amount, description } = req.body;

  await pool.query(
    "INSERT INTO transactions (user_id, type, amount, description) VALUES (?, ?, ?, ?)",
    [req.userId, type, amount, description]
  );

  res.json({ message: "Transaction created" });
};