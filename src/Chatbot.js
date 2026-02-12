function saludar(nombre, genero) {
    const [saludo, hora] = horaActual();
    const distin = GeneroSaludo(genero);
    return `${saludo} ${distin} ${nombre}, ${hora}`;
}

function horaActual() {
    const fecha = new Date();
    const horaFormateada = fecha.toLocaleTimeString();
    let text1;
    let text2;
    if (fecha.getHours() < 12) {
        text1 = "Buenos días"; 
    } else if (fecha.getHours() < 18) {
        text1 = "Buenas tardes"; 
    } else {
        text1 = "Buenas noches"; 
    }
    text2 = `son las ${horaFormateada}`;

    return [text1, text2];
}

function GeneroSaludo(genero) 
{
    let distin;
    if (genero === "masculino") 
    {
        distin = "Señor";
    } else if (genero === "femenino") 
    {
        distin = "Señora";
    }
    return distin;
}
export {saludar};