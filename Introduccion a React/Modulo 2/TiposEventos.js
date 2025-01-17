// Los eventos son los procesos donde JS interactua con HTML en el momento que el usuario o el navegador manipule la pagina

// Son acciones que se hacen al:
    // Hacer clicks
    // Digitar algo en el teclado
    // Hacer un comando 

// Siempre se depende de una interaccion:

    // Boton --- Escuchando... --> Evento -------> Funcion

// Cada elemento de HTML tiene un conjunto de eventos a los que accedemos mediante atributo:
    <button onClick="enviarPago()">Enviar Pago</button>

// La activacion de un evento se le conoce como triggering, en React los eventos se gestionan mediante atributos JSX parecidos a los HTML:
    // HTML -----> onclick
    // JSX ------> onClick

// Hay muchos eventos en React, se clasifican en grupos:
    // - Eventos de portapapeles
    // - Composicion de eventos
    // - Eventos de teclado
    // - Eventos de mouse
    // - Eventos táctiles
    // - Eventos de arrastrar y soltar
    // - Eventos de composición
    // - Eventos de ventana o documento
    // - Eventos de imagen/multimedia
    // - Eventos de foco
    // - Eventos de formulario

// Cada grupo contiene varios elementos, es cuestion de mirarlos y analizar cual es mas util, tenemos aca un ejemplo:

export default function boton() {
    const hacerClick = () => console.log("Se ha hecho click");

    return(
        <button onClick={hacerClick}>
            Haz Click!
        </button>
    );
}
