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

// Todo lo que este dentro de corchetes {} sera codigo JS, esa es la gran ventaja de JSX

function JSXlist() {
    return(
        <ul>
            <li>{'Ho'+'la'}</li> {/*Hola*/}
            <li>{5}</li> {/*5*/}
            <li>{5>2}</li> {/*true*/}
            <li>{5+5}</li> {/*10*/}
        </ul>
    );
}
//En el componente JSXlist se puede evidenciar como trabaja JSX, algunas reglas importantes de JSX son:
// - Si se desea devolver el codigo HTML en varias lineas es necesario que ponga return entre parentesis ()
// - El codigo HTML debe estar envuelto con un elemento de nivel superior como un <div>, si no se desea agregar divs puede poner una etiqueta fragmento <> </>
// - Hay limitaciones en las palabras reservadas como "class", por lo tanto en JSX para añadir una clase a la etiqueta se usa "className", no es de todo igual a HTML pero es muy similar

// Props Children
// Es una propiedad que nos permite envolver componentes dentro de otros componentes y pasarles props segun sus propidedades, tenemos un ejemplo en app.js con un ejemplo practico de una bolsa con frutas:

//Frutas.js:
export function Manzanas(props) {
    return (
       <div className="promo-section">
           <div>
               <h2>Las manzanas son: {props.color}</h2>
               </div>
               <div>
               <h3>Hay {props.number} manzanas.</h3>
           </div>
       </div>
    )
   }

export function Peras(props) {
       return (
           <h2>No me gustan las peras pero a mi amigo, {props.friend}, le encantan</h2>
       )
   }

// Bolsa.js:
function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }
    return (
        <div style={bag}>
            {props.children} {/*Children hace que podamos usar varios props de otros componentes*/}
        </div>
    )
}

// App.js:
function App(){
    return(
      <div>
        <Bolsa> 
            <Manzanas color="Rojas" number="5"/>
        </Bolsa>
  
        <Bolsa>
            <Peras friend={<h3>Santiago</h3>}/>
        </Bolsa>
      </div>
    );
  } 