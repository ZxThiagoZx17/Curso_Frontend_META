let {PI} = Math; //Traemos Math.PI de esta manera, siedo Math la libreria de donde vamos a traer la constante o valor
console.log(PI)

let {pi} = Math; //Intentamos traer el numero PI pero no funciona debido a como lo escribimos, nos arrojara indefinido
console.log(pi)

console.log(PI === Math.PI)