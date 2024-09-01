let edad = 20;
let tieneLicencia = true;
let esEstudiante = true;
let esDesempleado = false;
let estaLloviendo = false;
let dia = 3;

// 1. Condicional if
if (edad >= 18) {
    console.log("Eres mayor de edad");
}

// 2. Condicional if...else
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// 3. Condicional if...else if...else
if (edad < 12) {
    console.log("Eres un niño");
} else if (edad < 18) {
    console.log("Eres un adolescente");
} else {
    console.log("Eres un adulto");
}

// 4. Operador Ternario (? :)
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

// 5. Condicional switch
let nombreDelDia;
switch (dia) {
    case 1:
        nombreDelDia = "Lunes";
        break;
    case 2:
        nombreDelDia = "Martes";
        break;
    case 3:
        nombreDelDia = "Miércoles";
        break;
    case 4:
        nombreDelDia = "Jueves";
        break;
    case 5:
        nombreDelDia = "Viernes";
        break;
    case 6:
        nombreDelDia = "Sábado";
        break;
    case 7:
        nombreDelDia = "Domingo";
        break;
    default:
        nombreDelDia = "Día no válido";
}
console.log(nombreDelDia);

// 6. Condicional && (AND lógico)
if (edad >= 18 && tieneLicencia) {
    console.log("Puedes conducir");
}

// 7. Condicional || (OR lógico)
if (esEstudiante || esDesempleado) {
    console.log("Tienes descuento");
}

// 8. Condicional ! (NOT lógico)
if (!estaLloviendo) {
    console.log("Puedes salir a caminar");
}
