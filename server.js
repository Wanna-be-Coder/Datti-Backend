const express = require("express");
const app = express();
const { PORT } = require("./config/environmentVariables");
const connectToDatabase = require("./config/database"); // Import the database configuration
require("dotenv").config();

// Connect to MongoDB
connectToDatabase()
  .then(() => {
    // ... (other middleware and routes)

    console.log("Database found");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
