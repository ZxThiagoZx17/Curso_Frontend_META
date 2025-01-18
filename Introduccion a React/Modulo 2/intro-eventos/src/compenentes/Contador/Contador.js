import React, {useState} from "react"

export default function Contador() {
    const [contador, setContador] = useState(7);

    const incrementarContador = () => setContador(contador+8);

    return(
        <div>
            <button onClick={incrementarContador}>
                Haz click para incrementar!!!    
            </button>
            <h1>
                Contador: {contador}
            </h1>
        </div>
    );
};