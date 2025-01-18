import { useRef } from "react";

export default function EntradaTextoConBotonEnfoque () {
    const entradaEl = useRef(2);
    const botonPulsado = () =>{
        // `current` apunta al elemento de entrada de texto montado
        entradaEl.current.focus();
        console.log(entradaEl)
        };
    
    return(
        <>
            <input ref={entradaEl} type="text" />
            <button onClick={botonPulsado} > Enfoca la salida </button>
        </>
    );
};
// Este codigo lo que hace es que al hacer click en el boton, vamos a poder escribir en el campo de texto en caso que no lo tengamos seleccionado

// useRef lo que hace es dar como un identificador a un objeto, en este caso Input, asocia una referencia