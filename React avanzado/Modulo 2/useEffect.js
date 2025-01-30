// De aca salen varios conceptos importantes como efectos secundarios, funciones puras/impuras 
// Las funciones puras no tienen efectos secundarios, deben recibir un parametro especifico que siempre devolvera el mismo resultado

function AñoEstablecido(props) {
    return <h1>Año establecido: {props.año}</h1>
}

function app_2() {
    <AñoEstablecido año={2003}/>
}
// En este ejemplo de funcion pura, no se hace ningun llamado por fuera de la funcion


// Las funciones impuras tienen efectos secundarios, un efecto secundario se puede considerar como algo externo ej: invocar registros en consola, usar funcionalidades de geolocalizacion de navegadores, fuera de la funcion, en el siguiente caso se muestra de ejemplo un console.log() que es una llamada al navegador

function CarritoCompras(props) {
    const total = props.unidades * props.precio;
    console.log(total);

    return(
        <div>
            <h1>Total carrito de compras</h1>
            <h2>Total: {total}</h2>
        </div>
    );
}

function app() {
    return(
        <CarritoCompras unidades={12} precio={17000}/>
    );
}

// useEffect() se usa para abordar correctamente efectos secundarios, este acepta 2 parametros, una funcion de devolucion y una matriz, el codigo que se agrega en useEffect() siempre se ejecuta despues de que el componente se haya montado en el DOM, tambien dependiendo de la matriz de dependencias, sus efectos pueden ejecutarsen cuando cambian ciertas variables de estados o accesorios, un ejemplo de uso seria asi 
import {useEffect} from "react";

function CarritoCompras_2(props) {
    const total = props.unidades * props.precio;
    
    useEffect(() => console.log(total), []);//Se implementa useEffect() si no se agraga matriz de dependencias, se ejecutara siempre despues de montar el componente en el DOM, sin embargo esto puede causar problemas de rendimiento si los efectos son computacionalmente complejos, lo mejor es siempre poner los corchetes

    return(
        <div>
            <h1>Total carrito de compras</h1>
            <h2>Total: {total}</h2>
        </div>
    );
}

function app_3() {
    return(
        <CarritoCompras unidades={12} precio={17000}/>
    );
}

// Se mostrara un ejemplo que ejecutara los efectos secundarios cada ves que version cambie entre renderizados, Si version es 2 y el componente se vuelve a renderizar y la versión sigue siendo igual a 2, React comparará [2] del renderizado anterior y [2] del siguiente renderizado, como son iguales, React no ejecutara el efecto porque NO HAY CAMBIOS
useEffect(() => { 
    document.title = `Little Lemon, v${version}`;
  }, [version]);

// Es bueno agrupar la logica relacionada cada una en su efecto aparte para sacar el maximo provecho de useEffect(), multiples hooks permitiran que la legibilidad y modularidad del codigo mejore:
function MenuPage(props) { 
    const [data, setData] = useState([]); 
  
    useEffect(() => { 
      document.title = 'Little Lemon'; 
    }, []); 
  
    useEffect(() => { 
      fetch(`https://littlelemon/menu/${id}`) 
        .then(response => response.json()) 
        .then(json => setData(json)); 
    }, [props.id]); 
  
    // ... 
  }  

// Algunos efectos secundarios pueden necesitar limpiar recursos o memoria que ya no se requiere para mejorar la optimizacion

// Por ejemplo, es posible que desee configurar una suscripción a una fuente de datos externa, es necesaria la limpieza despues de que el efecto termine su ejecucion

// Si el efecto devuelve una función, React la ejecutará cuando llegue el momento de limpiar recursos y liberar memoria no utilizada.

function LittleLemonChat(props) { 
    const [status, chatStatus] = useState('offline'); 
  
    useEffect(() => { 
      LemonChat.subscribeToMessages(props.chatId, () => setStatus('online')) 
  
      return () => { 
        setStatus('offline'); 
        LemonChat.unsubscribeFromMessages(props.chatId); 
      }; 
    }, []);
}

