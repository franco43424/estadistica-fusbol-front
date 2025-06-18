const cargarJugador = async () => {
    const jugadorId = window.location.hash.substring(1);
    const respuestaServicio = await obtenerJugador(jugadorId);
    dibujarTablaJugador(respuestaServicio);
};

const dibujarTablaJugador = (jugador) => {
    const tblJugador = document.querySelector("#tblJugador");
    tblJugador.innerHTML = '';

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
    tdAcciones.innerHTML = `<a href='listadoJugadores.html'>Ir a listado general</a>`;

    tr.appendChild(tdId);
    tr.appendChild(tdNombre);
    tr.appendChild(tdPais);
    tr.appendChild(tdNacimiento);
    tr.appendChild(tdAcciones);

    tblJugador.appendChild(tr);
}

document.addEventListener('DOMContentLoaded', cargarJugador);