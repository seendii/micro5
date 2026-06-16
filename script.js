function updateMetrics() {

    let cpu = Math.floor(Math.random() * 100);
    let memory = Math.floor(Math.random() * 100);
    let disk = Math.floor(Math.random() * 100);

    document.getElementById("cpu").innerText = cpu + "%";
    document.getElementById("memory").innerText = memory + "%";
    document.getElementById("disk").innerText = disk + "%";
}

updateMetrics();

setInterval(updateMetrics, 3000);
