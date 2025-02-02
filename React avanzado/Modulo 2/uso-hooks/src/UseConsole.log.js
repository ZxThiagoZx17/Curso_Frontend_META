import { useEffect } from "react";
//Este es nuestro hook personalizado que se encargara de imprimir por consola lo que le pasemos como efecto secundario
export default function useConsoleLog(valor) {
    useEffect(() =>
         {console.log(valor)},
    [valor]);
}