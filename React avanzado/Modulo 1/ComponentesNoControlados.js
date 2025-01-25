// React en la implementacion de formularios siempre recomienda usar componentes controlados mediante estado, sin embargo se pueden usar componentes no controlados para esta tarea

import { useRef } from "react";

// Entradas no controladas: Son como las entradas de HTML estandar

const form = () =>{
    return(
        <>
            <input type="text"/>
        </>
    );
}

// En estos casos es el mismo DOM el que mantiene o lleva el estado interno, para acceder al valor de input usamos useRef(), tenemos un ejmplo aca:

export const FormularioNoControlado = () =>{
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
      e.preventDefault(); // Previene la recarga del formulario
      const inputValue = inputRef.current.value;
      console.log("Valor del input:", inputValue); // Hace algo con el valor
      alert(`Tu entrada fue: ${inputValue}`); // Ejemplo simple de uso
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Escribe algo" />
        <button type="submit">Enviar</button>
      </form>
    );
}

// Cabe aclarar que en cada caso se adapta mejor un componente controlado o no controlado, casos de uso en componentes controlados serian:

// Validación instantánea por campo

// Desactivación del botón de envío a menos que todos los campos tengan datos válidos

// Hacer cumplir un formato de entrada específico, como números de teléfono o de tarjeta de crédito

// Hay entradas de formulario especificas que siempre son no controladas como la entrada de un archivo <input type="file" /> ya que su valor es solo de lectura y no se puede establecer mediante programacion

// En conclusion, los componentes no controlados son utiles si el formulario es muy simple y no interactua con etiquetas JSX, estos son algunos aspectos de uso en componentes no controlados:
// Validando al enviar
// Recuperación de valor por única vez (por ejemplo, al enviar)

// y estos en los controlados:
// Validación de campo instantánea
// Desactivación condicional de un botón de envío
// Aplicación de un formato de entrada específico
// Varias entradas para un solo fragmento de datos
// Entradas dinámicas