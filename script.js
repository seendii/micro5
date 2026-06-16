function updateMetrics() {

    const cpu = Math.floor(Math.random() * 100);
    const memory = Math.floor(Math.random() * 100);
    const disk = Math.floor(Math.random() * 100);

    document.getElementById("cpu").innerText = cpu + "%";
    document.getElementById("memory").innerText = memory + "%";
    document.getElementById("disk").innerText = disk + "%";

    const nginx = document.getElementById("nginx");

    if (Math.random() > 0.1) {
        nginx.innerText = "🟢 Running";
        nginx.style.color = "green";
    } else {
        nginx.innerText = "🔴 Stopped";
        nginx.style.color = "red";
    }
}

updateMetrics();

setInterval(updateMetrics, 3000);
