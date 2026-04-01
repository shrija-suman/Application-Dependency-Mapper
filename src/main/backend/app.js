const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

const config = require(path.join(__dirname, '../../config/config.json'));
const PORT = config.port;
const DEPENDENCY_FILE = config.dependencyFile;

// Read dependencies
app.get("/dependencies", (req, res) => {
    fs.readFile(DEPENDENCY_FILE, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error reading file" });
        }
        res.json(JSON.parse(data));
    });
});

// Health check
app.get("/health", (req, res) => {
    res.json({ status: "UP" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
