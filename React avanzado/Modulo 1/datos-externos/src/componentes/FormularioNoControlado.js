import { useRef } from "react";

// Este es un ejemplo de formulario no controlado, se usa useRef para traer el valor del <input/>, si deseamos usarlo en etiquetas JSX Es necesario un estado 

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