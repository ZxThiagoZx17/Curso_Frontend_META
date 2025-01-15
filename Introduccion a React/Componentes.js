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


