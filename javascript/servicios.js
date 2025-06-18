const endpointBase = "http://127.0.0.1:8787/jugadores";

const obtenerJugadores = async () => {
    const respuesta = await fetch(endpointBase, {
        method: "GET"
    });
    return await respuesta.json();
}

const obtenerJugador = async (jugadorId) => {
    const respuesta = 
        await fetch(`${endpointBase}/${jugadorId}`, {
        method: "GET"
    });
    return await respuesta.json();
}

const guardarJugador = async (datos) => {
    const respuesta = await fetch(`${endpointBase}`, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return await respuesta.json();
}

const actualizarJugador = async (jugadorId, datos) => {
    const respuesta = await fetch(`${endpointBase}/${jugadorId}`, {
        method: "PUT",
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return await respuesta.json();
}

const eliminarJugador = async (jugadorId) => {
    const respuesta = await fetch(`${endpointBase}/${jugadorId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return await respuesta.json();
}