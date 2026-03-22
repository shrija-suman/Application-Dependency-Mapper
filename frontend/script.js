function loadData() {
  fetch("http://localhost:8080/dependencies")
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").innerText =
        JSON.stringify(data, null, 2);
    });
}