const cargarJugadores = async () => {
    const respuestaServicio = await obtenerJugadores();
    dibujarTablaJugadores(respuestaServicio);
};

const dibujarTablaJugadores = (dataJugadores) => {
    const tblJugadores = document.querySelector("#tblJugadores");
    tblJugadores.innerHTML = '';

    dataJugadores.forEach(jugador => {
        const tr = document.createElement("tr");
        const tdId = document.createElement("td");
        const tdNombre = document.createElement("td");
        const tdPais = document.createElement("td");
        const tdNacimiento = document.createElement("td");
        const tdAcciones = document.createElement("td");

        tdId.innerText = jugador.id;
        tdNombre.innerText = jugador.name;
        tdPais.innerText = jugador.country;
        tdNacimiento.innerText = jugador.birth_at;
        tdAcciones.innerHTML = `<a href='jugador.html#${jugador.id}'>Ir a página personal</a>`;

        tr.appendChild(tdId);
        tr.appendChild(tdNombre);
        tr.appendChild(tdPais);
        tr.appendChild(tdNacimiento);
        tr.appendChild(tdAcciones);

        tblJugadores.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', cargarJugadores);