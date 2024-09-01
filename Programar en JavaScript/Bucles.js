let frutas = ['manzana', 'banana', 'cereza'];
let persona = {nombre: 'Juan', edad: 30};
let contador;

// 1. Bucle for clásico
console.log("1. Bucle for clásico:");
for (let i = 0; i < frutas.length; i++) {
    console.log('Fruta ' + (i + 1) + ': ' + frutas[i]);
}
console.log('\n');

// 2. Bucle for...of
console.log("2. Bucle for...of:");
for (let fruta of frutas) {
    console.log('Fruta: ' + fruta);
}
console.log('\n');

// 3. Bucle for...in
console.log("3. Bucle for...in:");
for (let clave in persona) {
    console.log(clave + ': ' + persona[clave]);
}
console.log('\n');

// 4. Bucle while
console.log("4. Bucle while:");
contador = 0;
while (contador < frutas.length) {
    console.log('Fruta en while: ' + frutas[contador]);
    contador++;
}
console.log('\n');

// 5. Bucle do...while
console.log("5. Bucle do...while:");
contador = 0;
do {
    console.log('Fruta en do...while: ' + frutas[contador]);
    contador++;
} while (contador < frutas.length);
console.log('\n');

// 6. Bucle forEach
console.log("6. Bucle forEach:");
frutas.forEach(function(fruta, index) {
    console.log('Fruta en forEach ' + (index + 1) + ': ' + fruta);
});
console.log('\n');

// 7. Bucle for...of con entries()
console.log("7. Bucle for...of con entries():");
for (let [index, fruta] of frutas.entries()) {
    console.log('Fruta ' + (index + 1) + ' en for...of entries: ' + fruta);
}
