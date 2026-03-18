let dependencies = [];

function addDependency() {
    const source = document.getElementById("source").value;
    const target = document.getElementById("target").value;

    if (source && target) {
        dependencies.push({ source, target });
        displayDependencies();
    }
}

function displayDependencies() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    dependencies.forEach(dep => {
        const li = document.createElement("li");
        li.textContent = `${dep.source} → ${dep.target}`;
        list.appendChild(li);
    });
    function clearAll() {
    dependencies = [];
    displayDependencies();
}
}