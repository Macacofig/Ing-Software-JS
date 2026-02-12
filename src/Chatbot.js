function saludar(nombre) {
    return `Hola ${nombre}`;
}

function SaludohoraActual(nombre) {
    const fecha = new Date();
    const horaFormateada = fecha.toLocaleTimeString();
    if (fecha.getHours() < 12) {
        return `Buenos días ${nombre}, son las ${horaFormateada}`;
    } else if (fecha.getHours() < 18) {
        return `Buenas tardes ${nombre}, son las ${horaFormateada}`;
    } else {
        return `Buenas noches ${nombre}, son las ${horaFormateada}`;
    }
}
export {saludar, SaludohoraActual};