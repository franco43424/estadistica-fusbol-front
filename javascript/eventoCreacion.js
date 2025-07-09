const enviarJugador = async (event) => {
    event.preventDefault();

    const formulario = document.querySelector("#formularioJugador");
    const datosExtraidos = new FormData(formulario);
    const payload = Object.fromEntries(datosExtraidos.entries());
    await guardarJugador({
        name: payload.txtJugador,
        country: payload.cmbPais,
        birth_at: payload.txtNacimiento,
        equipo_id: payload.cmbEquipo
    });
};

const formulario = document.querySelector("#formularioJugador");
formulario.addEventListener("submit", enviarJugador);







document.addEventListener('DOMContentLoaded', () => {
    llenarComboEquipos('select[name="cmbEquipo"]');
});






