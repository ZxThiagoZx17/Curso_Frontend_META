// Se hace un pequeño ejemplo que ilustra un control de eventos y acciones
// El ejemplo se monta en el proyecto intro-eventos en la carpeta componentes/Modo Oscuro/Controladordarkmode.js

// Se ve reflejado el uso de eventos para controlar el contenido en pagina y consola de JS en el navegador

//NOTA: CUANDO SE PASA UN CONTROLADOR DE EVENTOS A UN ELEMENTO JSX NO DEBE LLEVAR () A MENOS QUE SE QUIERA INVOCAR INMEDIATAMENTE (al iniciar la pagina)

// Se deja codigo hecho en Controladordarkmode.js

export default function Controladordarkmode() {
    let darkModeOn = true;

    function controlMode(){
        if (darkModeOn==true){
            return(
            <h1>El modo oscuro esta activo!!</h1>
            );

        } else {
            return(
            <h1>El modo oscuro esta desactivado!!</h1>
            );
        };
    };


    function manejoClicks() {
        darkModeOn = !darkModeOn;

        if (darkModeOn==true){
            console.log("Modo oscuro: ON")

        } else {
            console.log("Modo oscuro: OFF")
        };
    };

    return(
        <div>
            <button onClick ={manejoClicks}>
                Haz click para cambiar de ambiente!!
            </button>

            {controlMode()}
        </div>
    );
};

// 