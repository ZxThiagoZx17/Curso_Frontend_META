// React de por si tiene algunos hooks integrados como useState, useReducer, etc... Pero tambien nos da la posibilidad de escribir nuestros propios hooks 

// Un hook personalizado es basicamente una forma de extraer una funcionalidad que se puede usar una y otra vez, podemos codificar uno cada vez que deseemos evitar la duplicacion 

// Para poner en practica esto, se creara un componente simple:

import { useState } from "react"; 
 
function SumaUno() { 
  const [count, setCount] = useState(0); 
 
  function increment() { 
    setCount(prevCount => prevCount + 1) 
  } 
 
  return ( 
    <div> 
      <h1>Count: {count}</h1> 
      <button onClick={increment}>Plus 1</button> 
    </div> 
  ); 
} 

// Supongamos que deseamos registrar en consola el valor de una variable cada vez que se actualice.

// Esto significa que mi enlace personalizado:
// 1. Debe usar el enlace useEffect 
// 2. Ser un archivo separado que luego usará en el componente App.

// Al nombrar un enlace o hook personalizado, es necesario que su nombre empiece con use, en este ejemplo nombremoslo: useConsoleLog.

// Inicialmente creamos el archivo, en este caso se puede llamar useConsoleLog.js, y lo agregará a la raíz de la carpeta src, en el mismo lugar donde se encuentra el componente App.js.

import { useEffect } from "react";

function useConsoleLog(varName) {
  useEffect(() => {
     console.log(varName);
     }, [varName]);
}

export default useConsoleLog;

// Ahora para usarlo tendriamos que hacer lo mismo que con cualquier componente normal, lo hariamos asi: 

import { useState } from "react";
import useConsoleLog from "./useConsoleLog";

function App() {
  const [count, setCount] = useState(0);
  useConsoleLog(count);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Plus 1</button>
    </div>
  );
}

// Esto esta implementado en el proyecto del modulo