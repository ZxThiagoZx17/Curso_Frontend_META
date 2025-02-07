// El operador spread puede aplicarse a diferentes tipos de datos de JS como:
// Matrices
// Objetos
// Cadenas

// Como las propiedades en React son Objetos unicamente, se daran tips unicamente para usar spread con objetos

// Copiar y fusionar objetos
// Estas son 2 operaciones principales en el uso de Spread en React
const orden = {
    id:1,
    nombre:'Santiago Sanabria',
    item:'Pizza',
    precio:10,
};

const copiaOrden = {...orden}; //Asi se haria la copia de un objeto

const ordenModificada = { //Asi se haria la copia y modificacion en las propiedades de un objeto
    ...orden,
    item:'Pizza Italiana',
}

// En el componente se pasaria asi: 
function MostrarOrden() {
    return(
        <div>
            <orden {...orden}/> {/*Nos evita el tener que pasar todas las propiedades y ingresarlas manualmente*/}
        </div>
    );
}