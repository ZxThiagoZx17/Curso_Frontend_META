// Las expresiones incrustadas estan tanto en JSX como en JS vainilla

// Basicamente son literales de plantilla
const nombre = "Juan";
const edad = 21;

const saludo = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(saludo);
// Salida: Hola, mi nombre es Juan y tengo 21 años.

// En JSX tenemos algo muy similar que se utiliza bastante:
const Bienvenida = () => <h1>hola, {nombre}, tienes {edad} años!! </h1> //En JSX no estan las tildes invertidas ni llaves

// Tambien podemos incluir operadores ternarios en las expresiones incrustadas:

function Saludo({ esAdmin }) {
    return (
      <h1>{esAdmin ? "Bienvenido, Administrador" : "Bienvenido, Usuario"}</h1>
    );
  }

// Recordemos que los ternarios funcionan como condicionales, en este caso si esAdmin es true, nos devolvera Bienvenido, Administrador, si es false, nos dara Bienvenido, Usuario, asi seria en todos los casos:
 
condición ? valor_si_verdadero : valor_si_falso;