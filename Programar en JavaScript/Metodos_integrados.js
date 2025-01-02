//Metodos de Cadenas o Strings
console.log("1. Métodos de cadenas (String)")
let cadena = "Santiago"
let cadena_2 = "Hola bro"

x = cadena.charAt(2)
console.log("Devuelve el carácter en el índice especificado. -> ", x)

x = cadena.charCodeAt(2)
console.log("Devuelve el código Unicode del carácter en el índice. -> ", x)

x = cadena.concat(cadena, cadena_2,)
console.log("Concatena cadenas. -> ", x)

x = cadena_2.includes("bro")
console.log("Verifica si la cadena contiene un substring.", x)

x = cadena_2.indexOf("bro")
console.log("Devuelve la posición de la primera aparición de un substring.", x)

x = cadena_2.lastIndexOf("bro")
console.log("Devuelve la posición de la última aparición de un substring.", x)

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log("Devuelve coincidencias con una expresión regular." ,found);

x = cadena.replace('a', 'X')
console.log ("Reemplaza partes de la cadena.",x)

x = cadena.slice(1,5)
console.log("Extrae una parte de la cadena.", x)

x = cadena_2.split(' ')
console.log("Divide una cadena en un array.",x)

x = cadena.substring(1,5)
console.log("Devuelve una parte de la cadena entre índices.", x)

x = cadena.toLowerCase()
console.log(x)

x = cadena.toUpperCase()
console.log(x)

//.trim() / .trimStart() / .trimEnd() eliminan espacios

x = cadena.endsWith("tiago")
console.log("Devuelve falso/verdadero si la cadena finaliza en X string", x)

console.log("\n");
// Métodos de Arrays
console.log("2. Métodos de Arrays");

let array = [1, 2, 3, 4, 5];
let array_2 = [6, 7, 8, 9, 10];
let array_3 = ["Honda", "Bmw", "Kawasaki", "Yamaha", "Suzuki"];

x = array.concat(array_2);
console.log("Combina dos o más arrays. ->", x);

x = array.every(num => num > 0);
console.log("Verifica si todos los elementos cumplen una condición. ->", x);

x = array.some(num => num > 3);
console.log("Verifica si algún elemento cumple una condición. ->", x);

x = array.filter(num => num > 3);
console.log("Crea un nuevo array con elementos que cumplen una condición. ->", x);

x = array.find(num => num > 3);
console.log("Devuelve el primer elemento que cumple una condición. ->", x);

x = array.findIndex(num => num > 3);
console.log("Devuelve el índice del primer elemento que cumple una condición. ->", x);

x = array.map(num => num * 2);
console.log("Crea un nuevo array aplicando una función a cada elemento. ->", x);

function listarItems(obj, ind, listaCompleta) {
    console.log(`${ind}. ${obj}`); //Importante la tilde
    console.log(`La lista completa es: ${listaCompleta}`)
}

console.log(array_3.forEach(listarItems));

x = array.reduce((acumulador, actual) => acumulador + actual, 0);
console.log("Reduce el array a un único valor aplicando una función acumulativa. ->", x);

x = array.reverse();
console.log("Invierte el orden del array. ->", x);

x = array.sort((a, b) => a - b);
console.log("Ordena los elementos del array. ->", x);

x = array.push(6);
console.log("Agrega elementos al final del array. Nuevo tamaño del array ->", x, "Array:", array);

x = array.pop();
console.log("Elimina el último elemento del array. Elemento eliminado ->", x, "Array:", array);

x = array.shift();
console.log("Elimina el primer elemento del array. Elemento eliminado ->", x, "Array:", array);

x = array.unshift(0);
console.log("Agrega elementos al inicio del array. Nuevo tamaño del array ->", x, "Array:", array);

x = array.slice(1, 3);
console.log("Crea un nuevo array desde una porción del array original. ->", x);

x = array.splice(2, 1, 99);
console.log("Cambia el contenido del array eliminando/reemplazando elementos. ->", x, "Array:", array);

console.log("\n");

// Métodos de Números
console.log("3. Métodos de Números");

let numero = 123.456;

x = numero.toFixed(2);
console.log("Redondea el número con un número fijo de decimales. ->", x);

