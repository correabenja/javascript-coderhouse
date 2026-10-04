//Simulador de cajero automatico
alert("Ingrese la tarjeta");
const tarjeta = true;

if (tarjeta === true) {
    console.log("Continua");
} else {
    console.log("Por favor ingrese su tarjeta");
}

//Ingreso de Pin
let pin = prompt("Ingrese su número de PIN");
let pinCorrecto = pin === "1234";
let intentos = 1;

while (intentos <= 3 && !pinCorrecto) {
    console.log("PIN incorrecto");
    pin = prompt("Ingrese nuevamente su número de PIN");
    pinCorrecto = pin === "1234";
    intentos++;
}

if (pinCorrecto) {
    console.log("PIN correcto, puede realizar las operaciones que usted desee.");
} else {
    console.log("Ha superado el límite de intentos.");
}

//Retiro de dinero
let dineroCuenta = 5000;
let montoRetirado = parseInt(prompt("Ingrese el monto que desea retirar"));
let saldo = dineroCuenta - montoRetirado;

if (montoRetirado > 0 && montoRetirado <= dineroCuenta) {
    console.log("Usted ha retirado $ " + montoRetirado + " y el saldo que le queda es de un total de: " + saldo);
} else {
    console.log("El saldo que tienes en tu cuenta es insuficiente.");
}

console.log("Gracias por utilizar nuestro cajero automático.");