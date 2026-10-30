require("dotenv").config();
const app = require("./src/app");

// first commit

app.listen(process.env.PORT || 6000, () => {
  console.log("Server running on port", process.env.PORT || 6000);
});
