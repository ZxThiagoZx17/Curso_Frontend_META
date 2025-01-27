// Propiedades(props) y estado(state) son objetos JS que React usa para retener informacion

// Props: Estas se pasan al componente como parametros, es inmutable, componentes padre asignan a componentes hijos las props

// State: Se gestionan dentro de un componente, rastrea el estado en busca de cambios lo que le permite a react renderizar de nuevo si hay cambios, las modificaciones de ese valor por lo general se dan por eventos del ususario, cada componente gestiona su propio estado, si un componente debe alterar alguno de sus atributos, dichos atributos deben formar parte de su estado de lo contrario, deberia ser una propiedad 

// Cuando se crea un componente, el objetivo es traducir los datos brutos a un HTML enriquecido

// Contexto: En react se pueden pasar datos de unos componentes a otros componentes mediante props, hay otra manera de hacerlo que es el contexto

// En el curso anterior se evidencio el problema que nos trae el desenglose de propiedades si se tienen muchos componentes hijos, debido a eso se introdujo Context API El cual nos permitia pasar propiedades entre varios componentes

// Context API:

// createContext(): Encargado de crear el contexto en React, este contexto es como un contenedor que almacena datos como props o estados y se puede compartir con cualquier componente sin necesidad de pasar props manualmente.         
// useContext(): Permite a un componente acceder a los datos de otro componente mediante el contexto.

// Ejemplo de uso:

// en un archivo ContadorContext.js se crea el contexto apartado de los componentes principales, separar este archivo es una practica comun en proyectos medianos/grandes donde se tengan varios contextos, ofrece ventajas en cuanto a importacion (Se importa a muchos componentes desde el mismo archivo), organizacion del codigo (Se mantiene la logica de la creacion del contexto (createContext) separada de la logica del proveedor(Provider) y del componente padre) 

// Se recomienda crear una carpeta 'contexts' para guardar estos archivos

// ContadorContext.js:
import { createContext } from "react";

export const ContadorContext = createContext();

// Contador.js:

// import ContadorContext from './ContadorContext.js';
import { useState } from "react";

export const ContadorProvider = ({ children }) => {

    const [contador, setContador] = useState(0);

    // Funciones para modificar el contador
    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);

    // Valores que se compartiran en el contexto
    const contextValue = {contador, incrementar, decrementar};

    return(
        <ContadorContext.Provider value={contextValue}>
            {children}
        </ContadorContext.Provider>
    );
};

// Hijo.js:
import { useContext } from "react";
// import ContadorContext './ContadorContext.js';

export const Hijo = () => {
    const [contador, incrementar, decrementar] = useContext(ContadorContext)

    return(
        <div>
            <h1>
                El contador esta en {contador}
            </h1>
            <button onClick={incrementar}>Aumentar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
};

// Provider.js / App.js

import ContadorProvider from './Contador.js'
import Hijo from './Hijo.js'

const App = () => {
    return(
        <ContadorProvider>
            <Hijo/>
        </ContadorProvider>
    );
};

// Preguntas:

// Sirvio tal y como se esperaba, pero tengo varias preguntas/aclaraciones

// Porque ContadorProvider no recibe el argumento children en app.js? pienso que no se pasa porque si miramos bien en la declaracion de ContadorProvider, se ve {children}, por lo tanto dedusco que ya lo esta pasando al momento de declarar la expresion, pero, de donde sale children? si en ningun mimento se declaro ningun objeto children


// En las funciones para modificar el contador no era mas simple poner: 
// const incrementar = () => setContador(contador + 1);
// const decrementar = () => setContador(contador - 1);


// En la linea <ContadorContext.Provider value={contextValue}> ContadorContext es el objeto de devuelve createContext(), Provider es una funcion de ese tipo de objeto? que hace especificamente, en value esta guardado contextValue (entiendo que es un conjunto que guarda las propiedades y estados que queramos compartir mediante contexto) 


// En la incrustacion de {children} entre los <ContadorContext.Provider> se supone que devuelve el componente hijo pero no se como se hace el enlace de children y el componente hijo

// Se da un ejemplo mas complejo en donde se implementa tema oscuro/claro mediante uso de estados, ya esta implementado, se documenta en los archivos donde se implemento