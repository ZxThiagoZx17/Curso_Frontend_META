// Hay 2 maneras de exportar un modulo de JS, Mencionaremos:

// Uso de exportaciones predeterminadas 
// - Solo permite exportar una entidad por modulo
// - Al importar se puede asignar el nombre que uno quiera

// Uso de exportaciones con nombre 
// - Permite exportar varias entidades por modulo
// - Al importar se debe usar el nombre predefinido en la exportacion y ponerlo entre {}

// Exportacion Predeterminada
export default function addTwo(a, b) {
    console.log(a + b);
}

//Otra sintaxis
function addthree(a, b) {
    console.log(a + b);
}

// export default addthree; //Se comenta porque un modulo no puede tener varias importaciones por defecto

// Importacion Funcion predeterminada (Suponiendo que esta en otro archivo)
// import addTwo from "./ModulosJS"; //EJEMPLO

// Exportaciones por nombre
export function addTwo(a, b) {
    console.log(a + b);
}

export function addThree(a, b, c) {
    console.log(a + b + c);
} 

//Otra sintaxis
function addTwo(a, b) {
    console.log(a + b);
}

function addThree(a, b, c) {
    console.log(a + b + c);
}

export { addTwo, addThree };

// Importacion Funcion por nombre (Suponiendo que esta en otro archivo)
// import {addTwo, addThree} from "./ModulosJS"; //Ejemplo

//De igual manera tambien se pueden hacer importaciones combinadas nombre y predeterminada
import addTwo, {addTwo, addThree} from "./ModulosJS"; //EJEMPLO