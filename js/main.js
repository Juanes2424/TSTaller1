import { series } from "./data.js";
function populateTable() {
    const tableBody = document.getElementById("table-body");
    if (!tableBody)
        return;
    let avg = 0;
    let count = 0;
    series.forEach((item, index) => {
        const row = document.createElement("tr");
        const id = document.createElement("td");
        id.textContent = (index + 1).toString();
        row.appendChild(id);
        const titulo = document.createElement("td");
        titulo.textContent = item.title;
        row.appendChild(titulo);
        const canal = document.createElement("td");
        canal.textContent = item.network;
        row.appendChild(canal);
        const temp = document.createElement("td");
        temp.textContent = item.seasons.toString();
        row.appendChild(temp);
        tableBody.appendChild(row);
        avg += item.seasons;
        count++;
    });
    let estadistica = document.getElementById("Promedio");
    if (estadistica) {
        estadistica.innerText = "Seasons average: " + String(avg / count);
    }
}
window.onload = populateTable;
