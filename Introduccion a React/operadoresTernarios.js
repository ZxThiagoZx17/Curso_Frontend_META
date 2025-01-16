// Los operadores ternarios son una manera de abreviar un condicional if - else - elif

// seria asi:

// condición ? valor_si_verdadero : valor_si_falso;

// Un ejemplo seria este:

let nombre = 'Santiago';

if (nombre ==='Santiago'){
    console.log(`Hola ${nombre}!`);
}
else {
    console.log('Hola Amigo!');
};

//Asi se haria con operadores ternarios

const saludo = () => nombre==='Santiago' ? `Hola ${nombre}!`: `Hola Amigo!`
console.log(saludo())

// Otro ejemplo:
let name = 'Bob';
name == 'Bob' ? console.log('Hello, Bob') : console.log('Hello, Friend');

// Asi se usaria en varias condiciones o elif:

let nota = 59;
const regaño = nota == 60
? console.log('Pasaste raspando')
: nota >= 80
? console.log('Te fue una chimbaaa')
: console.log('Perdiste hasta el recreo');

// Tambien esta se puede usar en JSX, un ejemplo puede ser asi:

function example() {
    return(
        <h1>{Math.random() >= 0.5? 'Mayor a 0.5': 'Menor a 0.5'}</h1>
    );
}

