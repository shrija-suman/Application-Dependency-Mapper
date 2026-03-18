const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const FILE = "data.json";

// Get all dependencies
app.get("/dependencies", (req, res) => {
    const data = JSON.parse(fs.readFileSync(FILE));
    res.json(data);
});

// Add dependency
app.post("/add", (req, res) => {
    const { source, target } = req.body;

    let data = JSON.parse(fs.readFileSync(FILE));
    data.push({ source, target });

    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
    res.send("Dependency added");
});

// Impact analysis
app.get("/impact/:service", (req, res) => {
    const service = req.params.service;
    const data = JSON.parse(fs.readFileSync(FILE));

    let impacted = data
        .filter(d => d.source === service)
        .map(d => d.target);

    res.json({ service, impacted });
});

app.listen(5000, () => console.log("Server running on port 5000"));