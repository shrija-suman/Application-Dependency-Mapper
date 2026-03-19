const API = "http://localhost:5000";

// Add dependency
async function addDependency() {
    const source = document.getElementById("source").value;
    const target = document.getElementById("target").value;

    if (!source || !target) {
        alert("Enter both fields");
        return;
    }

    await fetch(API + "/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source, target })
    });

    loadDependencies();
}

// Show dependencies
async function loadDependencies() {
    const res = await fetch(API + "/all");
    const data = await res.json();

    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(dep => {
        const li = document.createElement("li");
        li.textContent = `${dep.source} → ${dep.target}`;
        list.appendChild(li);
    });
}

// Clear all (frontend only)
function clearAll() {
    document.getElementById("list").innerHTML = "";
}

// 🔥 Chain Impact (calls backend)
async function findImpact() {
    const service = document.getElementById("impactService").value;

    const res = await fetch(API + "/impact/" + service);
    const data = await res.json();

    if (data.impacted.length === 0) {
        alert("No impacted services");
    } else {
        alert("Impacted: " + data.impacted.join(", "));
    }
}