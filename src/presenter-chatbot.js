import {saludar, SaludohoraActual} from "./Chatbot.js";

const nombre = document.getElementById("nombre");
const form = document.getElementById("chat-form");
const div = document.getElementById("chat-output");

/*
form.addEventListener("submit", (event) => {
    event.preventDefault();
    div.innerHTML =  "<p>" + saludar(nombre.value) + "</p>";
});*/

form.addEventListener("submit", (event) => {
    event.preventDefault();
    div.innerHTML =  "<p>" + SaludohoraActual(nombre.value) + "</p>";
});