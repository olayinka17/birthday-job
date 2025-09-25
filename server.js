const app = require("./app");
const connectToDB = require("./db");
require("./birthday");
require("dotenv").config();

const PORT = process.env.PORT;
connectToDB();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
