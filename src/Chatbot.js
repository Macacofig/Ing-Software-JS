function saludar(nombre, genero,edad) {
    const [saludo, hora] = horaActual();
    const distin = Genero(genero,edad);
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

function Genero(genero, edad) 
{
    let distin;
    if (edad > 30)
    {
        if (genero === "masculino") 
        {
            distin = "Señor";
        } else if (genero === "femenino") 
        {
            distin = "Señora";
        }
    }
    else
    {
        if (genero === "masculino") 
        {
            distin = "Joven";
        } else if (genero === "femenino") 
        {
            distin = "Señorita";
        }
    }
    return distin;
}
export {saludar};