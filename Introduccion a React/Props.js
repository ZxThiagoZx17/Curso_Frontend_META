// En funciones se usan argumentos, en React se usa algo similar llamado 'props', propiedades o accesorios, estos permiten pasar datos de un componente a otro 

// En el archivo componentes.js tenemos un ejemplo en el componente Heading de como se utilizan las props en JSX:

function Heading(props) {
    return(<h1>{props.title}</h1>);
        }

// El flujo de datos en estos procesos es el siguiente:
// Cuando 2 componentes se comunican entre si, el componente que envia se conoce como padre y el que recibe como hijo, es un flujo de datos unidireccional, no puede comunicarse hijo --> padre

// Para acceder al accesorio o argumento se hace mediante notacion de puntos "props.title", adicional a esto las funciones usando accesorios nunca deben modificar el accesorio o argumento que recibe
// El objeto '{}' se denomina props Es el principal mecanismo de envío de datos de un componente padre a un componente hijo en React.

//Se veria asi en JS:
React.createElement(
    tipoEtiqueta,
    [props],
    [...ComponenteHijo] //Muestra como se anidan elementos dentro de elementos como en HTML pero en JSX
  )

