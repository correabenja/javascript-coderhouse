const nombre = prompt("Cual es tu nombre?");
const ciudad = prompt("Donde vives?");
const anioNacimientoTexto = prompt("En que año naciste?");
const anioNacimiento = parseInt(anioNacimientoTexto);

const edadActual = new Date().getFullYear();
const edad = edadActual - anioNacimiento;

const mensaje = "Hola " + nombre + ", sos de " + ciudad + " y tenes aproximadamente " + edad + " años.";

console.log(mensaje);
alert(mensaje);
