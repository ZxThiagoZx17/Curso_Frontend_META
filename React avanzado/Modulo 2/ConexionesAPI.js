// Las llamada a API son considerados efectos secundarios, por lo tanto deben llamarse con useEffect() segun se monte la aplicacion

// Hay varios enfoques para usar useEffect() a la hora de traer datos de un JSON en una web de terceros:
// Se hara un pequeño ejemplo donde se extrae informacion de una criptomoneda de un archivo JSON en la web:
import { useEffect, useState } from 'react';

export default function CriptoDatos() {
    const [dataCripto, setDataCripto] = useState(null);
    const [error, setError] = useState(false); // Nuevo estado para manejar errores
    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((respuestaWeb) => respuestaWeb.json())    //respuestaWeb es el elemento que devuelve fetch
            // Tiene toda la informacion de la solicitud, algo asi:
            // Response {
            //     status: 200,
            //     ok: true,
            //     headers: {...},
            //     url: "https://api.coindesk.com/v1/bpi/currentprice.json",
            //     json: function() {...}
            //   }

            .then((jsonData) => {
                setDataCripto(jsonData.bpi.USD)
                console.log("Datos cargados:", jsonData.bpi.USD);
            })
            // jsonData es lo que devuelve respuestaWeb.json() que vendria a ser el archivo json con toda la informacion
            // seria esto:
            // {
            //     "time": { "updated": "Jan 30, 2025", ... },
            //     "bpi": {
            //       "USD": { "code": "USD", "rate": "43,000.50", "description": "United States Dollar", "rate_float": 43000.5 },
            //       "GBP": { ... },
            //       "EUR": { ... }
            //     }
            //   }

            .catch((error) => {
                console.log(`Error: ${error}`)
                setError(true); // Activa el estado de error
            })
    },[])

    return error ? (  //Render en caso de salir algun error, se activa modificando el link de la API
        <div>
            <h1>❌ Error al obtener los datos</h1>
            <p>Verifica tu conexión o intenta nuevamente.</p>
        </div>
    ) : dataCripto ? (
        <div>
            <h1>Balance de divisas {dataCripto.code}</h1>
            <p>{dataCripto.description}</p>
            <h2>Simbolo: {dataCripto.symbol}</h2>
            <p>Calificacion: {dataCripto.rate}</p>
        </div>
    ) : ( //Este es un render alternativo en caso de que dataCripto no tenga datos
        <div>
            <h1>Esperando datos.........</h1>
        </div>
    );    
};

// Existen cass donde la respuesta por parte de terceros puede fallar o retrasarse, por esto es util proporcionar varios renders segun si se recibio respuesta o no, un ejemplo seria estem mediante operadores ternarios:
return algunaVariableEstado.length > 0 ? ( 
    <div> 
      <h1>Datos retornados:</h1> 
      <h2>{algunaVariableEstado.results[0].precio}</h2> 
    </div> 
  ) : ( 
    <h1>Esperando datos...</h1> 
  );    

// IMPORTANTE: los objetos no tienen .length, PERO sus keys si, asi Object.keys(objetoCualquiera).length > 0
// Es importante en algunos casos inicializar el objeto en useState({}) para evitar errores como "Cannot read properties of undefined" 

// En casos donde necesitemos testear nuestras API's en conexiones lentas podemos hacerlo en la seccion de red en el navegador