x = numero.toExponential(1);
console.log("Convierte el número a notación exponencial. ->", x);

x = Number.isInteger(numero);
console.log("Verifica si el número es un entero. ->", x);

x = Number.isNaN(numero);
console.log("Verifica si el valor no es un número. ->", x);

x = Math.abs(-123);
console.log("Devuelve el valor absoluto de un número. ->", x);

x = Math.ceil(4.2);
console.log("Redondea hacia arriba. ->", x);

x = Math.floor(4.8);
console.log("Redondea hacia abajo. ->", x);

x = Math.random();
console.log("Devuelve un número aleatorio entre 0 y 1. ->", x);

x = Math.sqrt(16);
console.log("Devuelve la raíz cuadrada de un número. ->", x);

console.log("\n");

// Métodos de Objetos
console.log("4. Métodos de Objetos");

const persona = { nombre: "Santiago", edad: 21, pais: "Colombia" };

x = Object.keys(persona);
console.log("Devuelve un array con las claves del objeto. ->", x);

x = Object.values(persona);
console.log("Devuelve un array con los valores del objeto. ->", x);

x = Object.entries(persona);
console.log("Devuelve un array con pares clave-valor. ->", x);

const copia = Object.assign({}, persona, { profesion: "Ingeniero" });
console.log("Crea una copia del objeto y permite agregar nuevas propiedades. ->", copia);

x = Object.hasOwn(persona, "nombre");
console.log("Verifica si el objeto tiene una clave específica. ->", x);

const congelado = Object.freeze(persona);
console.log("Congela el objeto, evitando modificaciones futuras. ->", congelado);

const sellado = Object.seal({ ...persona });
sellado.edad = 22; // Permitido porque está sellado
console.log("Sella el objeto, permitiendo solo modificar propiedades existentes. ->", sellado);

console.log("\n");

// Métodos de Math
console.log("5. Métodos de Math");

x = Math.PI;
console.log("Devuelve el valor de PI. ->", x);

x = Math.E;
console.log("Devuelve el valor de la constante e. ->", x);

x = Math.abs(-15);
console.log("Devuelve el valor absoluto de un número. ->", x);

x = Math.ceil(4.2);
console.log("Redondea hacia arriba. ->", x);

x = Math.floor(4.8);
console.log("Redondea hacia abajo. ->", x);

x = Math.round(4.5);
console.log("Redondea al entero más cercano. ->", x);

x = Math.sqrt(49);
console.log("Devuelve la raíz cuadrada de un número. ->", x);

x = Math.pow(2, 3);
console.log("Calcula la potencia de un número (2^3). ->", x);

x = Math.random();
console.log("Devuelve un número aleatorio entre 0 y 1. ->", x);

x = Math.max(1, 2, 3, 4, 5);
console.log("Devuelve el número máximo de una lista. ->", x);

x = Math.min(1, 2, 3, 4, 5);
console.log("Devuelve el número mínimo de una lista. ->", x);

console.log("\n");

// Métodos de Fechas
console.log("6. Métodos de Fechas");

const ahora = new Date();

x = ahora.toString();
console.log("Devuelve una representación de la fecha como string. ->", x);

x = ahora.toISOString();
console.log("Devuelve la fecha en formato ISO. ->", x);

x = ahora.getFullYear();
console.log("Devuelve el año de la fecha. ->", x);

x = ahora.getMonth() + 1; // Los meses comienzan en 0
console.log("Devuelve el mes de la fecha (1-12). ->", x);

x = ahora.getDate();
console.log("Devuelve el día del mes. ->", x);

x = ahora.getDay();
console.log("Devuelve el día de la semana (0-6). ->", x);

x = ahora.getHours();
console.log("Devuelve la hora de la fecha. ->", x);

x = ahora.getMinutes();
console.log("Devuelve los minutos de la fecha. ->", x);

x = ahora.getSeconds();
console.log("Devuelve los segundos de la fecha. ->", x);

x = ahora.getTime();
console.log("Devuelve la fecha en milisegundos desde 1970. ->", x);

const nuevaFecha = new Date();
nuevaFecha.setFullYear(2030);
console.log("Permite modificar el año de la fecha. ->", nuevaFecha);

console.log("\n");
