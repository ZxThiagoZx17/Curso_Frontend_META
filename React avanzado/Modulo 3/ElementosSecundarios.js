// La composición de componentes con elementos secundarios es cuando un componente envuelve a otro con sus etiquetas de apertura y cierre:

<MyComponente>
  <h1>Hola, esto es un hijo</h1>
  <p>Este párrafo también es un hijo</p>
</MyComponente>


// Las propiedades de los elementos secundarios son una propiedad especial que tienen todos los componentes de React, hay 2 funciones o patrones de composicion que permiten la composicion de componentes:

// 1. Contencion: Es cuando el cuando un componente envuleve a otros y no sabe exactamente que hijos tendra, esto aplica para  Un Card, Modal, Layout, Container, etc... ejemplo:

function Card({ children }) {
    return (
      <div className="border rounded-lg p-4 shadow">
        {children} {/* Aquí se insertan los hijos */}
      </div>
    );
  }
  
  export default function App() {
    return (
      <Card>
        <h2>Título dentro de la tarjeta</h2>
        <p>Este es el contenido de la tarjeta.</p>
      </Card>
    );
  } 

// 2. Programa especializado: Se usa cuando se sabe exactamente que estructura necesita y usa props en lugar de children, ejemplos podrian ser Un Avatar, ProfileCard, UserInfo, etc... ejemplo:
function Perfil({ nombre, edad }) {
    return (
      <div className="border p-4 rounded">
        <h2>Nombre: {nombre}</h2>
        <p>Edad: {edad}</p>
      </div>
    );
  }
  
  export default function App() {
    return <Perfil nombre="Juan" edad={21} />;
  }
  
// Se observa que la estructura se adapta unicamente a un tipo de caso

// Tipos de elementos secundarios
// Hay varias formas de pasar elementos secundarios como renderizar cadenas literales o usar elementos JSX y expresiones JavaScript.

// Literales de cadena.
// Son cadenas de JS simples como <MyComponent>Little Lemon</MyComponent>, hay algunas reglas que JSX sigue con respecto a las lineas en blanco:
// 1.JSX elimina los espacios en blanco al principio y al final de una línea, así como las líneas en blanco:
{/* <div>    Little Lemon   </div>
 <div>
   Little Lemon
 </div> */}

// 2. Se eliminan las nuevas líneas adyacentes a las etiquetas:
{/* <div>

  Little Lemon
</div> */}

// 3. JSX condensa las nuevas líneas que suceden en medio de los literales de cadena en un solo espacio:
{/* <div>
  Little
  Lemon
</div> */}

// Elementos JSX:
// Puede proporcionar elementos JSX como elementos secundarios para mostrar componentes anidados:
{/* <Alert>
  <Title />
  <Body />
</Alert> */}

// JSX también permite mezclar y combinar diferentes tipos literales y componentes, como una combinación de literales de cadena y elementos JSX:
{/* <Alert>
  <div>Are you sure?</div>
  <Body />
</Alert>
 */}

//  React Fragment
// Es un contenedor especial en React que permite envolver multiples objetos sin agregar un nodo extra al DOM. es util para envolver varios elementos sin necesidad de meterlos a un <div> u otro contenedor innnecesario:
function MiComponente() {
  return (
    <div> {/* Nodo extra en el DOM */}
      <h1>Hola, bro!</h1>
      <p>Esto es un ejemplo sin Fragment.</p>
    </div>
  );
}

// El <div> puede afectar el CSS o la estructura del DOM, para evitar eso, usamos React Fragment:
function MiComponente() {
  return (
    <React.Fragment>
      <h1>Hola, bro!</h1>
      <p>Esto es un ejemplo con Fragment.</p>
    </React.Fragment>
  );
}

// Asi de esta manera nos va a generar el HTML sin un <div> adicional, hay una sintaxis corta que ya hemos usado anteriormente que es usando <>...</> vacios
function MiComponente() {
  return (
    <>
      <h1>Hola, bro!</h1>
      <p>Esto es un ejemplo con Fragment corto.</p>
    </>
  );
}
// NOTA: Cuando se usa esta sintaxis abreviada, no se pueden pasar props, a diferencia de usar React Fragment

// Expresiones de JS
// Las expresiones de JS son las que van encerradas en {}:
{/* <MyComponent>Little Lemon</MyComponent>
    Estas 2 expresiones son identicas
<MyComponent>{'Little Lemon'}</MyComponent> */}

// Cabe aclarar que cuando son literales de cadena se prefiere siempre la 1ra expresion 

// Se pueden mezclar expresiones de JS con otros tipos de elementos secundarios como literales de cadena:
function Hello(props) {
    return <div>Hello {props.name}!</div>;
  }

// Funciones:
// Supongamos que se inserta una expresion de JS en el codigo JSX, React lo evaluara como una cadena, un elemento React o una combinacion de ambos, sin embargo las propiedades de estos elementos permiten pasar cualquier tipo de datos como funciones por ejemplo

// Booleanos, Nulos e Indefinidos, son ignorados
// false, null, undefined, y true son elementos secundarios validos, unicamente no renderizan nada, su valor es implicito:
{/* <div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div> */}

// Cabe aclarar que estos valores son utiles a nivel logico, un ejemplo seria este:
<div>
  {showModal && <Modal />}
</div>


// Esos son algunos tipos de elementos secundarios en JSX, Esto nos deja como conclusion que se pueden pasar texto, JSX, listas, funciones o incluso otros componentes como hijos.