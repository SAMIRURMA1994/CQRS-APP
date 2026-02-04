const service = require("./auth.service");

exports.signup = async (req, res) => {
  const user = await service.signup(req.body);
  res.json({ message: "Signup successful", user });
};

exports.login = async (req, res) => {
  const token = await service.login(req.body.email, req.body.password);
  res.json(token);
};