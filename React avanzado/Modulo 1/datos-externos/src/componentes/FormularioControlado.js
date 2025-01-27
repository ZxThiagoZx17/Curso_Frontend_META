import { useState } from "react";
import { useTheme } from "./ThemeContext";

// Este ejemplo muestra y ejemplifica el como es un formulario controlado donde hay un hook y un estado que maneja los campos de entrada

export default function EjemploFormularioControlado() {
    const [nombre, setNombre] = useState("");
    
    const {theme} = useTheme();

    const manejarCambio = (elementoEvento) =>{
        setNombre(elementoEvento.target.value)
        console.log(elementoEvento)
    }

    return(
        <>  
            <input value={nombre} onChange={manejarCambio} placeholder="Escribe tu nombre" style={{
                border: nombre.trim() === "" ? "5px solid red" : "5px solid green",
            }}
/>
            <h1 style={{color: theme === "light" ? "black" : "white",}}>
                Mi nombre es {nombre} 
            </h1>
        </>
    );
}
