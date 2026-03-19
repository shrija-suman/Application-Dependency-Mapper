const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let dependencies = [];

// Add dependency
app.post("/add", (req, res) => {
    const { source, target } = req.body;
    dependencies.push({ source, target });
    res.json({ message: "Added successfully" });
});

// Get all dependencies
app.get("/all", (req, res) => {
    res.json(dependencies);
});

// 🔥 Chain Impact Logic (IMPORTANT)
app.get("/impact/:service", (req, res) => {
    const service = req.params.service;
    let visited = new Set();

    function dfs(current) {
        dependencies.forEach(dep => {
            if (dep.source === current && !visited.has(dep.target)) {
                visited.add(dep.target);
                dfs(dep.target);
            }
        });
    }

    dfs(service);

    res.json({ impacted: Array.from(visited) });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});