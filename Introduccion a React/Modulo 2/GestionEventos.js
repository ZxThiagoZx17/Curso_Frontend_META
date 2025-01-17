// Hay varias maneras de incorporar expresiones en los controladoresde eventos de react:

// Controlador de eventos usando funciones de ES5 anónimas en línea
// Este evento nos permite pasar una sentencia de funcion ES5 como atributo en onClick:

    // <button onClick={function() {console.log('Primer ejemplo')}}>
    //     Controlador de eventos usando funciones de ES5 anónimas en línea
    // </button>

// Aunque es un enfoque que funciona, es raro o poco comun verlo en aplicaciones de react

// Controlador de eventos usando funciones de ES6 anónimas en línea (Funcion flecha)
// Esta forma de agregar la expresion al atributo del evento es muy usada, mantiene toda la logica dentro de la expresion JSX Asignada al evento onClick():

    <button onClick={ () => console.log('Segundo ejemplo')}>
        Controlador de eventos usando funciones de ES6 anónimas en línea (Funcion flecha)
    </button>

// Control de eventos usando funciones separadas
// Con este enfoque inicialmente se hace una declaracion de funcion ES5 aparte de return y luego se hace referencia mediante su nombre de funcion en onClick():

function app() {

    // const tercerEjemplo = console.log('Tercer ejemplo'); // Mediante expresion de funcion

    function tercerEjemplo() {
        return(console.log('Tercer ejemplo'));
    }; // Mediante declaracion de funcion
    
    return(
        <button onClick={tercerEjemplo}>
            Control de eventos usando funciones separadas            
        </button>
    );
}
// Es bueno usar este enfoque cuando la complejidad de la funcion es demasiada para ponerla toda en una funcion anonima

// Control de eventos usando expresiones separadas
// Se hace la definicion de la expresion y luego se hace referencia mediante su nombre de funcion en onClick():

function app() {

    // const cuartoEjemplo = console.log('Cuarto ejemplo'); // Mediante expresion de funcion

    const cuartoEjemplo = () => console.log('Cuarto ejemplo'); // Mediante expresion de funcion
    
    return(
        <button onClick={cuartoEjemplo}>
            Control de eventos usando expresiones separadas            
        </button>
    );
}
// Es bueno usar este enfoque cuando las lineas de codigo de nuestra funcion son bastantes, este enfoque lo veremos bastante en aplicaciones de React

// Esos son las declaraciones/expresiones de funciones mas usadas para controlar eventos en React

