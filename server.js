const express = require("express");
const connection = require("./db");
require("dotenv").config();
const app = express();

// Middleware
app.use(express.json());
// Define the port
const port = process.env.PORT;

// Basic route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
