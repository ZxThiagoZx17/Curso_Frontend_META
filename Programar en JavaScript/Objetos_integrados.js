// objetos_integrados.js
// Resumen de objetos integrados en JavaScript, agrupados por categorías.

// **1. Objetos Fundamentales**
const obj = {}; // Object: Base de todos los objetos.
const func = function() {}; // Function: Representa funciones.
const bool = true; // Boolean: true/false.
const symbol = Symbol("id"); // Symbol: Identificador único.
const error = new Error("Mensaje de error"); // Error: Base de errores.

// **2. Objetos Numéricos**
const num = 42; // Number: Representa números.
const bigInt = 1234567890123456789012345678901234567890n; // BigInt: Números muy grandes.
const sqrt = Math.sqrt(16); // Math: Funciones y constantes matemáticas.

// **3. Objetos de Cadenas (Strings)**
const texto = "Hola, JavaScript!"; // String: Texto y métodos para manipularlo.

// **4. Objetos de Colecciones**
const lista = [1, 2, 3]; // Array: Lista ordenada.
const conjunto = new Set([1, 2, 3]); // Set: Conjunto de valores únicos.
const mapa = new Map([[1, "uno"], [2, "dos"]]); // Map: Pares clave-valor.
const weakSet = new WeakSet([{a: 1}, {b: 2}]); // WeakSet: Referencias débiles.
const weakMap = new WeakMap([[{clave: 1}, "valor"]]); // WeakMap: Claves débiles.

// **5. Objetos de Control Internacional**
const formatoFecha = new Intl.DateTimeFormat("es-ES"); // Formato de fechas.
const formatoNumero = new Intl.NumberFormat("es-ES"); // Formato de números.

// **6. Objetos de Fechas**
const fecha = new Date(); // Date: Fechas y horas.

// **7. Objetos de Manipulación de Datos Binarios**
const buffer = new ArrayBuffer(16); // ArrayBuffer: Datos binarios en bruto.
const vista = new DataView(buffer); // DataView: Lectura/escritura en buffers.
const typedArray = new Uint8Array([10, 20, 30]); // Array tipado.

// **8. Objetos de Operaciones en la Web**
const promesa = new Promise((resolve) => resolve("Completado")); // Promise: Valores futuros.
const proxy = new Proxy({}, {}); // Proxy: Intercepción de operaciones en objetos.
const reflect = Reflect.get({x: 10}, "x"); // Reflect: Métodos para manipular objetos.

// **9. Objetos de Iteración**
function* generador() { yield 1; yield 2; } // Generator: Iterador avanzado.
const iterador = generador(); // Iterator: Proceso iterativo.

// **10. Objetos de Texto y Expresiones Regulares**
const regex = /JavaScript/i; // RegExp: Expresiones regulares.

// **11. Otros Objetos Útiles**
const json = JSON.stringify({clave: "valor"}); // JSON: Serialización y parseo.
console.log(globalThis); // GlobalThis: Objeto global (navegador o Node.js).
console.log(console.log("Depuración con console")); // Console: Métodos para depuración.
