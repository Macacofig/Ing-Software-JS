import {saludar} from "./Chatbot.js";

const nombre = document.getElementById("nombre");

const form = document.getElementById("chat-form");
const div = document.getElementById("chat-output");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const genero = document.querySelector('input[name="genero"]:checked');
    div.innerHTML =  "<p>" + saludar(nombre.value, genero.value) + "</p>";
});
