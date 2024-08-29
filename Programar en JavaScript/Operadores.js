// Operadores aritméticos
let suma = 10 + 5;           // Suma
let resta = 10 - 5;          // Resta
let multiplicacion = 10 * 5; // Multiplicación
let division = 10 / 2;       // División
let modulo = 10 % 3;         // Módulo (resto de la división)
let exponente = 2 ** 3;      // Exponenciación

console.log("Suma: 10 + 5 =", suma);
console.log("Resta: 10 - 5 =", resta);
console.log("Multiplicación: 10 * 5 =", multiplicacion);
console.log("División: 10 / 2 =", division);
console.log("Módulo: 10 % 3 =", modulo);
console.log("Exponente: 2 ** 3 =", exponente);

// Operadores de asignación
let x = 10;
x += 5; // Es equivalente a x = x + 5;
console.log("Asignación suma: x += 5 ->", x);
x -= 3; // Es equivalente a x = x - 3;
console.log("Asignación resta: x -= 3 ->", x);
x *= 2; // Es equivalente a x = x * 2;
console.log("Asignación multiplicación: x *= 2 ->", x);
x /= 4; // Es equivalente a x = x / 4;
console.log("Asignación división: x /= 4 ->", x);

// Operadores de comparación
let esIgual = 10 == '10';    // Igualdad (comparación de valor)
let esEstrictamenteIgual = 10 === '10'; // Estricta igualdad (comparación de valor y tipo)
let esDiferente = 10 != 5;   // Diferente
let esMayor = 10 > 5;        // Mayor que
let esMenor = 10 < 5;        // Menor que
let esMayorOIgual = 10 >= 10; // Mayor o igual que
let esMenorOIgual = 10 <= 5; // Menor o igual que

console.log("Igualdad (==): 10 == '10' ->", esIgual);
console.log("Estricta igualdad (===): 10 === '10' ->", esEstrictamenteIgual);
console.log("Diferente (!=): 10 != 5 ->", esDiferente);
console.log("Mayor que (>): 10 > 5 ->", esMayor);
console.log("Menor que (<): 10 < 5 ->", esMenor);
console.log("Mayor o igual que (>=): 10 >= 10 ->", esMayorOIgual);
console.log("Menor o igual que (<=): 10 <= 5 ->", esMenorOIgual);

// Operadores lógicos
let yLogico = true && false;  // Y lógico (AND)
let oLogico = true || false;  // O lógico (OR)
let noLogico = !true;         // NO lógico (NOT)

console.log("Y lógico (AND): true && false ->", yLogico);
console.log("O lógico (OR): true || false ->", oLogico);
console.log("NO lógico (NOT): !true ->", noLogico);

// Operadores unarios
let incremento = 5;
incremento++; // Incrementa en 1
console.log("Incremento (x++):", incremento);

let decremento = 5;
decremento--; // Decrementa en 1
console.log("Decremento (x--):", decremento);
