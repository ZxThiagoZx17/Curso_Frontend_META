import {useState} from 'react';

// En este ejemplo vamos a demostrar como hacer el uso de keys en React, si simplemente no agregamos el atributo keys a nuestras listas de elementos, nos saldra un mensaje en la consola de JS en el navegador asi:

// TareasPorHacer.js:20  Each child in a list should have a unique "key" prop.
// Check the render method of `TareasPorHacer`. See https://react.dev/link/warning-keys for more information.

// Esto pasara siempre y cuando estemos en modo desarrollo, nos dice que cada elemento secundario de la lista debe tener una propiedad de "key" unica y nos pide comprobar el metodo o funcion que renderiza el componente
export default function TareasPorHacer() {
    const [tareasPendientes, setTareasPendientes] = useState([{
        id:'1',
        horaCreacion:'18:00'
    },
    {
        id:'2',
        horaCreacion:'9:00'
    },]);

    const reverso = () =>{
        setTareasPendientes ([...tareasPendientes].reverse());
    };

    return(
        <>
            <button onClick={reverso}>Reverso</button>
                <table>
                    <tbody>
                        {tareasPendientes.map((tarea, index) => {
                            return(                            
                                <tr key={index}>
                                    <td>
                                        <label >{tarea.id}</label>
                                    </td>
                                    <td>
                                        <input placeholder={tarea.horaCreacion}/>
                                    </td>
                                    <td>
                                        <label>{tarea.horaCreacion}</label>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
        </>
    );
}

// En este caso estamos haceiendo las cosas mal, estamos usando el indice de la lista en un caso donde con el boton Reverso, podemos cambiar el orden de los elementos, para evidenciar el error debemos:

// 1.Escribir algo en el campo de entrada del usuario <input/> 
// 2.Dar al boton reverso y veremos que los que se escribe en input no cambia de lugar pero lo demas si
// 3.El <input/> no esta asociado a la tarea original

// Esto sucede porque React asocia el key a la posicion de los elementos y no a los datos en si(como un identificador unico de cada elemento como un seria, cedula, etc...) al cambiar el orden react solo ve cambios en las posiciones, no en los elementos 

// Al dar reverso, la clave sigue siendo la misma, de manera que el estado interno sigue igual

// En este caso lo mas idoneo seria utilizar la propiedad 'id' de los elementos que identifica correctamente cada elemento

// Se da una buena observacion con <input placeholder={tarea.horaCreacion}/> en donde se cambia el placeholder pero no el campo input, esto se debe a que input no esta directamente asociado al estado, tarea.horaCreacion si, adicional a eso, sin embargo, el estado nunca cambia, unicamente se invierte la lista pero como tal el estado no se modifica    