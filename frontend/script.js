const API = "http://localhost:5000";

// ➕ Add dependency
function addDependency() {
    const source = document.getElementById("source").value;
    const target = document.getElementById("target").value;

    fetch(`${API}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ source, target })
    })
    .then(() => loadDependencies());
}

// 📋 Load from backend
function loadDependencies() {
    fetch(`${API}/dependencies`)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("list");
            list.innerHTML = "";

            data.forEach(dep => {
                const li = document.createElement("li");
                li.textContent = `${dep.source} → ${dep.target}`;
                list.appendChild(li);
            });
        });
}

// 🔥 Impact Analysis (from backend)
function findImpact() {
    const service = document.getElementById("impactService").value;

    fetch(`${API}/impact/${service}`)
        .then(res => res.json())
        .then(data => {
            alert(`If ${data.service} fails, it affects: ${data.impacted.join(", ")}`);
        });
}

// Load data on page start
window.onload = loadDependencies;