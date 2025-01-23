// En JS es importante saber manipular los datos/elementos antes de mostrar la lista final a los usuarios, esto se facilita gracias a map(), no deja transformar listas de datos de manera eficiente y mostrar lo que queremos:

const desserts = [
    {
      name: "Chocolate Cake",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Ice Cream",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Tiramisu",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Cheesecake",
      calories: 600,
      createdAt: "2022-01-04",
    },
  ];

//  Tenemos una lista/matriz con varios objetos de postres, queremos que nos devuelva unicamente un titulo con el nombre y las calorias, lo hariamos asi:

const transformarPostres = desserts.map(postres => {
    return({postre: `${postres.name} - ${postres.calories}`});
})

console.log(transformarPostres)

// [
//     { postre: 'Chocolate Cake - 400' },
//     { postre: 'Ice Cream - 200' },
//     { postre: 'Tiramisu - 300' },
//     { postre: 'Cheesecake - 600' }
// ]

// Nos arrojaria el resultado que queremos mediante informacion externa de una API u otra fuente

// Aca la transformamos en una coleccion de componentes que arrojan elementos de una lista desordenada usando JSX
export default function TransformacionListas() {

    const arreglarPostres = desserts.map(postres => {
        const listaElementos =`${postres.name} tiene ${postres.calories} calorias.`;
        return(
            <li>{listaElementos}</li>
        );
    })

    return(
        <>
            <ul>
                {arreglarPostres}
            </ul>
        </>
    );
}

// Se ve en uso en la app datos-externos, tambien se vera un uso donde se hace practica de funciones de Filtrado, clasificacion y mapeo (filter(), sort(), map()), ejemplos:

// Filter(): Se ve una funcion que filtra los elementos con menos de 500 calorias unicamente:
const bajasCalorias = props.data.filter((desserts) =>{
    return(desserts.calories < 500);
// sort(): Se ordenan los elementos segun las calorias de menor a mayor
}).sort((a, b) => {a.calories-b.calories
// map(): Se muestra la informacion como se solicita, en listas desordenadas
}).map((postre)=>{
    return(
        <>
            <ul>
                {`${postre.name} - ${postre.calories} cal`}
            </ul>
        </>
    )})


