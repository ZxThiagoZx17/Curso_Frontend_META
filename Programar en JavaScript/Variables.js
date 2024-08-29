var persona = 'Santiago';  //Declaramos la variable persona, VAR para variables globales
console.log(persona);

let carro = "Mercedes Benz AMG G63"; //Declaramos variable local o por bloque

console.log("Hola",persona);//Concatenacion con ,

console.log("Hola"+persona);//Concatenacion con +

//Tipos de variables

// Números
let numeroEntero = 42;
let numeroDecimal = 3.14;

// Cadenas de texto (Strings)
let cadenaSimple = "Hola, mundo!";
let cadenaDoble = 'JavaScript es genial';

// Booleanos
let esVerdad = true;
let esFalso = false;

// Undefined
let indefinido;
 
// Null
let vacio = null;

// Símbolo (Symbol)
let simbolo = Symbol('miSimbolo');

// Objeto
let objeto = {
    nombre: "Carlos",
    edad: 30
};

// Array (un tipo especial de objeto)
let array = [1, 2, 3, 4, 5];

// Función
let funcion = function() {
    return "Soy una función";
};

// Mostrando los tipos de datos
console.log("Número entero:", numeroEntero, "-> Tipo:", typeof numeroEntero);
console.log("Número decimal:", numeroDecimal, "-> Tipo:", typeof numeroDecimal);
console.log("Cadena de texto (comillas simples):", cadenaSimple, "-> Tipo:", typeof cadenaSimple);
console.log("Cadena de texto (comillas dobles):", cadenaDoble, "-> Tipo:", typeof cadenaDoble);
console.log("Booleano verdadero:", esVerdad, "-> Tipo:", typeof esVerdad);
console.log("Booleano falso:", esFalso, "-> Tipo:", typeof esFalso);
console.log("Undefined:", indefinido, "-> Tipo:", typeof indefinido);
console.log("Null:", vacio, "-> Tipo:", typeof vacio);
console.log("Símbolo:", simbolo, "-> Tipo:", typeof simbolo);
console.log("Objeto:", objeto, "-> Tipo:", typeof objeto);
console.log("Array:", array, "-> Tipo:", typeof array);
console.log("Función:", funcion, "-> Tipo:", typeof funcion);
