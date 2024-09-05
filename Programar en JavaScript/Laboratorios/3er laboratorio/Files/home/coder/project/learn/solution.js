// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    // Iterar sobre los productos lácteos y hacer console log de cada uno
    for (const item of dairy) {
        console.log(item);
    }
}

// Ejecuta la función para ver el resultado
logDairy();

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    // Iterar solo sobre las propiedades propias del objeto `bird`
    for (const key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`);
    }
}

// Ejecuta la función para ver el resultado
birdCan();

// Task 3
function animalCan() {
    // Iterar sobre todas las propiedades, incluidas las heredadas del prototipo `animal`
    for (const key in bird) {
        console.log(`${key}: ${bird[key]}`);
    }
}

// Ejecuta la función para ver el resultado
animalCan();

