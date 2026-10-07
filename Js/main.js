//Simulador de cajero automatico
alert("Ingrese la tarjeta");
const tarjeta = true;

if (tarjeta === true) {
    console.log("Continua");
} else {
    console.log("Por favor ingrese su tarjeta");
}

//Ingreso de Pin
let pin;
let pinCorrecto = false;
let intentos = 0;

while (intentos < 3) {
    pin = prompt(intentos === 0 ? "Ingrese su número de PIN" : "Ingrese nuevamente su número de PIN");
    intentos++;

    if (pin === null || pin.trim() === "") {
        console.log("Entrada inválida, por favor intente nuevamente.");
        continue;
    }

    pinCorrecto = pin === "1234";

    if (pinCorrecto) {
        console.log("PIN correcto, puede realizar las operaciones que usted desee.");
        break;
    }

    console.log("PIN incorrecto");
}

if (pinCorrecto) {
    //Retiro de dinero
    let dineroCuenta = 5000;
    let montoRetirado = parseInt(prompt("Ingrese el monto que desea retirar"));

    if (isNaN(montoRetirado)) {
        console.log("El monto ingresado no es un número válido.");
    } else {
        if (montoRetirado > 0) {
            if (montoRetirado <= dineroCuenta) {
                let saldo = dineroCuenta - montoRetirado;
                console.log("Usted ha retirado $ " + montoRetirado + " y el saldo que le queda es de un total de: " + saldo);
            } else {
                console.log("El saldo que tienes en tu cuenta es insuficiente.");
            }
        } else {
            console.log("El monto a retirar debe ser mayor a cero.");
        }
    }
} else {
    console.log("Ha superado el límite de intentos. No puede realizar operaciones.");
}

console.log("Gracias por utilizar nuestro cajero automático.");