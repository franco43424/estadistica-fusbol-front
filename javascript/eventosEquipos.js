const cargarEquipos = async () => {
    try {
        const equipos = await obtenerEquipos();
        dibujarTablaEquipos(equipos);
    } catch (error) {
        mostrarError(error);
    }
};

const dibujarTablaEquipos = (dataEquipos) => {
    const tblEquipos = document.querySelector("#tblEquipos");
    tblEquipos.innerHTML = '';

    dataEquipos.forEach(equipo => {
        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.innerText = equipo.id;

        const tdNombre = document.createElement("td");
        tdNombre.innerText = equipo.name;

        const tdAcciones = document.createElement("td");
        tdAcciones.innerHTML = `<a href='equipo.html#${equipo.id}'>Ver / Editar</a>`;

        tr.appendChild(tdId);
        tr.appendChild(tdNombre);
        tr.appendChild(tdAcciones);

        tblEquipos.appendChild(tr);
    });
};

const mostrarError = (error) => {
    const divError = document.querySelector("#divError");
    divError.style.display = "block";
    divError.innerText = error.message || "Error desconocido";
};

document.addEventListener('DOMContentLoaded', cargarEquipos);
