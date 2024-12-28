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

// Métodos de Arrays
console.log("2. Métodos de Arrays");

let array = [1, 2, 3, 4, 5];
let array_2 = [6, 7, 8, 9, 10];

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
