import { useEffect, useRef } from "react";

export default function usePrevious(dia) {
    // UseRef nos devuelve un objeto con varios valores que podemos modificar y revisar, en este caso cambiamos la propiedad current y le asignamos el valor del dia y es lo que devolvemos

    // UseEffect se ejecuta despues del primer render, pero useRef al inicio crea el objeto como  ref.current = 'undefined', por eso en el primer render no se ejecutara UseEffect sino hasta cuando dia tenga algun cambio a su valor inicial
    const ref = useRef();
    useEffect(() => {
        ref.current = dia;
    }, [dia]);
    return ref.current;
}