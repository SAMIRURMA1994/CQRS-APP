const pool = require("../../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async ({ name, email, password }) => {
  const hashed = await bcrypt.hash(password, 10);
  const [result] = await pool.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashed]
  );
  return { id: result.insertId, name, email };
};

exports.login = async (email, password) => {
  const [[user]] = await pool.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  if (!user) throw new Error("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { userId: user.id },
    "supersecret",
    { expiresIn: "1d" }
  );
  return { token };
};