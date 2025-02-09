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
  