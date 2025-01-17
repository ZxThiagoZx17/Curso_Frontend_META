export default function PromoHeading(props) {
    return(
        <div>
            <h1>Bienvenido!! hoy contamos con el descuento del {props.descuento}% en todas nuestras referencias</h1>
            <h2>{props.accion}</h2>
        </div>
    );
};

// Clase Hijo   
export function Hijo(props) {
    return(
        <h1>La hora actual es {props.hora}</h1>
    );
};