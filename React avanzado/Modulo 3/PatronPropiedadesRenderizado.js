// Las propiedades de renderizado son una tecnica muy util para reutilizar codigo util

// Se trata de usar una propiedad llamada renderizado con un atributo que tiene que ser una funcion
// En lugar de usar children o props normales, pasamos una función como prop y la llamamos dentro del componente para determinar qué renderizar:

const MouseTracker = ({ render }) => {
    const [posicion, setPosicion] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const manejarMovimiento = (e) => setPosicion({ x: e.clientX, y: e.clientY });
  
      window.addEventListener("mousemove", manejarMovimiento);
      return () => window.removeEventListener("mousemove", manejarMovimiento);
    }, []);
  
    return <>{render(posicion)}</>;
  };
  
  // Usando el componente con Render Props
  function App() {
    return (
      <MouseTracker render={({ x, y }) => <h1>Posición: ({x}, {y})</h1>} />
    );
  }
  
// Se hara un ejemplo en el proyecto, explicado en palabras mias seria asi:

// 1. Se crea una funcion que va a recibir un objeto {render}, esta funcion se encarga de crear las variables de estado y manejar efectos secundarios para actualizar las variables de estado segun como necesitemos, finalmente devolvera render(variableEstado), que render vendria a ser FUNCION QUE PASAMOS COMO PROPIEDAD EN LA ETIQUETA JSX                                           

// 2. Ahora creamos por decirlo asi los componetes que derivan o necesitan de la logica y valores de estado que tenemos almacenados en la funcion que recibe el render, al crear ese componente para acceder a los valores de estado lo que hacemos es mediante los valores de etiqueta, al momento de definir render, creamos la funcion y el codigo "HTML" que queremos que nos renderice,   en los argumentos de esa funcion pedimos por decirlo asi los valores de estado que usaremos del componente donde las definimos y creamos la estructura en la que queremos que se muestre esa informacion al usuario mediante etiquetas JSX

// IMPORTANTE: lo que tenemos que hacer prioritariamente es separar la logica y la modificacion de variables de estado lo que hace que el codigo sea mas flexible y reutilizable