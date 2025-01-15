//En react tenemos 2 tipos de componentes, funcionales y componentes de clase:

//Componentes Funcionales:
// React por defecto un componente en index.js, es el componente raiz con fin de traer bibliotecas importantes

//La sintaxis para crear un componente es muy sencilla, se hace asi:
// <NombreComponente/>

// Un componente funcional se veria asi:
function App() {
  return (
    <div className="App">
        <h1>Este es un ejemplo de componente Funcional!!</h1>
    </div>
  );
}

export default App;

// React es gestionado usando una sintaxis especial llamada JavaScript XML o JSX, muchos lo conocen como una extension de JS
// Se podria pensar que JSX es una combinacion de JS y HTML

//IMPORTANTE; a la hora de crear un componente la primera letra de su nombre siempre debe ir en mayuscula, React trata a los componentes en minusculas como HTML regulares, escribirlo en mayuscula hara que se detecte como componente JSX

//Se hizo un ejemplo practico en App.js en la carpeta "src" de primer_app

//En HTML no se pueden declarar variables, pero gracias a JSX podemos manejarlo asi mediante un proceso llamado "Transpilar" que es un proceso que hace compatibles JSX y HTML en este caso particular, esto pasa tambien con versiones de JS viejas y JS ES6

// Para que el navegador entienda JSX debe hacer un paso en la transpilacion, un ejemplo de trasnpilacion de JSX a JS:

// Codigo JSX:
function Heading(props) {
    return(<h1>{props.title}</h1>);
        }

// Codigo JS:
"use strict";

function Heading(props) {
    return /*#__PURE__*/React.createElement("h1", null, props.title);
}

//Se puede observar que lo que se hace es modificar el DOM para la creacion de un elemento H1 en este caso con Null porque no se ha agregado un valor, asi se veria cuando se agrega un valor:

<Heading title="This is the heading text!"></Heading>

//JS:
"use strict";

/*#__PURE__*/
React.createElement(Heading, {
  title: "This is the heading text!"
});