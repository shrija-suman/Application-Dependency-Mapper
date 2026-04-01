const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

// Sample dependency data
let dependencies = [
  { name: "Frontend", type: "UI", dependsOn: ["Backend"] },
  { name: "Backend", type: "Service", dependsOn: ["Database", "Auth Service"] },
  { name: "Database", type: "DB", dependsOn: [] },
  { name: "Auth Service", type: "Service", dependsOn: ["Database"] }
];

// API Endpoints
app.get('/dependencies', (req, res) => {
  res.json(dependencies);
});

app.get('/health', (req, res) => {
  res.json({ status: "OK" });
});

// Optional: add new dependency
app.post('/dependencies', (req, res) => {
  const { name, type, dependsOn } = req.body;
  if(!name || !type || !dependsOn) return res.status(400).json({ error: "Missing fields" });
  dependencies.push({ name, type, dependsOn });
  res.json({ message: "Dependency added", dependencies });
});

// Serve frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});