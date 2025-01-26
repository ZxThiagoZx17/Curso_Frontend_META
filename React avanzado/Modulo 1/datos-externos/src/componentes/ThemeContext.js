import { createContext, useState, useContext } from "react";

const temaContexto = createContext(undefined); 

export const ProveedorTema = ({hijo}) => {
    const [tema, setTema] = useState('luz');

    return(
        <temaContexto.Provider
        
        value={{tema,
            cambiarTema: () => {setTema(tema ==='luz' ? 'oscuro' : 'luz')},
        }}>
            {hijo}
        </temaContexto.Provider>
    );
};

export const UsarTema = () => {useContext(temaContexto)};