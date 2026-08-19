const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "./config.env"),
});

const connectDB = require("./config/db");
const app = require("./app");

const PORT = process.env.PORT || 5000;



const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
     console.log(`http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:");
    console.error(error.message);
    process.exit(1);
  }
};

startServer();