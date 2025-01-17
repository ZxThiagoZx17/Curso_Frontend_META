import PromoHeading, {Hijo} from "./PromoHeading";

const promociones = {'porcentaje':10,
                     'accion':'Aprovechen el descuento!!',
                    };

const date = new Date();


// Este es un ejemplo de como es el flujo de datos en React
// Clase padre
export default function Promo() {
    return(
        <div>
            <PromoHeading
                descuento = {promociones.porcentaje}
                accion = {promociones.accion}
            />
            <hr/>
            <Hijo hora={date.toLocaleTimeString()}/>
        </div>
    );
};