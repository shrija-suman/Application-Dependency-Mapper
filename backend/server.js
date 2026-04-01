// server.js
const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// In-memory dependencies
let dependencies = [
  { name: "Frontend", type: "UI", dependsOn: ["Backend"] },
  { name: "Backend", type: "Service", dependsOn: ["Database"] },
  { name: "Database", type: "DB", dependsOn: [] },
  { name: "Auth Service", type: "Service", dependsOn: ["Database"] },
  { name: "Cache", type: "Service", dependsOn: ["Database"] },
];

// Home route for testing
app.get("/health", (req, res) => {
  res.send("Backend is running!");
});

// Get all dependencies
app.get("/dependencies", (req, res) => {
  res.json(dependencies);
});

// Add a dependency
app.post("/dependencies", (req, res) => {
  const { name, type, dependsOn } = req.body;
  if (!name || !type) return res.status(400).json({ message: "Name and type required" });
  dependencies.push({ name, type, dependsOn: dependsOn || [] });
  res.json({ message: `${name} added successfully!` });
});

// Delete a dependency
app.delete("/dependencies/:name", (req, res) => {
  const nameToDelete = req.params.name;
  const exists = dependencies.find(d => d.name === nameToDelete);
  if (!exists) return res.status(404).json({ message: `${nameToDelete} not found` });

  dependencies = dependencies.filter(d => d.name !== nameToDelete);
  dependencies.forEach(d => d.dependsOn = d.dependsOn.filter(dep => dep !== nameToDelete));
  res.json({ message: `${nameToDelete} deleted successfully!` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});