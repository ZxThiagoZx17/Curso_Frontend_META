import { useState } from "react";

// Este ejemplo muestra y ejemplifica el como es un formulario controlado donde hay un hook y un estado que maneja los campos de entrada

export default function EjemploFormularioControlado() {
    const [nombre, setNombre] = useState("");
    
    const manejarCambio = (elementoEvento) =>{
        setNombre(elementoEvento.target.value)
        console.log(elementoEvento)
    }

    return(
        <>  
            <input value={nombre} onChange={manejarCambio} placeholder="Escribe tu nombre" style={{
                border: nombre.trim() === "" ? "2px solid red" : "2px solid green",
            }}
/>
            <h1>
                Mi nombre es {nombre} 
            </h1>
        </>
    );
}
