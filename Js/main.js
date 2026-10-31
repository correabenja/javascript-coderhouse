/* Simulador de cajero automático */

alert("Ingrese la tarjeta");

/* Datos iniciales */
const tarjeta = true;
const pinRegistrado = "1234";
const dineroCuenta = 5000;

/* Array de movimientos de la cuenta */
const movimientosCuenta = [
    "Deposito",
    "Retiro",
    "Consulta de saldo",
    "Transferencia",
    "Pago de servicio"
];


if (tarjeta) {
    console.log("Tarjeta ingresada correctamente.");
} else {
    console.log("Por favor, ingrese su tarjeta.");
}

/* Función 1: validar el PIN */
function validarPin(pinIngresado, pinCorrecto) {
    return pinIngresado === pinCorrecto;
}

/* Función 2: calcular el nuevo saldo */
const calcularSaldo = function (saldoDisponible, montoRetirado) {
    if (montoRetirado <= 0 || montoRetirado > saldoDisponible) {
        return null;
    }

    return saldoDisponible - montoRetirado;
};

/* Función 3: mostrar el resultado */
const mostrarResultado = (montoRetirado, saldoFinal) => {
    console.log(
        "Usted ha retirado $" + montoRetirado +
        ". Su saldo restante es de $" + saldoFinal + "."
    );

    alert(
        "Retiro exitoso.\nMonto retirado: $" + montoRetirado +
        "\nSaldo restante: $" + saldoFinal
    );
};

/* Control de acceso mediante PIN */
let pinCorrecto = false;
let intentos = 0;

while (intentos < 3 && !pinCorrecto) {
    const pinIngresado = prompt(
        intentos === 0
            ? "Ingrese su número de PIN"
            : "Ingrese nuevamente su número de PIN"
    );

    intentos++;

    if (pinIngresado === null || pinIngresado.trim() === "") {
        console.log("Entrada inválida. Intente nuevamente.");
        continue;
    }

    pinCorrecto = validarPin(pinIngresado, pinRegistrado);

    if (pinCorrecto) {
        console.log("PIN correcto. Puede realizar operaciones.");
    } else {
        console.log("PIN incorrecto.");
    }
}
/* Arrays: manipulación de extremos */

// Agregar un movimiento al principio
movimientosCuenta.unshift("Inicio de sesión");

// Eliminar el último movimiento
const movimientoEliminado = movimientosCuenta.pop();

console.log("Se ha eliminado el elemento: " + movimientoEliminado);

/* Búsqueda con includes() e indexOf() */
const movimientoBuscado = prompt("¿Qué movimiento desea buscar?");

if (movimientoBuscado !== null && movimientoBuscado.trim() !== "") {
    if (movimientosCuenta.includes(movimientoBuscado)) {
        const posicion = movimientosCuenta.indexOf(movimientoBuscado);

        console.log(
            "Movimiento encontrado: " + movimientoBuscado +
            ". Posición: " + posicion
        );
    } else {
        console.log("El movimiento no existe en la cuenta.");
    }
}

/* Modificar un elemento con splice() */
movimientosCuenta.splice(2, 1, "Extraccion de efectivo");

/* Función 4: listar movimientos con for...of */
function listarMovimientos(lista) {
    console.log("--- Historial de movimientos ---");

    for (const movimiento of lista) {
        console.log("Movimiento: " + movimiento);
    }

    console.log("Total de movimientos: " + lista.length);
}

listarMovimientos(movimientosCuenta);

/* Operación de retiro */
if (pinCorrecto) {
    const entradaMonto = prompt("Ingrese el monto que desea retirar");

    if (entradaMonto === null || entradaMonto.trim() === "") {
        console.log("No ingresó ningún monto.");
    } else {
        const montoRetirado = Number(entradaMonto);

        if (!Number.isFinite(montoRetirado)) {
            console.log("El monto ingresado no es un número válido.");
        } else if (montoRetirado <= 0) {
            console.log("El monto debe ser mayor que cero.");
        } else if (montoRetirado > dineroCuenta) {
            console.log("El saldo de su cuenta es insuficiente.");
        } else {
            const saldoFinal = calcularSaldo(dineroCuenta, montoRetirado);

            if (saldoFinal !== null) {
                mostrarResultado(montoRetirado, saldoFinal);

                /* Registrar el retiro con push() */
                movimientosCuenta.push("Retiro realizado");

                console.log("Retiro agregado al historial.");
            }
        }
    }
} else {
    console.log(
        "Ha superado el límite de intentos. No puede realizar operaciones."
    );
}


console.log("Gracias por utilizar nuestro cajero automático.");