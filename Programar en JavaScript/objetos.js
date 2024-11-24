// Literal de objeto
var literalObjeto ={
    nombre: "Santiago",
    apellido: "Sanabria",
    }; // Se denomina asi cuando el objeto se crea con {}, se le llama literal de objeto 

// Notacion de puntos 
var literalPuntos = {};
literalPuntos.nombre = "Santiago";
literalPuntos.apellido = "Sanabria";

// Notacion de corchetes
literalObjeto["Profesion"] = "Desarrolador";
literalPuntos["Profesion"] = "Desarrolador";

console.log(literalObjeto); //Podemos ver que los 3 enfoques nos devuelven lo mismo, por lo tanto, podemos utilizar los 3
console.log(literalPuntos);

var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

// Definición de un objeto
let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido);
    }
};

// Accediendo a las propiedades del objeto
console.log(persona.nombre); // Imprime: Juan
console.log(persona["apellido"]); // Imprime: Pérez

// Modificando una propiedad del objeto
persona.edad = 31;
console.log(persona.edad); // Imprime: 31

// Agregando una nueva propiedad al objeto
persona.profesion = "Desarrollador";
console.log(persona.profesion); // Imprime: Desarrollador

// Eliminando una propiedad del objeto
delete persona.profesion;
console.log(persona.profesion); // Imprime: undefined

// Llamando a un método del objeto
persona.saludar(); // Imprime: Hola, mi nombre es Juan Pérez

// Creando un objeto utilizando una función constructora
function Coche(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.detalles = function() {
        console.log("Coche: " + this.marca + " " + this.modelo + ", Año: " + this.año);
    };
}

// Instanciando un nuevo objeto Coche
let miCoche = new Coche("Toyota", "Corolla", 2022);
miCoche.detalles(); // Imprime: Coche: Toyota Corolla, Año: 2022

// 1. Arreglos (Arrays)
console.log("---- 1. Arreglos (Arrays) ----\n");

let numeros = [1, 2, 3, 4, 5];
let mixto = [1, "dos", true, {nombre: "Juan"}, [6, 7]];

// Acceso a elementos de un array
console.log("Primer elemento del array 'numeros':", numeros[0], "\n"); // Imprime: 1
console.log("Nombre del objeto en el array 'mixto':", mixto[3].nombre, "\n"); // Imprime: Juan

// Métodos comunes
numeros.push(6); // Añade 6 al final del array
console.log("Array 'numeros' después de push(6):", numeros, "\n");

numeros.pop(); // Elimina el último elemento del array
console.log("Array 'numeros' después de pop():", numeros, "\n");

numeros.shift(); // Elimina el primer elemento del array
console.log("Array 'numeros' después de shift():", numeros, "\n");

numeros.unshift(0); // Añade 0 al inicio del array
console.log("Array 'numeros' después de unshift(0):", numeros, "\n");


// 2. Objetos (Objects)
console.log("---- 2. Objetos (Objects) ----\n");

let persona_2 = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    profesion: "Desarrollador",
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido + "\n");
    }
};

// Acceso a valores de un objeto
console.log("Nombre de la persona:", persona_2.nombre, "\n"); // Imprime: Juan
console.log("Edad de la persona:", persona_2["edad"], "\n"); // Imprime
