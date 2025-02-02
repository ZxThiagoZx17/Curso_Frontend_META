import { useState } from "react";
import usePrevious from "../UsePrevious";

export default function DiaDespues() {
    const [dia, setDia] = useState('Lunes');
    const antDia = usePrevious(dia)

    const avanzaDia = () => {
        if (dia === 'Lunes') {
            setDia('Martes');
        } else if (dia === 'Martes') {
            setDia('Miercoles');
        } else if (dia === 'Miercoles') {
            setDia('Jueves');
        } else if (dia === 'Jueves') {
            setDia('Viernes');
        } else if (dia === 'Viernes') {
            setDia('Lunes');
        } else {
            return(console.log('Error desconocido'));
        };
    }
   return(
    <div>
       <h1>El dia de hoy es: {dia} <br/>
       {console.log(antDia)}
       {antDia && (
             <span>El anterior dia laboral fue {antDia}</span>
            )
         }
       </h1>
       
       <button onClick={avanzaDia}>Avanza de dia</button>
    </div>
    );
}

