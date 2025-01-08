//Operador Spread

//Se usa para desempaquetar una Caja!

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

//Metodo Rest

//Este se utilizar para construir una caja mas pequeña y almacenar objetos en el

//Este operador como tal nos devuelve lo que sobra de la matriz , en este caso "SegundaVisita" nos devolvera los 4 ultimos items ya que los 3 primeros se estan almacenando en las variables que pusimos

let top7 = [
    'El coliseo',
    'La montaña',
    'El monumento historico',
    'Canal de venecia',
    'Muralla China',
    'La montaña',
    'La ciudad del Vaticano'
];

let [Primero, Segundo, Tercero, ...SegundaVisita] = top7;

console.log(SegundaVisita);
console.log(Primero);
console.log(Segundo);
console.log(Tercero);

//Ejemplo practico 


//Es una funcion que se encarga de añadir un valor adicional por concepto de impuesto
function AñadirImpuesto(Porcentaje, ...ValoresItems) {
    return ValoresItems.map(Item => Porcentaje*Item)
}

listaCompras = AñadirImpuesto(1.1,50,29,89,57,45);

console.log(listaCompras);