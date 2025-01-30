import { useState } from "react";

export default function TarjetaRegalo() {
    
    const [tarjeta, seTarjeta] = useState({
        primerNombre: "Will",
        segundoNombre: "Smith",
        concepto: "Cena gratis para 3 invitados",
        valido: true,
        instrucciones: "Para usar este bono, haz click en el boton.",
    });

    const manejarClick = () => {
        seTarjeta((estadoActual) =>{ 
            return({
                ...estadoActual, 
                instrucciones:'Puedes renovar nuestra tienda en www.luxuryrestaurant.com', 
                valido:false,
                }
            )}
        );
        console.log(tarjeta)
    };

    return(
        <div  style={{padding: '40px'}}>
            <h1>Bienvenido!! {tarjeta.primerNombre}</h1>

            <h2>{tarjeta.valido ? 
                `Bienvenido ${tarjeta.primerNombre} ${tarjeta.segundoNombre} tu bono es valido por ${tarjeta.concepto}`
                :
                `Hola!! ${tarjeta.primerNombre}, lo siento tu bono no es valido, ve a nuestra tienda para renovarlo`}
            </h2>

            <p>{tarjeta.instrucciones}</p>

            <button onClick={manejarClick} disabled={!tarjeta.valido ? true : false}>Pulsa el boton para redimir tu bono!</button>

        </div>
    );
};

// El operador && devuelve el segundo valor si el primero es verdadero
// Si el primer valor es falso, devuelve ese mismo valor y no evalua lo que sigue

// giftCard.valid && (
//     <button onClick={spendGiftCard}>
//       Spend Gift Card
//     </button>

// En este caso, si fuera valido, se devuelve el button, de lo contrario simplemente no se renderizaria nada
