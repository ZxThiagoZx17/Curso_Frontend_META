// Las llamada a API son considerados efectos secundarios, por lo tanto deben llamarse con useEffect() segun se monte la aplicacion

// Hay varios enfoques para usar useEffect() a la hora de traer datos de un JSON en una web de terceros:
// Se hara un pequeño ejemplo donde se extrae informacion de una criptomoneda de un archivo JSON en la web:
import { useEffect, useState } from 'react';

export default function CriptoDatos() {
    const [dataCripto, setDataCripto] = useState(null);
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

            .then((jsonData) => setDataCripto(jsonData.bpi.USD))
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
            
            // la primera promesa toma lo que devuelve fetch, la segunda lo que devuelve la primera promesa, la tercera toma lo que devuelve la segunda y asi susesivamente

            .catch((error) => console.log(`Error: ${error}`))
    },[])

    return(
        <div>
            <h1>Balance de divisas {dataCripto.code}</h1>
            <p>{dataCripto.description}</p>
            <h2>Simbolo: {dataCripto.symbol}</h2>
            <p>Calificacion: {dataCripto.rate}</p>
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

// IMPORTANTE: los objetos no tienen .length