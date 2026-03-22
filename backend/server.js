const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8080;

// Load dummy data (simulating services)
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
// Home route
app.get("/", (req, res) => {
  res.send("Backend - Application Dependency Mapper Running 🦄🪽🍿🧁🚀");
});

// Get dependencies
app.get("/dependencies", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});