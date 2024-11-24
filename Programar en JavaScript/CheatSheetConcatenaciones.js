var greed = "Hello, ";
var place = "World";

console.log(greed.length); //Longitud de la cadena
console.log(greed.charAt(1)); //Devuelve la letra segun el indice que se le pase
console.log("Wo".concat("rl").concat("d")); //Concat une 2 cadenas
console.log("ho-ho-ho".indexOf('h')); 
console.log("ho-ho-ho".indexOf('o')); // devuelve la ubicación de la primera posición que coincide con un carácter
console.log("ho-ho-ho".indexOf('-')); 

console.log("ho-ho-ho".lastIndexOf('h')); 
console.log("ho-ho-ho".lastIndexOf('o')); //Hace lo contrario de indexOf
console.log("ho-ho-ho".lastIndexOf('-')); 


console.log("ho-ho-ho".split('-')); // Nos devuelve una lista segun el separador que elijamos

greet.toUpperCase(); // Convierte la cadena a mayuscula
greet.toLowerCase(); // Convierte la cadena a minuscula