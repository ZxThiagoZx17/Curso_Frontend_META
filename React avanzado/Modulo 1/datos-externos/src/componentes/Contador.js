import { ContadorContext } from "../contexts/ContadorContext";
import { useState } from "react";

// En react Children es un propt especial, lo que hace es que cualquier componente anidado o dentro de la etiqueta, se almacena en children en el caso de:

        //   <ContadorProvider>
        //       <Hijo/>
        //   </ContadorProvider>

// En este caso Children = <Hijo/>, React lo maneja de manera implicita, podemos poner tantos componentes hijos como necesitemos

export const ContadorProvider = ({ children }) => {

    const [contador, setContador] = useState(0);

    // Funciones para modificar el contador
    // ValorEstado es proporcionado automaticamente por React, contiene el valor más reciente del estado, es parecido a un ElementoEvento
    const incrementar = () => setContador((valorEstado) => valorEstado + 1);
    const decrementar = () => setContador((valorEstado) => valorEstado - 1);

    // Valores que se compartiran en el contexto
    const contextValue = {contador, incrementar, decrementar};

    // Provider es una funcion especial, los objetos creados por createContext() tienen 2 propiedades principales 
    
    // Provider(Se usa para pasar el contexto al componente hijo)
    // Consumer (Se usa para consumir el contexto a pesar de que en react moderno se usa useContext)

    // Provider toma a value y lo inyecta en los componentes hijos que lo requieran, en value podemos poner todo el contexto o las propiedades que vamos a usar unicamente asi <ContadorContext.Provider value={{ contador, incrementar }}> Ahora, por cada provider unicamente se puede usar un contexto, el que tiene asociado

    return(
        <ContadorContext.Provider value={contextValue}>
            {children}
        </ContadorContext.Provider>
    );
};