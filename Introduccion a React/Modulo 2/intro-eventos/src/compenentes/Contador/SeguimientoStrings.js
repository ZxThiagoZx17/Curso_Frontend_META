import { useState } from 'react';

export default function InputComponent() { 
  const [inputTexto, setTexto] = useState('Hola'); 

  function manejarCambio(elementoEvento) { 
    console.log(elementoEvento)
    setTexto(elementoEvento.target.value); 
  } 

  return ( 
    <> 
      <input value={inputTexto} onChange={manejarCambio} /> 
      <p>Tu ingresaste: {inputTexto}</p> 
      <button onClick={() => setTexto('Hola')}> 
        Resetear texto 
      </button> 
    </> 
  ); 
} 