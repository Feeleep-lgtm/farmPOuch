const dotenv = require("dotenv");
const app = require("./src/app");
const PORT = process.env.PORT || 3000;

// Configuring dotenv
dotenv.config();

//Initialization of Server
app.listen(PORT, () => {
  console.log(`FarmPouch server is running at port ${PORT}`);
});
