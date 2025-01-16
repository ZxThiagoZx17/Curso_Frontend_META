// Sentencias de funcion, Expresiones de funcion y funciones flecha
// Son varios enfoques muy similares y parecidos que se ven en JSX

// Sentencia o declaracion de funcion
    function Nav(props) {
        return (
            <ul>
                <li>{props.first}</li>
            </ul>
        )
    }

// Expresion de funcion
    const Nav = function(props) {
        return (
            <ul>
                <li>{props.first}</li>
            </ul>
        )
    }

// Una diferencia es que en expresiones de funcion se usa una funcion anonima (sin nombre) y se asigna la declaracion de funcion a una variable declarada const con el nombre "Nav" 

// Funciones Flecha
const Nav = (props) => {
    return(
        <ul>
            <li>{props.first}</li>    
        </ul>
    );
}

// Uno de los beneficios de la funcion flecha es la corta sintaxis, seria asi en un ejemplo simple:
const example = function(){}
const example_2 = () => {}

// El retorno implicito en la funcion flecha se ve presente cuando todo el componente esta en una sola linea de codigo:
const Nav = () => <ul><li>Home</li></ul>


// El uso de funciones flecha tambien se puede ver en casos de JS normal:
[10, 20, 30].forEach(item => item * 10) // 100 200 300


//Asi se veria declarando la funcion anomima
[10, 20, 30].forEach(function(item) {
    return item * 10
}
)

//ES5:
const item = function(item) {
    return item * 10
}

//ES6 (Funcion Flecha):
item => item * 10
