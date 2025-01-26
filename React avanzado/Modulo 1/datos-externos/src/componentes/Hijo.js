import { useContext } from "react";
import { ContadorContext } from "../contexts/ContadorContext";

export const Hijo = () => {
    const {contador, incrementar, decrementar} = useContext(ContadorContext)

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