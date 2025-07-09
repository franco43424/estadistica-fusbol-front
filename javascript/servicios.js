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
    });
    return await respuesta.json();
}

const endpointEquipos = "http://127.0.0.1:8787/equipos";

const obtenerEquipos = async () => {
    const respuesta = await fetch(endpointEquipos, { method: "GET" });
    if (!respuesta.ok) {
        const errorText = await respuesta.text();
        throw new Error(errorText);
    }
    return await respuesta.json();
};

const obtenerEquipo = async (equipoId) => {
    const respuesta = await fetch(`${endpointEquipos}/${equipoId}`, { method: "GET" });
    if (!respuesta.ok) {
        const errorText = await respuesta.text();
        throw new Error(errorText);
    }
    return await respuesta.json();
};

const guardarEquipo = async (datos) => {
    const respuesta = await fetch(endpointEquipos, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: { 'Content-Type': 'application/json' }
    });
    if (!respuesta.ok) {
        const errorText = await respuesta.text();
        throw new Error(errorText);
    }
    return await respuesta.json();
};

const actualizarEquipo = async (equipoId, datos) => {
    const respuesta = await fetch(`${endpointEquipos}/${equipoId}`, {
        method: "PUT",
        body: JSON.stringify(datos),
        headers: { 'Content-Type': 'application/json' }
    });
    if (!respuesta.ok) {
        const errorText = await respuesta.text();
        throw new Error(errorText);
    }
    return await respuesta.json();
};



const eliminarEquipo = async (equipoId) => {
    const respuesta = await fetch(`${endpointBaseEquipos}/${equipoId}`, {
        method: "DELETE",
    });

    if (!respuesta.ok) {
        const errorText = await respuesta.text();
        throw new Error(errorText);
    }

    return await respuesta.json();
};





const llenarComboEquipos = async (selector) => {
    try {
        const equipos = await obtenerEquipos();
        const combo = document.querySelector(selector);
        combo.innerHTML = '';
        equipos.forEach(equipo => {
            const option = document.createElement("option");
            option.value = equipo.id;
            option.text = equipo.name;
            combo.appendChild(option);
        });
    } catch (error) {
        console.error("Error cargando equipos en combo:", error);
    }
};
