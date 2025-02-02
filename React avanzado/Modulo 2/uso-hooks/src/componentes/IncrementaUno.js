import { useState } from 'react';
import useConsoleLog from '../UseConsole.log';
// Este componente es creado con el fin de demostrar el uso de hooks personalizados en React

export default function IncrementaUno() {
    const [contador, setContador] = useState(0);
    useConsoleLog(contador); //Hook personalizado

    function sumaUno() {
        setContador(valorEstado => valorEstado+1);
    };

    const sumaDos = () => setContador(valorEstado => valorEstado + 2);

    return(
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={sumaDos}>Sumar</button>
        </div>
    );
};