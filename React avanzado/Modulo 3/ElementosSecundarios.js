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