const enviarEquipo = async (event) => {
    event.preventDefault();

    const formulario = document.querySelector("#formularioEquipo");
    const datosExtraidos = new FormData(formulario);
    const payload = Object.fromEntries(datosExtraidos.entries());

    try {
        await guardarEquipo({
            name: payload.txtEquipo,
            league: payload.txtLeague  // 👈 Este es el campo que te pide el backend
        });
        window.location.href = "listadoEquipos.html";
    } catch (error) {
        mostrarError(error);
    }
};


const mostrarError = (error) => {
    const divError = document.querySelector("#divError");
    divError.style.display = "block";
    divError.innerText = error.message || "Error desconocido";
};

const formulario = document.querySelector("#formularioEquipo");
formulario.addEventListener("submit", enviarEquipo);
