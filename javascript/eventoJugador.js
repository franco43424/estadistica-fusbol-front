const cargarJugador = async () => {
    const jugadorId = window.location.hash.substring(1);
    const respuestaServicio = await obtenerJugador(jugadorId);
    dibujarFormulario(respuestaServicio);
};

const dibujarFormulario = (jugador) => {
    const missigno = document.querySelector('input[name="missigno"]');
    missigno.value = jugador.id;

    const missignoEliminar = document.querySelector('input[name="missignoEliminar"]');
    missignoEliminar.value = jugador.id;

    const h1NombreJugador = document.querySelector('#h1NombreJugador');
    h1NombreJugador.innerText = `Página de: ${jugador.name}`
    
    const txtJugador = document.querySelector('input[name="txtJugador"]');
    txtJugador.value = jugador.name;

    const cmbPais = document.querySelector('select[name="cmbPais"]');
    cmbPais.value = jugador.country;

    const calendarPicker = document.querySelector('input[name="txtNacimiento"]');
    calendarPicker.value = parseDate(jugador.birth_at)
}

const parseDate = (x) => {
//    [xx,xx,xxxx] = [xx-xx-xxxx]
    date = x.split("-");
    return date = `${date[2]}-${date[1]}-${date[0]}`;
}

const enviarJugador = async (event) => {
    event.preventDefault();

    const formulario = document.querySelector("#formularioJugador");
    const datosExtraidos = new FormData(formulario);
    const payload = Object.fromEntries(datosExtraidos.entries());
    await actualizarJugador(payload.missigno,{
        name: payload.txtJugador,
        country: payload.cmbPais,
        birth_at: payload.txtNacimiento
    });
};

const formulario = document.querySelector("#formularioJugador");
formulario.addEventListener("submit", enviarJugador);

const eliminarJugadorEvento = async (event) => {
    event.preventDefault();

    const confirmaEliminar = confirm("¿Está seguro de eliminar al jugador?");
    if (confirmaEliminar) {
        const formulario = document.querySelector("#formularioEliminar");
        const datosExtraidos = new FormData(formulario);
        const payload = Object.fromEntries(datosExtraidos.entries());
        console.table(payload);
        await eliminarJugador(payload.missignoEliminar);
    }
};

const formularioEliminar = document.querySelector("#formularioEliminar");
formularioEliminar.addEventListener("submit", eliminarJugadorEvento);

document.addEventListener('DOMContentLoaded', cargarJugador);