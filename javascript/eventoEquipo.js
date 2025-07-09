const mostrarError = (error) => {
    const divError = document.querySelector("#divError");
    divError.style.display = "block";
    divError.innerText = error.message || "Error desconocido";
};

const dibujarFormulario = (equipo) => {
    document.querySelector('input[name="missigno"]').value = equipo.id;
    document.querySelector('input[name="txtEquipo"]').value = equipo.name;
    document.querySelector('input[name="txtLeague"]').value = equipo.league;
};

const cargarEquipo = async () => {
    const equipoId = window.location.hash.substring(1);
    try {
        const equipo = await obtenerEquipo(equipoId);
        dibujarFormulario(equipo);
    } catch (error) {
        mostrarError(error);
    }
};

const enviarEquipo = async (event) => {
    event.preventDefault();

    const formulario = document.querySelector("#formularioEquipo");
    const datosExtraidos = new FormData(formulario);
    const payload = Object.fromEntries(datosExtraidos.entries());

    try {
        await actualizarEquipo(payload.missigno, {
            name: payload.txtEquipo,
            league: payload.txtLeague
        });
        window.location.href = "listadoEquipos.html";
    } catch (error) {
        mostrarError(error);
    }
};

const eliminarEquipoEvento = async (event) => {
    event.preventDefault();

    const confirmaEliminar = confirm("¿Está seguro de eliminar el equipo?");
    if (confirmaEliminar) {
        const formulario = document.querySelector("#formularioEliminar");
        const datosExtraidos = new FormData(formulario);
        const payload = Object.fromEntries(datosExtraidos.entries());

        try {
            await eliminarEquipo(payload.missignoEliminar);
            window.location.href = "listadoEquipos.html";
        } catch (error) {
            mostrarError(error);  
        }
    }
};


document.querySelector("#formularioEquipo").addEventListener("submit", enviarEquipo);
document.querySelector("#formularioEliminar").addEventListener("submit", eliminarEquipoEvento);
document.addEventListener('DOMContentLoaded', cargarEquipo);
