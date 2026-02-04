const router = require("express").Router();
const auth = require("../../middlewares/auth.middleware");

const command = require("./transaction.command.controller");
const query = require("./transaction.query.controller");

router.post("/", auth, command.createTransaction);
router.get("/", auth, query.getAllTransactions);
router.get("/filter", auth, query.getFilteredTransactions);

module.exports = router;