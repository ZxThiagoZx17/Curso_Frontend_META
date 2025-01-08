//Operador Spread

//El operador spread permite pasar todos los elementos de la matriz a una función sin tener que escribirlos todos individualmente, en el ejemplo se evidencia su uso con top3

let top3 = [
    'El coliseo',
    'La montaña',
    'La ciudad del Vaticano'
];

function MostrarItinerario(lugar1, lugar2, lugar3) {
    console.log("Inicialmente visitare", lugar1);
    console.log("Luego ire a", lugar2);
    console.log("Y finalmente estare en", lugar3);
};

console.log(MostrarItinerario(top3[0], top3[1], top3[2],));

console.log(MostrarItinerario(...top3)); //Simplificamos de gran manera gracias al operador spread